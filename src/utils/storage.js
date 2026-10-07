import {dayNumber,dateKey,daysBetween} from './dates.js';
import {COUNTERS,TEXT_FIELDS,THEMES,SETUP_PURPOSES,AGE_GROUPS,INTEREST_OPTIONS,WRITING_RITUALS,TONE_STYLES,counterDefs,partDefs,MAX_PARTS,MAX_COUNTERS} from '../data/constants.js';
import {SEAS,GLASS_TINTS,WEATHERS,planVoyage,resolveBottle,normalizeThrowForce} from './ocean.js';
import {writeRaw,safeRead,describeReason,clearPendingWrites,dropPendingWrite} from './persist.js';
import {DRAFTS_KEY,draftsSnapshot,mergeDrafts} from './drafts.js';
import {PENDING_DAY_KEY,pendingDaysSnapshot,mergePendingDays} from './pendingDay.js';
const KEY='diario.entries.v1';
const HABITS_KEY='diario.habits.v1';
const SETUP_KEY='diario.setup.v1';
const THOUGHTS_KEY='diario.thoughts.v1';

/* Un fallo de escritura que el usuario tiene que llegar a saber: lleva el motivo
   y el mensaje ya en castellano. `persist.js` deja además la escritura en cola,
   así que casi siempre se recupera sola en cuanto el navegador respire. */
export class SaveError extends Error{
  constructor(label,{key,reason}={}){
    super(`${label}: no se ha podido guardar. ${describeReason(reason)} Lo intento otra vez en cuanto pueda, pero no cierres la pestaña si acabas de escribir algo largo.`);
    this.name='SaveError';
    this.key=key;
    this.reason=reason;
    this.queued=true;
  }
}

/* Toda escritura del cuaderno pasa por aquí: se verifica, y si el navegador no
   la acepta queda en la cola de reintentos y lanzamos un error legible. */
function writeOrThrow(key,value,{label='Los datos',prune=null}={}){
  const result=writeRaw(key,value,{label,prune});
  if(!result.ok)throw new SaveError(label,{key,reason:result.reason});
  return result;
}

function readRaw(key){return safeRead(key);}

function commitStorageChanges(changes){
  const previous=new Map(changes.map(([key])=>[key,readRaw(key)]));
  const attempted=[];
  for(const [key,value,label='Los datos'] of changes){
    const result=writeRaw(key,value,{label});
    if(!result.ok){
      dropPendingWrite(key);
      let rollbackFailed=false;
      for(const undone of attempted.reverse()){
        const restore=writeRaw(undone,previous.get(undone),{label:'La copia anterior'});
        if(!restore.ok)rollbackFailed=true;
      }
      if(rollbackFailed)throw new SaveError('La copia de seguridad',{key,reason:result.reason});
      throw new SaveError(label,{key,reason:result.reason});
    }
    attempted.push(key);
  }
}

export const DEFAULT_SETUP = {
  completed: false,
  name: '',
  age: null,
  ageGroup: 'young',
  interests: [],
  ritual: 'night',
  tone: 'warm',
  savedQuotes: [],
  purpose: 'calm',
  motto: 'Un día a la vez.',
  theme: 'paper',
  sleepGoal: 7.5,
  studyGoal: 2,
  waterGoal: 8,
  showDailyWord: true,
  showDailyTip: true,
  crisisAlertsEnabled: true,
  trustedContactName: '',
  trustedContactPhone: '',
  sidebarCollapsed: false,
  reduceMotion: false,
  /* listas resueltas por validateSetup: [] significa «los de siempre» */
  counters: [],
  parts: [],
  updatedAt: null
};

export function ageGroupFromAge(age, fallback = 'young'){
  const n = Number(age);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  if (n <= 18) return 'teen';
  if (n <= 26) return 'young';
  if (n <= 49) return 'adult';
  return 'senior';
}

