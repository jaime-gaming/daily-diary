import test from 'node:test';
import assert from 'node:assert/strict';
import {
  seaPanel,bottleComposer,bottleCard,bottleModal,bottleCountOnly,shoreTeaser,emptySea,bottleGlyph,wavesSvg,
  castSplash,tideRule,islandSceneSvg,castSplashPoint
} from '../src/components/ocean.js';
import {habitBoard,momentumGrid,habitStatsList,habitComposer,countersBoard,tomorrowBoard,routineTeaser,progressRing} from '../src/components/habits.js';
import {counterSteppers,setupWizardModal} from '../src/components/ui.js';
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
  for(const tag of ['div','section','button','label','svg','g','form','li','article','header']){
    const open=(html.match(new RegExp(`<${tag}[\\s>]`,'g'))||[]).length;
    const close=(html.match(new RegExp(`</${tag}>`,'g'))||[]).length;
    assert.equal(open,close,`${label}: etiquetas <${tag}> equilibradas (${open} vs ${close})`);
  }
}

test('el asistente obligatorio no ofrece cierre ni aplazamiento', () => {
  const mandatory=setupWizardModal(setup,habits,1,true);
  const optional=setupWizardModal(setup,habits,1,false);
  assert.match(mandatory,/setup-wizard-modal is-mandatory/);
  assert.doesNotMatch(mandatory,/data-modal="close"/);
  assert.match(mandatory,/data-wizard="next"/);
  assert.match(optional,/data-modal="close"/);
});

test('el sol aparece en el punto que corresponde a la hora local', () => {
  const atNoon=new Date(2026,5,21,12,0);
  const html=seaPanel([],TODAY,atNoon);
  assert.match(html,/data-dayphase="day"/);
  assert.match(html,/--sun-x:50%/);
  assert.match(html,/--sun-y:40%/);
});

