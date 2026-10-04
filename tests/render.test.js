import test from 'node:test';
import assert from 'node:assert/strict';
import {seaPanel,bottleComposer,bottleCard,bottleModal,oceanLedger,shoreTeaser,emptySea,bottleGlyph,wavesSvg} from '../src/components/ocean.js';
import {habitBoard,momentumGrid,habitStatsList,habitComposer,countersBoard,tomorrowBoard,routineTeaser,progressRing} from '../src/components/habits.js';
import {counterSteppers} from '../src/components/ui.js';
import {COUNTERS} from '../src/data/constants.js';

const TODAY='2026-09-30';
const bottle=(over={})=>({
  id:'b1',text:'Hoy no sé qué hago aquí y prefiero no escribirlo en el cuaderno.',castAt:'2026-09-01',
  mood:2,sea:'breeze',returns:true,speed:18,driftDays:14,arriveOn:'2026-09-15',lostOn:null,
  current:'el Noroeste',glass:'amber',mottoSeed:7,status:'drifting',reply:'',kept:false,seen:false,...over
});
const habits=[{id:'h1',name:'Leer 20 minutos'},{id:'h2',name:'Entrenar'}];
const entry=(date,extra={})=>({
  date,mood:4,sleepHours:7,studyHours:1,bestOfDay:'',differentToday:'',generalDay:'Bien.',wordOfDay:'',capsule:'',
  gratitude:['','',''],tomorrow:'Estudiar',goals:['Repasar tema'],tags:[],counters:{water:5},habits:{h1:true},...extra
});
const entries=[entry('2026-09-29'),entry('2026-09-30',{habits:{h1:true,h2:true}})];
const setup={name:'Jaime',sleepGoal:8,studyGoal:2,waterGoal:8,theme:'paper',interests:[],ageGroup:'young'};

function sane(html,label){
  assert.equal(typeof html,'string',`${label}: devuelve HTML`);
  assert.ok(html.length>0,`${label}: no está vacío`);
  for(const bad of ['undefined','NaN','[object Object]','null<']){
    assert.equal(html.includes(bad),false,`${label}: no debería contener "${bad}"`);
  }
  for(const tag of ['div','section','button','label','svg','form','li','article','header']){
    const open=(html.match(new RegExp(`<${tag}[\\s>]`,'g'))||[]).length;
    const close=(html.match(new RegExp(`</${tag}>`,'g'))||[]).length;
    assert.equal(open,close,`${label}: etiquetas <${tag}> equilibradas (${open} vs ${close})`);
  }
}

test('mar: panel, compositor y fichas se dibujan con datos reales', () => {
  const thoughts=[bottle(),bottle({id:'b2',status:'returned',returnedAt:'2026-09-15',seen:false}),bottle({id:'b3',status:'lost',returns:false,arriveOn:'2026-09-10',lostOn:'2026-09-20'})];
  sane(seaPanel(thoughts,TODAY),'seaPanel');
  sane(seaPanel([],TODAY),'seaPanel vacío');
  sane(bottleComposer(setup,TODAY,{text:'borrador',mood:3,sea:'deep'}),'bottleComposer');
  for(const b of thoughts)sane(bottleCard(b,TODAY,1),'bottleCard');
  sane(bottleModal(thoughts[1],TODAY,setup),'bottleModal (orilla)');
  sane(bottleModal(thoughts[0],TODAY,setup),'bottleModal (a la deriva)');
  sane(bottleModal(thoughts[2],TODAY,setup),'bottleModal (perdida)');
  sane(oceanLedger(thoughts,TODAY),'oceanLedger');
  sane(shoreTeaser(thoughts,TODAY),'shoreTeaser con llegada');
  sane(shoreTeaser([],TODAY),'shoreTeaser vacío');
  sane(emptySea(),'emptySea');
  sane(bottleGlyph(bottle()),'bottleGlyph');
  sane(wavesSvg(3),'wavesSvg');
});

test('mar: el compositor respeta el borrador y las mareas disponibles', () => {
  const html=bottleComposer(setup,TODAY,{text:'un pensamiento pendiente',mood:4,sea:'current'});
  assert.match(html,/un pensamiento pendiente/);
  assert.match(html,/name="sea" value="current"[^>]*checked/);
  assert.match(html,/>3 palabras</);
  for(const sea of ['shore','breeze','current','deep'])assert.ok(html.includes(`value="${sea}"`),`falta el mar ${sea}`);
});

test('mar: las botellas abiertas ofrecen responder, anclar o copiar al cuaderno', () => {
  const html=bottleModal(bottle({status:'returned',returnedAt:'2026-09-20'}),TODAY,setup);
  assert.match(html,/data-modal="reply"/);
  assert.match(html,/data-modal="to-entry"/);
  assert.match(html,/data-modal="keep"/);
  assert.equal(html.includes('data-modal="recall"'),false,'una botella ya en la orilla no se trae otra vez');
  const replied=bottleModal(bottle({status:'returned',returnedAt:'2026-09-20',reply:'Tranquilo, pasa enseguida.'}),TODAY,setup);
  assert.match(replied,/Tranquilo, pasa enseguida/);
  assert.match(replied,/data-modal="reply-clear"/);
});

test('rutina: tablero, rejilla y contadores se dibujan sin romperse', () => {
  sane(habitBoard(habits,entries[1],entries,TODAY,TODAY),'habitBoard');
  sane(habitBoard(habits,undefined,entries,TODAY,TODAY),'habitBoard sin entrada');
  assert.equal(habitBoard([],null,entries,TODAY,TODAY),'','sin hábitos no se pinta tablero');
  sane(momentumGrid(entries,habits,{days:28,end:TODAY}),'momentumGrid');
  sane(habitStatsList(habits,entries,TODAY),'habitStatsList');
  sane(habitComposer({suggestedHabits:['Caminar','Dormir pronto']},habits),'habitComposer');
  sane(countersBoard(entries[0],setup,[]),'countersBoard');
  sane(tomorrowBoard(entries[0],TODAY),'tomorrowBoard');
  sane(routineTeaser(habits,entries[0],entries,TODAY),'routineTeaser');
  sane(progressRing(60,'60%','hoy'),'progressRing');
  sane(counterSteppers(entries[0].counters,COUNTERS,setup,{action:'routine-counter'}),'contadores con prefijo');
});

test('rutina: los botones llevan la acción y el día correctos', () => {
  const board=habitBoard(habits,entries[0],entries,'2026-09-29',TODAY);
  assert.match(board,/data-action="toggle-habit" data-habit="h1" data-date="2026-09-29"/);
  assert.match(board,/aria-pressed="true"/);
  assert.match(board,/aria-pressed="false"/);
  const grid=momentumGrid(entries,habits,{days:7,end:'2026-10-03',today:TODAY});
  assert.match(grid,/data-action="toggle-habit"/);
  assert.match(grid,/is-future/, 'los días futuros salen marcados');
  assert.match(tomorrowBoard(entries[0]),/Repasar tema/);
  assert.match(tomorrowBoard(entries[0]),/id="routine-goals"/);
});
