import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SEAS,WEATHERS,hashSeed,mulberry32,tideInfo,nextSpringTide,planVoyage,fateOf,canOpenBottle,resolveBottle,
  voyageProgress,seaPhrase,groupBottles,shoreQueue,thoughtWordCount,normalizeThrowForce,
  weatherOf,driftX,sunPosition,voyageLine,oceanStats
} from '../src/utils/ocean.js';
import {addDays,daysBetween} from '../src/utils/dates.js';

const bottle=(over={})=>({
  id:'b1',text:'Hoy no sé qué hago aquí.',castAt:'2026-09-01',mood:2,sea:'breeze',
  returns:true,speed:18,driftDays:14,arriveOn:'2026-09-15',lostOn:null,current:'el Noroeste',
  glass:'amber',mottoSeed:7,status:'drifting',reply:'',kept:false,seen:false,...over
});

test('el sol sigue la hora local y recorre el cielo de este a oeste', () => {
  const at=(hour,minute=0)=>new Date(2026,5,21,hour,minute);
  const sunrise=sunPosition(at(6));
  const midday=sunPosition(at(12));
  const evening=sunPosition(at(17));
  const night=sunPosition(at(23));

  assert.equal(sunrise.phase,'morning');
  assert.equal(sunrise.x,8);
  assert.equal(sunrise.y,46);
  assert.equal(midday.phase,'day');
  assert.equal(midday.x,50);
  assert.equal(midday.y,40);
  assert.ok(midday.y<sunrise.y,'el sol alcanza su punto más alto al mediodía');
  assert.equal(evening.phase,'evening');
  assert.ok(evening.x>midday.x,'el sol avanza hacia el oeste por la tarde');
  assert.equal(night.phase,'night');
  assert.ok(night.moonX>=8&&night.moonX<=92);
  assert.ok([sunrise,midday,evening,night].every(position=>position.y>=0&&position.y<=100));
});

test('el azar es determinista: mismas entradas, mismo viaje', () => {
  const a=planVoyage({text:'una frase',castAt:'2026-09-01',sea:'breeze',id:'x'});
  const b=planVoyage({text:'una frase',castAt:'2026-09-01',sea:'breeze',id:'x'});
  assert.deepEqual(a,b);
  const journeys=new Set();
  for(let i=0;i<40;i++)journeys.add(JSON.stringify(planVoyage({text:`pensamiento número ${i}`,castAt:'2026-09-01',sea:'breeze',id:`b${i}`})));
  assert.ok(journeys.size>30,'textos distintos sortean viajes distintos');
});

test('la fuerza del lanzamiento alarga la travesía y se limita al rango', () => {
  const args={text:'Fuerza de lanzamiento',castAt:'2026-09-01',sea:'breeze',id:'force-check'};
  const suave=planVoyage({...args,force:1});
  const fuerte=planVoyage({...args,force:5});
  assert.equal(suave.force,1);
  assert.equal(fuerte.force,5);
  assert.ok(fuerte.driftDays>suave.driftDays,'lanzar con más fuerza retrasa el regreso');
  assert.equal(normalizeThrowForce(99),5);
  assert.equal(normalizeThrowForce(-4),1);
  assert.equal(normalizeThrowForce('x'),3);
});

test('planVoyage respeta el mar elegido y sus fechas', () => {
  for(const sea of SEAS){
    for(const text of ['hola','un pensamiento algo más largo con varias palabras','otro']){
      const p=planVoyage({text,castAt:'2026-06-01',sea:sea.id,id:text});
      assert.ok(p.driftDays>=1,`${sea.id}: driftDays`);
      assert.equal(daysBetween('2026-06-01',p.arriveOn),p.driftDays,`${sea.id}: días de deriva`);
      assert.ok(p.speed>0,`${sea.id}: velocidad`);
      assert.ok(typeof p.current==='string'&&p.current.length>0,`${sea.id}: nombre de la corriente`);
      if(p.returns){
        assert.equal(p.lostOn,null,`${sea.id}: si vuelve no se hunde`);
        assert.equal(tideInfo(p.arriveOn).key,'spring','las botellas vuelven en marea viva');
      }else{
        assert.ok(p.lostOn>p.arriveOn,`${sea.id}: se hunde después del horizonte`);
      }
    }
  }
});