function cleanText(value,label){
  if(typeof value!=='string')throw new Error(`${label} debe ser texto.`);
  if(value.length>20000)throw new Error(`${label} debe tener como máximo 20.000 caracteres.`);
  return value;
}
function cleanCounter(value,key){
  const preset=COUNTERS.find(c=>c.key===key);
  if(value===undefined||value===null||value==='')return 0;
  const n=Number(value);
  const min=preset?.min??0,max=preset?.max??99999,label=preset?.label??key;
  if(!Number.isFinite(n)||n<min||n>max)throw new Error(`${label} debe estar entre ${min} y ${max}.`);
  return Math.round(n*10)/10;
}
const SAFE_KEY=/^[\w-]{1,24}$/;
function cleanScale(value){
  if(value===undefined||value===null||value==='')return null;
  const n=Number(value);
  if(!Number.isInteger(n)||n<1||n>5)throw new Error('Las escalas van de 1 a 5.');
  return n;
}

function cleanParts(raw){
  const parts={};
  if(raw===undefined||raw===null)return parts;
  if(typeof raw!=='object'||Array.isArray(raw))throw new Error('Las partes del diario no son válidas.');
  for(const [key,value] of Object.entries(raw)){
    if(!SAFE_KEY.test(key))continue;
    if(typeof value!=='string')throw new Error(`La parte «${key}» debe ser texto.`);
    const text=value.trim();
    if(!text)continue;
    if(text.length>4000)throw new Error('Cada parte del diario admite como máximo 4.000 caracteres.');
    parts[key]=text;
    if(Object.keys(parts).length>=MAX_PARTS)break;
  }
  return parts;
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
  /* Las notas del día pueden ir vacías: hay días que solo se apuntan con un
     ánimo, un hábito o una cifra, y el cuaderno no debe escribir por ti. */
  const capsule=cleanText(e.capsule??'','La cápsula del día').slice(0,300);
  if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(x=>typeof x!=='string'||x.length>20000))throw new Error('El agradecimiento debe tener tres campos de texto.');
  if(e.goals!==undefined&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(x=>typeof x!=='string'||x.length>500)))throw new Error('La lista de objetivos no es válida.');
  const tags=Array.isArray(e.tags)?e.tags:[];
  if(tags.length>20)throw new Error('Puedes elegir como máximo 20 etiquetas.');
  for(const t of tags)if(typeof t!=='string'||!t.trim()||t.length>40)throw new Error('Hay una etiqueta no válida.');
  /* Los de siempre van siempre (así los lee quien los espere) y se suman los
     propios: un contador que añadas hoy seguirá ahí mañana. */
  const counters={};
  for(const c of COUNTERS)counters[c.key]=cleanCounter(e.counters?.[c.key],c.key);
  for(const key of Object.keys(e.counters||{})){
    if(!SAFE_KEY.test(key)||key in counters)continue;
    /* en un contador propio no merecía la pena romper el guardado por una
       cifra rara: si no es un número, se ignora */
    const n=Number(e.counters[key]);
    if(Number.isFinite(n)&&n>=0&&n<=99999)counters[key]=Math.round(n*10)/10;
  }
  if(Object.keys(counters).length>MAX_COUNTERS)throw new Error(`No puedes tener más de ${MAX_COUNTERS} contadores.`);
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
    capsule,
    gratitude:e.gratitude.map(x=>cleanText(x??'','El agradecimiento')),
    goals:(e.goals||[]).map(x=>cleanText(x,'Un objetivo')),
    tags:[...new Set(tags.map(t=>t.trim()))],
    counters,
    parts:cleanParts(e.parts),
    habits,
    createdAt:typeof e.createdAt==='string'?e.createdAt:new Date().toISOString(),
    updatedAt:typeof e.updatedAt==='string'?e.updatedAt:new Date().toISOString()
  };
}
function normalize(raw){const entries=raw.map(validateEntry).sort((a,b)=>a.date.localeCompare(b.date));return entries.map(e=>({...e,dayNumber:dayNumber(e.date,entries)}));}
export function loadEntries(){const raw=readRaw(KEY);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw new Error('No se han podido leer tus entradas.');return normalize(data);}
export function loadEntry(date){return loadEntries().find(e=>e.date===date)||null;}
function persist(entries){const normalized=normalize(entries);writeOrThrow(KEY,JSON.stringify(normalized),{label:'El cuaderno'});return normalized;}
export function saveEntry(entry){const clean=validateEntry(entry);clean.updatedAt=new Date().toISOString();const entries=loadEntries();return persist([...entries.filter(e=>e.date!==clean.date),clean]);}
export function deleteEntry(date){return persist(loadEntries().filter(e=>e.date!==date));}
export function clearEntries(){
  commitStorageChanges([[KEY,null,'El cuaderno'],[HABITS_KEY,null,'Los hábitos'],[SETUP_KEY,null,'El perfil'],[THOUGHTS_KEY,null,'El mar'],[PENDING_DAY_KEY,null,'Los cambios del día']]);
  /* Ya no hay nada que reintentar: el cuaderno entero se ha ido. */
  clearPendingWrites();
}

