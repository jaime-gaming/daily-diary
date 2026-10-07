import test from 'node:test';
import assert from 'node:assert/strict';

/* Un almacén de mentira al que se le puede pedir que falle. */
const store=new Map();
let failure=null;              // (key,value) => Error | null
globalThis.localStorage={
  getItem:k=>store.has(k)?store.get(k):null,
  setItem:(k,v)=>{const err=failure?.(k,String(v));if(err)throw err;store.set(k,String(v));},
  removeItem:k=>{const err=failure?.(k,null);if(err)throw err;store.delete(k);},
  key:i=>[...store.keys()][i]??null,
  get length(){return store.size;}
};
const {
  writeRaw,safeRead,safeRemove,storageAvailable,describeReason,saveIssue,pendingWriteCount,
  hasPendingWrites,retryPending,dropPendingWrite,clearPendingWrites,onSaveChange
}=await import('../src/utils/persist.js');
const RESCUE_KEY='diario.pendiente.v1';
const {
  DRAFTS_KEY,setDraft,draftData,getDraft,listDrafts,DRAFT_SCOPES,draftsSnapshot,mergeDrafts,
  clearAllDrafts,MAX_SCOPES,draftTitle
}=await import('../src/utils/drafts.js');
const {exportData,parseImport,importData,loadEntries,saveEntry,saveSetup,loadSetup,validateEntry,clearEntries}=await import('../src/utils/storage.js');

const quota=()=>{const e=new Error('QuotaExceededError: the quota has been exceeded.');e.name='QuotaExceededError';return e;};
const blocked=()=>{const e=new Error('The operation is insecure.');e.name='SecurityError';return e;};
const fresh=()=>{store.clear();failure=null;clearPendingWrites();};
const entry=date=>({date,mood:4,sleepHours:7,studyHours:1,generalDay:'Un día tranquilo.',gratitude:['','',''],tags:[],counters:{},habits:{}});

test('una escritura correcta se verifica y no deja nada pendiente',()=>{
  fresh();
  const result=writeRaw('diario.prueba.v1','hola',{label:'La prueba'});
  assert.deepEqual(result,{ok:true});
  assert.equal(safeRead('diario.prueba.v1'),'hola');
  assert.equal(hasPendingWrites(),false);
  assert.equal(saveIssue(),null);
});

test('si el navegador rechaza la escritura, se queda en cola y se puede reintentar',()=>{
  fresh();
  failure=(key)=>key==='diario.prueba.v1'?quota():null;
  const failed=writeRaw('diario.prueba.v1','contenido importante',{label:'La prueba'});
  assert.equal(failed.ok,false);
  assert.equal(failed.reason,'full');
  assert.equal(failed.queued,true);
  assert.match(failed.message,/La prueba/);
  assert.equal(hasPendingWrites(),true);
  assert.equal(pendingWriteCount(),1);
  /* El navegador respira: se recupera sola. */
  failure=null;
  const retried=retryPending();
  assert.equal(retried.ok,true);
  assert.equal(retried.recovered,1);
  assert.equal(safeRead('diario.prueba.v1'),'contenido importante');
  assert.equal(saveIssue(),null);
});

test('el motivo del fallo se cuenta en castellano y sin jerga',()=>{
  assert.match(describeReason('full'),/lleno/);
  assert.match(describeReason('blocked'),/bloqueado/);
  assert.match(describeReason('unknown'),/no ha podido guardar/);
  fresh();
  failure=()=>blocked();
  writeRaw('diario.prueba.v1','x',{label:'El perfil'});
  assert.equal(saveIssue().reason,'blocked');
  assert.match(saveIssue().message,/El perfil/);
});

test('una escritura que no llega a su sitio cuenta como fallo, aunque no lance',()=>{
  fresh();
  const original=localStorage.getItem;
  localStorage.getItem=key=>key==='diario.trampa.v1'?null:original(key);
  const result=writeRaw('diario.trampa.v1','x',{label:'La trampa'});
  localStorage.getItem=original;
  assert.equal(result.ok,false,'se comprueba lo escrito, no solo que no lance');
  assert.equal(hasPendingWrites(),true);
  clearPendingWrites();
});

