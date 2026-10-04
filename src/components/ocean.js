/* ============================================================
   Componentes del mar de los pensamientos
   Todo es SVG/CSS dibujado a mano: sin imágenes, sin fuentes
   remotas y sin dependencias externas.
   ============================================================ */

import {icon,escape as esc,ledger} from './ui.js';
import {MOODS} from '../data/constants.js';
import {dateKey,longDate,daysBetween} from '../utils/dates.js';
import {
  SEAS,GLASS_TINTS,seaById,tideInfo,tideNote,voyageProgress,seaPhrase,etaLabel,
  groupBottles,oceanStats,thoughtWordCount
} from '../utils/ocean.js';

const GLASS=hex=>GLASS_TINTS.find(g=>g.hex===hex)||GLASS_TINTS[0];
export const tintOf=bottle=>GLASS_TINTS.find(g=>g.id===bottle?.glass)||GLASS_TINTS[0];

/* ---------- un botella dibujada a mano ---------- */
export function bottleGlyph(bottle={},opts={}){
  const tint=tintOf(bottle);
  const cls=opts.class?` ${opts.class}`:'';
  const paper=opts.paper===false?'' : `<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${tint.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>`;
  return `<svg class="bottle-glyph${cls}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${tint.hex} 26%,transparent)" stroke="${tint.hex}" stroke-width="1.3"/>
      <path d="M11.6 6.6h4.8" stroke="${tint.hex}" stroke-width="1.1" opacity=".7"/>
      <rect x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${tint.hex}" opacity=".9"/>
      ${paper}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>
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
export function wavesSvg(seed=0){
  const layer=(amp,y,period,cls,dur)=>{
    const shift=(seed%7)*9;
    return `<path class="${cls}" style="--wave-dur:${dur}s;--wave-shift:${shift}px" d="${wavePath(2400,amp,y,period)}"/>`;
  };
  return `<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${layer(7,126,300,'wave wave-4',26)}
    ${layer(9,142,240,'wave wave-3',19)}
    ${layer(11,160,190,'wave wave-2',14)}
    ${layer(13,182,150,'wave wave-1',10)}
  </svg>`;
}

/* ---------- línea de marea decorativa ---------- */
export function tideRule(){
  let d='M0 15';
  for(let x=0;x<2400;x+=120)d+=' q30 -9 60 0 q30 9 60 0';
  return `<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${d}"/>
  </svg>`;
}

/* ---------- el mar (portada de la pestaña) ---------- */
export function seaPanel(thoughts=[],today=dateKey(),opts={}){
  const groups=groupBottles(thoughts,today);
  const tide=tideInfo(today);
  const fleet=groups.drifting.map(b=>{
    const p=voyageProgress(b,today);
    const tint=tintOf(b);
    const lift=(daysBetween('2020-01-01',b.castAt)%4)*3;
    return `<li class="sea-float" style="--x:${(6+p.pct*84).toFixed(1)}%;--tint:${tint.hex};--lift:${52+lift}%;--delay:${((daysBetween('2020-01-01',b.castAt)%9)*.4).toFixed(2)}s">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${b.id}" title="${esc((b.text||'').slice(0,70))}">
        ${bottleGlyph(b)}
        <span class="sea-float-tag">${p.atSea} d en el mar</span>
      </button>
    </li>`;
  }).join('');
  const shore=groups.returned.slice(0,4).map(b=>`
    <button type="button" class="shore-bottle ${b.seen?'':'is-new'}" data-action="open-bottle" data-id="${b.id}">
      <span class="shore-bottle-glow">${bottleGlyph(b,{class:'is-landed'})}</span>
      <span class="shore-bottle-meta">
        <strong>${daysBetween(b.castAt,b.returnedAt||today)} días después</strong>
        <small>${esc((b.text||'').slice(0,54))}${(b.text||'').length>54?'…':''}</small>
      </span>
      ${b.seen?'':'<span class="shore-new-dot" aria-label="Sin abrir"></span>'}
    </button>`).join('');
  const lost=groups.lost.length?`<span class="sea-lost-note">${icon('anchor')} ${groups.lost.length} ${groups.lost.length===1?'botella perdida':'botellas perdidas'} en el mar</span>`:'';

  return `<section class="sea-panel ${groups.returned.length?'has-shore':''}" data-tide="${tide.key}">
    <header class="sea-sky">
      <span class="sea-tide-pill">${icon('tide')} ${esc(tide.name)} · luna al ${Math.round(tide.moon*100)}%</span>
      <h2 class="sea-headline">${seaHeadline(groups,today)}</h2>
      <p class="sea-sub">${esc(tideNote(today))}</p>
    </header>
    <div class="sea-water">
      ${wavesSvg(daysBetween('2020-01-01',today))}
      <span class="sea-lighthouse" aria-hidden="true">${lighthouseSvg()}</span>
      <ul class="sea-fleet">${fleet}</ul>
      <span class="sea-horizon-line"></span>
    </div>
    ${shore?`<div class="sea-shore"><span class="sea-shore-label">${icon('anchor')} La orilla</span><div class="shore-list">${shore}</div></div>`:''}
    ${lost?`<footer class="sea-foot">${lost}<button type="button" class="text-button" data-view="thoughts" data-action="thoughts-tab" data-tab="lost">Ver el archivo ${icon('arrow')}</button></footer>`:''}
  </section>`;
}

function seaHeadline(groups,today){
  const out=groups.drifting.length,back=groups.returned.length;
  if(back>0)return `El mar te ha devuelto ${back} ${back===1?'pensamiento':'pensamientos'}`;
  if(out>0)return `${out} ${out===1?'pensamiento navega':'pensamientos navegan'} ${seaById(groups.drifting[0].sea).reach}`;
  return 'El mar está en calma';
}

function lighthouseSvg(){
  return `<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 62%,transparent)" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".55"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 70%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.6" fill="var(--ochre)"/>
    <path class="sea-beam" d="M36 25h22l-6 5h-16Z" fill="var(--ochre)" opacity=".35"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- escribir y soltar ---------- */