test('Pensamientos: la isla recupera sus formas de escena y olas', () => {
  const scene=islandSceneSvg();
  sane(scene,'islandSceneSvg');
  assert.match(scene,/thoughts-island-scenery/);
  assert.match(scene,/scene-palm-crown/);
  assert.match(scene,/scene-island-shoreline/);
  assert.match(scene,/scene-island-reef/);
  assert.match(scene,/scene-island-path/);
  assert.match(scene,/scene-house-wall/);
  assert.match(scene,/scene-house-window-glass/);
  assert.match(scene,/scene-island-beach/);
  assert.equal((scene.match(/class="scene-palm scene-palm-/g)||[]).length,2,'la isla tiene dos palmeras');
  assert.doesNotMatch(scene,/data-id=|<text/i);
});

test('Pensamientos: el cielo nocturno y la marea se leen en el encabezado', () => {
  const html=seaPanel([bottle({arriveOn:'2026-10-15'})],TODAY,new Date(2026,5,21,21,30));
  assert.match(html,/data-dayphase="night"/);
  assert.match(html,/Un lugar para soltar/);
  assert.match(html,/1 botella en camino/);
  assert.match(html,/data-bottle-state="sent"/);
  assert.match(html,/thoughts-cloud-left/);
  assert.match(html,/thoughts-cloud-right/);
  assert.match(html,/thoughts-moon/);
  assert.match(html,/thoughts-moon-crescent/);
  assert.doesNotMatch(html,/thoughts-moon-cutout/);
  assert.match(html,/thoughts-water-reflection/);
  assert.match(html,/data-tide="(spring|neap|rising|falling|swell)"/);
  assert.match(html,/thoughts-tide-status/);
  assert.match(html,/role="meter" aria-label="Intensidad de la marea"/);
  assert.match(html,/thoughts-hero-meta/);
  assert.doesNotMatch(html,/Bajar a la isla|thoughts-stage-actions/);
});

test('mar: panel, compositor y fichas se dibujan con datos reales', () => {
  const thoughts=[bottle({arriveOn:'2026-10-15'}),bottle({id:'b2',status:'returned',returnedAt:'2026-09-15',seen:false}),bottle({id:'b3',status:'lost',returns:false,arriveOn:'2026-09-10',lostOn:'2026-09-20'})];
  sane(seaPanel(thoughts,TODAY),'seaPanel');
  sane(seaPanel([],TODAY),'seaPanel vacío');
  const activePanel=seaPanel([bottle({arriveOn:'2026-10-15'})],TODAY);
  assert.match(activePanel,/1 botella en camino/);
  assert.match(activePanel,/data-bottle-state="sent"/);
  assert.doesNotMatch(activePanel,/vault-fleet|vault-float|bottle-glyph/,'las botellas en deriva no aparecen en la escena');
  const arrivalPanel=seaPanel([bottle({status:'returned',returnedAt:TODAY,seen:false})],TODAY);
  assert.match(arrivalPanel,/data-bottle-state="unread"/);
  assert.match(arrivalPanel,/vault-arrival is-new is-washing/);
  assert.match(arrivalPanel,/aria-label="Abrir botella nueva recibida"/);
  const lostPanel=seaPanel([bottle({status:'lost',returns:false,lostOn:TODAY})],TODAY);
  assert.match(lostPanel,/data-bottle-state="lost"/);
  assert.match(lostPanel,/1 botella perdida/);
  sane(bottleComposer(setup,TODAY,{text:'borrador',mood:3,sea:'deep'}),'bottleComposer');
  for(const b of thoughts)sane(bottleCard(b,TODAY,1),'bottleCard');
  sane(bottleModal(thoughts[1],TODAY,setup),'bottleModal (de vuelta)');
  assert.equal(bottleModal(thoughts[0],TODAY,setup),'','no se puede abrir mientras va en camino');
  assert.equal(bottleModal(thoughts[2],TODAY,setup),'','no se puede abrir una botella perdida');
  sane(shoreTeaser(thoughts,TODAY),'shoreTeaser con llegada');
  sane(shoreTeaser([],TODAY),'shoreTeaser vacío');
  sane(emptySea(),'emptySea');
  sane(bottleGlyph(bottle()),'bottleGlyph');
  const waves=wavesSvg(3);
  sane(waves,'wavesSvg');
  assert.match(waves,/viewBox="0 0 1440 180"/);
  assert.match(waves,/wave-line-surface/);
  assert.equal((waves.match(/class="thoughts-wave-line/g)||[]).length,3,'tres líneas suaves definen el oleaje');
  const roughWaves=wavesSvg(3,1);
  assert.match(roughWaves,/--wave-dur:6\.4s/);
  assert.notEqual(roughWaves,waves,'el oleaje responde al estado del mar');
  const landing=castSplashPoint(bottle());
  assert.deepEqual(landing,castSplashPoint(bottle()),'el punto de chapuzón es estable');
  assert.ok((landing.x>=8&&landing.x<=21)||(landing.x>=79&&landing.x<=92));
  assert.ok(landing.depth>=13&&landing.depth<=20);
});

test('Enviadas y pérdidas muestran solo el total visible', () => {
  const sent=bottleCountOnly(3,'sent');
  const lost=bottleCountOnly(1,'lost');
  assert.match(sent,/aria-label="3 botellas enviadas">3<\/p>/);
  assert.match(lost,/aria-label="1 botella perdida">1<\/p>/);
  assert.equal(bottleCountOnly(0,'lost').endsWith('>0</p>'),true);
  assert.doesNotMatch(sent,/>[^<]*(?:botella|enviada)/i);
});

test('mar: el compositor es breve y no anticipa el regreso', () => {
  const html=bottleComposer(setup,TODAY,{text:'un pensamiento pendiente',mood:4,sea:'current'});
  assert.match(html,/un pensamiento pendiente/);
  assert.match(html,/name="mood" value="4" checked/);
  assert.match(html,/type="range" name="force" min="1" max="5" step="1" value="3"/);
  assert.match(html,/Fuerza/);
  assert.match(html,/Lanzar botella<\/button>/);
  assert.doesNotMatch(html,/name="sea"|sea-picker|arriveOn|regresará|volverá|vuelve en/);
});

test('mar: las botellas abiertas ofrecen responder, anclar o copiar al cuaderno', () => {
  const html=bottleModal(bottle({status:'returned',returnedAt:'2026-09-20'}),TODAY,setup);
  assert.match(html,/<p class="tale">Recibida<\/p>/);
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

test('las botellas en camino no revelan contenido ni fecha de vuelta', () => {
  const secret='mensaje reservado que no debe verse';
  const bottles=[
    bottle({text:secret,reply:'respuesta reservada'}),
    bottle({id:'b2',status:'returned',returnedAt:'2026-09-28',seen:false,arriveOn:'2026-09-28'}),
    bottle({id:'b3',text:'otro texto privado',arriveOn:'2026-10-03',castAt:'2026-09-05',driftDays:28})
  ];
  sane(seaPanel(bottles,TODAY),'el panel de pensamientos');
  sane(seaPanel([],TODAY),'el panel vacío');
  sane(castSplash(bottle()),'el chapuzón');
  sane(tideRule(),'la regla de marea');
  sane(bottleComposer(setup,TODAY,{text:'algo escrito',mood:3}),'el compositor');
  sane(bottleModal(bottle({status:'returned',returnedAt:'2026-09-20',replyDraft:'Respuesta a medias'}),TODAY,setup),'la respuesta recuperada');
  sane(shoreTeaser(bottles),'el resumen de pensamientos');
  for(const tab of ['shore','sea','kept','lost','raro'])sane(emptySea(tab),`estado vacío (${tab})`);

  const panel=seaPanel(bottles,TODAY);
  assert.match(panel,/thought-vault/);
  assert.doesNotMatch(panel,/mensaje reservado|respuesta reservada|otro texto privado|2026-10-03/);

  const locked=bottle({text:secret,reply:'respuesta reservada',kept:true,castAt:'2026-09-26',arriveOn:'2026-10-14',driftDays:18});
  const card=bottleCard(locked,TODAY);
  assert.match(card,/<article class="card bottle-card[^>]*is-locked/);
  assert.match(card,/En camino/);
  assert.match(card,/Enviada/);
  assert.match(card,/bottle-lock-mark/);
  assert.doesNotMatch(card,/mensaje reservado|respuesta reservada|2026-10-14|data-action="open-bottle"/);
  assert.equal(bottleModal(locked,TODAY,setup),'','ni la ruta directa abre una botella que deriva');

  const back=bottleCard(bottle({status:'returned',returnedAt:'2026-09-20',seen:false}),TODAY);
  assert.match(back,/is-unread/);
  assert.match(back,/Nueva · recibida/);
  assert.match(back,/data-action="open-bottle"/);
  assert.match(back,/Hoy no sé qué hago aquí/);
  const lost=bottleCard(bottle({status:'lost',returns:false,lostOn:'2026-09-20'}),TODAY);
  assert.match(lost,/Perdida/);
  assert.doesNotMatch(lost,/Hoy no sé qué hago aquí|data-action="open-bottle"/);
  assert.match(lost,/recast-bottle/,'las perdidas se pueden volver a lanzar');
  assert.ok(bottleComposer(setup,TODAY,{text:''}).includes('disabled'),'sin texto, el botón de soltar queda apagado');
});

test('la fila de tarea de mañana se puede pintar sin pasar por el almacén', async () => {
  const {tomorrowTaskRow}=await import('../src/components/habits.js');
  const row=tomorrowTaskRow(2,'Regar las plantas');
  assert.match(row,/data-index="2"/);
  assert.match(row,/value="Regar las plantas"/);
  assert.match(row,/data-action="remove-goal-routine"/);
  assert.match(row,/Tarea 3/,'el número que ve la persona empieza en 1');
  const empty=tomorrowTaskRow(0);
  assert.match(empty,/value=""/);
});
