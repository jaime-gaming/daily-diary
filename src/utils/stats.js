import {addDays,dateKey,daysBetween} from './dates.js';
export const formatNumber=n=>new Intl.NumberFormat('es-ES',{maximumFractionDigits:1}).format(n);
const numericValues=values=>values.filter(value=>Number.isFinite(value));
export function average(values){const v=numericValues(values);return v.length?v.reduce((a,b)=>a+b,0)/v.length:0;}
export function meanOrNull(values){const v=numericValues(values);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null;}
export function median(values){
  const sorted=numericValues(values).sort((a,b)=>a-b);
  if(!sorted.length)return null;
  const middle=Math.floor(sorted.length/2);
  return sorted.length%2?sorted[middle]:(sorted[middle-1]+sorted[middle])/2;
}
export function standardDeviation(values){
  const v=numericValues(values);
  if(!v.length)return null;
  const mean=average(v);
  return Math.sqrt(average(v.map(value=>(value-mean)**2)));
}
export function inRange(entries,start,end){return entries.filter(e=>e.date>=start&&e.date<=end).sort((a,b)=>a.date.localeCompare(b.date));}
export function periodCoverage(entries,start,end,today=dateKey()){
  const last=end>today?today:end;
  const days=start<=last?daysBetween(start,last)+1:0;
  const recorded=new Set(entries.filter(entry=>entry.date>=start&&entry.date<=last).map(entry=>entry.date)).size;
  return {recorded,days,pct:days?Math.round(recorded/days*100):0};
}
export function maxStreak(entries){let max=0,current=0,previous;for(const date of [...new Set(entries.map(e=>e.date))].sort()){current=previous&&daysBetween(previous,date)===1?current+1:1;max=Math.max(max,current);previous=date;}return max;}
export function currentStreak(entries,today=dateKey()){const dates=new Set(entries.map(e=>e.date));let d=dates.has(today)?today:addDays(today,-1),n=0;while(dates.has(d)){n++;d=addDays(d,-1);}return n;}
export function wordCount(entry){
  const text=[entry.bestOfDay,entry.differentToday,entry.generalDay,entry.tomorrow,...(entry.gratitude||[]),...Object.values(entry.parts||{})].join(' ').trim();
  return text?text.split(/\s+/).length:0;
}
export function totalWords(entries){return entries.reduce((sum,e)=>sum+wordCount(e),0);}
export function habitStreak(entries,habitId){
  const dates=habitDates(entries,habitId);
  let max=0,current=0,previous;
  for(const date of dates){current=previous&&daysBetween(previous,date)===1?current+1:1;max=Math.max(max,current);previous=date;}
  return max;
}
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

export function calculateStats(entries=[]){
  const byDate=new Map();
  for(const entry of entries){if(entry?.date)byDate.set(entry.date,entry);}
  const sorted=[...byDate.values()].sort((a,b)=>a.date.localeCompare(b.date));
  const values=field=>sorted.map(entry=>entry[field]);
  const countValues=field=>numericValues(values(field)).length;
  const highest=field=>sorted.filter(entry=>Number.isFinite(entry[field]))
    .reduce((best,entry)=>!best||entry[field]>best[field]?entry:best,null);
  const moodValues=values('mood'),sleepValues=values('sleepHours'),studyValues=values('studyHours');
  const counterKeys=[...new Set(sorted.flatMap(entry=>Object.keys(entry.counters||{})))];
  const counters=Object.fromEntries(counterKeys.map(key=>{
    const readings=sorted.map(entry=>entry.counters?.[key]);
    return [key,{
      total:numericValues(readings).reduce((sum,value)=>sum+value,0),
      average:meanOrNull(readings),
      median:median(readings),
      count:numericValues(readings).length
    }];
  }));
  return {
    count:sorted.length,
    mood:average(moodValues),
    energy:meanOrNull(values('energy')),
    stress:meanOrNull(values('stress')),
    sleep:average(sleepValues),
    study:average(studyValues),
    moodMedian:median(moodValues),
    sleepMedian:median(sleepValues),
    studyMedian:median(studyValues),
    moodStdDev:standardDeviation(moodValues),
    sleepStdDev:standardDeviation(sleepValues),
    metricCounts:{
      mood:countValues('mood'),sleep:countValues('sleepHours'),study:countValues('studyHours'),
      energy:countValues('energy'),stress:countValues('stress')
    },
    totalSleep:numericValues(sleepValues).reduce((sum,value)=>sum+value,0),
    totalStudy:numericValues(studyValues).reduce((sum,value)=>sum+value,0),
    words:totalWords(sorted),
    best:highest('mood'),
    worst:sorted.filter(entry=>Number.isFinite(entry.mood))
      .reduce((best,entry)=>!best||entry.mood<best.mood?entry:best,null),
    mostStudy:highest('studyHours'),
    mostSleep:highest('sleepHours'),
    maxStreak:maxStreak(sorted),
    moods:[1,2,3,4,5].map(m=>sorted.filter(entry=>entry.mood===m).length),
    counters
  };
}