export function bottleComposer(setup={},today=dateKey(),draft={}){
  const draftText=String(draft.text||'');
  const words=draftText.trim()?draftText.trim().split(/\s+/).length:0;
  return `<form id="bottle-form" class="card bottle-composer">
    <div class="section-heading">
      <p class="section-index">${icon('pen')} Escribe tu pensamiento</p>
      <span class="field-caption">máx. 1200 caracteres</span>
    </div>
    <label class="sr-only" for="bottle-text">Pensamiento para la botella</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="4"
      placeholder="Lo que hoy no quieres guardar en el cuaderno... escríbelo y déjalo ir.">${esc(draftText)}</textarea>
    <p class="composer-foot-note">${icon('wave')} Una vez en el agua, el viaje ya está escrito: ni tú ni nadie podrá cambiarlo.</p>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="¿Con qué ánimo lo escribes?">
        <span class="composer-bar-label">Ánimo</span>
        ${MOODS.map(m=>`<label class="mini-mood" style="--mood-color:${m.color}" title="${m.label}">
          <input type="radio" name="mood" value="${m.value}" ${draft.mood===m.value?'checked':''}>
          <span>${m.emoji}</span>
        </label>`).join('')}
      </div>
      <span class="word-count" id="bottle-words">${words} palabras</span>
    </div>

    <p class="section-index" style="margin-top:22px">${icon('wave')} ¿Hasta dónde lo lanzas?</p>
    <div class="sea-picker">
      ${SEAS.map(s=>`<label class="sea-option" style="--sea-min:${s.min};--sea-max:${s.max}">
        <input type="radio" name="sea" value="${s.id}" ${(draft.sea||'breeze')===s.id?'checked':''}>
        <span class="sea-option-top">
          <strong>${esc(s.label)}</strong>
          <small>${s.min}–${s.max} días</small>
        </span>
        <span class="sea-option-desc">${esc(s.desc)}</span>
        <span class="sea-option-odds"><i style="width:${Math.round(s.chance*100)}%"></i></span>
        <span class="sea-option-note">vuelve ${Math.round(s.chance*100)} de cada 100 veces</span>
      </label>`).join('')}
    </div>

    <div class="save-area">
      <span>${icon('lock')} Nada sale de este navegador: el azar lo calcula tu propio cuaderno.</span>
      <button type="submit" class="button solid save-button">${icon('send')} Echar al mar</button>
    </div>
  </form>`;
}

