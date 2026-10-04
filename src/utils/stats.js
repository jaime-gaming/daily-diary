import {addDays,dateKey,daysBetween} from './dates.js';
import {COUNTERS} from '../data/constants.js';
export const formatNumber=n=>new Intl.NumberFormat('es-ES',{maximumFractionDigits:1}).format(n);
export function average(values){const v=values.filter(x=>Number.isFinite(x));return v.length?v.reduce((a,b)=>a+b,0)/v.length:0;}
export function inRange(entries,start,end){return entries.filter(e=>e.date>=start&&e.date<=end).sort((a,b)=>a.date.localeCompare(b.date));}
export function maxStreak(entries){let max=0,current=0,previous;for(const date of [...new Set(entries.map(e=>e.date))].sort()){current=previous&&daysBetween(previous,date)===1?current+1:1;max=Math.max(max,current);previous=date;}return max;}
export function currentStreak(entries,today=dateKey()){const dates=new Set(entries.map(e=>e.date));let d=dates.has(today)?today:addDays(today,-1),n=0;while(dates.has(d)){n++;d=addDays(d,-1);}return n;}
export function wordCount(entry){const text=[entry.bestOfDay,entry.differentToday,entry.generalDay,entry.tomorrow,...(entry.gratitude||[])].join(' ').trim();return text?text.split(/\s+/).length:0;}
export function totalWords(entries){return entries.reduce((sum,e)=>sum+wordCount(e),0);}
export function habitStreak(entries,habitId){const dates=[...new Set(entries.filter(e=>e.habits?.[habitId]).map(e=>e.date))].sort();if(!dates.length)return 0;let max=0,current=0,previous;for(const date of dates){current=previous&&daysBetween(previous,date)===1?current+1:1;max=Math.max(max,current);previous=date;}
  const last=dates[dates.length-1],today=dateKey(),alive=daysBetween(last,today)<=1;
  return alive&&max===current?max:max;}
export function habitCount(entries,habitId){return entries.filter(e=>e.habits?.[habitId]).length;}
export function habitDates(entries,habitId){return [...new Set(entries.filter(e=>e.habits?.[habitId]).map(e=>e.date))].sort();}
export function bestHabitStreak(entries,habitId){
  const dates=habitDates(entries,habitId);
  let max=0,current=0,previous;
  for(const date of dates){current=previous&&daysBetween(previous,date)===1?current+1:1;max=Math.max(max,current);previous=date;}
  return max;
}
export function liveHabitStreak(entries,habitId,today=dateKey()){
  const dates=new Set(habitDates(entries,habitId));
  if(!dates.size)return 0;
  let d=dates.has(today)?today:addDays(today,-1),n=0;
  while(dates.has(d)){n++;d=addDays(d,-1);}
  return n;
}
/* Cuántos de los últimos `days` días cumpliste el hábito (solo cuenta días pasados). */
export function habitRate(entries,habitId,days=28,today=dateKey()){
  const start=addDays(today,1-days);
  const done=entries.filter(e=>e.habits?.[habitId]&&e.date>=start&&e.date<=today).length;
  const tracked=entries.filter(e=>e.date>=start&&e.date<=today).length;
  const window=Math.min(days,daysBetween(start,today)+1);
  return {done,tracked,window,pct:window?Math.round((done/window)*100):0};
}
/* Matriz hábitos × días para el «momentum grid» de la pestaña de Rutina.
   `end` cierra la ventana (puede ser un día pasado) y `today` marca qué días son futuros. */
export function habitMomentum(entries,habits,days=28,end=dateKey(),today=dateKey()){
  const dates=Array.from({length:days},(_,i)=>addDays(end,i-days+1));
  const byDate=new Map(entries.map(e=>[e.date,e]));
  return {
    dates,
    rows:habits.map(h=>({
      habit:h,
      cells:dates.map(d=>({date:d,done:Boolean(byDate.get(d)?.habits?.[h.id]),future:d>today,recorded:byDate.has(d)}))
    }))
  };
}
export function tagFrequency(entries){const map=new Map();for(const e of entries)for(const t of e.tags||[])map.set(t,(map.get(t)||0)+1);return [...map.entries()].sort((a,b)=>b[1]-a[1]);}

export function calculateStats(entries){
  const sorted=[...entries].sort((a,b)=>a.date.localeCompare(b.date));
  const highest=field=>sorted.reduce((best,e)=>!best||e[field]>best[field]?e:best,null);
  return {
    count:entries.length,
    mood:average(entries.map(e=>e.mood)),
    energy:average(entries.map(e=>e.energy)),
    stress:average(entries.map(e=>e.stress)),
    sleep:average(entries.map(e=>e.sleepHours)),
    study:average(entries.map(e=>e.studyHours)),
    totalSleep:entries.reduce((s,e)=>s+e.sleepHours,0),
    totalStudy:entries.reduce((s,e)=>s+e.studyHours,0),
    words:totalWords(entries),
    best:highest('mood'),
    worst:sorted.reduce((best,e)=>!best||e.mood<best.mood?e:best,null),
    mostStudy:highest('studyHours'),
    mostSleep:highest('sleepHours'),
    maxStreak:maxStreak(entries),
    moods:[1,2,3,4,5].map(m=>entries.filter(e=>e.mood===m).length),
    counters:Object.fromEntries(COUNTERS.map(c=>[c.key,{
      total:entries.reduce((s,e)=>s+(e.counters?.[c.key]||0),0),
      average:average(entries.map(e=>e.counters?.[c.key]))
    }]))
  };
}

