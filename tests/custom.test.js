import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COUNTERS,counterDefs,counterGoal,normalizeCounter,normalizePart,partDefs,
  PART_PRESETS,PART_TYPES,COUNTER_ICONS,MAX_PARTS,MAX_COUNTERS,makeKey
} from '../src/data/constants.js';
import {wordCount,counterInterpretation} from '../src/utils/stats.js';
import {validateEntry,validateSetup,DEFAULT_SETUP} from '../src/utils/storage.js';

const today=()=>new Date().toISOString().slice(0,10);
const entry=(over={})=>({
  date:today(),mood:4,sleepHours:7,studyHours:1,bestOfDay:'',differentToday:'',generalDay:'Bien.',
  wordOfDay:'',capsule:'',gratitude:['','',''],tomorrow:'',goals:[],tags:[],counters:{},parts:{},...over
});

/* ---------- contadores ---------- */
test('sin lista propia, están los cuatro de siempre', () => {
  const list=counterDefs({});
  assert.deepEqual(list.map(c=>c.key),COUNTERS.map(c=>c.key));
  assert.ok(list.every(c=>c.builtin&&c.label&&c.icon));
  assert.deepEqual(counterDefs(),counterDefs({}),'y sin ajustes tampoco se rompe');
});

test('la lista del usuario manda, con sus defectos subsanados', () => {
  const list=counterDefs({counters:[
    {key:'water',label:'Vasos de agua',unit:'  ',goal:0},
    {key:'c_1',label:'Cigarros',unit:'pitillos',goal:3},
    {key:'c_1',label:'repetido'},
    {label:'sin clave'},
    {key:'c_2',label:'x'.repeat(60)}
  ]});
  assert.deepEqual(list.map(c=>c.key),['water','c_1','c_2'],'sin duplicados y sin filas rotas');
  assert.equal(list[0].label,'Vasos de agua');
  assert.equal(list[0].unit,'','la unidad en blanco se respeta: no todo se mide en vasos');
  assert.equal(list[1].unit,'pitillos');
  assert.equal(list[2].label.length,28,'un nombre largo se corta, no revienta');
  assert.ok(counterDefs({counters:[{key:'c_9',label:'C',min:5,max:2}].concat(Array.from({length:30},(_,i)=>({key:`k${i}`,label:`n${i}`})))}).length<=MAX_COUNTERS,'un techo a la lista');
});

test('la meta del agua sigue viviendo en los ajustes', () => {
  assert.equal(counterGoal({key:'water',goal:0},{waterGoal:6}),6);
  assert.equal(counterGoal({key:'water',goal:0},{}),8,'y si no hay ajuste, ocho');
  assert.equal(counterGoal({key:'c_1',goal:12},{waterGoal:6}),12);
  assert.equal(counterGoal({key:'c_1'},{waterGoal:6}),0,'sin meta no hay meta');
});

test('un contador propio se normaliza sin sorpresas', () => {
  const c=normalizeCounter({key:'Cigarrillos',label:'Cigarros',unit:'  pitillos  ',goal:'4',max:10});
  assert.equal(c.key,'cigarrillos','la clave se limpia, no se inventa');
  assert.equal(c.unit,'pitillos');
  assert.equal(c.goal,4);
  assert.ok(c.max>=c.min+c.step);
  assert.ok(COUNTER_ICONS.includes(c.icon),'el icono siempre existe');
  assert.equal(normalizeCounter({label:'sin clave'}),null);
});

test('las claves nuevas entran y salen sin ruido', () => {
  const a=makeKey('p'),b=makeKey('p');
  assert.match(a,/^p_[a-z0-9_]{3,}$/);
  assert.notEqual(a,b);
  assert.ok(a.length<=24,'caben en el validador');
});

/* ---------- partes del diario ---------- */
test('sin partes, no hay partes', () => {
  assert.deepEqual(partDefs({}),[]);
  assert.deepEqual(partDefs({parts:'raro'}),[],'y un churro no rompe nada');
});

