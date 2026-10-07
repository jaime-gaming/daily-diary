/* ============================================================
   EL PERFIL, LEÍDO SIN SORPRESAS
   ------------------------------------------------------------
   El asistente de bienvenida y la página de Ajustes comparten estos
   campos. Aquí no hay DOM: se recibe lo que el formulario dice (nombre,
   edad, metas…) y se devuelve el parche listo para `saveSetup`.

   Dos reglas que vienen de los fallos que ya sufrimos:
   1. Nada bloquea el guardado. Un valor fuera de rango se **ajusta** y se
      cuenta con una frase; nunca se deja al usuario con un botón muerto.
   2. Lo que se guarda es siempre válido para `validateSetup`, así que los
      límites de los campos (`min`, `max`) y los del modelo no se separan.
   ============================================================ */
import {AGE_GROUPS,INTEREST_OPTIONS,THEMES,WRITING_RITUALS,TONE_STYLES,SETUP_PURPOSES} from '../data/constants.js';
import {ageGroupFromAge} from './storage.js';

/* Los mismos números que acepta `validateSetup`. */
export const SETUP_LIMITS={
  /* La edad no se recorta: si alguien escribe 7, se le dice que el cuaderno
     empieza en 8 y se deja sin rellenar. No hay edad «corregida» a la fuerza. */
  age:{min:8,max:115,step:1,reject:true,
    adjusted:()=>'La edad no se ha guardado: el cuaderno admite entre 8 y 115 años. Corrígela o déjala en blanco.'},
  sleepGoal:{min:4,max:14,step:0.5,
    adjusted:value=>`La meta de sueño se ha ajustado a ${value} h (entre 4 y 14).`},
  studyGoal:{min:0,max:16,step:0.5,
    adjusted:value=>`La meta de dedicación se ha ajustado a ${value} h (entre 0 y 16).`},
  waterGoal:{min:1,max:25,step:1,
    adjusted:value=>`Los vasos de agua se han ajustado a ${value} (entre 1 y 25).`}
};

/* Los campos que se ven en cada paso del asistente (para avisar en el suyo). */
export const SETUP_STEP_FIELDS={
  1:['name','age','ageGroup','interests'],
  2:['sleepGoal','studyGoal','waterGoal','ritual','tone'],
  3:['motto','theme']
};

const idCaches=new WeakMap();
function idsOf(list){
  if(!idCaches.has(list))idCaches.set(list,new Set(list.map(item=>item.id)));
  return idCaches.get(list);
}
function pick(list,value){
  return typeof value==='string'&&idsOf(list).has(value)?value:null;
}

export function numberFromField(raw){
  if(raw===null||raw===undefined)return null;
  const text=String(raw).trim();
  /* Ojo: Number('   ') es 0. Un campo en blanco no es un cero. */
  if(!text)return null;
  const n=Number(text.replace(',','.'));
  return Number.isFinite(n)?n:null;
}

/* Ajusta un número a su rango. Devuelve también la frase que lo explica.
   `reject` (la edad) no recorta: si no encaja, se queda fuera y se avisa. */
export function clampSetupNumber(name,raw,fallback=null){
  const limit=SETUP_LIMITS[name];
  const parsed=numberFromField(raw);
  if(parsed===null)return {value:fallback,note:'',adjusted:false,rejected:false};
  const value=Math.min(limit.max,Math.max(limit.min,Math.round(parsed*10)/10));
  const adjusted=value!==parsed;
  if(!adjusted)return {value,note:'',adjusted:false,rejected:false};
  if(limit.reject){
    return {value:fallback,adjusted:true,rejected:true,note:limit.adjusted(value)};
  }
  return {value,adjusted:true,rejected:false,note:limit.adjusted(value)};
}

/* Lee un formulario (FormData) y devuelve campos planos y predecibles.
   `present` son los nombres que existen en el formulario: así se distingue
   «desmarcado» de «este formulario no tiene ese interruptor». */
