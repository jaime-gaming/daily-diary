/* ============================================================
   El mar de los pensamientos.
   Se escribe, se echa y se deja estar. De vez en cuando vuelve
   algo: entonces se lee, se contesta o se ancla.
   Todo dibujado con SVG y CSS: ni imágenes, ni fuentes remotas.
   ============================================================ */

import {icon,escape as esc} from './ui.js';
import {MOODS} from '../data/constants.js';
import {dateKey} from '../utils/dates.js';
import {GLASS_TINTS,fateOf,canOpenBottle,groupBottles,thoughtWordCount,hashSeed,weatherOf,sunPosition} from '../utils/ocean.js';

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
function wavePath(width=2400,amp=8,y=110,period=240){
  let d=`M0 ${y}`;
  for(let x=0;x<width;x+=period){
    d+=` q ${period/4} ${-amp} ${period/2} 0 q ${period/4} ${amp} ${period/2} 0`;
  }
  return `${d} L${width} 240 L0 240 Z`;
}
export function wavesSvg(seed=0,rough=0){
  const layer=(amp,y,period,cls,dur)=>{
    const shift=(seed%7)*9;
    const speed=(dur*(1-Math.min(.55,rough*.45))).toFixed(1);
    return `<path class="${cls}" style="--wave-dur:${speed}s;--wave-delay:-${(shift/100*speed).toFixed(2)}s" d="${wavePath(2400,amp,y,period)}"/>`;
  };
  return `<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${layer(7,126,300,'wave wave-4',28)}
    ${layer(9,142,240,'wave wave-3',21)}
    ${layer(11,160,190,'wave wave-2',16)}
    ${layer(13,182,150,'wave wave-1',11)}
  </svg>`;
}

