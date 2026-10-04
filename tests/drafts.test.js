import test from 'node:test';
import assert from 'node:assert/strict';
const store=new Map();
globalThis.localStorage={
  getItem:k=>store.has(k)?store.get(k):null,
  setItem:(k,v)=>store.set(k,String(v)),
  removeItem:k=>store.delete(k)
};
const {
  DRAFTS_KEY,setDraft,getDraft,draftData,clearDraft,listDrafts,draftIsNewer,draftMinutes,
  draftSummary,pendingDrafts,clearAllDrafts,loadDrafts,DRAFT_SCOPES,cutText
}=await import('../src/utils/drafts.js');

const fresh=()=>store.clear();

test('el borrador se guarda con su hora y se vuelve a leer igual',()=>{
  fresh();
  const meta=setDraft(DRAFT_SCOPES.entry('2026-10-04'),{generalDay:'Un rato escribiendo',mood:4});
  assert.ok(meta?.savedAt,'devuelve la marca de tiempo');
  assert.equal(meta.ok,true);
  const back=draftData(DRAFT_SCOPES.entry('2026-10-04'));
  assert.equal(back.generalDay,'Un rato escribiendo');
  assert.equal(back.mood,4);
});

test('no se guardan borradores vacíos: se borra lo que hubiera',()=>{
  fresh();
  setDraft('botella',{text:'algo escrito'});
  assert.ok(getDraft('botella'));
  const meta=setDraft('botella',{text:'   \n  '});
  assert.equal(meta,null,'nada digno de guardar');
  assert.equal(getDraft('botella'),null,'y el anterior desaparece');
});

test('los textos largos se recortan y los contadores se conservan',()=>{
  fresh();
  const long='a'.repeat(9000);
  setDraft('botella',{text:long,counters:{water:5,exercise:0},tags:['uno','dos','']});
  const data=draftData('botella');
  assert.equal(data.text.length,6000,'cabe en el almacenamiento');
  assert.equal(data.counters.water,5);
  assert.equal(data.counters.exercise,0,'las cifras a cero también cuentan: un contador a cero es un dato');
  assert.deepEqual(data.tags,['uno','dos'],'las etiquetas vacías, fuera');
});

test('un JSON corrupto equivale a «no hay borradores», nunca a un error',()=>{
  fresh();
  store.set(DRAFTS_KEY,'{ esto no es json');
  assert.deepEqual(loadDrafts(),{});
  assert.equal(getDraft('botella'),null);
  assert.equal(clearDraft('botella'),false);
  /* y se puede volver a escribir encima */
  assert.ok(setDraft('botella',{text:'recuperado'}));
});

test('un borrador solo sirve si es más reciente que lo guardado',()=>{
  fresh();
  setDraft(DRAFT_SCOPES.entry('2026-10-04'),{generalDay:'a medias'});
  const draft=getDraft(DRAFT_SCOPES.entry('2026-10-04'));
  assert.equal(draftIsNewer(DRAFT_SCOPES.entry('2026-10-04'),null),true,'sin entrada guardada, siempre vale');
  const older=new Date(Date.parse(draft.savedAt)-60000).toISOString();
  const newer=new Date(Date.parse(draft.savedAt)+60000).toISOString();
  assert.equal(draftIsNewer(DRAFT_SCOPES.entry('2026-10-04'),older),true,'el borrador gana a lo viejo');
  assert.equal(draftIsNewer(DRAFT_SCOPES.entry('2026-10-04'),newer),false,'si ya está escrito, no hay que recuperar nada');
});

test('el resumen dice cuántas palabras y hace cuánto',()=>{
  fresh();
  setDraft('botella',{text:'cuatro palabras muy sueltas'});
  const summary=draftSummary('botella');
  assert.equal(summary.words,4);
  assert.equal(summary.minutes,0);
  assert.match(summary.when,/ahora mismo/);
});

test('el inventario va del más reciente al más viejo y sabe contar',()=>{
  fresh();
  setDraft(DRAFT_SCOPES.entry('2026-10-01'),{generalDay:'viejo'});
  const wait=()=>new Promise(r=>setTimeout(r,4));
  return wait().then(async()=>{
    setDraft(DRAFT_SCOPES.entry('2026-10-02'),{generalDay:'nuevo'});
    await wait();
    setDraft('botella',{text:'una botella'});
    const list=await Promise.resolve(listDrafts());
    assert.equal(list.length,3);
    assert.ok(String(list[0].savedAt)>=String(list[1].savedAt),'orden por hora');
    const pend=pendingDrafts();
    assert.equal(pend.total,3);
    assert.equal(pend.entries,2);
    assert.equal(pend.bottles,1);
  });
});

test('si hay demasiados borradores se quedan los últimos',()=>{
  fresh();
  for(let i=0;i<50;i++){
    setDraft(`entrada:2026-01-${String(i+1).padStart(2,'0')}`,{generalDay:`texto ${i}`});
  }
  const list=listDrafts();
  assert.ok(list.length<=40,`se recorta la lista (${list.length})`);
  assert.match(draftData('entrada:2026-01-50').generalDay,/49/,'el más reciente sobrevive');
});

test('vaciar el cuaderno se lleva los borradores por delante',()=>{
  fresh();
  setDraft('botella',{text:'algo'});
  setDraft('perfil',{motto:'a medias'});
  assert.equal(clearAllDrafts(),true);
  assert.equal(store.has(DRAFTS_KEY),false);
});

test('cutText corta sin romper los vacíos',()=>{
  assert.equal(cutText(null), '');
  assert.equal(cutText('hola'),'hola');
  assert.equal(cutText('x'.repeat(20),10).length,10);
});

test('draftMinutes no se inventa nada si no hay borrador',()=>{
  fresh();
  assert.equal(draftMinutes('nada'),null);
  setDraft('nada',{text:'algo'});
  assert.equal(typeof draftMinutes('nada'),'number');
});