/* ----- Hábitos (configuración) ----- */
export function validateHabit(h){
  if(!h||typeof h!=='object')throw new Error('Hábito no válido.');
  const name=cleanText(h.name??'','El nombre del hábito').trim();
  if(!name)throw new Error('El hábito necesita un nombre.');
  if(name.length>40)throw new Error('El nombre del hábito debe tener 40 caracteres o menos.');
  return {id:typeof h.id==='string'&&h.id?h.id:crypto.randomUUID(),name,createdAt:typeof h.createdAt==='string'?h.createdAt:new Date().toISOString()};
}
export function loadHabits(){const raw=readRaw(HABITS_KEY);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw new Error('No se han podido leer tus hábitos.');return data.map(validateHabit);}
function persistHabits(habits){const list=habits.map(validateHabit);writeOrThrow(HABITS_KEY,JSON.stringify(list),{label:'Los hábitos'});return list;}
export function saveHabit(habit){const clean=validateHabit(habit);const habits=loadHabits();return persistHabits([...habits.filter(h=>h.id!==clean.id),clean]);}
export function deleteHabit(id){return persistHabits(loadHabits().filter(h=>h.id!==id));}

/* ----- Pensamientos en botella (el mar) ----- */
const SEA_IDS=new Set(SEAS.map(s=>s.id));
const WEATHER_IDS=new Set(WEATHERS.map(w=>w.id));
const GLASS_IDS=new Set(GLASS_TINTS.map(g=>g.id));
const THOUGHT_STATUS=new Set(['drifting','returned','lost']);

function isDateKey(value){
  if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
  const date=new Date(`${value}T12:00:00`);
  return Number.isFinite(date.getTime())&&dateKey(date)===value;
}