test('las partes se ordenan, se limpian y tienen techo', () => {
  const list=partDefs({parts:[
    {key:'p_1',label:'  Cuerpo  ',hint:'tensión',type:'line'},
    {key:'p_2',label:'Idea',type:'otra cosa'},
    {key:'p_1',label:'duplicada'},
    {key:'p_3',label:''},
    ...Array.from({length:20},(_,i)=>({key:`k${i}`,label:`t${i}`}))
  ]});
  assert.equal(list[0].label,'Cuerpo');
  assert.equal(list[0].type,'line');
  assert.equal(list[1].type,'text','cualquier cosa rara es un párrafo');
  assert.equal(list.filter(p=>p.key==='p_1').length,1);
  assert.ok(!list.some(p=>!p.label),'sin título no se pinta');
  assert.equal(list.length,MAX_PARTS);
  assert.ok(PART_TYPES.length===2&&PART_PRESETS.every(p=>p.label&&PART_TYPES.some(t=>t.id===p.type)));
});

/* ---------- el diario con partes ---------- */
test('las partes cuentan como palabras escritas', () => {
  assert.equal(wordCount(entry({generalDay:'una dos tres'})),3);
  assert.equal(wordCount(entry({generalDay:'una dos tres',parts:{p1:'cuatro cinco',p2:''}})),5);
});

test('las frases del contador propio son secas y con su unidad', () => {
  const custom={key:'c_1',label:'Cigarros',unit:'pitillos',goal:10,builtin:false};
  assert.equal(counterInterpretation('c_1',0,custom),'Sin registrar hoy.');
  assert.match(counterInterpretation('c_1',7,custom),/7 de 10 pitillos/);
  assert.match(counterInterpretation('c_1',12,custom),/Meta cumplida/);
  assert.match(counterInterpretation('c_1',3,{...custom,goal:0}),/3 pitillos hoy/);
  assert.match(counterInterpretation('c_1',2,{}),/2 hoy/,'sin unidad, sólo la cifra');
  assert.match(counterInterpretation('water',2,normalizeCounter({key:'water'})),/Poca agua/);
});

/* ---------- lo que guarda el cuaderno ---------- */
test('una entrada se guarda con sus partes y sus contadores propios', () => {
  const e=validateEntry(entry({
    parts:{p_1:'Hombros sueltos.','p_2':'  ','clave-larga-que-no-deberia-pasar-':'x'},
    counters:{water:3,c_1:5,p_1:'no soy un número'}
  }));
  assert.deepEqual(e.parts,{p_1:'Hombros sueltos.'},'sólo texto con contenido y clave válida');
  assert.equal(e.counters.water,3);
  assert.equal(e.counters.c_1,5,'los contadores propios viajan con el día');
  assert.ok(['exercise','reading','mindfulness'].every(k=>k in e.counters),'los de siempre siguen ahí');
});

test('unas partes raras no se cuelan', () => {
  assert.throws(()=>validateEntry(entry({parts:{p_1:'x'.repeat(5000)}})),/4\.000/);
  assert.throws(()=>validateEntry(entry({parts:'hola'})),/partes del diario/i);
  assert.deepEqual(validateEntry(entry({})).parts,{},'sin partes es un objeto vacío, no undefined');
});

test('los ajustes materializan contadores y dejan las partes como estaban', () => {
  const s=validateSetup({name:'Jaime',age:20});
  assert.deepEqual(s.counters.map(c=>c.key),COUNTERS.map(c=>c.key),'quedan listos para el editor');
  assert.deepEqual(s.parts,[]);
  const t=validateSetup({counters:[{key:'c_7',label:'Cigarros',unit:'pitillos',goal:3}],parts:[{key:'p_7',label:'Cuerpo',type:'line'}]});
  assert.deepEqual(t.counters.map(c=>c.key),['c_7'],'la lista del usuario es la lista');
  assert.equal(t.parts[0].label,'Cuerpo');
  assert.equal(DEFAULT_SETUP.counters.length,0,'y por defecto no hay lista: se resuelve al validar');
});
