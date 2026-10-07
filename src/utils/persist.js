/* ============================================================
   EL ALMACÉN — escribir sin perder nada
   ------------------------------------------------------------
   Todo lo que se guarda en este cuaderno pasa por aquí. La idea es
   sencilla: una escritura nunca debe llevarse por delante lo que el
   usuario acaba de escribir, y cuando el navegador dice «no puedo»
   hay que poder contarlo y volver a intentarlo.

   - `writeRaw` escribe y **verifica** lo escrito (algunos navegadores
     fallan en silencio). Devuelve siempre un resultado, nunca lanza.
   - Si no cabe, guarda la escritura en una cola en memoria y avisa.
   - `retryPending` vuelve a intentarlo cuando el navegador respira:
     al volver a la pestaña, al cerrar un diálogo, cada pocos segundos…
   - Los interesados (`onSaveChange`) pintan el aviso de «sin guardar»
     solo cuando de verdad hay algo pendiente.
   Este módulo no sabe nada del diario: solo de cadenas y de claves.
   ============================================================ */

const listeners=new Set();
/* Escrituras que el navegador rechazó y todavía no se han podido meter. */
const pendingWrites=new Map();
let issue=null;

/* ------------------------------------------------------------
   COPIA DE SEGURIDAD DE LO PENDIENTE
   La cola vive en memoria, así que un cierre de pestaña se llevaría
   por delante lo que estaba esperando turno. Aquí queda también en el
   almacén (`diario.pendiente.v1`): al abrir otra vez el cuaderno se
   vuelve a leer y se sigue reintentando. Guardar esta copia nunca
   puede estropear nada: si no cabe, se pierde la copia, no el dato,
   que sigue en la cola de la sesión.
   ------------------------------------------------------------ */
const RESCUE_KEY='diario.pendiente.v1';

function rescueRecords(){
  const out={};
  for(const [key,entry] of pendingWrites)out[key]={value:entry.value,label:entry.label};
  return out;
}

/* Deja la copia igual que la cola (y la borra si no hay nada pendiente). */
function persistQueue(){
  const wanted=pendingWrites.size?JSON.stringify(rescueRecords()):null;
  if(safeRead(RESCUE_KEY)===wanted)return;
  attempt(RESCUE_KEY,wanted);
}

/* La copia de la sesión anterior vuelve a la cola antes de tocar nada. */
function loadRescue(){
  const raw=safeRead(RESCUE_KEY);
  if(!raw)return;
  let parsed=null;
  try{parsed=JSON.parse(raw);}catch{attempt(RESCUE_KEY,null);return;}
  if(!parsed||typeof parsed!=='object'){attempt(RESCUE_KEY,null);return;}
  for(const [key,entry] of Object.entries(parsed)){
    if(!entry||typeof entry!=='object')continue;
    if(pendingWrites.has(key))continue;
    pendingWrites.set(key,{value:entry.value??null,label:String(entry.label||'Los datos'),prune:null});
  }
  if(!pendingWrites.size){attempt(RESCUE_KEY,null);return;}
  const [key,entry]=[...pendingWrites.entries()][pendingWrites.size-1];
  issue={key,label:entry.label,reason:'unknown',at:new Date().toISOString(),
    message:`${entry.label}: quedó algo sin guardar la última vez, se sigue intentando.`};
}

/* ---------- diagnóstico ---------- */
function classify(error){
  const name=String(error?.name||'');
  const text=`${name} ${error?.message||''}`;
  if(/quota|QuotaExceeded|NS_ERROR_DOM_QUOTA_REACHED|storage.*full|lleno|exceeded/i.test(text))return 'full';
  if(/security|SecurityError|denied|blocked|not allowed|insecure/i.test(text))return 'blocked';
  return 'unknown';
}

export function describeReason(reason){
  if(reason==='full')return 'El almacenamiento del navegador está lleno.';
  if(reason==='blocked')return 'El navegador tiene bloqueado el almacenamiento para esta página.';
  return 'El navegador no ha podido guardar los datos.';
}

/* ---------- estado para la interfaz ---------- */
export function saveIssue(){return issue;}
export function pendingWriteCount(){return pendingWrites.size;}
export function hasPendingWrites(){return pendingWrites.size>0;}
export function pendingWriteKeys(){return [...pendingWrites.keys()];}