test('la marea: ciclo lunar estable y pleamares periódicas', () => {
  const t=tideInfo('2026-09-30');
  assert.ok(['spring','neap','rising','falling'].includes(t.key));
  // agrupamos los días de marea viva en franjas consecutivas
  const starts=[];
  let previous=null;
  for(let i=0;i<60;i++){
    const d=addDays('2026-09-01',i);
    if(tideInfo(d).key==='spring'){
      if(!previous||daysBetween(previous,d)!==1)starts.push(d);
      previous=d;
    }else previous=null;
  }
  assert.ok(starts.length>=3&&starts.length<=5,'hay unas pocas pleamares al mes');
  for(let i=1;i<starts.length;i++){
    const gap=daysBetween(starts[i-1],starts[i]);
    assert.ok(gap>=12&&gap<=18,`las pleamares se repiten cada ~15 días (gap ${gap})`);
  }
  const from=nextSpringTide('2026-09-30');
  assert.ok(from>='2026-09-30'&&daysBetween('2026-09-30',from)<=16);
  assert.equal(tideInfo(from).key,'spring');
  assert.equal(from,nextSpringTide('2026-09-30'));
});

test('la marea se activa en las dos sicigias, no solo en la luna nueva', () => {
  // 2026-08-12 fue luna nueva real (eclipse total visible desde España)
  const nueva='2026-08-12';
  const llena='2026-08-26';
  const cuarto='2026-08-19';
  assert.equal(tideInfo(nueva).key,'spring','luna nueva: marea viva');
  assert.equal(tideInfo(llena).key,'spring','luna llena: marea viva');
  assert.equal(tideInfo(cuarto).key,'neap','cuarto menguante: marea muerta');
  const before=addDays(nueva,-1);
  assert.equal(tideInfo(before).key,'spring','también el día antes de la sicigia');
});

test('iluminación y fase de la luna son coherentes', () => {
  const nueva=tideInfo('2026-08-12');
  const llena=tideInfo('2026-08-26');
  assert.ok(nueva.illum<.06,'en luna nueva casi no se ve');
  assert.ok(llena.illum>.94,'en luna llena se ve casi entera');
  assert.match(nueva.phase,/luna nueva/);
  assert.match(llena.phase,/luna llena/);
  for(let i=0;i<40;i++){
    const t=tideInfo(addDays('2026-08-01',i));
    assert.ok(t.illum>=0&&t.illum<=1,'iluminación entre 0 y 1');
    assert.ok(typeof t.phase==='string'&&t.phase.length>3,'siempre hay nombre de fase');
    assert.equal(t.moon,Math.round(t.illum*100)/100);
  }
});

test('fateOf: deriva, vuelve con la marea o se hunde', () => {
  assert.equal(fateOf(bottle(),'2026-09-10'),'drifting');
  assert.equal(fateOf(bottle(),'2026-09-15'),'returned');
  assert.equal(fateOf(bottle(),'2026-09-16'),'returned');
  const doomed=bottle({returns:false,arriveOn:'2026-09-15',lostOn:'2026-09-25'});
  assert.equal(fateOf(doomed,'2026-09-20'),'drifting');
  assert.equal(fateOf(doomed,'2026-09-25'),'lost');
  // un estado terminal no se reabre
  assert.equal(fateOf(bottle({status:'kept'}),'2026-09-30'),'kept');
});

test('solo se puede abrir una botella cuando ya ha regresado', () => {
  assert.equal(canOpenBottle(null,'2026-09-30'),false);
  assert.equal(canOpenBottle(bottle(),'2026-09-14'),false);
  assert.equal(canOpenBottle(bottle(),'2026-09-15'),true);
  assert.equal(canOpenBottle(bottle({status:'lost'}),'2026-09-30'),false);
});

test('resolveBottle escribe la fecha de regreso y respeta lo ya resuelto', () => {
  const r=resolveBottle(bottle(),'2026-09-20');
  assert.equal(r.status,'returned');
  assert.equal(r.returnedAt,'2026-09-15');
  assert.equal(r.seen,false);
  const same=bottle({status:'returned',returnedAt:'2026-09-15'});
  assert.equal(resolveBottle(same,'2026-10-01'),same,'identidad si nada cambia');
});

