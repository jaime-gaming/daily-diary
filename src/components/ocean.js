/* ============================================================
   El mar de los pensamientos.
   Se escribe, se echa y se deja estar. De vez en cuando vuelve
   algo: entonces se lee, se contesta o se ancla.
   Todo dibujado con SVG y CSS: ni imágenes, ni fuentes remotas.
   ============================================================ */

import {icon,escape as esc} from './ui.js';
import {MOODS} from '../data/constants.js';
import {dateKey,longDate,daysBetween} from '../utils/dates.js';
import {
  SEAS,GLASS_TINTS,seaById,tideInfo,voyageProgress,seaPhrase,
  groupBottles,thoughtWordCount,driftX,weatherOf
} from '../utils/ocean.js';

export const tintOf=bottle=>GLASS_TINTS.find(g=>g.id===bottle?.glass)||GLASS_TINTS[0];

const firstWords=(text,n=8)=>{
  const words=String(text||'').trim().split(/\s+/);
  return words.slice(0,n).join(' ')+(words.length>n?'…':'');
};

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

export function tideRule(){
  let d='M0 15';
  for(let x=0;x<2400;x+=120)d+=' q30 -9 60 0 q30 9 60 0';
  return `<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${d}"/>
  </svg>`;
}

/* ---------- el mar, tal cual ---------- */
export function seaPanel(thoughts=[],today=dateKey()){
  const groups=groupBottles(thoughts,today);
  const part=weatherOf(today);
  const tide=tideInfo(today);
  const seed=daysBetween('2020-01-01',today);

  const fleet=groups.drifting.map(b=>{
    const p=voyageProgress(b,today);
    const tint=tintOf(b);
    const at=daysBetween('2020-01-01',b.castAt);
    return `<li class="sea-float" style="--x:${(driftX(p.pct)*100).toFixed(1)}%;--tint:${tint.hex};--lift:${(48+(at%5)*2.4).toFixed(1)}%;--delay:${(at%9*.4).toFixed(2)}s;--dur:${(6-part.rough*2).toFixed(1)}s;--bob:${(2.5+(at%3)*1.2).toFixed(1)}px">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${b.id}" aria-label="${esc(firstWords(b.text,12))}">
        <span class="sea-wake" aria-hidden="true"></span>
        ${bottleGlyph(b)}
        <span class="sea-float-whisper">${esc(firstWords(b.text,7))}</span>
      </button>
    </li>`;
  }).join('');

  const shore=groups.returned.slice(0,3).map((b,i)=>`
    <button type="button" class="shore-bottle ${b.seen?'':'is-new'}" data-action="open-bottle" data-id="${b.id}">
      <span class="shore-bottle-glow">${bottleGlyph(b,{class:'is-landed'})}</span>
      <span class="shore-bottle-meta">
        <strong>${esc(longDate(b.returnedAt||today,{day:'numeric',month:'long'}))}</strong>
        <small>${esc(firstWords(b.text,10))}</small>
      </span>
      ${b.seen?'':'<span class="shore-new-dot" aria-label="sin leer"></span>'}
    </button>`).join('');

  const headline=groups.returned.length
    ?`Volvió ${groups.returned.length===1?'una':'algo'} que habías soltado`
    :groups.drifting.length
      ?`${groups.drifting.length===1?'Una botella anda':'Andan por ahí '+groups.drifting.length+' botellas'} por el agua`
      :'El mar está vacío';

  return `<section class="sea-panel ${groups.returned.length?'has-shore':''}" data-tide="${tide.key}" data-weather="${part.weather.id}"
    style="--water:${(part.level*100).toFixed(1)}%;--rough:${part.rough.toFixed(2)}">
    <header class="sea-sky">
      <span class="sea-wash sea-wash-1" aria-hidden="true"></span>
      <span class="sea-wash sea-wash-2" aria-hidden="true"></span>
      <h2 class="sea-headline">${esc(headline)}</h2>
      <p class="sea-sub">${esc(seaSubtitle(groups,today,part))}</p>
    </header>
    <div class="sea-water">
      ${wavesSvg(seed,part.rough)}
      <span class="sea-lighthouse" aria-hidden="true">${lighthouseSvg()}</span>
      <ul class="sea-fleet">${fleet}</ul>
      <span class="sea-horizon-line"></span>
    </div>
    ${shore?`<div class="sea-shore"><div class="shore-list">${shore}</div>${groups.returned.length>3?`<span class="shore-more">${groups.returned.length-3} más en la orilla</span>`:''}</div>`:''}
  </section>`;
}