test('se puede descartar una escritura concreta (deshacer un import)',()=>{
  fresh();
  failure=()=>quota();
  writeRaw('diario.a.v1','1');
  writeRaw('diario.b.v1','2');
  assert.equal(pendingWriteCount(),2);
  failure=null;
  assert.equal(dropPendingWrite('diario.a.v1'),true);
  assert.equal(pendingWriteCount(),1);
  retryPending();
  assert.equal(safeRead('diario.b.v1'),'2');
  assert.equal(safeRead('diario.a.v1'),null);
});

test('los avisos llegan a quien los escucha',()=>{
  fresh();
  const seen=[];
  const stop=onSaveChange(state=>seen.push(state.pending));
  failure=()=>quota();
  writeRaw('diario.prueba.v1','x');
  failure=null;
  retryPending();
  stop();
  assert.deepEqual(seen,[1,0]);
});

test('un borrador no se pierde aunque el almacén esté lleno: se sacrifican los viejos',()=>{
  fresh();
  for(let i=0;i<6;i++){
    setDraft(`entrada:2026-01-0${i+1}`,{generalDay:`texto ${i}`});
  }
  /* A partir de aquí solo cabe un borrador pequeño: el nuevo tiene que
     sobrevivir igual, aunque se sacrifiquen los viejos. */
  failure=(key,value)=>key===DRAFTS_KEY&&value&&value.length>200?quota():null;
  const meta=setDraft('entrada:2026-02-01',{generalDay:'lo que acabo de escribir '.repeat(3)});
  assert.ok(meta,'el borrador se acepta');
  assert.equal(draftData('entrada:2026-02-01').generalDay.trim(),'lo que acabo de escribir lo que acabo de escribir lo que acabo de escribir');
  assert.equal(meta.ok,true,'y al final cabe: el recorte ha hecho sitio');
  assert.ok(listDrafts().length<6,'se han ido los más viejos para dejar sitio');
});

test('un borrador que no cabe ni recortando queda en cola, nunca se pierde de vista',()=>{
  fresh();
  failure=()=>quota();
  const meta=setDraft('botella',{text:'un pensamiento importante'});
  assert.equal(meta.ok,false);
  assert.equal(meta.reason,'full');
  assert.equal(hasPendingWrites(),true,'queda pendiente de reintento');
  failure=null;
  retryPending();
  assert.equal(draftData('botella').text,'un pensamiento importante');
});

test('la cola de borradores se recorta por número pero conserva el último',()=>{
  fresh();
  const key=i=>`entrada:2026-${i<28?'03':'04'}-${String((i%28)+1).padStart(2,'0')}`;
  for(let i=0;i<MAX_SCOPES+5;i++){
    setDraft(key(i),{generalDay:`texto ${i}`});
  }
  const list=listDrafts();
  assert.ok(list.length<=MAX_SCOPES,`la lista no crece sin freno (${list.length})`);
  const last=key(MAX_SCOPES+4);
  assert.equal(draftData(last).generalDay,`texto ${MAX_SCOPES+4}`,'el último borrador escrito sigue ahí');
});

test('el asistente y el perfil tienen su propio rincón de borradores',()=>{
  fresh();
  assert.equal(DRAFT_SCOPES.wizard(),'asistente');
  assert.equal(DRAFT_SCOPES.setup(),'perfil');
  setDraft(DRAFT_SCOPES.wizard(),{name:'Ana',age:'30'});
  setDraft(DRAFT_SCOPES.setup(),{name:'Ana',motto:'Un día a la vez.'});
  assert.equal(draftData(DRAFT_SCOPES.wizard()).age,'30');
  assert.equal(draftTitle('perfil'),'Tu perfil, a medio editar');
  assert.match(draftTitle('asistente'),/bienvenida/);
  assert.match(draftTitle(`entrada:2026-10-04`),/2026|octubre/i);
  assert.match(draftTitle('respuesta:b1'),/botella/);
});

