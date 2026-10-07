/* ============================================================
   EL DÍA A MEDIAS — cambios que todavía no son una entrada
   ------------------------------------------------------------
   En el cuaderno, un día solo existe cuando pulsas «Guardar día». Lo
   que se toca fuera de la página «Hoy» —marcar un hábito, sumar agua,
   apuntar la lista de mañana— vive aquí mientras tanto: es un parche
   pendiente, no una entrada.

   Reglas del contrato:
   - Un parche se funde con la entrada guardada (`mergeDay`) para que la
     interfaz enseñe el día completo: lo guardado y lo que falta por
     guardar.
   - `patch` admite cadenas vacías a propósito: borrar un texto es un
     cambio, y tiene que poder representarse.
   - Nunca se pierde el parche más reciente: si el almacén está lleno se
     sacrifican los días viejos, jamás el que acabas de tocar.
   - Un JSON corrupto equivale a «no hay cambios pendientes».
   ============================================================ */
import {writeRaw,safeRead} from './persist.js';

export const PENDING_DAY_KEY='diario.pendiente-dia.v1';
export const MAX_PENDING_DAYS=60;

const MAX_TEXT=20000;
const MAX_PART=4000;
const MAX_TAGS=20;
const MAX_GOALS=30;
const SAFE_KEY=/^[\w-]{1,24}$/;

const TEXT_KEYS=['bestOfDay','differentToday','generalDay','tomorrow','wordOfDay','capsule'];
const SCALE_KEYS=['mood','energy','stress'];
const HOUR_KEYS=['sleepHours','studyHours'];

function isPlainObject(value){
  return Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
}
export function isDateKey(value){
  return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value);
}
export function cut(value,max=MAX_TEXT){
  const text=String(value??'');
  return text.length>max?text.slice(0,max):text;
}

export function loadPendingDays(){
  const raw=safeRead(PENDING_DAY_KEY);
  if(!raw)return {};
  try{
    const data=JSON.parse(raw);
    return isPlainObject(data)?data:{};
  }catch{return {};}
}

/* Los días con cambios pendientes, del más antiguo al más nuevo. */
export function pendingDayDates(){
  return Object.keys(loadPendingDays()).filter(isDateKey).sort();
}

export function dayPatch(date){
  if(!isDateKey(date))return null;
  const entry=loadPendingDays()[date];
  return isPlainObject(entry)&&isPlainObject(entry.patch)?entry.patch:null;
}

function sanitizePatch(patch){
  const out={};
  if(!isPlainObject(patch))return out;
  for(const key of TEXT_KEYS){
    if(typeof patch[key]==='string')out[key]=cut(patch[key],key==='capsule'?300:MAX_TEXT);
  }
  for(const key of SCALE_KEYS){
    const value=patch[key];
    if(value===undefined||value===null)continue;
    const n=Number(value);
    if(Number.isInteger(n)&&n>=1&&n<=5)out[key]=n;
  }
  for(const key of HOUR_KEYS){
    const value=patch[key];
    if(value===undefined||value===null)continue;
    const n=Number(value);
    if(Number.isFinite(n)&&n>=0&&n<=24)out[key]=n;
  }
  if(Array.isArray(patch.gratitude)){
    out.gratitude=[0,1,2].map(i=>typeof patch.gratitude[i]==='string'?cut(patch.gratitude[i]):'');
  }
  if(Array.isArray(patch.tags)){
    out.tags=[...new Set(patch.tags.map(v=>cut(v,40).trim()).filter(Boolean))].slice(0,MAX_TAGS);
  }
  if(Array.isArray(patch.goals)){
    out.goals=patch.goals.map(v=>cut(v,500).trim()).filter(Boolean).slice(0,MAX_GOALS);
  }
  if(isPlainObject(patch.counters)){
    const counters={};
    for(const [key,value] of Object.entries(patch.counters)){
      if(!SAFE_KEY.test(key))continue;
      const n=Number(value);
      if(Number.isFinite(n)&&n>=0&&n<=99999)counters[key]=Math.round(n*10)/10;
    }
    if(Object.keys(counters).length)out.counters=counters;
  }
  if(isPlainObject(patch.habits)){
    const habits={};
    for(const [key,value] of Object.entries(patch.habits)){
      if(typeof key==='string'&&key.length<=60)habits[key]=value===true;
    }
    if(Object.keys(habits).length)out.habits=habits;
  }
  if(isPlainObject(patch.parts)){
    const parts={};
    for(const [key,value] of Object.entries(patch.parts)){
      if(!SAFE_KEY.test(key)||typeof value!=='string')continue;
      parts[key]=cut(value,MAX_PART);   // «» significa «bórralo», y se conserva
    }
    if(Object.keys(parts).length)out.parts=parts;
  }
  return out;
}