export function readSetupFields(data,present=new Set()){
  const text=name=>{
    const value=data.get(name);
    return value===null?null:String(value);
  };
  const toggles={};
  for(const name of ['showDailyWord','showDailyTip','sidebarCollapsed','reduceMotion']){
    toggles[name]=present.size&&!present.has(name)?null:Boolean(data.get(name)!==null&&data.get(name)!=='');
  }
  return {
    name:text('name'),
    age:text('age'),
    ageGroup:pick(AGE_GROUPS,data.get('ageGroup')),
    interests:data.getAll('interests').map(String).filter(id=>idsOf(INTEREST_OPTIONS).has(id)),
    ritual:pick(WRITING_RITUALS,data.get('ritual')),
    tone:pick(TONE_STYLES,data.get('tone')),
    purpose:pick(SETUP_PURPOSES,data.get('purpose')),
    motto:text('motto'),
    theme:pick(THEMES,data.get('theme')),
    sleepGoal:text('sleepGoal'),
    studyGoal:text('studyGoal'),
    waterGoal:text('waterGoal'),
    toggles
  };
}

/**
 * Convierte los campos en el parche que espera `saveSetup`.
 * @returns {{patch:object, notes:string[]}} `notes` explica cada ajuste.
 */
export function setupPatchFromFields(fields={},current={}){
  const notes=[];
  const patch={completed:true};
  const toggles=fields.toggles||{};
  for(const name of ['showDailyWord','showDailyTip','sidebarCollapsed','reduceMotion']){
    if(toggles[name]!==null&&toggles[name]!==undefined)patch[name]=toggles[name];
  }

  if(fields.name!==null&&fields.name!==undefined)patch.name=String(fields.name).slice(0,50).trim();
  if(fields.motto!==null&&fields.motto!==undefined){
    patch.motto=String(fields.motto).slice(0,140).trim()||'Un día a la vez.';
  }
  if(fields.theme)patch.theme=fields.theme;
  if(fields.ritual)patch.ritual=fields.ritual;
  if(fields.tone)patch.tone=fields.tone;
  if(fields.purpose)patch.purpose=fields.purpose;
  if(Array.isArray(fields.interests))patch.interests=fields.interests;

  /* Edad: si se escribe, manda; si no, se respeta el grupo elegido a mano. */
  const age=clampSetupNumber('age',fields.age,current.age??null);
  if(age.note)notes.push(age.note);
  if(!age.rejected&&fields.age!==null&&fields.age!==undefined&&fields.age!==''&&age.value===null){
    notes.push('La edad no se ha podido leer: se queda sin rellenar.');
  }
  patch.age=age.value??null;
  const fallbackGroup=fields.ageGroup||current.ageGroup||'young';
  patch.ageGroup=patch.age!==null?ageGroupFromAge(patch.age,fallbackGroup):fallbackGroup;

  for(const name of ['sleepGoal','studyGoal','waterGoal']){
    const raw=fields[name];
    const currentValue=Number.isFinite(Number(current[name]))?Number(current[name]):null;
    const clamped=clampSetupNumber(name,raw,currentValue);
    if(clamped.note)notes.push(clamped.note);
    if(clamped.value!==null)patch[name]=clamped.value;
  }
  return {patch,notes};
}

/* Avisos del paso que se está viendo: se calculan con las mismas reglas para
   que «Siguiente» pueda contarlos antes de guardar nada. */
export function setupStepNotes(step,fields,current={}){
  const ofStep=new Set(SETUP_STEP_FIELDS[step]||[]);
  const notes=[];
  if(ofStep.has('age')){
    const age=clampSetupNumber('age',fields.age,current.age??null);
    if(age.note)notes.push(age.note);
  }
  for(const name of ['sleepGoal','studyGoal','waterGoal']){
    if(!ofStep.has(name))continue;
    const clamped=clampSetupNumber(name,fields[name],current[name]??null);
    if(clamped.note)notes.push(clamped.note);
  }
  return notes;
}

/* Los valores ya ajustados de un paso, para poder corregir los propios campos
   a la vista del usuario («si escribiste 9 años, verás 9»). */
export function setupStepValues(step,fields,current={}){
  const ofStep=new Set(SETUP_STEP_FIELDS[step]||[]);
  const values={};
  for(const name of ['age','sleepGoal','studyGoal','waterGoal']){
    if(!ofStep.has(name))continue;
    const clamped=clampSetupNumber(name,fields[name],current[name]??null);
    if(clamped.rejected)continue;         // lo que no vale no se reescribe: se cuenta
    if(clamped.value!==null)values[name]=clamped.value;
  }
  return values;
}
