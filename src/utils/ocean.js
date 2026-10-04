/* ============================================================
   EL MAR DE LOS PENSAMIENTOS — lógica pura, sin red y sin IA
   Escribes un pensamiento, lo sellas en una botella y la echas
   al mar. Tarde o temprano la marea decide: puede volver a ti o
   perderse para siempre. El azar es determinista (nace de la fecha,
   del texto y del mar elegido), así que el viaje se puede recalcular
   en cualquier momento sin consultar ningún servidor.
   ============================================================ */

import {dateKey,addDays,daysBetween} from './dates.js';

const SYNODIC=29.530588853;      // ciclo lunar en días
const TIDE_EPOCH='2000-01-06';   // luna nueva de referencia
const SPRING_WINDOW=2.5;         // días cerca de luna nueva/llena = marea viva

export const SEAS=[
  {id:'shore',label:'A la orilla',desc:'Muy cerca: vuelve en cuanto suba la marea.',min:2,max:7,chance:.94,miles:9,reach:'se ve desde la arena'},
  {id:'breeze',label:'Brisa costera',desc:'Un par de semanas dando tumbos por la bahía.',min:9,max:28,chance:.8,miles:17,reach:'cruza la bahía'},
  {id:'current',label:'Corriente del norte',desc:'Semanas de travesía; ya no se ve desde la playa.',min:28,max:80,chance:.63,miles:34,reach:'dobló el cabo'},
  {id:'deep',label:'Alta mar',desc:'Meses lejos. Puede que no vuelva nunca.',min:80,max:240,chance:.42,miles:58,reach:'más allá del mapa'}
];

export const CURRENTS=[
  'la corriente del Golfo','el Noroeste','los Alisios','la deriva de Levante',
  'el canal viejo','la corriente fría','el remolino de poniente','la resaca del faro'
];

export const GLASS_TINTS=[
  {id:'amber',name:'ámbar',hex:'#B4762E'},
  {id:'green',name:'verde botella',hex:'#3E6B4F'},
  {id:'blue',name:'azul cobalto',hex:'#3B5F86'},
  {id:'smoke',name:'humo',hex:'#6E6257'},
  {id:'rose',name:'rosa viejo',hex:'#A65B4E'},
  {id:'clear',name:'cristal',hex:'#7F8E93'}
];

export const PHRASES={
  near:[
    'aún se divisa desde la orilla',
    'rebota en la rompiente, perezosa',
    'a un par de brazas de la arena'
  ],
  mid:[
    'cruza la bahía con la marea',
    'dobló el cabo al atardecer',
    'navega entre barcos que no se detienen',
    'persigue una bandada de gaviotas'
  ],
  far:[
    'en aguas que ya no consultas',
    'se perdió de vista hace días',
    'anda más lejos que tu última carta',
    'viaja con los barcos lentos'
  ],
  home:[
    'la rompiente la devolvió a tu playa',
    'apareció entre las algas al amanecer',
    'el mar te la dejó en los pies',
    'volvió, con la arena pegada al cristal'
  ],
  lost:[
    'se hundió despacio, sin testigos',
    'el mar se la quedó para siempre',
    'se fue a pique antes de tocar tierra',
    'nadie la vio llegar a ninguna orilla'
  ]
};

/* ---------- azar determinista ---------- */
export function hashSeed(str=''){
  let h=2166136261;
  const s=String(str);
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}
  return h>>>0;
}
export function mulberry32(seed=0){
  let t=seed>>>0;
  return ()=>{
    t=(t+0x6D2B79F5)>>>0;
    let r=Math.imul(t^(t>>>15),1|t);
    r=(r+Math.imul(r^(r>>>7),61|r))^(r>>>0);
    return ((r^(r>>>14))>>>0)/4294967296;
  };
}
const mod=(n,m)=>((n%m)+m)%m;
const pick=(arr,rnd)=>arr[Math.floor(rnd()*arr.length)%arr.length];
const MOON_PHASES=['luna nueva','luna creciente','cuarto creciente','gibosa creciente','luna llena','gibosa menguante','cuarto menguante','luna menguante'];
const clamp01=n=>Math.min(1,Math.max(0,n));

/* ---------- mareas ---------- */
export function moonAge(dateStr=dateKey()){
  return mod(daysBetween(TIDE_EPOCH,dateStr)+.765,SYNODIC);
}
export function tideInfo(dateStr=dateKey()){
  const age=moonAge(dateStr);
  const half=SYNODIC/2;
  const toSpring=Math.min(mod(age,half),half-mod(age,half));
  const rising=age<half;
  let key='swell',name='Marea en movimiento',strength=.6;
  if(toSpring<=SPRING_WINDOW){key='spring';name='Marea viva';strength=1;}
  else if(Math.abs(mod(age,half)-half/2)<=SPRING_WINDOW){key='neap';name='Marea muerta';strength=.28;}
  else if(rising){key='rising';name='Marea creciente';strength=.7;}
  else{key='falling';name='Marea menguante';strength=.5;}
  /* iluminación real (0 = nueva, 1 = llena) y nombre de la fase */
  const illum=clamp01((1-Math.cos((2*Math.PI*age)/SYNODIC))/2);
  const phase=MOON_PHASES[Math.floor(mod(age+SYNODIC/16,SYNODIC)/(SYNODIC/8))%8];
  return {age,key,name,strength,rising,illum,moon:Math.round(illum*100)/100,phase};
}
export function isSpringTide(dateStr=dateKey()){
  return tideInfo(dateStr).key==='spring';
}
/* Las botellas que vuelven lo hacen con la marea viva: el mar se toma
   su libertad, pero siempre entrega la correspondencia en pleamar. */