/* ---------- una botella en la lista ---------- */
export function bottleCard(bottle,today=dateKey(),index=0){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  const statusLabel=p.fate==='drifting'?'en el mar':p.fate==='returned'?'en la orilla':'perdida';
  return `<article class="card bottle-card is-${p.fate}" style="--tint:${tint.hex};--i:${Math.min(9,index)}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${bottleGlyph(bottle)}</span>
      <div class="bottle-card-who">
        <p class="eyebrow">escrito el ${esc(longDate(bottle.castAt,{day:'numeric',month:'long',year:'numeric'}))}</p>
        <h3>${esc(sea.label)} <span class="bottle-card-status s-${p.fate}">${statusLabel}</span></h3>
      </div>
      ${mood?`<span class="mood-tag" style="--mood:${mood.color}">${mood.emoji} ${mood.label}</span>`:''}
    </header>
    <p class="bottle-card-text ${thoughtWordCount(bottle.text)<=26?'is-short':''}">${esc(bottle.text)}</p>
    ${bottle.reply?`<p class="bottle-card-reply"><span>${icon('reply')} Tu respuesta de entonces:</span> ${esc(bottle.reply)}</p>`:''}

    <div class="drift-track" style="--pct:${Math.round(p.pct*100)}%">
      <span class="drift-line"></span>
      <span class="drift-marker">${p.fate==='lost'?icon('anchor'):icon('wave')}</span>
      <span class="drift-caption">${esc(seaPhrase(bottle,today))}</span>
    </div>

    <footer class="bottle-card-foot">
      <span class="chiplet">${icon('compass')} ${esc(bottle.current||'a la deriva')}</span>
      <span class="chiplet">${icon('wind')} ${p.miles} millas</span>
      ${p.milesHome!==null&&p.fate==='drifting'?`<span class="chiplet">${icon('anchor')} a ${p.milesHome} millas de casa</span>`:''}
      <span class="chiplet">${icon('week')} ${etaLabel(bottle,today)}</span>
      <div class="bottle-card-actions">
        ${p.fate==='drifting'?`<button type="button" class="text-button" data-action="recall-bottle" data-id="${bottle.id}">${icon('wind')} Traer a la orilla</button>`:''}
        ${p.fate==='returned'?`<button type="button" class="text-button" data-action="open-bottle" data-id="${bottle.id}">${icon('stamp')} Abrir</button>`:''}
        ${p.fate==='lost'?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${bottle.id}">${icon('refresh')} Volver a lanzar</button>`:''}
        <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${bottle.id}" aria-label="Romper la botella">${icon('trash')}</button>
      </div>
    </footer>
  </article>`;
}

/* ---------- al abrir la botella ---------- */
export function bottleModal(bottle,today=dateKey(),setup={}){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  const tideBack=bottle.returnedAt?tideInfo(bottle.returnedAt):null;
  const atSea=Math.max(1,daysBetween(bottle.castAt,bottle.returnedAt||bottle.lostAt||today));
  const oldEntry=setup.name?`Cuaderno de ${esc(setup.name)}`:'Tu cuaderno';
  return `<div class="modal-card bottle-modal" style="--tint:${tint.hex}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <span class="bottle-wax" aria-hidden="true">${bottleGlyph(bottle,{paper:false})}</span>
    <p class="eyebrow">${oldEntry} · botella del ${esc(longDate(bottle.castAt,{day:'numeric',month:'long',year:'numeric'}))}</p>
    <h2 class="bottle-modal-title">${p.fate==='returned'?'El mar te la devolvió':p.fate==='lost'?'Se perdió en el mar':'Sigue en el mar'}</h2>
    ${mood?`<p class="bottle-modal-mood">${mood.emoji} Lo escribiste sintiendo: <b>${mood.label.toLowerCase()}</b></p>`:''}
    <blockquote class="bottle-modal-text">${esc(bottle.text)}</blockquote>
    <div class="bottle-modal-voyage">
      ${ledger('Días a la deriva',atSea,'días')}
      ${ledger('Millas navegadas',p.miles,'millas')}
      ${ledger('Mar elegido',esc(sea.label.split(' ')[0]),'',sea.desc)}
      ${ledger('Marea',tideBack?esc(tideBack.name.replace('Marea ','')):'—','','las botellas vuelven en marea viva')}
    </div>
    ${p.fate==='returned'?`<p class="bottle-modal-foot-note">${icon('check')} Volvió el ${esc(longDate(bottle.returnedAt||today,{day:'numeric',month:'long'}))}, ${atSea} días después de soltarla.</p>`:''}
    ${p.fate==='lost'?`<p class="bottle-modal-foot-note is-lost">${icon('anchor')} Nunca llegó a ninguna orilla. Lo que escribiste sigue aquí, si lo quieres leer.</p>`:''}
    ${bottle.reply?`<div class="bottle-reply-box"><span>${icon('reply')} Respondiste a tu yo de entonces</span><p>${esc(bottle.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Qué le dirías hoy a quien escribió esto?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" placeholder="Respóndele con la calma que te da el tiempo..."></textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${bottle.reply?'':`<button class="button outline" data-modal="reply">${icon('reply')} Responder</button>`}
      ${bottle.reply?`<button class="button outline" data-modal="reply-clear">${icon('close')} Quitar respuesta</button>`:''}
      ${p.fate==='lost'?`<button class="button outline" data-modal="recast">${icon('refresh')} Volver a lanzar</button>`:''}
      <button class="button outline" data-modal="keep">${icon('bookmark')} ${bottle.kept?'Desanclar':'Anclar a la colección'}</button>
      <button class="button solid" data-modal="to-entry">${icon('pen')} Copiar en la entrada de hoy</button>
      ${p.fate==='drifting'?`<button class="button solid" data-modal="recall">${icon('wind')} Traer a la orilla</button>`:''}
    </div>
  </div>`;
}