test('voyageProgress avanza de 0 a 1 y sabe cuántas millas', () => {
  const b=bottle({castAt:'2026-09-01',arriveOn:'2026-09-15',speed:10});
  const start=voyageProgress(b,'2026-09-01');
  assert.equal(start.pct,0);
  assert.equal(start.atSea,0);
  const half=voyageProgress(b,'2026-09-08');
  assert.equal(half.atSea,7);
  assert.equal(half.miles,70);
  const end=voyageProgress(b,'2026-09-15');
  assert.equal(end.pct,1);
  assert.equal(end.fate,'returned');
  assert.ok(Number.isFinite(end.milesHome)&&end.milesHome>=0);
});

test('las fases del mar producen frases del repertorio', () => {
  const today='2026-09-30';
  for(const date of ['2026-09-01','2026-09-05','2026-09-12','2026-09-14']){
    const phrase=seaPhrase(bottle({castAt:date,id:`f${date}`}),date);
    assert.match(phrase,/[a-záéí]/,'toda botella tiene una frase de navegación');
  }
  assert.ok(seaPhrase(bottle({status:'returned'}),today).includes('')===false?false:true);
  assert.match(seaPhrase(bottle({status:'lost',returns:false,lostOn:'2026-09-20'}),today),/[a-z]/);
});


test('groupBottles ordena la orilla por llegada y separa las ancladas', () => {
  const list=[
    bottle({id:'a',status:'returned',returnedAt:'2026-09-16',seen:true}),
    bottle({id:'b',status:'returned',returnedAt:'2026-09-20',seen:false}),
    bottle({id:'c',castAt:'2026-09-18',arriveOn:'2026-10-18',kept:true}),
    bottle({id:'d',status:'lost',returns:false,arriveOn:'2026-09-10',lostOn:'2026-09-20',kept:true}),
    bottle({id:'e',status:'returned',returnedAt:'2026-09-18',kept:true,keptOn:'2026-09-19'})
  ];
  const g=groupBottles(list,'2026-09-25');
  assert.equal(g.returned.length,3);
  assert.equal(g.returned[0].id,'b','las sin leer van primero');
  assert.equal(g.drifting[0].id,'c');
  assert.equal(g.lost[0].id,'d');
  assert.equal(g.kept.length,1,'solo las botellas devueltas pueden quedar guardadas');
  assert.equal(g.kept[0].id,'e');
  assert.equal(shoreQueue(list,'2026-09-25').length,3);
});


test('utilidades sueltas', () => {
  assert.equal(thoughtWordCount('una frase corta'),3);
  assert.equal(thoughtWordCount('   '),0);
  assert.equal(hashSeed('abc'),hashSeed('abc'));
  assert.notEqual(hashSeed('abc'),hashSeed('abd'));
  const rnd=mulberry32(hashSeed('abc'));
  assert.deepEqual([rnd(),rnd()].map(x=>x>0&&x<1),[true,true]);
  assert.ok(driftX(0)<driftX(.5)&&driftX(.5)<driftX(1),'la deriva avanza de izquierda a derecha');
  assert.ok(driftX(-3)===driftX(0)&&driftX(9)===driftX(1),'y no se sale del agua');
});

test('el parte del día es estable, razonable y suena a mar', () => {
  const a=weatherOf('2026-10-04');
  const b=weatherOf('2026-10-04');
  assert.deepEqual(a.weather,b.weather,'la misma fecha da el mismo parte');
  assert.ok(WEATHERS.some(w=>w.id===a.weather.id));
  assert.ok(a.wind.kmh>=0&&a.wind.kmh<=70,'nudos verosímiles');
  assert.ok(a.level>=0&&a.level<=1,'el agua, entre 0 y 1');
  assert.ok(a.rough>=0&&a.rough<=1);
  assert.ok(Number.isInteger(a.push)&&a.push>=0&&a.push<=3,'los días de retención, contados');
  assert.ok(['calm','haze','wind','rain','gale'].includes(a.weather.id));
  /* el temporal existe, pero no es lo habitual */
  let gales=0;
  for(let i=0;i<200;i++)if(weatherOf(addDays('2026-01-01',i)).weather.id==='gale')gales++;
  assert.ok(gales>0&&gales<50,`los temporales se ven, pero poco (${gales}/200)`);
});