test('la copia de seguridad se lleva también lo que está a medias',()=>{
  fresh();
  saveEntry(validateEntry(entry('2026-09-30')));
  saveSetup({completed:true,name:'Jaime'});
  setDraft(`entrada:2026-10-01`,{generalDay:'a medio escribir'});
  setDraft('botella',{text:'una botella sin soltar'});
  const json=exportData(loadEntries(),undefined,loadSetup());
  const parsed=JSON.parse(json);
  assert.ok(parsed.drafts,'los borradores viajan en la copia');
  assert.equal(parsed.drafts['botella'].data.text,'una botella sin soltar');
  const imported=parseImport(json);
  assert.ok(imported.drafts);
  assert.equal(imported.drafts['entrada:2026-10-01'].data.generalDay,'a medio escribir');
});

test('al importar, de cada borrador gana el más reciente',()=>{
  fresh();
  setDraft('botella',{text:'lo de este dispositivo'});
  const older={botella:{data:{text:'lo viejo'},savedAt:'2020-01-01T00:00:00.000Z'},
    perfil:{data:{name:'Copiada'},savedAt:new Date().toISOString()}};
  const merged=mergeDrafts(older);
  assert.equal(merged.ok,true);
  assert.equal(draftData('botella').text,'lo de este dispositivo','lo de aquí era más nuevo');
  assert.equal(draftData('perfil').name,'Copiada','y lo que faltaba, entra');
  assert.equal(hasPendingWrites(),false);
});

test('importar una copia con borradores los deja escritos y no rompe nada',()=>{
  fresh();
  const copy={
    version:1,
    entries:[entry('2026-09-29')],
    habits:[],
    thoughts:[],
    drafts:{'entrada:2026-09-28':{data:{generalDay:'desde la copia'},savedAt:'2026-09-28T20:00:00.000Z'}}
  };
  const parsed=parseImport(JSON.stringify(copy));
  importData(parsed);
  assert.equal(draftData('entrada:2026-09-28').generalDay,'desde la copia');
  assert.equal(draftsSnapshot()['entrada:2026-09-28'].data.generalDay,'desde la copia');
  clearAllDrafts();
  assert.deepEqual(draftsSnapshot(),{});
});

test('borrar el cuaderno entero no deja escrituras fantasma en la cola',async ()=>{
  fresh();
  saveSetup({completed:true});
  failure=()=>quota();
  const failed=writeRaw('diario.setup.v1','{"completed":true}');
  assert.equal(failed.ok,false);
  failure=null;
  clearEntries();
  assert.equal(hasPendingWrites(),false,'ya no hay nada que reintentar');
  assert.equal(safeRead('diario.setup.v1'),null);
});

test('borrar algo a propósito no lo resucita en el siguiente reintento',()=>{
  fresh();
  failure=(key)=>key==='diario.habitos.v1'?quota():null;
  writeRaw('diario.habitos.v1','[{"name":"Leer"}]',{label:'Los hábitos'});
  assert.equal(pendingWriteCount(),1);
  failure=null;
  safeRemove('diario.habitos.v1');
  assert.equal(pendingWriteCount(),0,'sale también de la cola');
  retryPending();
  assert.equal(safeRead('diario.habitos.v1'),null,'no vuelve por la puerta de atrás');
});

test('lo que no se pudo guardar se recupera en la siguiente visita',async()=>{
  fresh();
  /* La escritura que falla es solo la del cuaderno; la copia de lo pendiente
     sí cabe (es el caso de un almacén lleno por otras cosas, no bloqueado). */
  failure=(key)=>key==='diario.entradas.v1'?quota():null;
  writeRaw('diario.entradas.v1','[{"date":"2026-01-01"}]',{label:'El cuaderno'});
  assert.equal(hasPendingWrites(),true);
  assert.match(safeRead(RESCUE_KEY)??'',/diario\.entradas\.v1/,'queda copia en el almacén');

  /* Se cierra la pestaña y se vuelve a abrir: módulo nuevo, mismo almacén. */
  failure=null;
  const next=await import('../src/utils/persist.js?visita=2');
  assert.equal(next.hasPendingWrites(),true,'la cola vuelve con la visita');
  assert.match(next.saveIssue().message,/El cuaderno/);
  const retried=next.retryPending();
  assert.equal(retried.ok,true);
  assert.equal(safeRead('diario.entradas.v1'),'[{"date":"2026-01-01"}]');
  assert.equal(safeRead(RESCUE_KEY),null,'ya no hay nada que recuperar');
  next.clearPendingWrites();
  fresh();
});