/* ----- Interpretaciones por reglas ----- */
export function sleepInterpretation(h){return h<6?'Has dormido poco.':h<7?'Una cantidad algo baja.':h<=9?'Un descanso razonable.':'Has dormido bastante.';}
export function studyInterpretation(h){return h===0?'Hoy no has dedicado tiempo al estudio.':h<1?'Has hecho un poco de estudio.':h<3?'Has tenido una sesión de estudio considerable.':h<5?'Has dedicado bastante tiempo.':'Ha sido un día de estudio intenso.';}
export function counterInterpretation(key,value,counter=null){
  if(counter&&!counter.builtin)return customCounterPhrase(counter,value);
  switch(key){
    case 'water':return value===0?'Sin registrar agua hoy.':value<4?'Poca agua registrada.':value<8?'Una hidratación razonable.':'Buen nivel de hidratación.';
    case 'exercise':return value===0?'Sin ejercicio registrado hoy.':value<20?'Un poco de movimiento.':value<60?'Una sesión de ejercicio notable.':'Un día muy activo.';
    case 'reading':return value===0?'Sin lectura registrada hoy.':value<20?'Unas páginas para hoy.':value<60?'Una buena sesión de lectura.':'Un día de mucha lectura.';
    default:return value===0?'Sin pausa consciente registrada.':value<10?'Un momento de pausa.':value<30?'Una práctica considerable.':'Una práctica muy constante hoy.';
  }
}
/* Contadores propios: ni ánimo ni sermones, sólo la cifra y su meta. */
function customCounterPhrase(counter,value){
  const unit=counter.unit?` ${counter.unit}`:'';
  const goal=Number(counter.goal)||0;
  if(!value)return 'Sin registrar hoy.';
  if(goal&&value>=goal)return `Meta cumplida: ${value} de ${goal}${unit}.`;
  if(goal)return `Vas a ${value} de ${goal}${unit}.`;
  return `${value}${unit} hoy.`;
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
  if(!s.count)return 'Aún no hay entradas en este período.';
  const mood=s.metricCounts?.mood?`${formatNumber(s.mood)}/5`:'sin valoración registrada';
  const sleep=s.metricCounts?.sleep?`${formatNumber(s.sleep)} h de media`:'sin datos de sueño';
  const study=s.metricCounts?.study?`${formatNumber(s.study)} h por día con dato`:'sin datos de dedicación';
  const days=s.count===1?'día':'días';
  const totalStudy=s.metricCounts?.study?`${formatNumber(s.totalStudy)} horas en total`:'sin datos de dedicación';
  const base=monthly
    ?`En el período has registrado ${s.count} ${days}. Tu valoración media ha sido ${mood}. Estudio: ${totalStudy}; sueño: ${sleep}.`
    :`En la semana has registrado ${s.count} ${days}. Tu valoración media ha sido ${mood}; el sueño, ${sleep}, y la dedicación, ${study}.`;
  const extras=[];
  if(Number.isFinite(s.energy))extras.push(`Tu energía media ha sido ${formatNumber(s.energy)}/5`);
  if(Number.isFinite(s.stress))extras.push(`el estrés medio ${formatNumber(s.stress)}/5`);
  if(s.words)extras.push(`has escrito ${formatNumber(s.words)} palabras`);
  return extras.length?`${base} ${extras.join(', ')}.`:base;
}
export function generateTrends(entries,today=dateKey()){
  const recent=inRange(entries,addDays(today,-6),today);
  const previous=inRange(entries,addDays(today,-13),addDays(today,-7));
  const messages=[];
  if(recent.length>=3&&previous.length>=3){
    const current=calculateStats(recent),prior=calculateStats(previous);
    const compare=(metric,threshold,up,down)=>{
      const [field,countField]=metric;
      if(current.metricCounts[countField]<3||prior.metricCounts[countField]<3)return;
      const delta=current[field]-prior[field];
      if(delta>=threshold)messages.push(up);
      else if(delta<=-threshold)messages.push(down);
    };
    compare(['sleepMedian','sleep'],.5,
      'En tus registros recientes, el valor habitual de sueño ha subido respecto a la semana anterior.',
      'En tus registros recientes, el valor habitual de sueño ha bajado respecto a la semana anterior.');
    compare(['studyMedian','study'],.5,
      'Has dedicado más tiempo al estudio o enfoque que en los 7 días anteriores.',
      'Has dedicado menos tiempo al estudio o enfoque que en los 7 días anteriores.');
    compare(['moodMedian','mood'],.4,
      'Tu valoración habitual del día ha subido respecto a la semana anterior.',
      'Tu valoración habitual del día ha bajado respecto a la semana anterior.');
    compare(['energy','energy'],.4,
      'Tu energía registrada ha sido mayor que en la semana anterior.',
      'Tu energía registrada ha sido menor que en la semana anterior.');
    compare(['stress','stress'],.4,
      'Tu estrés registrado ha sido mayor que en la semana anterior.',
      'Tu estrés registrado ha sido menor que en la semana anterior.');
    if(!messages.length&&current.metricCounts.mood>=3&&prior.metricCounts.mood>=3){
      messages.push('Tus registros de ánimo se han mantenido bastante estables respecto a los 7 días anteriores.');
    }
  }

  const lastMonth=inRange(entries,addDays(today,-29),today);
  const enoughMood=group=>group.filter(entry=>Number.isFinite(entry.mood)).length>=5;
  const sleptMore=lastMonth.filter(entry=>Number.isFinite(entry.sleepHours)&&entry.sleepHours>7);
  const sleptLess=lastMonth.filter(entry=>Number.isFinite(entry.sleepHours)&&entry.sleepHours<=7);
  if(enoughMood(sleptMore)&&enoughMood(sleptLess)){
    const difference=median(sleptMore.map(entry=>entry.mood))-median(sleptLess.map(entry=>entry.mood));
    if(difference>=.5)messages.push('En tus registros del último mes, dormir más de 7 horas coincide con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.');
  }
  const loggedExercise=lastMonth.filter(entry=>Number.isFinite(entry.counters?.exercise));
  const active=loggedExercise.filter(entry=>entry.counters.exercise>=20);
  const lessActive=loggedExercise.filter(entry=>entry.counters.exercise<20);
  if(enoughMood(active)&&enoughMood(lessActive)){
    const difference=median(active.map(entry=>entry.mood))-median(lessActive.map(entry=>entry.mood));
    if(difference>=.5)messages.push('En tus registros, los días con 20 minutos o más de ejercicio coinciden con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.');
  }
  return messages;
}
