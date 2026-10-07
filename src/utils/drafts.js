/* ============================================================
   LO QUE SE QUEDA A MEDIAS — borradores locales
   ------------------------------------------------------------
   Nadie debería perder un párrafo por cerrar la pestaña. Cada campo
   libre que se está escribiendo se guarda en `diario.drafts.v1` con su
   marca de tiempo, y al volver el cuaderno lo recupera solo.

   Reglas del contrato:
   - `setDraft` NUNCA lanza. Devuelve `{savedAt, ok, reason}`; si el
     navegador no puede escribir, `ok` es false y `persist.js` deja la
     escritura en cola para reintentarla.
   - Si el almacén está lleno se sacrifican los borradores más viejos,
     pero **jamás el último**: lo que acabas de escribir es lo que más
     importa.
   - Un JSON corrupto equivale a «no hay borradores», nunca a un error.
   ============================================================ */
import {longDate} from './dates.js';
import {writeRaw,safeRead} from './persist.js';

export const DRAFTS_KEY='diario.drafts.v1';

/* Cuánto texto admisible guardamos por borrador y cuántos ámbitos a la vez. */
const MAX_FIELD=6000;
export const MAX_SCOPES=60;

/* Ámbitos conocidos: el diario por día, la botella, la respuesta a una
   botella, la lista de mañana, el perfil y el asistente de bienvenida. */
export const DRAFT_SCOPES={
  entry:date=>`entrada:${date}`,
  bottle:()=>'botella',
  reply:id=>`respuesta:${id}`,
  tomorrow:()=>`manana`,
  setup:()=>'perfil',
  wizard:()=>'asistente'
};

function isPlainObject(value){
  return Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
}

export function cutText(value,max=MAX_FIELD){
  const text=String(value??'');
  return text.length>max?text.slice(0,max):text;
}

/* Lee los borradores sin lanzar nunca: un JSON roto equivale a «no hay borradores». */
export function loadDrafts(){
  const raw=safeRead(DRAFTS_KEY);
  if(!raw)return {};
  try{
    const data=JSON.parse(raw);
    return isPlainObject(data)?data:{};
  }catch{return {};}
}

/* Los ámbitos más recientes primero. `mustKeep` (el que se acaba de escribir)
   nunca se sacrifica, ni siquiera si comparte milisegundo con otro. */
function trimTo(map,keep,mustKeep=null){
  const keys=Object.keys(map);
  if(keys.length<=keep)return map;
  const sorted=keys
    .filter(key=>key!==mustKeep)
    .sort((a,b)=>String(map[b]?.savedAt||'').localeCompare(String(map[a]?.savedAt||'')));
  /* El que se acaba de escribir ocupa su sitio; el resto, lo que quepa. */
  const room=Math.max(0,keep-(mustKeep&&mustKeep in map?1:0));
  const out=Object.fromEntries(sorted.slice(0,room).map(key=>[key,map[key]]));
  if(mustKeep&&mustKeep in map)out[mustKeep]=map[mustKeep];
  return out;
}

/* Devuelve `{ok, map}`: el mapa que de verdad quedó escrito (puede ser más
   pequeño que el recibido si hubo que hacer sitio). Cuando el almacén está
   lleno se van cayendo los más viejos —mitad, cuarto…— pero el último borrador
   sobrevive siempre. */
function persistAll(map,mustKeep=null){
  const keys=Object.keys(map);
  if(!keys.length){
    const result=writeRaw(DRAFTS_KEY,null,{label:'Los borradores'});
    return {ok:result.ok,map:{},reason:result.reason};
  }
  const attempts=[];
  for(const fraction of [1,2,4,8])attempts.push(Math.max(1,Math.ceil(keys.length/fraction)));
  attempts.push(1);
  let tried=Infinity;
  let out=map;
  let result={ok:false,reason:'unknown'};
  for(const keep of attempts){
    const size=Math.min(keep,keys.length);
    if(size>=tried)continue;
    tried=size;
    out=trimTo(map,Math.min(size,MAX_SCOPES),mustKeep);
    result=writeRaw(DRAFTS_KEY,JSON.stringify(out),{label:'Los borradores'});
    if(result.ok)return {ok:true,map:out};
    if(size===1)break;
  }
  return {ok:false,map:out,reason:result.reason};
}

/* Guarda el contenido de un ámbito. Devuelve el meta ({savedAt,ok,reason}) o
   null si no hay nada que guardar. */
export function setDraft(scope,content){
  if(!scope)return null;
  const data={};
  let touched=0;
  for(const [key,value] of Object.entries(isPlainObject(content)?content:{})){
    if(value===null||value===undefined)continue;
    if(typeof value==='string'){
      const text=cutText(value);
      if(!text.trim())continue;
      data[key]=text;
      touched++;
    }else if(typeof value==='number'||typeof value==='boolean'){
      data[key]=value;
      touched++;
    }else if(Array.isArray(value)){
      const arr=value.map(v=>typeof v==='string'?cutText(v,600):v).filter(v=>typeof v!=='string'||v.trim());
      if(arr.length){data[key]=arr;touched++;}
    }else if(isPlainObject(value)){
      const sub={};
      for(const [k,v] of Object.entries(value)){
        if(typeof v==='number'||typeof v==='boolean')sub[k]=v;
        else if(typeof v==='string'&&v.trim())sub[k]=cutText(v,600);
      }
      if(Object.keys(sub).length)data[key]=sub;
    }
  }
  if(!touched){
    clearDraft(scope);
    return null;
  }
  const all=loadDrafts();
  const savedAt=new Date().toISOString();
  all[scope]={data,savedAt};
  const result=persistAll(all,scope);
  return {savedAt,ok:result.ok,reason:result.reason};
}

