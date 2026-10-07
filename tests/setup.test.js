import test from 'node:test';
import assert from 'node:assert/strict';
const store=new Map();
globalThis.localStorage={
  getItem:k=>store.has(k)?store.get(k):null,
  setItem:(k,v)=>store.set(k,String(v)),
  removeItem:k=>store.delete(k)
};
const {
  SETUP_LIMITS,SETUP_STEP_FIELDS,numberFromField,clampSetupNumber,
  readSetupFields,setupPatchFromFields,setupStepNotes,setupStepValues
}=await import('../src/utils/setupForm.js');
const {setupWizardModal}=await import('../src/components/ui.js');
const {validateSetup}=await import('../src/utils/storage.js');

const fresh=()=>store.clear();

/* Un FormData de mentira: solo lo que usan los formularios del perfil. */
const fieldsOf=(values,{present=[]}={})=>{
  const get=name=>(name in values?String(values[name]):null);
  const getAll=name=>Array.isArray(values[name])?values[name].map(String):[];
  const names=new Set([...(Object.keys(values)),...present]);
  return readSetupFields({get,getAll},names);
};

test('los límites de los campos son los mismos que acepta el modelo',()=>{
  for(const [name,limit] of Object.entries(SETUP_LIMITS)){
    assert.ok(limit.adjusted&&typeof limit.adjusted==='function',`${name} sabe explicar sus ajustes`);
  }
  const inside=validateSetup({age:8,sleepGoal:4,studyGoal:0,waterGoal:1});
  assert.equal(inside.age,8,'la edad mínima del modelo es la del campo (8)');
  assert.equal(inside.sleepGoal,4);
  assert.equal(inside.studyGoal,0);
  assert.equal(inside.waterGoal,1);
  const top=validateSetup({age:115,sleepGoal:14,studyGoal:16,waterGoal:25});
  assert.equal(top.age,115,'y el máximo también coincide (115)');
});

test('un número ilegible o vacío no rompe nada',()=>{
  assert.equal(numberFromField(''),null);
  assert.equal(numberFromField('   '),null);
  assert.equal(numberFromField('ocho'),null);
  assert.equal(numberFromField('7,5'),7.5,'la coma decimal se entiende');
  assert.equal(numberFromField('7.5'),7.5);
});

test('las metas se ajustan a su rango y se explica por qué',()=>{
  const high=clampSetupNumber('sleepGoal','20');
  assert.equal(high.value,14);
  assert.match(high.note,/entre 4 y 14/);
  const low=clampSetupNumber('waterGoal','0');
  assert.equal(low.value,1);
  assert.match(low.note,/1 y 25/);
  const fine=clampSetupNumber('sleepGoal','6.5');
  assert.equal(fine.value,6.5);
  assert.equal(fine.note,'','lo que ya está bien no se toca');
});

test('la edad fuera de rango no se inventa: se avisa y se deja sin rellenar',()=>{
  const small=clampSetupNumber('age','7');
  assert.equal(small.rejected,true);
  assert.equal(small.value,null,'no se convierte en 8 por la cara');
  assert.match(small.note,/8 y 115/);
  const big=clampSetupNumber('age','200');
  assert.equal(big.value,null);
  assert.equal(clampSetupNumber('age','9').value,9,'9 años sí entra: el cuaderno empieza en 8');
  assert.equal(clampSetupNumber('age','30').note,'');
});

test('el parche del perfil es siempre válido, diga lo que diga el formulario',()=>{
  const fields=fieldsOf({
    name:'  Ana  ',age:'30',ageGroup:'young',interests:['study','estudio-inventado'],
    motto:'   ',theme:'paper',ritual:'night',tone:'warm',
    sleepGoal:'26',studyGoal:'-3',waterGoal:'0',
    showDailyWord:'on'
  });
  const {patch,notes}=setupPatchFromFields(fields,{age:null,sleepGoal:8,studyGoal:2,waterGoal:8});
  assert.equal(patch.name,'Ana');
  assert.equal(patch.motto,'Un día a la vez.','una frase vacía vuelve a la de siempre');
  assert.equal(patch.age,30);
  assert.equal(patch.ageGroup,'adult','el grupo sale de la edad, no del radio viejo');
  assert.deepEqual(patch.interests,['study'],'los intereses inventados se descartan');
  assert.equal(patch.sleepGoal,14);
  assert.equal(patch.studyGoal,0);
  assert.equal(patch.waterGoal,1);
  assert.equal(patch.completed,true);
  assert.equal(notes.length,3,'se avisa de cada meta ajustada (sueño, dedicación y agua)');
  assert.doesNotThrow(()=>validateSetup({...patch}),'y lo que se guarda pasa el validador');
});

test('un interruptor que no está en el formulario no se pisa',()=>{
  const fields=fieldsOf({name:'Ana'});
  const {patch}=setupPatchFromFields(fields,{
    age:null,showDailyWord:false,showDailyTip:false,sidebarCollapsed:true,reduceMotion:true
  });
  assert.equal(patch.showDailyWord,undefined);
  assert.equal(patch.sidebarCollapsed,undefined);
  const withToggle=fieldsOf({name:'Ana',showDailyWord:'on'});
  assert.equal(setupPatchFromFields(withToggle,{}).patch.showDailyWord,true);
});

test('los avisos del paso se cuentan antes de guardar nada',()=>{
  assert.ok(SETUP_STEP_FIELDS[1].includes('age'));
  const stepOne=setupStepNotes(1,fieldsOf({age:'200'}),{});
  assert.equal(stepOne.length,1);
  assert.match(stepOne[0],/8 y 115/);
  const stepTwo=setupStepNotes(2,fieldsOf({sleepGoal:'30'}),{});
  assert.match(stepTwo[0],/4 y 14/);
  assert.deepEqual(setupStepNotes(3,fieldsOf({motto:'hola'}),{}),[],'el paso 3 no tiene números que ajustar');
  assert.deepEqual(setupStepValues(1,fieldsOf({age:'7'}),{}),{},'lo rechazado no se reescribe en el campo');
  assert.deepEqual(setupStepValues(2,fieldsOf({sleepGoal:'30'}),{}),{sleepGoal:14});
  assert.deepEqual(setupStepValues(1,fieldsOf({age:'200'}),{}),{},'ni la edad imposible');
  assert.deepEqual(setupStepValues(1,fieldsOf({age:'25'}),{}),{age:25});
});

test('el asistente no deja que el navegador bloquee el guardado en silencio',()=>{
  const html=setupWizardModal({},[],1,true);
  assert.match(html,/id="setup-wizard-form" novalidate/,'el formulario no delega en la validación nativa');
  assert.match(html,/id="setup-wizard-alert"/,'hay un sitio donde explicar lo que pasa');
  assert.match(html,/name="age"[^>]*min="8"[^>]*max="115"/,'la edad usa el rango del modelo');
  assert.doesNotMatch(html,/min="10"/,'…y ya no pide 10 años');
  assert.match(html,/name="sleepGoal"[^>]*step="any"/,'las metas aceptan cualquier decimal: nunca serán «inválidas»');
  assert.match(html,/name="studyGoal"[^>]*step="any"/);
  assert.match(html,/name="waterGoal"[^>]*step="any"/);
  assert.match(html,/data-wizard="next"/);
  assert.doesNotMatch(html,/data-modal="close"/,'el obligatorio sigue sin botón de cerrar');
});