export function islandSceneSvg(){
  return `<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <ellipse class="scene-island-shadow" cx="720" cy="548" rx="610" ry="42"/>
    <path class="scene-island-foliage scene-island-foliage-back" d="M0 496c40-36 83-48 125-37 11-53 53-83 101-74 12-55 60-78 107-51 21-66 84-84 132-43 31-70 102-82 149-32 45-70 114-76 155-21 46-65 118-68 158-16 44-60 110-51 141-5 45-47 107-37 137 4 47-30 102-23 135 19 40-5 77 7 110 36v324H0Z"/>
    <path class="scene-island-foliage scene-island-foliage-front" d="M28 503c51-57 111-75 169-54 19-59 72-84 125-53 26-65 91-82 142-37 41-68 108-74 151-22 47-61 116-61 158-8 51-50 117-40 148 15 50-40 110-20 130 31 58-25 111-2 139 39 54-4 108 17 150 63v256H28Z"/>
    <path class="scene-island-beach" d="M0 440c88-34 160-43 235-23 69 18 140 15 213-1 85-19 159-14 240 6 87 21 172 18 251-1 91-21 178-11 261 12 81 22 160 27 240 15v172H0Z"/>
    <path class="scene-island-beach-highlight scene-island-shoreline" d="M0 441c88-34 160-43 235-23 69 18 140 15 213-1 85-19 159-14 240 6 87 21 172 18 251-1 91-21 178-11 261 12 81 22 160 27 240 15"/>

    <g class="scene-palm scene-palm-left" transform="translate(535 496)">
      <path class="scene-palm-trunk" d="M0 16c-27-44-34-109-25-174 5-37 17-74 34-112"/>
      <g transform="translate(9 -270)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-59-53-133-63-192-27 57-6 105 7 146 28 23 12 40 13 46-1Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-31-72-91-107-159-94 49 17 87 43 117 74 18 18 33 24 42 20Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c-1-77 35-136 101-159-28 45-41 91-47 133-4 25-15 42-31 47Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-67 108-98 177-79-56 17-96 47-129 79-19 19-36 26-48 18Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c65-36 138-30 187 13-59-11-108-5-153 10-25 8-42 5-47-7Z"/>
        <path class="scene-palm-leaf leaf-f" d="M0 0c8-51 36-91 82-116-18 39-26 77-28 111-1 20-12 34-32 35Z"/>
      </g></g>
    </g>
    <g class="scene-palm scene-palm-right" transform="translate(900 500)">
      <path class="scene-palm-trunk" d="M0 14c-25-48-31-116-17-181 8-40 24-77 46-111"/>
      <g transform="translate(29 -287)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-47-51-109-68-163-40 48-1 90 13 126 35 19 12 33 14 37 5Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-21-65-70-103-130-100 43 17 75 42 100 69 15 16 27 22 35 19Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c7-69 44-118 102-132-28 38-43 78-51 115-5 22-16 35-31 39Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-56 101-77 158-57-48 10-84 33-114 57-18 14-33 18-44 10Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c56-26 117-17 156 21-48-13-88-12-125-3-20 5-33 1-31-18Z"/>
      </g></g>
    </g>

    <g class="scene-island-grass" aria-hidden="true">
      <path d="M188 479q-24-43-23-75 26 31 31 71 10-43 37-66-14 46-34 77Z"/>
      <path d="M1052 481q-18-40-12-70 23 30 22 66 15-38 42-55-19 42-43 67Z"/>
      <path d="M1137 483q-12-31-7-53 17 24 17 50 12-30 33-43-14 34-35 53Z"/>
    </g>

    <g class="scene-house" transform="translate(650 399)">
      <ellipse class="scene-house-shadow" cx="73" cy="142" rx="100" ry="13"/>
      <path class="scene-house-roof-shadow" d="m-17 50 90-75 91 75-11 13-80-65-79 65Z"/>
      <path class="scene-house-wall" d="M4 48h138v93H4z"/>
      <path class="scene-house-roof" d="m-8 47 81-67 82 67-12 11-70-56-69 56Z"/>
      <path class="scene-house-door" d="M59 91h31v50H59z"/>
      <g class="scene-house-window"><path d="M18 65h24v24H18zM109 65h24v24h-24z"/><path d="M30 65v24m-12-12h24m79-12v24m-12-12h24"/></g>
    </g>

    <path class="scene-shore-foam" d="M16 494c102-14 157 22 258 15 97-7 141-30 235-17 92 12 134 35 227 26 97-10 143-32 234-18 89 14 131 34 222 27 82-7 152-23 232-12"/>
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
  const sun=sunPosition(now);
  const topLabel=active.length
    ?`${active.length} ${active.length===1?'botella':'botellas'} en el agua`
    :arrivals.length?`${arrivals.length} ${arrivals.length===1?'botella de vuelta':'botellas de vuelta'}`
      :'Mar en calma';
  const shoreLabel=active.length
    ?`${active.length} ${active.length===1?'botella':'botellas'} en el mar`
    :arrivals.length?`${arrivals.length} ${arrivals.length===1?'botella en la orilla':'botellas en la orilla'}`
      :'La orilla está tranquila';
  const fleet=active.slice(0,7).map((b,index)=>{
    const seed=hashSeed(`${b.id}|${b.castAt}`);
    return `<li class="vault-float" style="--x:${17+seed%68}%;--lift:${28+(seed>>>4)%12}%;--float-delay:${(index*.24).toFixed(2)}s;--tint:${tintOf(b).hex}">${bottleGlyph(b)}</li>`;
  }).join('');
  const returned=arrivals.slice(0,5).map((b,index)=>`
    <button type="button" class="vault-arrival ${b.seen?'':'is-new'}" style="--arrival-x:${28+index*11}%" data-action="open-bottle" data-id="${b.id}" aria-label="Abrir pensamiento de vuelta">
      ${bottleGlyph(b,{class:'is-landed'})}<span class="sr-only">Abrir</span>
    </button>`).join('');
  return `<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${arrivals.length?'has-arrivals':''}"
    data-dayphase="${sun.phase}"
    style="--sun-x:${sun.x}%;--sun-y:${sun.y}%;--moon-x:${sun.moonX}%;--moon-y:${sun.moonY}%;--water-level:${Math.round(49+weather.level*4)}%"
    aria-label="Mar de Pensamientos">
    <span class="thoughts-sky-glow" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-left" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-right" aria-hidden="true"></span>
    <span class="thoughts-sun" aria-hidden="true"></span>
    <span class="thoughts-moon" aria-hidden="true"></span>
    <header class="sea-sky thoughts-hero-copy">
      <p class="thoughts-kicker">${icon('wave')} Un lugar para soltar</p>
      <h1>Pensamientos</h1>
      <p class="thoughts-lead">Escribe. Suelta. Sigue.</p>
      <p class="thoughts-state-pill">${esc(topLabel)}</p>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${wavesSvg(hashSeed(today),weather.rough)}
    </div>
    ${islandSceneSvg()}
    ${fleet?`<ul class="sea-fleet vault-fleet" aria-label="Botellas en el mar">${fleet}</ul>`:''}
    ${returned?`<div class="vault-arrivals" aria-label="De vuelta">${returned}</div>`:''}
    <div class="thoughts-stage-actions">
      <span class="thoughts-stage-note">${esc(shoreLabel)}</span>
      <button type="button" class="thoughts-scroll-button" data-action="thoughts-island">Bajar a la isla ${icon('chevronDown')}</button>
    </div>
  </section>`;
}
/* ---------- escribir y soltar ---------- */
export function bottleComposer(setup={},today=dateKey(),draft={}){
  const draftText=String(draft.text||'');
  return `<form id="bottle-form" class="card bottle-composer">
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Escribe aquí…">${esc(draftText)}</textarea>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${MOODS.map(m=>`<label class="mini-mood" style="--mood-color:${m.color}" title="${m.label}">
          <input type="radio" name="mood" value="${m.value}" ${draft.mood===m.value?'checked':''}>
          <span>${m.emoji}</span>
        </label>`).join('')}
      </div>
      <button type="submit" class="button solid cast-btn"${draftText.trim()?'':' disabled'}>${icon('send')} Soltar</button>
    </div>
  </form>`;
}

