import {dayNumber,dateKey} from './dates.js';
import {COUNTERS,TEXT_FIELDS,THEMES,SETUP_PURPOSES,AGE_GROUPS,INTEREST_OPTIONS,WRITING_RITUALS,TONE_STYLES} from '../data/constants.js';
import {SEAS,GLASS_TINTS,planVoyage,resolveBottle} from './ocean.js';
const KEY='diario.entries.v1';
const HABITS_KEY='diario.habits.v1';
const SETUP_KEY='diario.setup.v1';
const THOUGHTS_KEY='diario.thoughts.v1';

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
  const capsule=cleanText(e.capsule??'','La cápsula del día').slice(0,300);
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
    capsule,
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
export function clearEntries(){localStorage.removeItem(KEY);localStorage.removeItem(HABITS_KEY);localStorage.removeItem(SETUP_KEY);localStorage.removeItem(THOUGHTS_KEY);}

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

/* ----- Pensamientos en botella (el mar) ----- */
const SEA_IDS=new Set(SEAS.map(s=>s.id));
const GLASS_IDS=new Set(GLASS_TINTS.map(g=>g.id));
const THOUGHT_STATUS=new Set(['drifting','returned','lost']);

function isDateKey(value){
  return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function validateThought(t){
  if(!t||typeof t!=='object')throw new Error('El pensamiento no es válido.');
  const text=cleanText(t.text??'','El pensamiento').trim().slice(0,1200);
  if(!text)throw new Error('Escribe un pensamiento antes de echar la botella al mar.');
  const castAt=isDateKey(t.castAt)&&t.castAt<=dateKey()?t.castAt:dateKey();
  const sea=SEA_IDS.has(t.sea)?t.sea:'breeze';
  const mood=Number.isInteger(t.mood)&&t.mood>=1&&t.mood<=5?t.mood:null;
  const id=typeof t.id==='string'&&t.id?t.id:crypto.randomUUID();
  // El viaje se sortea una sola vez, al echar la botella: después no se recalcula.
  const voyage=Number.isInteger(t.driftDays)&&isDateKey(t.arriveOn)
    ?{
      returns:t.returns===true,
      speed:Number.isFinite(t.speed)?Math.max(1,Math.round(t.speed)):10,
      driftDays:Math.max(1,t.driftDays),
      arriveOn:t.arriveOn,
      lostOn:isDateKey(t.lostOn)?t.lostOn:null,
      current:typeof t.current==='string'?t.current.slice(0,60):'',
      mottoSeed:Number.isFinite(t.mottoSeed)?Math.round(t.mottoSeed):0
    }
    :planVoyage({text,castAt,sea,id});
  return {
    id,
    text,
    castAt,
    mood,
    sea,
    ...voyage,
    status:THOUGHT_STATUS.has(t.status)?t.status:'drifting',
    glass:GLASS_IDS.has(t.glass)?t.glass:'amber',
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

function persistThoughts(list){
  const today=dateKey();
  const clean=list.map(validateThought).map(t=>t.castAt>today?{...t,castAt:today}:t).sort((a,b)=>a.castAt.localeCompare(b.castAt)||a.id.localeCompare(b.id));
  localStorage.setItem(THOUGHTS_KEY,JSON.stringify(clean));
  return loadThoughts(); // y de paso asienta lo que el mar ya debía haber decidido
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
  if(changed)localStorage.setItem(THOUGHTS_KEY,JSON.stringify(out));
  return out;
}

export function loadThoughts(){
  const raw=localStorage.getItem(THOUGHTS_KEY);
  if(!raw)return [];
  const data=JSON.parse(raw);
  if(!Array.isArray(data))throw new Error('No se ha podido leer tu mar de pensamientos.');
  return settleThoughts(data.map(validateThought));
}
export function saveThought(thought){
  const previous=loadThoughts().find(t=>t.id===thought?.id)||null;
  // Una botella ya echada al mar conserva el viaje que salió sorteado el día que la soltaste.
  const frozen=previous?Object.fromEntries(['sea','returns','speed','driftDays','arriveOn','lostOn','current','glass','mottoSeed','status'].map(k=>[k,previous[k]])):{};
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
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : new Date().toISOString()
  };
}

export function loadSetup(){
  const raw = localStorage.getItem(SETUP_KEY);
  if (!raw) return {...DEFAULT_SETUP};
  try {
    const parsed = JSON.parse(raw);
    return validateSetup(parsed);
  } catch {
    return {...DEFAULT_SETUP};
  }
}

export function saveSetup(partial = {}){
  const current = loadSetup();
  const next = validateSetup({...current, ...partial, updatedAt: new Date().toISOString()});
  localStorage.setItem(SETUP_KEY, JSON.stringify(next));
  return next;
}

/* ----- Exportar / importar ----- */
export function exportData(entries,habits=loadHabits(),setup=loadSetup(),thoughts=loadThoughts()){
  return JSON.stringify({
    app:'diario',
    version:1,
    exportedAt:new Date().toISOString(),
    entries:normalize(entries),
    habits:habits.map(validateHabit),
    thoughts:thoughts.map(validateThought),
    setup:validateSetup(setup)
  },null,2);
}
export function parseImport(text){
  let data;
  try{data=JSON.parse(text);}catch{throw new Error('El archivo no es una copia JSON válida.');}
  if(!data||typeof data!=='object'||data.version!==1||!Array.isArray(data.entries))throw new Error('Selecciona una copia JSON de Diario (versión 1).');
  const entries=data.entries.map(validateEntry);
  if(new Set(entries.map(e=>e.date)).size!==entries.length)throw new Error('La copia contiene fechas duplicadas.');
  const habits=Array.isArray(data.habits)?data.habits.map(validateHabit):[];
  const thoughts=Array.isArray(data.thoughts)?data.thoughts.map(validateThought):[];
  const setup=data.setup?validateSetup(data.setup):null;
  return {entries,habits,thoughts,setup};
}
export function importData(incoming){
  const current=loadEntries();
  const map=new Map(current.map(e=>[e.date,e]));
  for(const e of incoming.entries)map.set(e.date,validateEntry(e));
  const habitMap=new Map(loadHabits().map(h=>[h.id,h]));
  for(const h of incoming.habits)habitMap.set(h.id,validateHabit(h));
  persistHabits([...habitMap.values()]);
  const thoughtMap=new Map(loadThoughts().map(t=>[t.id,t]));
  for(const t of incoming.thoughts||[])thoughtMap.set(t.id,validateThought(t));
  persistThoughts([...thoughtMap.values()]);
  if(incoming.setup)saveSetup(incoming.setup);
  return persist([...map.values()]);
}
