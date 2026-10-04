/* ============================================================
   LO QUE SE QUEDA A MEDIAS — borradores locales
   ------------------------------------------------------------
   Nadie debería perder un párrafo por cerrar la pestaña. Cada campo
   libre que se está escribiendo se guarda en `diario.drafts.v1` con su
   marca de tiempo, y al volver el cuaderno lo recupera solo.
   Este módulo es puro y no lanza nunca: si el almacenamiento falla,
   se limita a no guardar (y avisa por su lado).
   ============================================================ */

export const DRAFTS_KEY='diario.drafts.v1';

/* Cuánto texto admisible guardamos por borrador y en total. */
const MAX_FIELD=6000;
const MAX_SCOPES=40;

/* Ámbitos conocidos: el diario por día, la botella, la respuesta a una
   botella, la lista de mañana y el perfil. */
export const DRAFT_SCOPES={
  entry:date=>`entrada:${date}`,
  bottle:()=>'botella',
  reply:id=>`respuesta:${id}`,
  tomorrow:()=>`manana`,
  setup:()=>'perfil'
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
  let raw=null;
  try{raw=localStorage.getItem(DRAFTS_KEY);}catch{return {};}
  if(!raw)return {};
  try{
    const data=JSON.parse(raw);
    return isPlainObject(data)?data:{};
  }catch{return {};}
}

function persistAll(map){
  const keys=Object.keys(map);
  if(!keys.length){
    try{localStorage.removeItem(DRAFTS_KEY);}catch{}
    return true;
  }
  /* Si hay más de la cuenta, nos quedamos con los más recientes. */
  let out=map;
  if(keys.length>MAX_SCOPES){
    out=Object.fromEntries(keys
      .sort((a,b)=>String(map[b]?.savedAt||'').localeCompare(String(map[a]?.savedAt||'')))
      .slice(0,MAX_SCOPES)
      .map(k=>[k,map[k]]));
  }
  try{
    localStorage.setItem(DRAFTS_KEY,JSON.stringify(out));
    return true;
  }catch{
    return false;
  }
}

/* Guarda el contenido de un ámbito. Devuelve el meta ({savedAt,ok}) o null si no hay nada que guardar. */
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
  return {savedAt,ok:persistAll(all)};
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

/* Al borrar el cuaderno entero desaparecen también los borradores. */
export function clearAllDrafts(){
  try{localStorage.removeItem(DRAFTS_KEY);}catch{}
  return true;
}
