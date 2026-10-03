import {dayNumber,dateKey} from './dates.js';
import {COUNTERS,TEXT_FIELDS} from '../data/constants.js';
const KEY='diario.entries.v1';
const HABITS_KEY='diario.habits.v1';

function cleanText(value,label){
  if(typeof value!=='string')throw new Error(`${label} debe ser texto.`);
  if(value.length>20000)throw new Error(`${label} debe tener como máximo 20.000 caracteres.`);
  return value;
}
function cleanCounter(value,key){
  const preset=COUNTERS.find(c=>c.key===key);
  if(value===undefined||value===null||value==='')return 0;
  const n=Number(value);
  if(!Number.isFinite(n)||n<preset.min||n>preset.max)throw new Error(`${preset.label} debe estar entre ${preset.min} y ${preset.max}.`);
  return Math.round(n*10)/10;
}
function cleanScale(value){
  if(value===undefined||value===null||value==='')return null;
  const n=Number(value);
  if(!Number.isInteger(n)||n<1||n>5)throw new Error('Las escalas van de 1 a 5.');
  return n;
}

export function validateEntry(e){
  if(!e||typeof e!=='object'||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+'T12:00:00').getTime())||dateKey(new Date(e.date+'T12:00:00'))!==e.date)throw new Error('Hay una fecha no válida.');
  if(e.date>dateKey())throw new Error('No se pueden registrar días futuros.');
  if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error('Selecciona cómo te ha ido el día.');
  for(const f of ['sleepHours','studyHours']){
    const n=e[f];
    if(typeof n!=='number'||!Number.isFinite(n)||n<0||n>24)throw new Error('Las horas deben estar entre 0 y 24.');
  }
  const text=Object.fromEntries(TEXT_FIELDS.map(f=>[f,cleanText(e[f]??'',f)]));
  if(!text.generalDay.trim())throw new Error('Escribe cómo ha ido tu día en general.');
  if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(x=>typeof x!=='string'||x.length>20000))throw new Error('El agradecimiento debe tener tres campos de texto.');
  if(e.goals!==undefined&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(x=>typeof x!=='string'||x.length>500)))throw new Error('La lista de objetivos no es válida.');
  const tags=Array.isArray(e.tags)?e.tags:[];
  if(tags.length>20)throw new Error('Puedes elegir como máximo 20 etiquetas.');
  for(const t of tags)if(typeof t!=='string'||!t.trim()||t.length>40)throw new Error('Hay una etiqueta no válida.');
  const counters={};
  for(const c of COUNTERS)counters[c.key]=cleanCounter(e.counters?.[c.key],c.key);
  const habits={};
  if(e.habits!==undefined&&(typeof e.habits!=='object'||e.habits===null||Array.isArray(e.habits)))throw new Error('Los hábitos no son válidos.');
  for(const [id,value] of Object.entries(e.habits||{}))if(typeof id==='string'&&id.length<=60)habits[id]=value===true;
  return {
    id:typeof e.id==='string'?e.id:crypto.randomUUID(),
    date:e.date,
    mood:e.mood,
    sleepHours:e.sleepHours,
    studyHours:e.studyHours,
    energy:cleanScale(e.energy),
    stress:cleanScale(e.stress),
    ...text,
    gratitude:e.gratitude.map(x=>cleanText(x??'','El agradecimiento')),
    goals:(e.goals||[]).map(x=>cleanText(x,'Un objetivo')),
    tags:[...new Set(tags.map(t=>t.trim()))],
    counters,
    habits,
    createdAt:typeof e.createdAt==='string'?e.createdAt:new Date().toISOString(),
    updatedAt:typeof e.updatedAt==='string'?e.updatedAt:new Date().toISOString()
  };
}
function normalize(raw){const entries=raw.map(validateEntry).sort((a,b)=>a.date.localeCompare(b.date));return entries.map(e=>({...e,dayNumber:dayNumber(e.date,entries)}));}
export function loadEntries(){const raw=localStorage.getItem(KEY);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw new Error('No se han podido leer tus entradas.');return normalize(data);}
export function loadEntry(date){return loadEntries().find(e=>e.date===date)||null;}
function persist(entries){const normalized=normalize(entries);localStorage.setItem(KEY,JSON.stringify(normalized));return normalized;}
export function saveEntry(entry){const clean=validateEntry(entry);clean.updatedAt=new Date().toISOString();const entries=loadEntries();return persist([...entries.filter(e=>e.date!==clean.date),clean]);}
export function deleteEntry(date){return persist(loadEntries().filter(e=>e.date!==date));}
export function clearEntries(){localStorage.removeItem(KEY);localStorage.removeItem(HABITS_KEY);}

/* ----- Hábitos (configuración) ----- */
export function validateHabit(h){
  if(!h||typeof h!=='object')throw new Error('Hábito no válido.');
  const name=cleanText(h.name??'','El nombre del hábito').trim();
  if(!name)throw new Error('El hábito necesita un nombre.');
  if(name.length>40)throw new Error('El nombre del hábito debe tener 40 caracteres o menos.');
  return {id:typeof h.id==='string'&&h.id?h.id:crypto.randomUUID(),name,createdAt:typeof h.createdAt==='string'?h.createdAt:new Date().toISOString()};
}
export function loadHabits(){const raw=localStorage.getItem(HABITS_KEY);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw new Error('No se han podido leer tus hábitos.');return data.map(validateHabit);}
function persistHabits(habits){const list=habits.map(validateHabit);localStorage.setItem(HABITS_KEY,JSON.stringify(list));return list;}
export function saveHabit(habit){const clean=validateHabit(habit);const habits=loadHabits();return persistHabits([...habits.filter(h=>h.id!==clean.id),clean]);}
export function deleteHabit(id){return persistHabits(loadHabits().filter(h=>h.id!==id));}

/* ----- Exportar / importar ----- */
export function exportData(entries,habits=loadHabits()){return JSON.stringify({app:'diario',version:1,exportedAt:new Date().toISOString(),entries:normalize(entries),habits:habits.map(validateHabit)},null,2);}
export function parseImport(text){
  let data;
  try{data=JSON.parse(text);}catch{throw new Error('El archivo no es una copia JSON válida.');}
  if(!data||typeof data!=='object'||data.version!==1||!Array.isArray(data.entries))throw new Error('Selecciona una copia JSON de Diario (versión 1).');
  const entries=data.entries.map(validateEntry);
  if(new Set(entries.map(e=>e.date)).size!==entries.length)throw new Error('La copia contiene fechas duplicadas.');
  const habits=Array.isArray(data.habits)?data.habits.map(validateHabit):[];
  return {entries,habits};
}
export function importData(incoming){
  const current=loadEntries();
  const map=new Map(current.map(e=>[e.date,e]));
  for(const e of incoming.entries)map.set(e.date,validateEntry(e));
  const habitMap=new Map(loadHabits().map(h=>[h.id,h]));
  for(const h of incoming.habits)habitMap.set(h.id,validateHabit(h));
  persistHabits([...habitMap.values()]);
  return persist([...map.values()]);
}
