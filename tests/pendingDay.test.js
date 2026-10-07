import test from 'node:test';
import assert from 'node:assert/strict';

/* Almacén de mentira, con la posibilidad de provocar fallos. */
const store=new Map();
let failure=null;
globalThis.localStorage={
  getItem:k=>store.has(k)?store.get(k):null,
  setItem:(k,v)=>{const err=failure?.(k,String(v));if(err)throw err;store.set(k,String(v));},
  removeItem:k=>{const err=failure?.(k,null);if(err)throw err;store.delete(k);}
};

const {
  PENDING_DAY_KEY,MAX_PENDING_DAYS,loadPendingDays,pendingDayDates,dayPatch,setDayPatch,
  clearDayPatch,clearAllDayPatches,pendingDaysSnapshot,mergePendingDays,patchHasContent,
  patchIsRedundant,emptyDay,mergeDay,isDateKey
}=await import('../src/utils/pendingDay.js');
const {clearPendingWrites,safeRead,retryPending,hasPendingWrites}=await import('../src/utils/persist.js');
const {exportData,parseImport,importData,loadEntries,validateEntry,clearEntries,saveEntry,loadSetup}=await import('../src/utils/storage.js');

const quota=()=>{const e=new Error('QuotaExceededError: the quota has been exceeded.');e.name='QuotaExceededError';return e;};
const fresh=()=>{store.clear();failure=null;clearPendingWrites();};
const entry=(date,extra={})=>({
  date,mood:4,sleepHours:7,studyHours:1,generalDay:'Un día tranquilo.',
  gratitude:['','',''],tags:[],counters:{},habits:{},...extra
});

test('el día se ve completo: lo guardado y lo pendiente, sin pisarse',()=>{
  const saved=entry('2026-10-05',{generalDay:'Lo escrito ayer',counters:{water:2},habits:{h1:true}});
  const merged=mergeDay('2026-10-05',saved,{counters:{water:5},tomorrow:'Repasar tema'});
  assert.equal(merged.generalDay,'Lo escrito ayer','el texto guardado se respeta');
  assert.equal(merged.counters.water,5,'la cifra pendiente manda');
  assert.equal(merged.habits.h1,true,'lo que no se toca sigue ahí');
  assert.equal(merged.tomorrow,'Repasar tema');
  assert.equal(merged.pending,true);
  assert.equal(saved.counters.water,2,'la entrada original no se muta');
});

test('un cambio pendiente puede borrar: la cadena vacía es un cambio de verdad',()=>{
  const saved=entry('2026-10-05',{tomorrow:'Algo viejo',parts:{p_1:'texto'},gratitude:['a','b','c']});
  const merged=mergeDay('2026-10-05',saved,{tomorrow:'',parts:{p_1:'',p_2:'nuevo'},gratitude:['solo esto','','']});
  assert.equal(merged.tomorrow,'','borrar no vuelve a traer el texto viejo');
  assert.deepEqual(merged.parts,{p_2:'nuevo'},'la parte vacía se quita y la nueva entra');
  assert.deepEqual(merged.gratitude,['solo esto','','']);
});

test('sin entrada guardada, el parche basta para pintar el día',()=>{
  const merged=mergeDay('2026-10-06',null,{habits:{h1:true},counters:{water:1}});
  assert.equal(merged.date,'2026-10-06');
  assert.equal(merged.mood,null);
  assert.equal(merged.habits.h1,true);
  assert.deepEqual(merged.gratitude,['','','']);
  assert.equal(mergeDay('2026-10-06',null,null),null,'sin nada, no hay día');
  assert.equal(mergeDay('2026-10-06',entry('2026-10-06'),null).pending,undefined,'sin parche se devuelve la entrada tal cual');
});

test('los parches se acumulan y el más nuevo manda',()=>{
  fresh();
  assert.equal(dayPatch('2026-10-05'),null);
  const first=setDayPatch('2026-10-05',{habits:{h1:true}});
  assert.equal(first.ok,true);
  setDayPatch('2026-10-05',{counters:{water:3}});
  const patch=dayPatch('2026-10-05');
  assert.deepEqual(patch.habits,{h1:true});
  assert.equal(patch.counters.water,3);
  setDayPatch('2026-10-05',{habits:{h1:false,h2:true}});
  assert.deepEqual(dayPatch('2026-10-05').habits,{h1:false,h2:true},'los hábitos se funden clave a clave');
  assert.deepEqual(pendingDayDates(),['2026-10-05']);
  assert.deepEqual(loadPendingDays()['2026-10-05'].patch,dayPatch('2026-10-05'));
});