/* ---------- resumen y archivo ---------- */
export function oceanLedger(thoughts=[],today=dateKey()){
  const s=oceanStats(thoughts,today);
  return `<div class="ledger-grid">
    ${ledger('Botellas en el mar',s.drifting,'activas',s.returned?`${s.returned} esperando en la orilla`:'el agua está tranquila')}
    ${ledger('De vueltas a casa',s.returned,'recibidas',`media de ${s.avgDays} días de viaje`)}
    ${ledger('Perdidas',s.lost,'a pique','también forman parte del mar')}
    ${ledger('Palabras soltadas',s.words,'palabras',s.farthest.miles?`el viaje más largo: ${s.farthest.miles} millas`:'aún no hay travesías')}
  </div>`;
}

export function shoreTeaser(thoughts=[]){
  const today=dateKey();
  const groups=groupBottles(thoughts,today);
  const first=groups.returned[0];
  const drifting=groups.drifting.length;
  if(first){
    const tint=tintOf(first);
    return `<section class="card sea-teaser is-arrival" style="--tint:${tint.hex}">
      <div class="sea-teaser-waves">${wavesSvg(2)}</div>
      <p class="eyebrow">${icon('wave')} El mar</p>
      <h2>Te ha vuelto una botella</h2>
      <p class="sea-teaser-quote">«${esc(first.text.slice(0,120))}${first.text.length>120?'…':''}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="button solid small-btn" data-action="open-bottle" data-id="${first.id}">${icon('stamp')} Abrir la botella</button>
        ${drifting?`<span class="sea-teaser-count">${drifting} ${drifting===1?'botella sigue':'botellas siguen'} en el agua</span>`:''}
      </div>
    </section>`;
  }
  return `<section class="card sea-teaser">
    <div class="sea-teaser-waves">${wavesSvg(5)}</div>
    <p class="eyebrow">${icon('wave')} El mar</p>
    <h2>${drifting?`${drifting} ${drifting===1?'pensamiento navega':'pensamientos navegan'}`:'Nada escrito en el agua'}</h2>
    <p class="sea-teaser-quote">${drifting
      ?`${esc(seaPhrase(groups.drifting[0],today))} · ${esc(etaLabel(groups.drifting[0],today))}`
      :'Escribe un pensamiento, séllalo y echa la botella al mar. Puede que vuelva a ti.'}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="button outline small-btn" data-view="thoughts">${icon('pen')} ${drifting?'Ver la travesía':'Escribir un pensamiento'}</button>
    </div>
  </section>`;
}

export function emptySea(){
  return `<div class="empty-state sea-empty">
    <span class="sea-empty-art">${bottleGlyph({})}<i class="sea-empty-ripple"></i></span>
    <h3>El mar está vacío</h3>
    <p>Escribe lo que no quieres guardar, échalo a la deriva y deja que la marea decida si devolvértelo.</p>
  </div>`;
}