export function validateThought(t){
  if(!t||typeof t!=='object')throw new Error('El pensamiento no es válido.');
  const text=cleanText(t.text??'','El pensamiento').trim().slice(0,1200);
  if(!text)throw new Error('Escribe un pensamiento antes de echar la botella al mar.');
  const castAt=isDateKey(t.castAt)&&t.castAt<=dateKey()?t.castAt:dateKey();
  const sea=SEA_IDS.has(t.sea)?t.sea:'breeze';
  const force=normalizeThrowForce(t.force);
  const mood=Number.isInteger(t.mood)&&t.mood>=1&&t.mood<=5?t.mood:null;
  const id=typeof t.id==='string'&&t.id?t.id:crypto.randomUUID();
  // El viaje se sortea una sola vez, al echar la botella: después no se recalcula.
  const storedReturns=t.returns===true;
  const arrivalDays=isDateKey(t.arriveOn)?daysBetween(castAt,t.arriveOn):null;
  const hasValidVoyage=Number.isInteger(t.driftDays)&&t.driftDays>=1&&arrivalDays===t.driftDays
    &&(storedReturns||isDateKey(t.lostOn)&&t.lostOn>t.arriveOn);
  const glassId=typeof t.glass==='object'&&t.glass?t.glass.id:t.glass;
  const voyage=hasValidVoyage
    ?{
      force,
      returns:storedReturns,
      speed:Number.isFinite(t.speed)?Math.max(1,Math.round(t.speed)):10,
      driftDays:Math.max(1,t.driftDays),
      arriveOn:t.arriveOn,
      lostOn:isDateKey(t.lostOn)?t.lostOn:null,
      current:typeof t.current==='string'?t.current.slice(0,60):'',
      mottoSeed:Number.isFinite(t.mottoSeed)?Math.round(t.mottoSeed):0,
      /* el parte del día en que se soltó se conserva para poder contarlo */
      weather:WEATHER_IDS.has(t.weather)?t.weather:null,
      wind:typeof t.wind==='string'?t.wind.slice(0,24):'',
      windSpeed:Number.isFinite(t.windSpeed)?Math.max(0,Math.round(t.windSpeed)):null,
      push:Number.isInteger(t.push)?Math.max(0,Math.min(4,t.push)):0
    }
    :planVoyage({text,castAt,sea,id,force});
  return {
    id,
    text,
    castAt,
    mood,
    sea,
    ...voyage,
    status:THOUGHT_STATUS.has(t.status)?t.status:'drifting',
    /* El viaje sortea el color del cristal de cada botella: si la botella ya
       existía se respeta el suyo y, si es nueva, se estrena el que le tocó. */
    glass:GLASS_IDS.has(glassId)?glassId:GLASS_IDS.has(voyage.glass)?voyage.glass:'amber',
    returnedAt:isDateKey(t.returnedAt)?t.returnedAt:null,
    lostAt:isDateKey(t.lostAt)?t.lostAt:null,
    reply:cleanText(t.reply??'','La respuesta').trim().slice(0,1200),
    kept:Boolean(t.kept),
    keptOn:isDateKey(t.keptOn)?t.keptOn:null,
    seen:t.seen===true,
    createdAt:typeof t.createdAt==='string'?t.createdAt:new Date().toISOString(),
    updatedAt:typeof t.updatedAt==='string'?t.updatedAt:new Date().toISOString()
  };
}

function normalizeThoughts(list,today=dateKey()){
  return list.map(validateThought)
    .map(t=>t.castAt>today?{...t,castAt:today}:t)
    .map(t=>resolveBottle(t,today))
    .sort((a,b)=>a.castAt.localeCompare(b.castAt)||a.id.localeCompare(b.id));
}
function persistThoughts(list){
  const clean=normalizeThoughts(list);
  writeOrThrow(THOUGHTS_KEY,JSON.stringify(clean),{label:'El mar'});
  return clean;
}

/* Al abrir el cuaderno el mar reparte lo que tocaba: devuelve las botellas
   cuyo día de pleamar llegó y hunde las que no volvieron a tiempo. */
function settleThoughts(list){
  const today=dateKey();
  let changed=false;
  const out=list.map(t=>{
    const next=resolveBottle(t,today);
    if(next!==t)changed=true;
    return next;
  });
  /* Reparto de fondo: si no se puede escribir no pasa nada, se vuelve a
     intentar en la siguiente apertura. */
  if(changed)writeRaw(THOUGHTS_KEY,JSON.stringify(out),{label:'El mar'});
  return out;
}