/* ----- Interpretaciones por reglas ----- */
export function sleepInterpretation(h){return h<6?'Has dormido poco.':h<7?'Una cantidad algo baja.':h<=9?'Un descanso razonable.':'Has dormido bastante.';}
export function studyInterpretation(h){return h===0?'Hoy no has dedicado tiempo al estudio.':h<1?'Has hecho un poco de estudio.':h<3?'Has tenido una sesión de estudio considerable.':h<5?'Has dedicado bastante tiempo.':'Ha sido un día de estudio intenso.';}
export function counterInterpretation(key,value){
  switch(key){
    case 'water':return value===0?'Sin registrar agua hoy.':value<4?'Poca agua registrada.':value<8?'Una hidratación razonable.':'Buen nivel de hidratación.';
    case 'exercise':return value===0?'Sin ejercicio registrado hoy.':value<20?'Un poco de movimiento.':value<60?'Una sesión de ejercicio notable.':'Un día muy activo.';
    case 'reading':return value===0?'Sin lectura registrada hoy.':value<20?'Unas páginas para hoy.':value<60?'Una buena sesión de lectura.':'Un día de mucha lectura.';
    default:return value===0?'Sin pausa consciente registrada.':value<10?'Un momento de pausa.':value<30?'Una práctica considerable.':'Una práctica muy constante hoy.';
  }
}
const MOOD_PHRASE=['','Hoy ha sido un día difícil.','Hoy ha sido un día flojo.','Hoy ha sido un día normal.','Hoy ha sido un día bueno.','Hoy ha sido un día genial.'];

export function generateSummary(e){
  const parts=[MOOD_PHRASE[e.mood],`Has dormido ${formatNumber(e.sleepHours)} horas y has dedicado ${formatNumber(e.studyHours)} horas al estudio.`,sleepInterpretation(e.sleepHours),studyInterpretation(e.studyHours)];
  if(e.energy)parts.push(`Tu energía se ha sentido ${['','muy baja','baja','normal','alta','muy alta'][e.energy].toLowerCase()}.`);
  if(e.stress)parts.push(`El estrés ha sido ${['','muy bajo','bajo','normal','alto','muy alto'][e.stress].toLowerCase()}.`);
  const checked=Object.values(e.habits||{}).filter(Boolean).length;
  if(checked)parts.push(`Has cumplido ${checked} de tus hábitos de hoy.`);
  const water=e.counters?.water||0;
  if(water>=6)parts.push(`Además, has bebido ${water} vasos de agua.`);
  return parts.join(' ');
}
export function periodSummary(s,monthly=false){
  if(!s.count)return 'Aún no hay entradas en este período. Cada día que escribas irá dando forma a tu historia.';
  const base=monthly
    ?`Durante este mes has registrado ${s.count} ${s.count===1?'día':'días'}. Tu valoración media ha sido de ${formatNumber(s.mood)}/5. Has estudiado un total de ${formatNumber(s.totalStudy)} horas y tu media de sueño ha sido de ${formatNumber(s.sleep)} horas.`
    :`Esta semana has registrado ${s.count} ${s.count===1?'día':'días'}. Tu estado medio ha sido ${['','difícil','flojo','normal','bueno','genial'][Math.round(s.mood)]}. Has dormido una media de ${formatNumber(s.sleep)} horas y estudiado ${formatNumber(s.study)} horas por día registrado.`;
  const extras=[];
  if(Number.isFinite(s.energy))extras.push(`Tu energía media ha sido ${formatNumber(s.energy)}/5`);
  if(Number.isFinite(s.stress))extras.push(`el estrés medio ${formatNumber(s.stress)}/5`);
  if(s.words)extras.push(`has escrito ${formatNumber(s.words)} palabras`);
  return extras.length?`${base} ${extras.join(', ')}.`:base;
}
export function generateTrends(entries,today=dateKey()){
  const recent=inRange(entries,addDays(today,-6),today),previous=inRange(entries,addDays(today,-13),addDays(today,-7)),messages=[];
  if(recent.length>=3&&previous.length>=3){
    const a=calculateStats(recent),b=calculateStats(previous);
    if(a.sleep<b.sleep-0.3)messages.push('Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores.');
    if(a.sleep>b.sleep+0.3)messages.push('En tus registros, has dormido más que en los 7 días anteriores.');
    if(a.study>b.study+0.3)messages.push('Has aumentado tus horas medias de estudio respecto a los 7 días anteriores.');
    if(a.study<b.study-0.3)messages.push('Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores.');
    if(a.mood>b.mood+0.2)messages.push('Tu valoración diaria ha mejorado recientemente.');
    if(a.mood<b.mood-0.2)messages.push('Tu valoración diaria ha bajado respecto a los 7 días anteriores.');
    if(Number.isFinite(a.energy)&&Number.isFinite(b.energy)){
      if(a.energy>b.energy+0.2)messages.push('Se observa una tendencia al alza en tu energía.');
      if(a.energy<b.energy-0.2)messages.push('Tu energía media ha bajado respecto a la semana anterior.');
    }
    if(Number.isFinite(a.stress)&&Number.isFinite(b.stress)&&a.stress>b.stress+0.2)messages.push('Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa.');
    if(!messages.length)messages.push('Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.');
  }
  const lastMonth=inRange(entries,addDays(today,-29),today),more=lastMonth.filter(e=>e.sleepHours>7),less=lastMonth.filter(e=>e.sleepHours<=7);
  if(more.length>=3&&less.length>=3&&average(more.map(e=>e.mood))>average(less.map(e=>e.mood))+0.3)messages.push('En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.');
  const active=lastMonth.filter(e=>(e.counters?.exercise||0)>=20),still=lastMonth.filter(e=>(e.counters?.exercise||0)<20);
  if(active.length>=3&&still.length>=3&&average(active.map(e=>e.mood))>average(still.map(e=>e.mood))+0.3)messages.push('En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más.');
  return messages;
}