test('un valor raro no entra, pero tampoco rompe el parche',()=>{
  fresh();
  const longKey='larga'.repeat(20);
  const result=setDayPatch('2026-10-05',{
    mood:9,sleepHours:-3,counter_raro:'x',counters:{water:4,basura:'no',otro:1e9},
    habits:{[longKey]:true,h1:true},tags:['ok','ok','  '],goals:['leer','']
  });
  const patch=result.patch;
  assert.equal(patch.mood,undefined);
  assert.equal(patch.sleepHours,undefined);
  assert.deepEqual(patch.counters,{water:4});
  assert.deepEqual(patch.habits,{h1:true});
  assert.deepEqual(patch.tags,['ok']);
  assert.deepEqual(patch.goals,['leer']);
  assert.equal(setDayPatch('2026-10-05',{nada:'esto no existe'}),null,'sin nada válido no se escribe');
  assert.equal(setDayPatch('05-10-2026',{generalDay:'x'}),null,'una fecha que no es fecha no se escribe');
});

test('descartar un día pendiente lo quita del almacén',()=>{
  fresh();
  setDayPatch('2026-10-05',{habits:{h1:true}});
  setDayPatch('2026-10-06',{generalDay:'algo'});
  assert.equal(clearDayPatch('2026-10-05'),true);
  assert.equal(dayPatch('2026-10-05'),null);
  assert.equal(clearDayPatch('2026-10-05'),false);
  assert.equal(patchHasContent(dayPatch('2026-10-06')),true);
  assert.equal(clearAllDayPatches(),true);
  assert.deepEqual(pendingDayDates(),[]);
});

test('un JSON corrupto equivale a «no hay cambios pendientes»',()=>{
  fresh();
  store.set(PENDING_DAY_KEY,'{ esto no es json');
  assert.deepEqual(loadPendingDays(),{});
  assert.equal(dayPatch('2026-10-05'),null);
  assert.ok(setDayPatch('2026-10-05',{generalDay:'recuperado'}));
  assert.equal(dayPatch('2026-10-05').generalDay,'recuperado');
});

test('si el almacén está lleno, el día que acabas de tocar sobrevive',()=>{
  fresh();
  for(let i=1;i<=8;i++)setDayPatch(`2026-09-${String(i).padStart(2,'0')}`,{generalDay:`texto ${i}`});
  failure=(key,value)=>key===PENDING_DAY_KEY&&value&&value.length>400?quota():null;
  const result=setDayPatch('2026-10-01',{generalDay:'lo de ahora'});
  assert.ok(result,'el día nuevo se acepta');
  assert.equal(result.ok,true,'y se hace sitio sacrificando los viejos');
  assert.equal(dayPatch('2026-10-01').generalDay,'lo de ahora');
  assert.ok(pendingDayDates().length<8);
});

test('el parche que no cabe ni recortando queda pendiente de reintento',()=>{
  fresh();
  failure=()=>quota();
  const result=setDayPatch('2026-10-01',{habits:{h1:true}});
  assert.equal(result.ok,false);
  assert.equal(result.reason,'full');
  failure=null;
  assert.equal(hasPendingWrites(),true);
  retryPending();
  assert.deepEqual(dayPatch('2026-10-01').habits,{h1:true});
});

test('la lista de días pendientes no crece sin freno y conserva el último',()=>{
  fresh();
  for(let i=1;i<=MAX_PENDING_DAYS+5;i++){
    const date=`2026-${i<29?'02':'03'}-${String((i%28)+1).padStart(2,'0')}`;
    setDayPatch(date,{generalDay:`texto ${i}`});
  }
  const dates=pendingDayDates();
  assert.ok(dates.length<=MAX_PENDING_DAYS,`la lista se recorta (${dates.length})`);
  const last=`2026-03-${String(((MAX_PENDING_DAYS+5)%28)+1).padStart(2,'0')}`;
  assert.equal(dayPatch(last).generalDay,`texto ${MAX_PENDING_DAYS+5}`,'el último día tocado sigue ahí');
});