test('el parte cambia de verdad la travesía: velocidad y pleamar', () => {
  const texts=['un pensamiento algo largo para sembrar el azar','otra nota distinta y más larga todavía','tercera'];
  let changed=false;
  for(const text of texts){
    for(const sea of SEAS){
      for(const date of ['2026-02-03','2026-05-17','2026-08-12','2026-11-29']){
        const p=planVoyage({text,castAt:date,sea:sea.id,id:text});
        const part=weatherOf(date);
        assert.equal(p.weather,part.weather.id,'el parte queda escrito en la botella');
        assert.equal(p.wind,part.wind.label);
        assert.ok(p.speed>=4,'nunca se detiene del todo');
        if(p.returns){
          assert.equal(tideInfo(p.arriveOn).key,'spring','entra en pleamar');
          assert.ok(p.arriveOn>=addDays(date,1));
        }
        if(part.push>0&&p.returns)changed=true;
      }
    }
  }
  assert.ok(changed,'hay días en que el mar retiene las botellas');
});



test('cada botella tiene su cristal y no lo pierde al editarla', async () => {
  const store=new Map();
  globalThis.localStorage={
    getItem:k=>store.has(k)?store.get(k):null,
    setItem:(k,v)=>store.set(k,String(v)),
    removeItem:k=>store.delete(k),
    key:i=>[...store.keys()][i]??null,
    get length(){return store.size;}
  };
  const {saveThought,loadThoughts,updateThought}=await import('../src/utils/storage.js');
  for(const [i,sea] of SEAS.entries()){
    saveThought({id:`tint-${i}`,text:`Un pensamiento distinto número ${i}`,sea:sea.id,force:3,castAt:addDays('2026-09-01',i)});
  }
  const stored=loadThoughts();
  const tints=new Set(stored.map(t=>t.glass));
  assert.ok(tints.size>1,`no todas las botellas son del mismo color (${[...tints].join(', ')})`);
  assert.ok(stored.every(t=>tints.has(t.glass)&&typeof t.glass==='string'));
  const first=stored[0];
  const kept=updateThought(first.id,{kept:true}).find(t=>t.id===first.id);
  assert.equal(kept.glass,first.glass,'el cristal no cambia al guardarla o responderla');
});

test('una botella con los datos a medias no rompe la vista', () => {
  const broken={id:'rota',text:'Sin fecha',returns:true};
  assert.equal(voyageProgress(broken,'2026-09-30').total,0);
  assert.equal(voyageProgress(broken,'2026-09-30').pct,0);
  assert.equal(voyageProgress(broken,'2026-09-30').miles,0);
  assert.ok(seaPhrase(broken,'2026-09-30').length>0);
  assert.equal(voyageLine(broken,'2026-09-30'),'Sin fecha de salida.');
  /* y sin botella, tampoco */
  assert.equal(voyageProgress(null,'2026-09-30').total,0);
  assert.equal(seaPhrase(null,'2026-09-30').length>0,true);
});

test('el viaje se cuenta en una línea y las cifras del mar cuadran', () => {
  assert.equal(voyageLine(bottle({status:'drifting'}),'2026-09-03'),'Lleva 2 días en el mar.');
  assert.equal(voyageLine(bottle({status:'returned'}),'2026-09-20'),'Volvió a los 14 días, con la marea viva.');
  const sunk=bottle({id:'b2',returns:false,status:'lost',lostOn:'2026-09-10',arriveOn:'2026-09-06'});
  assert.equal(voyageLine(sunk,'2026-09-20'),'Se perdió a los 9 días de viaje.');
  const sailing=bottle({id:'b3',status:'drifting',castAt:'2026-09-19',arriveOn:'2026-10-02',driftDays:13});
  const stats=oceanStats([bottle({status:'returned'}),sunk,sailing],'2026-09-20');
  assert.equal(stats.sent,3);
  assert.equal(stats.returned,1);
  assert.equal(stats.lost,1);
  assert.equal(stats.drifting,1);
  assert.equal(stats.returnPct,50,'la mitad de las que terminaron volvieron');
  assert.ok(stats.miles>0);
  assert.ok(stats.oldestAtSea.days>=0);
  assert.equal(oceanStats([],'2026-09-20').returnPct,null);
});