export function onSaveChange(callback){
  if(typeof callback!=='function')return ()=>{};
  listeners.add(callback);
  return ()=>listeners.delete(callback);
}
function notify(){
  const state={issue,pending:pendingWrites.size};
  for(const callback of [...listeners]){
    try{callback(state);}catch{/* un aviso roto no puede tumbar el guardado */}
  }
}

/* ---------- lecturas que nunca revientan ---------- */
export function safeRead(key){
  try{return localStorage.getItem(key);}catch{return null;}
}

/* Borrar algo a propósito también lo saca de la cola: lo que se quita no
   puede volver por la puerta de atrás en el siguiente reintento. */
export function safeRemove(key){
  try{localStorage.removeItem(key);}catch{return false;}
  if(pendingWrites.delete(key)){persistQueue();notify();}
  return true;
}

export function storageAvailable(){
  try{
    const probe='diario.probe.v1';
    localStorage.setItem(probe,'1');
    localStorage.removeItem(probe);
    return true;
  }catch{return false;}
}

/* ---------- escritura ---------- */
function attempt(key,value){
  try{
    if(value===null)localStorage.removeItem(key);
    else{
      localStorage.setItem(key,value);
      /* Verificación: si el valor no está donde debería, la escritura no ha
         servido de nada (Safari en modo privado lo hace sin avisar). */
      if(localStorage.getItem(key)!==value)return {ok:false,reason:'full'};
    }
    return {ok:true};
  }catch(error){
    return {ok:false,reason:classify(error),error};
  }
}

/**
 * Escribe una clave. Nunca lanza.
 * @param {string} key
 * @param {string|null} value  `null` borra la clave.
 * @param {object} [opts]
 * @param {string} [opts.label]  nombre legible para el aviso
 * @param {function} [opts.prune]  se llama si el almacén está lleno (para hacer sitio)
 * @returns {{ok:boolean, reason?:string, queued?:boolean, message?:string}}
 */
export function writeRaw(key,value,{label='Los datos',prune=null}={}){
  let result=attempt(key,value);
  if(!result.ok&&result.reason==='full'&&typeof prune==='function'){
    try{prune();}catch{/* si no se puede hacer sitio, se avisa igual */}
    result=attempt(key,value);
  }
  if(result.ok){
    pendingWrites.delete(key);
    if(!pendingWrites.size)issue=null;
    persistQueue();
    notify();
    return {ok:true};
  }
  pendingWrites.set(key,{value,label,prune});
  issue={key,label,reason:result.reason,at:new Date().toISOString(),message:`${label}: ${describeReason(result.reason)}`};
  persistQueue();
  notify();
  return {ok:false,reason:result.reason,queued:true,message:issue.message};
}

/** Vuelve a intentar todo lo que quedó pendiente. */
export function retryPending(){
  if(!pendingWrites.size)return {ok:true,remaining:0,recovered:0};
  let recovered=0;
  for(const [key,entry] of [...pendingWrites.entries()]){
    let result=attempt(key,entry.value);
    if(!result.ok&&result.reason==='full'&&typeof entry.prune==='function'){
      try{entry.prune();}catch{}
      result=attempt(key,entry.value);
    }
    if(result.ok){pendingWrites.delete(key);recovered++;}
  }
  if(!pendingWrites.size)issue=null;
  else{
    const [key,entry]=[...pendingWrites.entries()][pendingWrites.size-1];
    issue={key,label:entry.label,reason:issue?.reason||'unknown',at:new Date().toISOString(),
      message:`${entry.label}: ${describeReason(issue?.reason||'unknown')}`};
  }
  persistQueue();
  notify();
  return {ok:!pendingWrites.size,remaining:pendingWrites.size,recovered};
}

/** Se olvida de una escritura concreta (por ejemplo al deshacer un import). */
export function dropPendingWrite(key){
  if(!pendingWrites.delete(key))return false;
  if(!pendingWrites.size)issue=null;
  persistQueue();
  notify();
  return true;
}

/** Se olvida de lo pendiente (solo al borrar el cuaderno entero). */
export function clearPendingWrites(){
  pendingWrites.clear();
  issue=null;
  persistQueue();
  notify();
}

/* Al final del módulo: se recoge lo que dejó pendiente la sesión anterior. */
loadRescue();

export function resetSaveIssue(){
  issue=null;
  notify();
}
