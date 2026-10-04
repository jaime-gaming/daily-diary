import test from 'node:test';
import assert from 'node:assert/strict';
const store=new Map();
globalThis.localStorage={
  getItem:k=>store.has(k)?store.get(k):null,
  setItem:(k,v)=>store.set(k,String(v)),
  removeItem:k=>store.delete(k)
};
const {
  loadThoughts,saveThought,updateThought,deleteThought,recastThought,validateThought,
  loadEntries,saveEntry,exportData,parseImport,importData,clearEntries
} = await import('../src/utils/storage.js');
const {dateKey,addDays}=await import('../src/utils/dates.js');
const {tideInfo}=await import('../src/utils/ocean.js');

const entry=(date,extra={})=>({
  date,mood:4,sleepHours:7,studyHours:1,bestOfDay:'',differentToday:'',generalDay:'Bien.',
  gratitude:['','',''],tomorrow:'',goals:[],...extra
});

test('pensamientos: validar y guardar una botella', () => {
  const today=dateKey();
  const list=saveThought({id:'p1',text:'Quiero aprender a navegar.',mood:3,sea:'breeze',castAt:today});
  assert.equal(list.length,1);
  const b=list[0];
  assert.equal(b.text,'Quiero aprender a navegar.');
  assert.equal(b.mood,3);
  assert.equal(b.sea,'breeze');
  assert.equal(b.status,'drifting');
  assert.ok(b.id);
  assert.ok(Number.isInteger(b.driftDays)&&b.driftDays>=1);
  assert.ok(b.arriveOn>=today,'tarda al menos hasta hoy');
  assert.ok(b.current&&b.current.length>0);
  assert.equal(b.kept,false);
  assert.equal(loadThoughts()[0].id,'p1');
});

test('pensamientos: rechaza textos vacíos y fechas futuras', () => {
  assert.throws(()=>validateThought({text:'   '}),/Escribe un pensamiento/);
  const far=dateKey(new Date(Date.now()+9*86400000));
  assert.equal(validateThought({text:'Prueba',castAt:far}).castAt,dateKey(),'la fecha futura se trae a hoy');
  assert.equal(validateThought({text:'Prueba',mood:9}).mood,null);
  assert.equal(validateThought({text:'Prueba',sea:'marte'}).sea,'breeze');
  assert.equal(validateThought({text:'x'.repeat(2000)}).text.length,1200);
});

test('pensamientos: el viaje no se recalcula al releer', () => {
  const before=loadThoughts().find(t=>t.id==='p1');
  saveThought({id:'p1',text:'Quiero aprender a navegar.',mood:5,sea:'deep',castAt:dateKey()});
  const after=loadThoughts().find(t=>t.id==='p1');
  assert.equal(after.text,'Quiero aprender a navegar.');
  assert.equal(after.mood,5);
  assert.equal(after.sea,'breeze','el mar elegido el día del lanzamiento es parte del sorteo');
  assert.equal(after.arriveOn,before.arriveOn,'la travesía sorteada no se rehace');
  assert.equal(after.driftDays,before.driftDays);
});

test('pensamientos: traer a la orilla, responder y volver a lanzar', () => {
  const updated=updateThought('p1',{status:'returned',returnedAt:dateKey(),reply:'Pues apunta y empieza.'});
  const b=updated.find(t=>t.id==='p1');
  assert.equal(b.status,'returned');
  assert.equal(b.reply,'Pues apunta y empieza.');
  const back=recastThought('p1');
  const again=back.find(t=>t.id==='p1');
  assert.equal(again.status,'drifting');
  assert.equal(again.reply,'');
  assert.ok(again.arriveOn>=dateKey());
  assert.equal(again.returnedAt,null);
  assert.equal(again.kept,false);
});

test('pensamientos: el mar reparte lo que toca al abrir el cuaderno', () => {
  const today=dateKey();
  saveThought({id:'vuelta',text:'Esto debería volver ya.',sea:'shore',castAt:addDays(today,-30),
    returns:true,driftDays:12,arriveOn:addDays(today,-18)});
  const list=loadThoughts();
  const b=list.find(t=>t.id==='vuelta');
  assert.equal(b.status,'returned');
  assert.equal(b.returnedAt,addDays(today,-18));
  const doomed=saveThought({id:'hundida',text:'Esta se perdió.',sea:'deep',castAt:addDays(today,-200),
    returns:false,driftDays:90,arriveOn:addDays(today,-110),lostOn:addDays(today,-60)});
  assert.equal(doomed.find(t=>t.id==='hundida').status,'lost');
});

test('pensamientos: borrar', () => {
  const list=deleteThought('p1');
  assert.equal(list.some(t=>t.id==='p1'),false);
});

test('copia de seguridad: ida y vuelta con los pensamientos', () => {
  saveThought({id:'copia',text:'Un pensamiento a salvo.',sea:'current',castAt:dateKey()});
  saveEntry(entry(dateKey()));
  const json=exportData(loadEntries(),[],{});
  const parsed=JSON.parse(json);
  assert.ok(Array.isArray(parsed.thoughts));
  assert.ok(parsed.thoughts.some(t=>t.id==='copia'));
  const imported=parseImport(json);
  assert.ok(imported.thoughts.length>=1);
  clearEntries();
  assert.equal(loadThoughts().length,0);
  assert.equal(importData(imported).length,1);
  assert.equal(loadThoughts().some(t=>t.id==='copia'),true);
});

test('importar una copia antigua (sin pensamientos) no rompe', () => {
  const legacy=JSON.stringify({app:'diario',version:1,exportedAt:new Date().toISOString(),entries:[entry('2026-01-04')],habits:[]});
  const parsed=parseImport(legacy);
  assert.deepEqual(parsed.thoughts,[]);
  assert.equal(parsed.entries.length,1);
});