export function loadThoughts(){
  const raw=readRaw(THOUGHTS_KEY);
  if(!raw)return [];
  const data=JSON.parse(raw);
  if(!Array.isArray(data))throw new Error('No se ha podido leer tu mar de pensamientos.');
  return settleThoughts(data.map(validateThought));
}
export function saveThought(thought){
  const previous=loadThoughts().find(t=>t.id===thought?.id)||null;
  // Una botella ya echada al mar conserva el viaje que salió sorteado el día que la soltaste.
  const frozen=previous?Object.fromEntries(['sea','force','returns','speed','driftDays','arriveOn','lostOn','current','glass','mottoSeed','status'].map(k=>[k,previous[k]])):{};
  const clean=validateThought({...previous,...thought,...frozen,updatedAt:new Date().toISOString()});
  return persistThoughts([...loadThoughts().filter(t=>t.id!==clean.id),clean]);
}
export function updateThought(id,patch={}){
  const list=loadThoughts();
  return persistThoughts(list.map(t=>t.id===id?{...t,...patch,updatedAt:new Date().toISOString()}:t));
}
export function deleteThought(id){return persistThoughts(loadThoughts().filter(t=>t.id!==id));}
/* Volver a lanzar la misma botella: se sortea un viaje nuevo desde hoy. */
export function recastThought(id){
  return updateThought(id,{
    status:'drifting',castAt:dateKey(),
    driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,
    seen:false,reply:'',kept:false,keptOn:null
  });
}

/* ----- Set Up y preferencias del usuario ----- */
export function validateSetup(s = {}){
  const raw = s && typeof s === 'object' ? s : {};
  const validThemes = new Set(THEMES.map(t => t.id));
  const validPurposes = new Set(SETUP_PURPOSES.map(p => p.id));
  const validAgeGroups = new Set(AGE_GROUPS.map(g => g.id));
  const validInterests = new Set(INTEREST_OPTIONS.map(i => i.id));
  const validRituals = new Set(WRITING_RITUALS.map(r => r.id));
  const validTones = new Set(TONE_STYLES.map(t => t.id));
  const clampNum = (val, min, max, fallback) => {
    const n = Number(val);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, Math.round(n * 10) / 10));
  };

  let age = null;
  if (raw.age !== undefined && raw.age !== null && raw.age !== '') {
    const parsedAge = Math.round(Number(raw.age));
    if (Number.isFinite(parsedAge) && parsedAge >= 8 && parsedAge <= 115) {
      age = parsedAge;
    }
  }

  const rawGroup = validAgeGroups.has(raw.ageGroup) ? raw.ageGroup : DEFAULT_SETUP.ageGroup;
  const ageGroup = age !== null ? ageGroupFromAge(age, rawGroup) : rawGroup;

  const interests = Array.isArray(raw.interests)
    ? [...new Set(raw.interests.filter(id => validInterests.has(id)))]
    : [];

  const savedQuotes = Array.isArray(raw.savedQuotes)
    ? [...new Set(raw.savedQuotes.filter(q => typeof q === 'string' && q.trim().length > 0).map(q => q.trim().slice(0, 260)))].slice(0, 40)
    : [];

  return {
    completed: Boolean(raw.completed),
    name: String(raw.name ?? '').trim().slice(0, 50),
    age,
    ageGroup,
    interests,
    ritual: validRituals.has(raw.ritual) ? raw.ritual : DEFAULT_SETUP.ritual,
    tone: validTones.has(raw.tone) ? raw.tone : DEFAULT_SETUP.tone,
    savedQuotes,
    purpose: validPurposes.has(raw.purpose) ? raw.purpose : DEFAULT_SETUP.purpose,
    motto: String(raw.motto ?? DEFAULT_SETUP.motto).trim().slice(0, 140) || DEFAULT_SETUP.motto,
    theme: validThemes.has(raw.theme) ? raw.theme : DEFAULT_SETUP.theme,
    sleepGoal: clampNum(raw.sleepGoal, 4, 14, DEFAULT_SETUP.sleepGoal),
    studyGoal: clampNum(raw.studyGoal, 0, 16, DEFAULT_SETUP.studyGoal),
    waterGoal: clampNum(raw.waterGoal, 1, 25, DEFAULT_SETUP.waterGoal),
    showDailyWord: raw.showDailyWord === undefined ? true : Boolean(raw.showDailyWord),
    showDailyTip: raw.showDailyTip === undefined ? true : Boolean(raw.showDailyTip),
    crisisAlertsEnabled: raw.crisisAlertsEnabled === undefined ? true : Boolean(raw.crisisAlertsEnabled),
    trustedContactName: String(raw.trustedContactName ?? '').trim().slice(0, 60),
    trustedContactPhone: String(raw.trustedContactPhone ?? '').trim().slice(0, 30),
    sidebarCollapsed: Boolean(raw.sidebarCollapsed),
    reduceMotion: Boolean(raw.reduceMotion),
    /* los contadores y las partes del diario quedan materializados: el editor
       de Personalizar trabaja siempre sobre una lista concreta */
    counters: counterDefs(raw).slice(0, MAX_COUNTERS),
    parts: partDefs(raw).slice(0, MAX_PARTS),
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : new Date().toISOString()
  };
}

