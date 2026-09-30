import {dayNumber,dateKey} from './dates.js';
const KEY='diario.entries.v1';
const textFields=['bestOfDay','differentToday','generalDay','tomorrow'];
export function validateEntry(e){
 if(!e||typeof e!=='object'||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+'T12:00:00').getTime())||dateKey(new Date(e.date+'T12:00:00'))!==e.date)throw new Error('Hay una fecha no válida.');
 if(e.date>dateKey())throw new Error('No se pueden registrar días futuros.');
 if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error('Selecciona cómo te ha ido el día.');
 for(const f of ['sleepHours','studyHours'])if(typeof e[f]!=='number'||!Number.isFinite(e[f])||e[f]<0||e[f]>24)throw new Error('Las horas deben estar entre 0 y 24.');
 for(const f of textFields)if(typeof e[f]!=='string'||e[f].length>20000)throw new Error('Los textos deben tener como máximo 20.000 caracteres.');
 if(!e.generalDay.trim())throw new Error('Escribe cómo ha ido tu día en general.');
 if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(x=>typeof x!=='string'||x.length>20000))throw new Error('El agradecimiento debe tener tres campos de texto.');
 if(e.goals!==undefined&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(x=>typeof x!=='string'||x.length>500)))throw new Error('La lista de objetivos no es válida.');
 return {id:typeof e.id==='string'?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,...Object.fromEntries(textFields.map(f=>[f,e[f]])),gratitude:e.gratitude,goals:e.goals||[],createdAt:typeof e.createdAt==='string'?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt==='string'?e.updatedAt:new Date().toISOString()};
}
function normalize(raw){const entries=raw.map(validateEntry).sort((a,b)=>a.date.localeCompare(b.date));return entries.map(e=>({...e,dayNumber:dayNumber(e.date,entries)}));}
export function loadEntries(){const raw=localStorage.getItem(KEY);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw new Error('No se han podido leer tus entradas.');return normalize(data);}
export function loadEntry(date){return loadEntries().find(e=>e.date===date)||null;}
function persist(entries){const normalized=normalize(entries);localStorage.setItem(KEY,JSON.stringify(normalized));return normalized;}
export function saveEntry(entry){const clean=validateEntry(entry),entries=loadEntries();return persist([...entries.filter(e=>e.date!==clean.date),clean]);}
export function deleteEntry(date){return persist(loadEntries().filter(e=>e.date!==date));}
export function clearEntries(){localStorage.removeItem(KEY);}
export function exportData(entries){return JSON.stringify({app:'diario',version:1,exportedAt:new Date().toISOString(),entries:normalize(entries)},null,2);}
export function parseImport(text){const data=JSON.parse(text);if(data!==null&&typeof data==='object'&&data.version!==undefined&&data.version!==1)throw new Error('Selecciona una copia JSON de Diario (versión 1).');if(!data||!Array.isArray(data.entries))throw new Error('Selecciona una copia JSON de Diario (versión 1).');const entries=data.entries.map(validateEntry);if(new Set(entries.map(e=>e.date)).size!==entries.length)throw new Error('La copia contiene fechas duplicadas.');return entries;}
export function importData(incoming){const current=loadEntries();const map=new Map(current.map(e=>[e.date,e]));for(const e of incoming)map.set(e.date,validateEntry(e));return persist([...map.values()]);}