export function nextSpringTide(fromDate,maxPush=16){
  for(let i=0;i<=maxPush;i++){
    const d=addDays(fromDate,i);
    if(isSpringTide(d))return d;
  }
  return fromDate;
}

/* ---------- el parte del día ---------- */
/* El mar no es un decorado: el clima del día en que sueltas la botella decide
   cuán rápido navega y si la deja entrar en la siguiente pleamar o en la
   siguiente a esa. Todo sale de la fecha, así que el parte se puede consultar,
   repetir y auditar sin tocar la red. */
export const WEATHERS=[
  {id:'calm',label:'mar en calma',short:'calma',desc:'Agua plana: la botella avanza despacio, pero no se pierde de vista.',speed:.82,push:0,water:.34,rough:0},
  {id:'haze',label:'bruma',short:'bruma',desc:'Niebla espesa: se pierde la referencia de la orilla algún día más.',speed:.92,push:1,water:.3,rough:.25},
  {id:'wind',label:'viento a favor',short:'viento',desc:'Sopla hacia fuera y hacia casa: la travesía se acelera.',speed:1.24,push:0,water:.58,rough:.5},
  {id:'rain',label:'lluvia',short:'lluvia',desc:'Llueve sobre el agua: corrientes revueltas, llegadas inciertas.',speed:1.05,push:1,water:.66,rough:.62},
  {id:'gale',label:'temporal',short:'temporal',desc:'Con este mar no entra nada en la bahía: la botella espera fuera.',speed:1.42,push:2,water:.92,rough:1}
];
const WIND_DIRS=[
  {id:'levante',label:'levante'},{id:'poniente',label:'poniente'},
  {id:'noroeste',label:'el noroeste'},{id:'gallego',label:'el gallego'},
  {id:'suroeste',label:'suroeste'},{id:'mistral',label:'el mistral'},
  {id:'libeccio',label:'libeccio'},{id:'gregal',label:'gregal'}
];
/* Los vientos que soplan desde tierra retrasan la vuelta; los de mar, no. */
const OFFSHORE=new Set(['levante','el mistral','gregal','suroeste']);

export function weatherOf(dateStr=dateKey()){
  const rnd=mulberry32(hashSeed(`parte|${dateStr}`));
  const r1=rnd(),r2=rnd(),r3=rnd();
  /* sesgo hacia mar suave: los temporales son la excepción */
  const idx=Math.min(WEATHERS.length-1,Math.floor(Math.pow(r1,1.7)*WEATHERS.length));
  const weather=WEATHERS[idx];
  const dir=WIND_DIRS[Math.floor(r2*WIND_DIRS.length)%WIND_DIRS.length];
  const kmh=Math.round(4+r3*12+weather.rough*38);
  const tide=tideInfo(dateStr);
  return {
    date:dateStr,
    weather,
    wind:{...dir,kmh,offshore:OFFSHORE.has(dir.id)},
    /* 0..1: hasta dónde sube el agua en la orilla este día */
    level:clamp01(weather.water*.7+tide.strength*.42),
    rough:clamp01(weather.rough*.72+(tide.strength-.5)*.4),
    speed:weather.speed,
    push:OFFSHORE.has(dir.id)?weather.push+1:weather.push,
    tide
  };
}


/* Posición (0..1) de la botella sobre el agua según su deriva. */
export function driftX(pct){
  return clamp01(.05+clamp01(pct)*.86);
}

/* ---------- el viaje ---------- */
export function seaById(id='breeze'){
  return SEAS.find(s=>s.id===id)||SEAS.find(s=>s.id==='breeze');
}