function seaSubtitle(groups,today,part){
  if(groups.returned.length)return 'Está en la orilla, abierta cuando tú quieras.';
  if(groups.drifting.length)return part.weather.id==='gale'
    ?'Con este mar no se ve ninguna desde la playa.'
    :'No hace falta volver a mirar: si tiene que volver, vuelve.';
  return 'Escribe algo que no quieras guardar y suéltalo ahí fuera.';
}

function lighthouseSvg(){
  return `<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 58%,transparent)" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".5"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 62%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.4" fill="var(--ochre)"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- escribir y soltar ---------- */
export function bottleComposer(setup={},today=dateKey(),draft={}){
  const draftText=String(draft.text||'');
  const restored=draft.restoredFrom
    ?`<p class="draft-note" role="status">${icon('pen')} Sigues con la misma de ${esc(draft.restoredFrom)}. <button type="button" class="text-button is-danger" data-action="discard-bottle-draft">empezar de cero</button></p>`
    :'';
  return `<form id="bottle-form" class="card bottle-composer">
    ${restored}
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Lo que hoy no quieres dejar escrito en el cuaderno.">${esc(draftText)}</textarea>

    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${MOODS.map(m=>`<label class="mini-mood" style="--mood-color:${m.color}" title="${m.label}">
          <input type="radio" name="mood" value="${m.value}" ${draft.mood===m.value?'checked':''}>
          <span>${m.emoji}</span>
        </label>`).join('')}
      </div>
      <span class="word-count" id="bottle-words">${draftText.trim()?draftText.trim().split(/\s+/).length:0} palabras</span>
      <button type="submit" class="text-button cast-btn"${draftText.trim()?'':' disabled'}>${icon('send')} echar al mar</button>
    </div>

    <div class="sea-picker" role="radiogroup" aria-label="¿Hasta dónde?">
      <span class="sea-picker-label">¿Hasta dónde?</span>
      ${SEAS.map((s,i)=>`<label class="sea-option" style="--opt-i:${i}">
        <input type="radio" name="sea" value="${s.id}" ${(draft.sea||'breeze')===s.id?'checked':''}>
        <span class="sea-option-name">${esc(s.label)}</span>
        <span class="sea-option-days">${s.min}–${s.max} días</span>
      </label>`).join('')}
    </div>
  </form>`;
}

/* ---------- una botella en la lista ---------- */
export function bottleCard(bottle,today=dateKey(),index=0){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const when=longDate(bottle.castAt,{day:'numeric',month:'short'});
  const line=p.fate==='drifting'
    ?`en el agua desde el ${when}`
    :p.fate==='returned'
      ?`soltada el ${when} · volvió el ${longDate(bottle.returnedAt||today,{day:'numeric',month:'long'})}`
      :`soltada el ${when} · nunca llegó`;
  return `<article class="card bottle-card is-${p.fate}" style="--tint:${tint.hex};--i:${Math.min(9,index)}" data-bottle-id="${bottle.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${bottleGlyph(bottle)}</span>
      <div class="bottle-card-who">
        <p class="field-caption">${esc(line)}</p>
        <h3>${esc(sea.label)}</h3>
      </div>
      ${bottle.kept?`<span class="kept-mark" title="anclada al cuaderno">${icon('bookmark')}</span>`:''}
    </header>
    <p class="bottle-card-text ${thoughtWordCount(bottle.text)<=26?'is-short':''}">${esc(bottle.text)}</p>
    ${p.fate==='drifting'?`<p class="bottle-card-quiet">${esc(seaPhrase(bottle,today))}</p>`:''}
    ${bottle.reply?`<p class="bottle-card-reply"><span>le contestaste:</span> ${esc(bottle.reply)}</p>`:''}
    <footer class="bottle-card-foot">
      ${p.fate==='returned'?`<button type="button" class="text-button" data-action="open-bottle" data-id="${bottle.id}">abrir</button>`:''}
      ${p.fate==='lost'?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${bottle.id}">volver a lanzarla</button>`:''}
      ${p.fate==='drifting'?`<button type="button" class="text-button" data-action="open-bottle" data-id="${bottle.id}">ver</button>`:''}
      <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${bottle.id}" aria-label="romper la botella">${icon('trash')}</button>
    </footer>
  </article>`;
}

/* ---------- al abrir la botella ---------- */
export function bottleModal(bottle,today=dateKey(),setup={}){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  const atSea=Math.max(1,daysBetween(bottle.castAt,bottle.returnedAt||bottle.lostAt||today));
  const tale=p.fate==='returned'
    ?`La soltaste el ${longDate(bottle.castAt,{day:'numeric',month:'long'})} y ha vuelto ${atSea} días después, en ${sea.label.toLowerCase()}.`
    :p.fate==='lost'
      ?`La soltaste el ${longDate(bottle.castAt,{day:'numeric',month:'long'})}. Este papel se quedó fuera; solo lo lees tú.`
      :`Suelta el ${longDate(bottle.castAt,{day:'numeric',month:'long'})}, día ${p.atSea} en el agua.`;
  return `<div class="modal-card bottle-modal ${bottle.seen===false?'is-fresh':''}" style="--tint:${tint.hex}" data-modal-bottle="${bottle.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <span class="bottle-wax" aria-hidden="true">${bottleGlyph(bottle,{paper:false})}<i class="wax-crack"></i></span>
    <p class="tale">${esc(tale)}</p>
    <div class="bottle-note" data-fate="${p.fate}">
      <blockquote class="bottle-modal-text">${esc(bottle.text)}</blockquote>
      ${mood?`<p class="bottle-modal-mood">${mood.emoji} · ${mood.label.toLowerCase()}</p>`:''}
    </div>
    ${p.fate==='drifting'?`<p class="field-caption modal-quiet">Todavía no se sabe si volverá. Puedes leerla aquí las veces que quieras.</p>`:''}
    ${bottle.reply?`<div class="bottle-reply-box"><span>tu respuesta:</span><p>${esc(bottle.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Le contestas?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${bottle.id}:text" placeholder="Se guarda aquí aunque lo dejes a medias.">${esc(bottle.replyDraft||'')}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${bottle.reply?`<button class="button outline" data-modal="reply-clear">quitar la respuesta</button>`:`<button class="button outline" data-modal="reply">contestar</button>`}
      <button class="button outline" data-modal="keep">${bottle.kept?'desanclar':'anclar al cuaderno'}</button>
      ${p.fate==='lost'?`<button class="button outline" data-modal="recast">volver a lanzar</button>`:''}
      <button class="button solid" data-modal="to-entry">copiar en la entrada de hoy</button>
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
  const today=dateKey();
  const groups=groupBottles(thoughts,today);
  const first=groups.returned[0];
  if(first){
    const tint=tintOf(first);
    return `<section class="card sea-teaser is-arrival" style="--tint:${tint.hex}">
      <div class="sea-teaser-waves">${wavesSvg(2,0)}</div>
      <h2>Ha vuelto algo</h2>
      <p class="sea-teaser-quote">«${esc(firstWords(first.text,18))}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="text-button" data-action="open-bottle" data-id="${first.id}">leerla</button>
        ${groups.returned.length>1?`<span class="sea-teaser-count">y ${groups.returned.length-1} más en la orilla</span>`:''}
      </div>
    </section>`;
  }
  const drifting=groups.drifting.length;
  return `<section class="card sea-teaser">
    <div class="sea-teaser-waves">${wavesSvg(5,0)}</div>
    <h2>${drifting?`${drifting} ${drifting===1?'botella anda suelta':'botellas andan sueltas'}`:'El mar está vacío'}</h2>
    <p class="sea-teaser-quote">${drifting
      ?esc(seaPhrase(groups.drifting[0],today))+'.'
      :'Escribe lo que no quieras guardar, ciérralo en una botella y tira. Si vuelve, aquí estará.'}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="text-button" data-view="thoughts">${drifting?'ver el agua':'echar una'}</button>
    </div>
  </section>`;
}

export function emptySea(tab='shore'){
  const copy={
    shore:['La orilla está seca','Cuando vuelva alguna, aparecerá aquí.'],
    sea:['Nada a la deriva','Echa una y olvídate hasta que el mar la traiga.'],
    kept:['Nada anclado','Al abrir una botella puedes dejarla prendida del cuaderno.'],
    lost:['El mar no se ha quedado nada','Por ahora.']
  }[tab]||['El mar está vacío','Escribe, sella y tira.'];
  return `<div class="empty-state sea-empty" data-tab="${tab}">
    <span class="sea-empty-art">${bottleGlyph({})}<i class="sea-empty-ripple"></i></span>
    <h3>${esc(copy[0])}</h3>
    <p>${esc(copy[1])}</p>
  </div>`;
}