/* ¿El parche apunta algo? Basta con que traiga una clave explícita: borrar un
   texto (cadena vacía), poner un contador a cero o desmarcar un hábito son
   cambios de verdad y tienen que poder guardarse. */
export function patchHasContent(patch){
  if(!isPlainObject(patch))return false;
  if(TEXT_KEYS.some(key=>typeof patch[key]==='string'))return true;
  if(Array.isArray(patch.gratitude)||Array.isArray(patch.tags)||Array.isArray(patch.goals))return true;
  for(const group of ['counters','habits','parts']){
    if(isPlainObject(patch[group])&&Object.keys(patch[group]).length)return true;
  }
  return [...SCALE_KEYS,...HOUR_KEYS].some(key=>patch[key]!==undefined&&patch[key]!==null);
}

const sameNumber=(a,b)=>Number.isFinite(Number(a))&&Number.isFinite(Number(b))&&Number(a)===Number(b);
const sameList=(a=[],b=[])=>a.length===b.length&&a.every((value,index)=>String(value)===String(b[index]));

/* ¿El parche se queda en nada? Se compara clave a clave con la entrada
   guardada, así desmarcar, volver al valor de antes o borrar lo que ya estaba
   vacío no deja el día señalado como «sin guardar». */
export function patchIsRedundant(entry=null,patch=null){
  if(!isPlainObject(patch)||!Object.keys(patch).length)return true;
  if(!entry)return !patchHasContent(patch);
  for(const key of TEXT_KEYS){
    if(typeof patch[key]==='string'&&patch[key]!==String(entry[key]??''))return false;
  }
  if(Array.isArray(patch.gratitude)){
    const there=entry.gratitude||[];
    if([0,1,2].some(i=>typeof patch.gratitude[i]==='string'&&patch.gratitude[i]!==String(there[i]??'')))return false;
  }
  if(Array.isArray(patch.tags)&&!sameList(patch.tags,entry.tags||[]))return false;
  if(Array.isArray(patch.goals)&&!sameList(patch.goals,entry.goals||[]))return false;
  for(const key of [...SCALE_KEYS,...HOUR_KEYS]){
    if(patch[key]===undefined||patch[key]===null)continue;
    if(!sameNumber(patch[key],entry[key]))return false;
  }
  if(isPlainObject(patch.counters)){
    const there=entry.counters||{};
    for(const [key,value] of Object.entries(patch.counters)){
      if(!sameNumber(value,there[key]===undefined?0:there[key]))return false;
    }
  }
  if(isPlainObject(patch.habits)){
    const there=entry.habits||{};
    for(const [key,value] of Object.entries(patch.habits)){
      if(Boolean(value)!==Boolean(there[key]))return false;
    }
  }
  if(isPlainObject(patch.parts)){
    const there=entry.parts||{};
    for(const [key,value] of Object.entries(patch.parts)){
      const before=String(there[key]??'').trim();
      const next=String(value??'').trim();
      if(before!==next)return false;
    }
  }
  return true;
}

function trimByDate(map,mustKeep=null){
  const keys=Object.keys(map);
  if(keys.length<=MAX_PENDING_DAYS)return map;
  const sorted=keys
    .filter(key=>key!==mustKeep)
    .sort((a,b)=>String(map[b]?.savedAt||'').localeCompare(String(map[a]?.savedAt||'')));
  const room=Math.max(0,MAX_PENDING_DAYS-(mustKeep&&mustKeep in map?1:0));
  const out=Object.fromEntries(sorted.slice(0,room).map(key=>[key,map[key]]));
  if(mustKeep&&mustKeep in map)out[mustKeep]=map[mustKeep];
  return out;
}

/* Escribe el mapa completo; si no cabe, va soltando días viejos hasta que
   entre (el último que se ha tocado sobrevive siempre). */
function persistDays(map,mustKeep=null){
  const keys=Object.keys(map);
  if(!keys.length){
    const result=writeRaw(PENDING_DAY_KEY,null,{label:'Los cambios del día'});
    return {ok:result.ok,reason:result.reason};
  }
  const attempts=[keys.length,Math.ceil(keys.length/2),Math.ceil(keys.length/4),1];
  let tried=Infinity;
  let result={ok:false,reason:'unknown'};
  for(const keep of attempts){
    const size=Math.min(keep,keys.length);
    if(size>=tried)continue;
    tried=size;
    const sliced=trimByDate(map,mustKeep);
    const out={...sliced};
    if(Object.keys(out).length>size){
      const drop=Object.keys(out)
        .filter(key=>key!==mustKeep)
        .sort((a,b)=>String(out[a]?.savedAt||'').localeCompare(String(out[b]?.savedAt||'')))
        .slice(0,Object.keys(out).length-size);
      for(const key of drop)delete out[key];
    }
    result=writeRaw(PENDING_DAY_KEY,JSON.stringify(out),{label:'Los cambios del día'});
    if(result.ok)return {ok:true,map:out};
    if(size===1)break;
  }
  return {ok:false,reason:result.reason};
}