test('al importar, de cada día gana el parche más reciente',()=>{
  fresh();
  setDayPatch('2026-10-05',{generalDay:'lo de este dispositivo'});
  const merged=mergePendingDays({
    '2026-10-05':{patch:{generalDay:'lo viejo'},savedAt:'2020-01-01T00:00:00.000Z'},
    '2026-10-06':{patch:{habits:{h1:true}},savedAt:new Date().toISOString()}
  });
  assert.equal(merged.ok,true);
  assert.equal(dayPatch('2026-10-05').generalDay,'lo de este dispositivo');
  assert.deepEqual(dayPatch('2026-10-06').habits,{h1:true});
  assert.deepEqual(mergePendingDays({'nada':{patch:{generalDay:'x'}}}).changed,false,'lo que no es un día no entra');
});

test('la copia de seguridad se lleva también los días a medias',()=>{
  fresh();
  saveEntry(validateEntry(entry('2026-10-04')));
  setDayPatch('2026-10-05',{habits:{h1:true},counters:{water:3,exercise:0}});
  const json=exportData(loadEntries(),undefined,loadSetup());
  const parsed=JSON.parse(json);
  assert.ok(parsed.pendingDays);
  assert.equal(parsed.pendingDays['2026-10-05'].patch.counters.water,3);
  const imported=parseImport(json);
  assert.ok(imported.pendingDays);
  clearAllDayPatches();
  importData(imported);
  assert.deepEqual(dayPatch('2026-10-05').habits,{h1:true});
});

test('borrar el cuaderno entero se lleva los cambios pendientes',()=>{
  fresh();
  saveEntry(validateEntry(entry('2026-10-04')));
  setDayPatch('2026-10-05',{generalDay:'a medias'});
  clearEntries();
  assert.equal(safeRead(PENDING_DAY_KEY),null);
  assert.deepEqual(pendingDayDates(),[]);
});

test('isDateKey y emptyDay son predecibles',()=>{
  assert.equal(isDateKey('2026-10-05'),true);
  assert.equal(isDateKey('2026-1-5'),false);
  assert.equal(isDateKey(new Date()),false);
  const day=emptyDay('2026-10-05');
  assert.deepEqual(Object.keys(day).sort(),[...Object.keys(day)].sort());
  assert.deepEqual(day.gratitude,['','','']);
  assert.equal(day.pending,true);
});

test('borrar, poner a cero o desmarcar son cambios: se pueden guardar',()=>{
  const saved=entry('2026-10-05',{tomorrow:'Algo viejo',counters:{water:5},habits:{h1:true},parts:{p_1:'texto'}});
  /* el parche apunta algo aunque el valor sea vacío, cero o falso */
  assert.equal(patchHasContent({tomorrow:''}),true);
  assert.equal(patchHasContent({counters:{water:0}}),true);
  assert.equal(patchHasContent({habits:{h1:false}}),true);
  assert.equal(patchHasContent({goals:[]}),true);
  assert.equal(patchHasContent({}),false);
  /* y solo es redundante si de verdad no cambia nada respecto a lo guardado */
  assert.equal(patchIsRedundant(saved,{tomorrow:''}),false,'borrar el texto es un cambio');
  assert.equal(patchIsRedundant(saved,{tomorrow:'Algo viejo'}),true,'repetir lo que ya hay no lo es');
  assert.equal(patchIsRedundant(saved,{counters:{water:0}}),false,'poner el contador a cero es un cambio');
  assert.equal(patchIsRedundant(saved,{counters:{water:5}}),true);
  assert.equal(patchIsRedundant(saved,{habits:{h1:false}}),false,'desmarcar es un cambio');
  assert.equal(patchIsRedundant(saved,{habits:{h1:true}}),true);
  assert.equal(patchIsRedundant(saved,{parts:{p_1:''}}),false,'vaciar una parte es un cambio');
  assert.equal(patchIsRedundant(saved,{parts:{p_1:'texto'}}),true);
  assert.equal(patchIsRedundant(saved,{goals:['Otra cosa']}),false);
  assert.equal(patchIsRedundant(saved,{goals:[]}),true,'una lista que ya estaba vacía no cambia nada');
  assert.equal(patchIsRedundant(null,{habits:{h1:true}}),false,'sin entrada guardada, tocar algo es un cambio');
  assert.equal(patchIsRedundant(null,null),true);
  /* y el parche real se comporta igual cuando pasa por el almacén */
  fresh();
  setDayPatch('2026-10-05',{counters:{water:0},habits:{h1:false},tomorrow:''});
  const patch=dayPatch('2026-10-05');
  assert.equal(patch.counters.water,0,'un cero es un dato, no un hueco');
  assert.equal(patch.habits.h1,false);
  assert.equal(patch.tomorrow,'');
  assert.equal(patchIsRedundant(saved,patch),false);
});