/* ---------- una botella en la lista ---------- */
export function bottleCard(bottle,today=dateKey(),index=0){
  const fate=fateOf(bottle,today);
  const tint=tintOf(bottle);
  const remove=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${bottle.id}" aria-label="Eliminar">${icon('trash')}</button>`;
  if(fate!=='returned'){
    const state=fate==='lost'?'Perdida':'En camino';
    return `<article class="card bottle-card is-${fate} is-locked" style="--tint:${tint.hex};--i:${Math.min(9,index)}" data-bottle-id="${bottle.id}" aria-label="${state}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${bottleGlyph(bottle,{paper:false})}</span>
        <div class="bottle-card-who"><h3>${state}</h3></div>
      </header>
      <footer class="bottle-card-foot">
        ${fate==='lost'?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${bottle.id}">Soltar otra vez</button>`:''}
        ${remove}
      </footer>
    </article>`;
  }
  return `<article class="card bottle-card is-returned" style="--tint:${tint.hex};--i:${Math.min(9,index)}" data-bottle-id="${bottle.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${bottleGlyph(bottle)}</span>
      <div class="bottle-card-who"><p class="field-caption">De vuelta</p><h3>Pensamiento</h3></div>
      ${bottle.kept?`<span class="kept-mark" title="Guardado">${icon('bookmark')}</span>`:''}
    </header>
    <p class="bottle-card-text ${thoughtWordCount(bottle.text)<=26?'is-short':''}">${esc(bottle.text)}</p>
    ${bottle.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${esc(bottle.reply)}</p>`:''}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${bottle.id}">Abrir</button>
      ${remove}
    </footer>
  </article>`;
}

/* ---------- al abrir la botella ---------- */
export function bottleModal(bottle,today=dateKey(),setup={}){
  if(!canOpenBottle(bottle,today))return '';
  const tint=tintOf(bottle);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  return `<div class="modal-card bottle-modal ${bottle.seen===false?'is-fresh':''}" style="--tint:${tint.hex}" data-modal-bottle="${bottle.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <span class="bottle-wax" aria-hidden="true">${bottleGlyph(bottle,{paper:false})}<i class="wax-crack"></i></span>
    <p class="tale">De vuelta</p>
    <div class="bottle-note" data-fate="returned">
      <blockquote class="bottle-modal-text">${esc(bottle.text)}</blockquote>
      ${mood?`<p class="bottle-modal-mood">${mood.emoji} · ${mood.label.toLowerCase()}</p>`:''}
    </div>
    ${bottle.reply?`<div class="bottle-reply-box"><span>Respuesta</span><p>${esc(bottle.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">Responder</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${bottle.id}:text" placeholder="Tu respuesta…">${esc(bottle.replyDraft||'')}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${bottle.reply?`<button class="button outline" data-modal="reply-clear">Quitar respuesta</button>`:`<button class="button outline" data-modal="reply">Responder</button>`}
      <button class="button outline" data-modal="keep">${bottle.kept?'Quitar de guardados':'Guardar'}</button>
      <button class="button solid" data-modal="to-entry">Guardar hoy</button>
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
  const title=returned?'De vuelta':drifting?'En camino':'Pensamientos';
  const count=returned?`${returned} ${returned===1?'nuevo':'nuevos'}`
    :drifting?`${drifting} ${drifting===1?'nota':'notas'}`:'';
  return `<section class="card sea-teaser ${returned?'is-arrival':''}">
    <span class="soft-icon ${returned?'accent':''}">${icon('spark')}</span>
    <div><h2>${title}</h2>${count?`<p class="sea-teaser-count">${count}</p>`:''}</div>
    <button type="button" class="button outline small-btn" data-view="thoughts">Abrir</button>
  </section>`;
}

export function emptySea(tab='shore'){
  const labels={shore:'Sin novedades',sea:'Todo tranquilo',kept:'Sin guardados',lost:'Sin pérdidas'};
  return `<div class="empty-state sea-empty" data-tab="${tab}">
    <span class="sea-empty-art">${bottleGlyph({})}<i class="sea-empty-ripple"></i></span>
    <h3>${esc(labels[tab]||'En calma')}</h3>
  </div>`;
}