export function loadSetup(){
  const raw = safeRead(SETUP_KEY);
  if (!raw) return {...DEFAULT_SETUP};
  try {
    const parsed = JSON.parse(raw);
    return validateSetup(parsed);
  } catch {
    return {...DEFAULT_SETUP};
  }
}

/* El perfil se acepta siempre: `validateSetup` recorta lo que haga falta en vez
   de rechazarlo, así que guardar no puede fallar por un valor raro. */
export function saveSetup(partial = {}){
  const current = loadSetup();
  const next = validateSetup({...current, ...partial, updatedAt: new Date().toISOString()});
  writeOrThrow(SETUP_KEY, JSON.stringify(next), {label:'El perfil'});
  return next;
}

/* ----- Exportar / importar ----- */
/* La copia se lleva **todo**: entradas, hábitos, pensamientos, perfil, los
   textos a medias (`diario.drafts.v1`) y los cambios de día que aún no se han
   guardado (`diario.pendiente-dia.v1`). Nada se queda fuera al cambiar de
   dispositivo. */
export function exportData(entries,habits=loadHabits(),setup=loadSetup(),thoughts=loadThoughts(),drafts=draftsSnapshot(),pendingDays=pendingDaysSnapshot()){
  return JSON.stringify({
    app:'diario',
    version:1,
    exportedAt:new Date().toISOString(),
    entries:normalize(entries),
    habits:habits.map(validateHabit),
    thoughts:thoughts.map(validateThought),
    setup:validateSetup(setup),
    drafts,
    pendingDays
  },null,2);
}
export function parseImport(text){
  let data;
  try{data=JSON.parse(text);}catch{throw new Error('El archivo no es una copia JSON válida.');}
  if(!data||typeof data!=='object'||Array.isArray(data)||data.version!==1||!Array.isArray(data.entries))throw new Error('Selecciona una copia JSON de Diario (versión 1).');
  if(data.habits!==undefined&&!Array.isArray(data.habits))throw new Error('La lista de hábitos de la copia no es válida.');
  if(data.thoughts!==undefined&&!Array.isArray(data.thoughts))throw new Error('La lista de pensamientos de la copia no es válida.');
  if(data.setup!==undefined&&data.setup!==null&&(typeof data.setup!=='object'||Array.isArray(data.setup)))throw new Error('Los ajustes de la copia no son válidos.');
  if(data.drafts!==undefined&&data.drafts!==null&&(typeof data.drafts!=='object'||Array.isArray(data.drafts)))throw new Error('Los borradores de la copia no son válidos.');
  if(data.pendingDays!==undefined&&data.pendingDays!==null&&(typeof data.pendingDays!=='object'||Array.isArray(data.pendingDays)))throw new Error('Los cambios de día de la copia no son válidos.');
  const entries=data.entries.map(validateEntry);
  if(new Set(entries.map(e=>e.date)).size!==entries.length)throw new Error('La copia contiene fechas duplicadas.');
  const habits=(data.habits||[]).map(validateHabit);
  if(new Set(habits.map(h=>h.id)).size!==habits.length)throw new Error('La copia contiene hábitos duplicados.');
  const thoughts=(data.thoughts||[]).map(validateThought);
  if(new Set(thoughts.map(t=>t.id)).size!==thoughts.length)throw new Error('La copia contiene pensamientos duplicados.');
  const setup=data.setup?validateSetup(data.setup):null;
  const drafts=data.drafts?data.drafts:null;
  const pendingDays=data.pendingDays?data.pendingDays:null;
  return {entries,habits,thoughts,setup,drafts,pendingDays};
}
export function importData(incoming){
  if(!incoming||!Array.isArray(incoming.entries)||!Array.isArray(incoming.habits))throw new Error('La copia no contiene listas de entradas y hábitos válidas.');
  if(incoming.thoughts!==undefined&&!Array.isArray(incoming.thoughts))throw new Error('La lista de pensamientos de la copia no es válida.');
  if(incoming.setup!==undefined&&incoming.setup!==null&&(typeof incoming.setup!=='object'||Array.isArray(incoming.setup)))throw new Error('Los ajustes de la copia no son válidos.');

  const importedEntries=incoming.entries.map(validateEntry);
  if(new Set(importedEntries.map(e=>e.date)).size!==importedEntries.length)throw new Error('La copia contiene fechas duplicadas.');
  const importedHabits=incoming.habits.map(validateHabit);
  if(new Set(importedHabits.map(h=>h.id)).size!==importedHabits.length)throw new Error('La copia contiene hábitos duplicados.');
  const importedThoughts=(incoming.thoughts||[]).map(validateThought);
  if(new Set(importedThoughts.map(t=>t.id)).size!==importedThoughts.length)throw new Error('La copia contiene pensamientos duplicados.');
  const importedSetup=incoming.setup?validateSetup(incoming.setup):null;

  const entries=new Map(loadEntries().map(e=>[e.date,e]));
  for(const entry of importedEntries)entries.set(entry.date,entry);
  const habits=new Map(loadHabits().map(h=>[h.id,h]));
  for(const habit of importedHabits)habits.set(habit.id,habit);
  const thoughts=new Map(loadThoughts().map(t=>[t.id,t]));
  for(const thought of importedThoughts)thoughts.set(thought.id,thought);

  const mergedEntries=normalize([...entries.values()]);
  const mergedHabits=[...habits.values()].map(validateHabit);
  const mergedThoughts=normalizeThoughts([...thoughts.values()]);
  const changes=[
    [HABITS_KEY,JSON.stringify(mergedHabits),'Los hábitos'],
    [THOUGHTS_KEY,JSON.stringify(mergedThoughts),'El mar']
  ];
  if(importedSetup){
    const mergedSetup=validateSetup({...loadSetup(),...importedSetup,updatedAt:new Date().toISOString()});
    changes.push([SETUP_KEY,JSON.stringify(mergedSetup),'El perfil']);
  }
  if(incoming.drafts){
    const mergedDrafts=mergeDrafts(incoming.drafts);
    if(mergedDrafts.ok)changes.push([DRAFTS_KEY,JSON.stringify(mergedDrafts.map),'Los borradores']);
  }
  if(incoming.pendingDays){
    const mergedDays=mergePendingDays(incoming.pendingDays);
    if(mergedDays.ok)changes.push([PENDING_DAY_KEY,JSON.stringify(mergedDays.map),'Los cambios del día']);
  }
  changes.push([KEY,JSON.stringify(mergedEntries),'El cuaderno']);
  commitStorageChanges(changes);
  return mergedEntries;
}