export function planVoyage({text='',castAt=dateKey(),sea='breeze',id=''}={}){
  const s=seaById(sea);
  const rnd=mulberry32(hashSeed(`${castAt}|${s.id}|${id}|${String(text).trim().slice(0,220)}`));
  const r1=rnd(),r2=rnd(),r3=rnd(),r4=rnd();
  const part=weatherOf(castAt);            /* el parte del día en que se suelta */
  const rawDays=Math.max(1,Math.round(s.min+r1*(s.max-s.min)));
  const returns=r2<s.chance;
  const speed=Math.max(4,Math.round(s.miles*(.7+r3*.6)*part.speed));
  const target=addDays(castAt,rawDays);
  /* Con viento a favor entra en la próxima pleamar; con temporal o viento de
     tierra se queda fuera hasta la siguiente. El mar manda de verdad. */
  const enterFrom=part.push>0?addDays(target,part.push):target;
  const arriveOn=returns?nextSpringTide(enterFrom):target;
  const grace=Math.max(3,Math.round(rawDays*.22));
  return {
    sea:s.id,
    returns,
    speed,
    driftDays:Math.max(1,daysBetween(castAt,arriveOn)),
    arriveOn,
    lostOn:returns?null:addDays(castAt,rawDays+grace),
    current:pick(CURRENTS,rnd),
    glass:pick(GLASS_TINTS,rnd),
    mottoSeed:Math.floor(r4*1e6),
    weather:part.weather.id,
    wind:part.wind.label,
    windSpeed:part.wind.kmh,
    push:part.push
  };
}

export function daysAtSea(bottle,today=dateKey()){
  return Math.max(0,daysBetween(bottle.castAt,today));
}

export function fateOf(bottle,today=dateKey()){
  if(bottle.status&&bottle.status!=='drifting')return bottle.status;
  if(bottle.returns){
    if(today>=(bottle.arriveOn||bottle.castAt))return 'returned';
    return 'drifting';
  }
  if(bottle.lostOn&&today>=bottle.lostOn)return 'lost';
  return 'drifting';
}

export function resolveBottle(bottle,today=dateKey()){
  if(!bottle||typeof bottle!=='object')return bottle;
  const fate=fateOf(bottle,today);
  if(fate===bottle.status)return bottle;
  const stamp=new Date().toISOString();
  if(fate==='returned')return {...bottle,status:'returned',returnedAt:bottle.arriveOn||dateKey(),seen:false,updatedAt:stamp};
  if(fate==='lost')return {...bottle,status:'lost',lostAt:bottle.lostOn||dateKey(),seen:false,updatedAt:stamp};
  return bottle;
}

/* Devuelve la lista resuelta y avisa si el mar cambió algo (para persistirlo). */
export function settleBottles(bottles=[],today=dateKey()){
  let changed=false;
  const list=bottles.map(b=>{
    const next=resolveBottle(b,today);
    if(next!==b)changed=true;
    return next;
  });
  return {list,changed};
}

export function horizonDate(bottle){
  if(!bottle.returns&&bottle.lostOn)return bottle.lostOn;
  return bottle.arriveOn||bottle.castAt;
}

export function voyageProgress(bottle,today=dateKey()){
  const horizon=horizonDate(bottle);
  const total=Math.max(1,daysBetween(bottle.castAt,horizon));
  const atSea=daysAtSea(bottle,today);
  const fate=fateOf(bottle,today);
  const pct=fate==='drifting'?clamp01(atSea/total):1;
  const miles=Math.round(atSea*(bottle.speed||10));
  const onTheWayBack=fate==='drifting'&&!bottle.returns?null:Math.max(0,total-atSea)*(bottle.speed||10);
  return {
    fate,pct,atSea,total,horizon,miles,
    milesHome:onTheWayBack===null?null:Math.round(onTheWayBack),
    label:fate==='drifting'?`día ${atSea} de ${total}`:fate==='returned'?'de vuelta a casa':'a pique',
    phase:fate==='returned'?'home':fate==='lost'?'lost':pct<.18?'near':pct<.62?'mid':'far'
  };
}

export function seaPhrase(bottle,today=dateKey()){
  const {phase}=voyageProgress(bottle,today);
  const list=PHRASES[phase]||PHRASES.mid;
  const seed=hashSeed(`${bottle.id||''}|${bottle.mottoSeed||0}|${phase}`);
  return list[seed%list.length];
}

/* ---------- agrupaciones y métricas ---------- */
export function groupBottles(bottles=[],today=dateKey()){
  const g={drifting:[],returned:[],lost:[],kept:[]};
  for(const b of bottles)g[fateOf(b,today)]?.push(b);
  g.kept=bottles.filter(b=>b.kept);
  g.drifting.sort((a,b)=>a.castAt.localeCompare(b.castAt));
  for(const k of ['returned','lost'])g[k].sort((a,b)=>String(b.returnedAt||b.lostAt||b.castAt).localeCompare(String(a.returnedAt||a.lostAt||a.castAt)));
  g.returned.sort((a,b)=>(a.seen===true)-(b.seen===true)||String(b.returnedAt||'').localeCompare(String(a.returnedAt||'')));
  g.kept.sort((a,b)=>String(b.keptOn||'').localeCompare(String(a.keptOn||'')));
  return g;
}

export function shoreQueue(bottles=[],today=dateKey()){
  return bottles.filter(b=>fateOf(b,today)==='returned');
}



export function thoughtWordCount(text=''){
  const t=String(text||'').trim();
  return t?t.split(/\s+/).length:0;
}