/* Suma un parche al día. Devuelve `{ok, patch, savedAt, reason}`. */
export function setDayPatch(date,patch){
  if(!isDateKey(date))return null;
  const clean=sanitizePatch(patch);
  if(!Object.keys(clean).length)return null;
  const current=dayPatch(date)||{};
  const merged={...current};
  for(const [key,value] of Object.entries(clean)){
    merged[key]=isPlainObject(value)&&isPlainObject(current[key])?{...current[key],...value}:value;
  }
  const savedAt=new Date().toISOString();
  const all=loadPendingDays();
  all[date]={patch:merged,savedAt};
  const result=persistDays(all,date);
  return {ok:result.ok,reason:result.reason,savedAt,patch:merged};
}

export function clearDayPatch(date){
  if(!isDateKey(date))return false;
  const all=loadPendingDays();
  if(!(date in all))return false;
  delete all[date];
  persistDays(all);
  return true;
}

export function clearAllDayPatches(){
  const result=writeRaw(PENDING_DAY_KEY,null,{label:'Los cambios del día'});
  return result.ok;
}

/* El mapa tal cual, para meterlo en el JSON de exportación. */
export function pendingDaysSnapshot(){
  const all=loadPendingDays();
  return Object.fromEntries(Object.entries(all).filter(([date,value])=>isDateKey(date)&&isPlainObject(value)&&isPlainObject(value.patch)));
}

/* Al importar una copia, de cada día gana el parche más reciente. */
export function mergePendingDays(raw){
  const incoming=isPlainObject(raw)?raw:{};
  const current=loadPendingDays();
  const merged={...current};
  let changed=false;
  for(const [date,value] of Object.entries(incoming)){
    if(!isDateKey(date)||!isPlainObject(value))continue;
    const patch=sanitizePatch(value.patch);
    if(!Object.keys(patch).length)continue;
    const savedAt=typeof value.savedAt==='string'?value.savedAt:new Date().toISOString();
    const here=merged[date];
    if(here&&String(here.savedAt||'')>=savedAt)continue;
    merged[date]={patch,savedAt};
    changed=true;
  }
  if(!changed)return {ok:true,map:current,changed:false};
  const result=persistDays(trimByDate(merged));
  return {ok:result.ok,map:merged,changed:true,reason:result.reason};
}

/* ---------- el día completo: lo guardado + lo pendiente ---------- */
export function emptyDay(date){
  return {
    date,
    mood:null,
    sleepHours:null,
    studyHours:null,
    energy:null,
    stress:null,
    bestOfDay:'',
    differentToday:'',
    generalDay:'',
    wordOfDay:'',
    capsule:'',
    gratitude:['','',''],
    goals:[],
    tags:[],
    counters:{},
    parts:{},
    habits:{},
    createdAt:null,
    updatedAt:null,
    pending:true
  };
}

/**
 * La entrada guardada con los cambios pendientes por encima.
 * @returns {object|null} `null` si ni hay entrada ni hay nada pendiente.
 */
export function mergeDay(date,entry=null,patch=null){
  if(!entry&&!patch)return null;
  if(!patch)return entry;
  const base=entry?{...entry}:emptyDay(date);
  const out={...base,date,pending:true};
  for(const key of TEXT_KEYS)if(typeof patch[key]==='string')out[key]=patch[key];
  for(const key of [...SCALE_KEYS,...HOUR_KEYS])if(patch[key]!==undefined&&patch[key]!==null)out[key]=patch[key];
  if(Array.isArray(patch.gratitude)){
    out.gratitude=[0,1,2].map(i=>typeof patch.gratitude[i]==='string'?patch.gratitude[i]:(base.gratitude||[])[i]||'');
  }
  if(Array.isArray(patch.tags))out.tags=[...patch.tags];
  if(Array.isArray(patch.goals))out.goals=[...patch.goals];
  out.counters={...(base.counters||{}),...(patch.counters||{})};
  out.habits={...(base.habits||{}),...(patch.habits||{})};
  if(isPlainObject(patch.parts)){
    const parts={...(base.parts||{})};
    for(const [key,value] of Object.entries(patch.parts)){
      if(typeof value!=='string')continue;
      if(value.trim())parts[key]=value;else delete parts[key];
    }
    out.parts=parts;
  }
  return out;
}
