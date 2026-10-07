/* ============================================================
   El mar de los pensamientos.
   Se escribe, se echa y se deja estar. De vez en cuando vuelve
   algo: entonces se lee, se contesta o se ancla.
   Todo dibujado con SVG y CSS: ni imágenes, ni fuentes remotas.
   ============================================================ */

import {icon,escape as esc} from './ui.js';
import {MOODS} from '../data/constants.js';
import {dateKey} from '../utils/dates.js';
import {GLASS_TINTS,fateOf,canOpenBottle,groupBottles,thoughtWordCount,hashSeed,weatherOf,sunPosition,tideInfo,voyageLine} from '../utils/ocean.js';

export const tintOf=bottle=>GLASS_TINTS.find(g=>g.id===bottle?.glass)||GLASS_TINTS[0];

/* ---------- la botella ---------- */
export function bottleGlyph(bottle={},opts={}){
  const tint=tintOf(bottle);
  const cls=opts.class?` ${opts.class}`:'';
  const paper=opts.paper===false?'':`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${tint.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;
  return `<svg class="bottle-glyph${cls}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${tint.hex} 22%,transparent)" stroke="${tint.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${tint.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${tint.hex}" opacity=".85"/>
      ${paper}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`;
}

/* ---------- olas ---------- */
function waveLinePath(width=1440,amp=4,y=40,period=480,phase=0){
  const start=-period+phase;
  let d=`M${start} ${y}`;
  for(let x=start;x<width+period;x+=period){
    d+=` C${x+period*.25} ${y-amp} ${x+period*.25} ${y-amp} ${x+period*.5} ${y}`;
    d+=` C${x+period*.75} ${y+amp} ${x+period*.75} ${y+amp} ${x+period} ${y}`;
  }
  return d;
}
export function wavesSvg(seed=0,rough=0){
  const phase=(Math.abs(Number(seed)||0)%7)*11;
  const seaState=Math.max(0,Math.min(1,Number(rough)||0));
  const line=(name,y,amp,period,duration,delay)=>{
    const height=Math.round(amp+seaState*amp*.75);
    const speed=(duration*(1-Math.min(.35,seaState*.2))).toFixed(1);
    return `<path class="thoughts-wave-line ${name}" style="--wave-dur:${speed}s;--wave-delay:${delay}s" d="${waveLinePath(1440,height,y,period,phase)}"/>`;
  };
  return `<svg class="sea-wave-svg thoughts-wave-scene" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
    ${line('wave-line-surface',22,3,480,8,-1.7)}
    ${line('wave-line-middle',69,4,400,10,-4.1)}
    ${line('wave-line-distance',123,3,360,12,-7.3)}
  </svg>`;
}

export function castSplashPoint(bottle={}){
  const seed=hashSeed(`${bottle.id||''}|${bottle.castAt||''}`);
  const side=(seed&1)===1;
  const offset=(seed>>>3)%14;
  return {
    x:side?79+offset:8+offset,
    depth:13+(seed>>>7)%8
  };
}
export function islandSceneSvg(){
  return `<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs>
      <linearGradient id="island-reef-shade" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#365c60"/><stop offset="1" stop-color="#153744"/></linearGradient>
      <linearGradient id="island-green-shade" x1="0" y1="0" x2="0.15" y2="1"><stop stop-color="#397c68"/><stop offset="1" stop-color="#164d4b"/></linearGradient>
      <linearGradient id="island-sand-shade" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f0e3c6"/><stop offset=".48" stop-color="#d7d9c8"/><stop offset="1" stop-color="#b8c9be"/></linearGradient>
      <linearGradient id="island-house-wall" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbf0d8"/><stop offset="1" stop-color="#c4d3ce"/></linearGradient>
    </defs>
    <ellipse class="scene-island-shadow" cx="720" cy="580" rx="555" ry="36"/>
    <path class="scene-island-reef" d="M151 523
      C226 488 294 477 373 486
      C448 452 521 450 601 478
      C690 445 769 450 851 478
      C937 445 1031 454 1093 486
      C1183 470 1252 491 1300 528
      L1371 620H75Z"/>
    <path class="scene-island-foliage scene-island-foliage-back" d="M203 526
      C244 477 306 449 372 467
      C421 414 515 399 593 438
      C647 391 737 378 812 422
      C882 383 984 403 1034 448
      C1115 426 1205 456 1268 510
      L1322 620H142Z"/>
    <path class="scene-island-foliage scene-island-foliage-front" d="M233 527
      C285 487 343 471 402 485
      C449 446 522 438 584 466
      C640 430 711 429 769 461
      C831 429 906 434 961 467
      C1024 443 1100 458 1151 488
      C1207 477 1252 494 1291 523
      L1320 620H144Z"/>
    <path class="scene-island-beach" d="M165 507
      C244 478 331 466 411 479
      C499 455 577 465 654 485
      C735 457 826 455 906 478
      C987 500 1076 465 1161 477
      C1237 488 1290 506 1340 531
      C1311 568 1304 589 1320 620H95
      C116 578 132 541 165 507Z"/>
    <path class="scene-island-shoreline" d="M165 507
      C244 478 331 466 411 479
      C499 455 577 465 654 485
      C735 457 826 455 906 478
      C987 500 1076 465 1161 477
      C1237 488 1290 506 1340 531"/>
    <path class="scene-island-path" d="M706 514
      C690 532 723 545 711 560
      C697 578 728 589 716 620H765
      C752 590 779 577 759 557
      C743 541 766 529 743 514Z"/>

    <g class="scene-palm scene-palm-left" transform="translate(535 488)">
      <path class="scene-palm-trunk" d="M0 16c-27-44-34-109-25-174 5-37 17-74 34-112"/>
      <path class="scene-palm-trunk-highlight" d="M-4-30c-12-44-12-96-2-142"/>
      <g transform="translate(9 -270)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-59-53-133-63-192-27 57-6 105 7 146 28 23 12 40 13 46-1Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-31-72-91-107-159-94 49 17 87 43 117 74 18 18 33 24 42 20Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c-1-77 35-136 101-159-28 45-41 91-47 133-4 25-15 42-31 47Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-67 108-98 177-79-56 17-96 47-129 79-19 19-36 26-48 18Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c65-36 138-30 187 13-59-11-108-5-153 10-25 8-42 5-47-7Z"/>
        <path class="scene-palm-leaf leaf-f" d="M0 0c8-51 36-91 82-116-18 39-26 77-28 111-1 20-12 34-32 35Z"/>
      </g></g>
    </g>
    <g class="scene-palm scene-palm-right" transform="translate(900 490)">
      <path class="scene-palm-trunk" d="M0 14c-25-48-31-116-17-181 8-40 24-77 46-111"/>
      <path class="scene-palm-trunk-highlight" d="M-3-30c-10-44-6-96 12-144"/>
      <g transform="translate(29 -287)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-47-51-109-68-163-40 48-1 90 13 126 35 19 12 33 14 37 5Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-21-65-70-103-130-100 43 17 75 42 100 69 15 16 27 22 35 19Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c7-69 44-118 102-132-28 38-43 78-51 115-5 22-16 35-31 39Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-56 101-77 158-57-48 10-84 33-114 57-18 14-33 18-44 10Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c56-26 117-17 156 21-48-13-88-12-125-3-20 5-33 1-31-18Z"/>
      </g></g>
    </g>

    <g class="scene-island-rocks" aria-hidden="true">
      <path d="M196 539q13-19 28-2 15-14 26 2l-5 9h-45Z"/>
      <path d="M1183 528q11-15 24-2 12-13 24 1l-3 8h-44Z"/>
      <path d="M1260 549q8-12 19-2 10-9 18 2l-3 7h-34Z"/>
      <ellipse cx="1051" cy="527" rx="7" ry="3"/><ellipse cx="458" cy="536" rx="5" ry="2.4"/>
    </g>
    <g class="scene-island-grass" aria-hidden="true">
      <path d="M320 493q-24-43-23-75 26 31 31 71 10-43 37-66-14 46-34 77Z"/>
      <path d="M1033 491q-18-40-12-70 23 30 22 66 15-38 42-55-19 42-43 67Z"/>
      <path d="M1110 500q-12-31-7-53 17 24 17 50 12-30 33-43-14 34-35 53Z"/>
      <path d="M406 512q-11-22-8-39 14 17 17 35 8-20 22-28-9 24-24 39Z"/>
    </g>

    <g class="scene-house" transform="translate(650 385)">
      <ellipse class="scene-house-shadow" cx="73" cy="143" rx="104" ry="15"/>
      <path class="scene-house-chimney" d="M118 0h17v38h-17z"/>
      <path class="scene-house-wall" d="M4 48h138v86H4z"/>
      <path class="scene-house-roof-shadow" d="m-17 50 90-75 91 75-11 13-80-65-79 65Z"/>
      <path class="scene-house-roof" d="m-8 47 81-67 82 67-12 11-70-56-69 56Z"/>
      <path class="scene-house-roof-seams" d="m8 43 65-54 65 54M21 49l52-43 54 43"/>
      <path class="scene-house-window-glass" d="M18 63h24v23H18zM109 63h24v23h-24z"/>
      <path class="scene-house-window-frame" d="M30 63v23m-12-11h24m79-12v23m-12-11h24"/>
      <path class="scene-house-door" d="M59 88h31v46H59z"/>
      <circle class="scene-house-door-knob" cx="83" cy="112" r="1.8"/>
      <path class="scene-house-step" d="M54 134h41v6H54zM49 140h51v5H49z"/>
      <circle class="scene-house-lamp" cx="101" cy="93" r="3"/>
      <path class="scene-house-sill" d="M14 89h32m61 0h32"/>
    </g>
    <path class="scene-shore-foam" d="M168 509c87-13 144 12 230 7 80-6 137-23 207-19 30 2 54 8 79 13"/>
    <path class="scene-shore-foam" d="M816 518c30 0 53-8 84-13 88-14 139-26 220-8 85 18 146 6 260 20"/>
    <g class="scene-birds" aria-hidden="true">
      <path d="M1045 194q13-14 26 0 13-14 26 0"/><path d="M1110 224q10-11 20 0 10-11 20 0"/>
    </g>
  </svg>`;
}
export function tideRule(){
  let d='M0 15';
  for(let x=0;x<2400;x+=120)d+=' q30 -9 60 0 q30 9 60 0';
  return `<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${d}"/>
  </svg>`;
}

/* ---------- mar de los pensamientos ---------- */
export function seaPanel(thoughts=[],today=dateKey(),now=new Date()){
  const groups=groupBottles(thoughts,today);
  const active=groups.drifting;
  const arrivals=groups.returned;
  const weather=weatherOf(today);
  const tide=tideInfo(today);
  const tideLevel=Math.round(tide.strength*100);
  const waterLevel=Math.round(45+weather.level*10);
  const wavesRough=Math.min(1,weather.rough);
  const sun=sunPosition(now);
  const unread=arrivals.filter(b=>b.seen!==true).length;
  const lost=groups.lost.length;
  const bottleState=active.length?'sent':unread?'unread':arrivals.length?'received':lost?'lost':'calm';
  const topLabel=active.length
    ?`${active.length} ${active.length===1?'botella en camino':'botellas en camino'}`
    :unread?`${unread} ${unread===1?'botella nueva':'botellas nuevas'}`
      :arrivals.length?`${arrivals.length} ${arrivals.length===1?'botella recibida':'botellas recibidas'}`
        :lost?`${lost} ${lost===1?'botella perdida':'botellas perdidas'}`
          :'Mar en calma';
  const returned=arrivals.slice(0,5).map((b,index)=>{
    const isNew=b.seen!==true;
    return `<button type="button" class="vault-arrival${isNew?' is-new is-washing':''}" style="--arrival-x:${28+index*11}%;--wash-delay:${Math.min(index,4)*120}ms" data-action="open-bottle" data-id="${b.id}" aria-label="${isNew?'Abrir botella nueva recibida':'Abrir botella recibida'}">
      ${bottleGlyph(b,{class:isNew?'is-landed':''})}<span class="sr-only">${isNew?'Nueva':'Recibida'}</span>
    </button>`;
  }).join('');
  return `<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${arrivals.length?'has-arrivals':''}${unread?' has-unread':''}"
    data-dayphase="${sun.phase}" data-tide="${tide.key}" data-weather="${weather.weather.id}" data-bottle-state="${bottleState}"
    style="--sun-x:${sun.x}%;--sun-y:${sun.y}%;--moon-x:${sun.moonX}%;--moon-y:${sun.moonY}%;--water-level:${waterLevel}%;--tide-level:${tideLevel}%"
    aria-label="Mar de Pensamientos">
    <span class="thoughts-sky-glow" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-left" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-right" aria-hidden="true"></span>
    <span class="thoughts-sun" aria-hidden="true"></span>
    <span class="thoughts-moon" aria-hidden="true">
      <svg class="thoughts-moon-art" viewBox="0 0 48 48">
        <path class="thoughts-moon-crescent" d="M34 4C19 6 8 18 8 29c0 11 9 18 20 15 8-2 14-9 14-18-2 8-8 13-15 13-8 0-14-7-13-15C15 15 22 8 34 4Z"/>
        <circle class="thoughts-moon-crater" cx="22" cy="27" r="1.6"/>
        <circle class="thoughts-moon-crater" cx="29" cy="34" r="1"/>
      </svg>
    </span>
    <header class="sea-sky thoughts-hero-copy">
      <p class="thoughts-kicker">${icon('wave')} Un lugar para soltar</p>
      <h1>Pensamientos</h1>
      <p class="thoughts-lead">Escribe. Suelta. Sigue.</p>
      <div class="thoughts-hero-meta">
        <p class="thoughts-state-pill" data-state="${bottleState}" role="status"><span class="thoughts-state-mark" aria-hidden="true"></span>${esc(topLabel)}</p>
        <div class="thoughts-tide-status" role="status" aria-label="Estado de la marea: ${esc(tide.name)}. Fase: ${esc(tide.phase)}" title="Fase lunar: ${esc(tide.phase)}">
          <span class="thoughts-tide-icon" aria-hidden="true">${icon('wave')}</span>
          <span class="thoughts-tide-name">${esc(tide.name)}</span>
          <span class="thoughts-tide-meter" role="meter" aria-label="Intensidad de la marea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${tideLevel}"><i></i></span>
        </div>
      </div>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${wavesSvg(hashSeed(today),wavesRough)}
      <span class="thoughts-water-reflection"></span>
    </div>
    ${islandSceneSvg()}
    ${returned?`<div class="vault-arrivals" aria-label="Botellas recibidas">${returned}</div>`:''}
  </section>`;
}
/* ---------- escribir y soltar ---------- */
/* ---------- las cuentas del mar ----------
   Todo lo que se enseña aquí sale de las botellas que hay: cuántas se han
   soltado, cuántas han vuelto, cuántas siguen en camino y cuánto han navegado. */
export function oceanFigures(stats){
  if(!stats||!stats.sent){
    return `<div class="ocean-figures is-empty">
      <p>Aún no has echado ninguna botella. Escribe algo y suéltalo: el mar se encarga del resto.</p>
    </div>`;
  }
  const miles=stats.miles>=1000?`${Math.round(stats.miles/100)/10}k`:`${stats.miles}`;
  return `<div class="ocean-figures">
    <div class="ocean-figure">
      <strong>${stats.sent}</strong>
      <span>${stats.sent===1?'botella echada':'botellas echadas'}</span>
    </div>
    <div class="ocean-figure">
      <strong>${stats.drifting}</strong>
      <span>en camino</span>
    </div>
    <div class="ocean-figure">
      <strong>${stats.returned}</strong>
      <span>${stats.returned===1?'recibida':'recibidas'}</span>
    </div>
    <div class="ocean-figure">
      <strong>${stats.lost}</strong>
      <span>${stats.lost===1?'perdida':'perdidas'}</span>
    </div>
    <p class="ocean-figures-note">
      ${stats.returnPct===null?'Todavía no ha vuelto ninguna.':`Han vuelto el ${stats.returnPct}% de las que ya terminaron su viaje.`}
      ${stats.miles?` Llevan ${miles} millas navegadas en total.`:''}
      ${stats.oldestAtSea?` La más vieja sigue en el agua desde hace ${stats.oldestAtSea.days} ${stats.oldestAtSea.days===1?'día':'días'}.`:''}
      ${stats.answered?` Has respondido ${stats.answered} ${stats.answered===1?'botella':'botellas'}.`:''}
    </p>
  </div>`;
}

export function bottleCountOnly(count=0,state='sent'){
  const numeric=Number(count);
  const total=Number.isFinite(numeric)?Math.max(0,Math.floor(numeric)):0;
  const label=state==='lost'
    ?total===1?'botella perdida':'botellas perdidas'
    :total===1?'botella enviada':'botellas enviadas';
  return `<p class="thoughts-bottle-count-only" role="status" aria-label="${total} ${label}">${total}</p>`;
}

export function bottleComposer(setup={},today=dateKey(),draft={}){
  const draftText=String(draft.text||'');
  const force=Math.max(1,Math.min(5,Math.round(Number(draft.force)||3)));
  return `<form id="bottle-form" class="card bottle-composer">
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Escribe aquí…">${esc(draftText)}</textarea>
    <div class="cast-force">
      <div class="cast-force-head"><label for="bottle-force">Fuerza</label><output id="bottle-force-value" for="bottle-force" aria-live="polite">${force}</output></div>
      <input id="bottle-force" class="cast-force-slider" type="range" name="force" min="1" max="5" step="1" value="${force}" aria-label="Fuerza del lanzamiento">
      <div class="cast-force-scale" aria-hidden="true"><span>Vuelve antes</span><span>Tarda más</span></div>
    </div>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${MOODS.map(m=>`<label class="mini-mood" style="--mood-color:${m.color}" title="${m.label}">
          <input type="radio" name="mood" value="${m.value}" ${draft.mood===m.value?'checked':''}>
          <span>${m.emoji}</span>
        </label>`).join('')}
      </div>
      <button type="submit" class="button solid cast-btn"${draftText.trim()?'':' disabled'}>${icon('send')} Lanzar botella</button>
    </div>
  </form>`;
}

/* ---------- una botella en la lista ---------- */
export function bottleCard(bottle,today=dateKey(),index=0){
  const fate=fateOf(bottle,today);
  const tint=tintOf(bottle);
  const remove=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${bottle.id}" aria-label="Eliminar">${icon('trash')}</button>`;
  if(fate!=='returned'){
    const state=fate==='lost'?'Perdida':'Enviada';
    const detail=fate==='lost'?'No volvió':'En camino';
    return `<article class="card bottle-card is-${fate} is-locked" style="--tint:${tint.hex};--card-delay:${Math.min(9,index)*35}ms" data-bottle-id="${bottle.id}" aria-label="${state}. ${detail}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${bottleGlyph(bottle,{paper:false})}</span>
        <div class="bottle-card-who"><p class="field-caption">${detail}</p><h3>${state}</h3></div>
        ${fate==='drifting'?`<span class="bottle-lock-mark" aria-hidden="true">${icon('lock')}</span>`:''}
      </header>
      <p class="bottle-card-journey">${esc(voyageLine(bottle,today))}</p>
      <footer class="bottle-card-foot">
        ${fate==='lost'?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${bottle.id}">Soltar otra vez</button>`:''}
        ${remove}
      </footer>
    </article>`;
  }
  const unread=bottle.seen!==true;
  const receivedLabel=unread?'Nueva · recibida':bottle.kept?'Recibida · guardada':'Recibida';
  return `<article class="card bottle-card is-returned${unread?' is-unread':''}${bottle.kept?' is-kept':''}" style="--tint:${tint.hex};--card-delay:${Math.min(9,index)*35}ms" data-bottle-id="${bottle.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${bottleGlyph(bottle)}</span>
      <div class="bottle-card-who"><p class="field-caption">${receivedLabel}</p><h3>Pensamiento</h3></div>
      ${bottle.kept?`<span class="kept-mark" title="Guardado">${icon('bookmark')}</span>`:''}
    </header>
    <p class="bottle-card-text ${thoughtWordCount(bottle.text)<=26?'is-short':''}">${esc(bottle.text)}</p>
    <p class="bottle-card-journey">${esc(voyageLine(bottle,today))}</p>
    ${bottle.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${esc(bottle.reply)}</p>`:''}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${bottle.id}" aria-label="${unread?'Abrir botella nueva':'Abrir botella recibida'}">Abrir</button>
      ${remove}
    </footer>
  </article>`;
}

/* ---------- al abrir la botella ---------- */
export function bottleModal(bottle,today=dateKey(),setup={}){
  if(!canOpenBottle(bottle,today))return '';
  const tint=tintOf(bottle);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  return `<div class="modal-card bottle-modal ${bottle.seen!==true?'is-fresh':''}" style="--tint:${tint.hex}" data-modal-bottle="${bottle.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <span class="bottle-wax" aria-hidden="true">${bottleGlyph(bottle,{paper:false})}<i class="wax-crack"></i></span>
    <p class="tale">Recibida</p>
    <div class="bottle-note" data-fate="returned">
      <blockquote class="bottle-modal-text">${esc(bottle.text)}</blockquote>
      ${mood?`<p class="bottle-modal-mood">${mood.emoji} · ${mood.label.toLowerCase()}</p>`:''}
    </div>
    ${bottle.reply?`<div class="bottle-reply-box"><span>Respuesta</span><p>${esc(bottle.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">Tu respuesta</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${bottle.id}:text" placeholder="Tu respuesta…">${esc(bottle.replyDraft||'')}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${bottle.reply?`<button class="button outline" data-modal="reply-clear">Quitar respuesta</button>`:`<button class="button outline" data-modal="reply">Responder</button>`}
      <button class="button outline" data-modal="keep" title="Se queda en la isla, en tu lista de guardadas">${bottle.kept?'Quitar de guardadas':'Guardar en la isla'}</button>
      <button class="button solid" data-modal="to-entry" title="Añade este pensamiento al día de hoy">${icon('pen')} Llevar al diario</button>
    </div>
  </div>`;
}

/* ---------- el chapuzón ---------- */
export function castSplash(bottle={}){
  const tint=tintOf(bottle);
  return `<div class="splash-layer" style="--tint:${tint.hex}">
    <span class="splash-arc">${bottleGlyph(bottle)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`;
}

/* ---------- lo que se ve desde casa ---------- */
export function shoreTeaser(thoughts=[]){
  const groups=groupBottles(thoughts,dateKey());
  const returned=groups.returned.length;
  const drifting=groups.drifting.length;
  const title=returned?'Recibidas':drifting?'Enviadas':'Pensamientos';
  const count=returned?`${returned} ${returned===1?'nuevo':'nuevos'}`
    :drifting?`${drifting} ${drifting===1?'nota':'notas'}`:'';
  return `<section class="card sea-teaser ${returned?'is-arrival':''}">
    <span class="soft-icon ${returned?'accent':''}">${icon('spark')}</span>
    <div><h2>${title}</h2>${count?`<p class="sea-teaser-count">${count}</p>`:''}</div>
    <button type="button" class="button outline small-btn" data-view="thoughts">Abrir</button>
  </section>`;
}

export function emptySea(tab='shore'){
  const labels={shore:'Sin botellas recibidas',sea:'Sin botellas enviadas',kept:'Sin guardados',lost:'Sin pérdidas'};
  return `<div class="empty-state sea-empty" data-tab="${tab}">
    <span class="sea-empty-art">${bottleGlyph({})}<i class="sea-empty-ripple"></i></span>
    <h3>${esc(labels[tab]||'En calma')}</h3>
  </div>`;
}