export function getDraft(scope){
  if(!scope)return null;
  const entry=loadDrafts()[scope];
  return isPlainObject(entry)?entry:null;
}

export function draftData(scope){
  const entry=getDraft(scope);
  return entry&&isPlainObject(entry.data)?entry.data:null;
}

export function clearDraft(scope){
  if(!scope)return false;
  const all=loadDrafts();
  if(!(scope in all))return false;
  delete all[scope];
  persistAll(all);
  return true;
}

export function listDrafts(){
  const all=loadDrafts();
  return Object.entries(all)
    .filter(([,v])=>isPlainObject(v)&&isPlainObject(v.data))
    .map(([scope,v])=>({scope,savedAt:v.savedAt||'',data:v.data}))
    .sort((a,b)=>String(b.savedAt).localeCompare(String(a.savedAt)));
}

/* Un borrador solo sirve si es posterior a lo que ya está guardado en el cuaderno. */
export function draftIsNewer(scope,savedAtIso){
  const draft=getDraft(scope);
  if(!draft?.savedAt)return false;
  if(!savedAtIso)return true;
  return String(draft.savedAt)>String(savedAtIso);
}

export function draftMinutes(scope,now=Date.now()){
  const draft=getDraft(scope);
  if(!draft?.savedAt)return null;
  const then=Date.parse(draft.savedAt);
  if(!Number.isFinite(then))return null;
  return Math.max(0,Math.round((now-then)/60000));
}

/* Resumen para avisos: «142 palabras · hace 6 min». */
export function draftSummary(scope,now=Date.now()){
  const data=draftData(scope);
  if(!data)return null;
  const words=Object.values(data)
    .filter(v=>typeof v==='string')
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes=draftMinutes(scope,now);
  const when=minutes===null?'':minutes<1?'ahora mismo':minutes<60?`hace ${minutes} min`:`hace ${Math.round(minutes/60)} h`;
  return {words,when,minutes};
}

/* Nombre legible de un ámbito, para poder rescatar lo que quedó a medias. */
export function draftTitle(scope){
  if(scope==='botella')return 'Una botella sin soltar';
  if(scope==='perfil')return 'Tu perfil, a medio editar';
  if(scope==='asistente')return 'La bienvenida, a medio rellenar';
  if(scope==='manana')return 'La lista de mañana';
  if(scope.startsWith('respuesta:'))return 'Una respuesta a una botella';
  if(scope.startsWith('entrada:')){
    const date=scope.slice('entrada:'.length);
    return /^\d{4}-\d{2}-\d{2}$/.test(date)?`La entrada de ${longDate(date)}`:'Una entrada sin terminar';
  }
  return 'Un texto a medias';
}

/* Cuántos borradores hay pendientes y de qué tipo (para el indicador global). */
export function pendingDrafts(){
  const list=listDrafts();
  return {
    total:list.length,
    entries:list.filter(d=>d.scope.startsWith('entrada:')).length,
    bottles:list.filter(d=>d.scope==='botella').length,
    newest:list[0]?.savedAt||''
  };
}

/* ----- copia de seguridad ----- */
/* El mapa tal cual, para meterlo en el JSON de exportación. */
export function draftsSnapshot(){
  const all=loadDrafts();
  return Object.fromEntries(Object.entries(all).filter(([,v])=>isPlainObject(v)&&isPlainObject(v.data)));
}

/* Al importar, los borradores de la copia se suman a los de aquí: gana el más
   reciente de cada ámbito. */
export function mergeDrafts(raw){
  const incoming=isPlainObject(raw)?raw:{};
  const current=loadDrafts();
  let changed=false;
  for(const [scope,value] of Object.entries(incoming)){
    if(!isPlainObject(value)||!isPlainObject(value.data))continue;
    const savedAt=typeof value.savedAt==='string'?value.savedAt:'';
    if(!savedAt)continue;
    const had=current[scope];
    if(had&&String(had.savedAt||'')>=savedAt)continue;
    const data={};
    for(const [key,item] of Object.entries(value.data)){
      if(typeof item==='string'){const text=cutText(item);if(text.trim())data[key]=text;}
      else if(typeof item==='number'||typeof item==='boolean')data[key]=item;
    }
    if(!Object.keys(data).length)continue;
    current[scope]={data,savedAt};
    changed=true;
  }
  if(!changed)return {ok:true,map:current,merged:0};
  const result=persistAll(current);
  return {ok:result.ok,map:result.map,merged:Object.keys(incoming).length};
}

/* Al borrar el cuaderno entero desaparecen también los borradores. */
export function clearAllDrafts(){
  writeRaw(DRAFTS_KEY,null,{label:'Los borradores'});
  return true;
}
