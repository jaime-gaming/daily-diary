/* ============================================================
   Componentes del mar de los pensamientos
   ------------------------------------------------------------
   Todo está dibujado a mano con SVG y CSS: sin imágenes, sin
   fuentes remotas y sin dependencias externas. El mar no es un
   fondo decorativo: el parte de hoy (clima, viento, marea) se
   pinta y a la vez decide cómo viaja cada botella.
   ============================================================ */

import {icon,escape as esc,ledger} from './ui.js';
import {MOODS} from '../data/constants.js';
import {dateKey,longDate,daysBetween} from '../utils/dates.js';
import {
  SEAS,GLASS_TINTS,seaById,tideInfo,tideNote,weatherOf,voyageProgress,seaPhrase,etaLabel,
  groupBottles,oceanStats,thoughtWordCount,milestonesOf,driftX,describePart,seaForecast,nextArrival
} from '../utils/ocean.js';

export const tintOf=bottle=>GLASS_TINTS.find(g=>g.id===bottle?.glass)||GLASS_TINTS[0];
export const GLASS=hex=>GLASS_TINTS.find(g=>g.hex===hex)||GLASS_TINTS[0];

export const WEATHER_ICONS={calm:'sun',haze:'fog',wind:'wind',rain:'rain',gale:'storm'};
export const weatherIcon=id=>icon(WEATHER_ICONS[id]||'wave');

/* «4 oct» — etiqueta corta para el pronóstico */
const dayLabel=date=>longDate(date,{day:'numeric',month:'short'}).replace(/\. /g,' ').trim();

/* ---------- un botella dibujada a mano ---------- */
export function bottleGlyph(bottle={},opts={}){
  const tint=tintOf(bottle);
  const cls=opts.class?` ${opts.class}`:'';
  const paper=opts.paper===false?'' : `<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${tint.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>`;
  return `<svg class="bottle-glyph${cls}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${tint.hex} 26%,transparent)" stroke="${tint.hex}" stroke-width="1.3"/>
      <path d="M11.6 6.6h4.8" stroke="${tint.hex}" stroke-width="1.1" opacity=".7"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${tint.hex}" opacity=".9"/>
      ${paper}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>
    </g>
  </svg>`;
}

/* ---------- olas: cuatro capas que se mueven a distinto ritmo ---------- */
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
    /* con mar revuelto las capas aceleran y suben de amplitud */
    const speed=(dur*(1-Math.min(.62,rough*.55))).toFixed(1);
    return `<path class="${cls}" style="--wave-dur:${speed}s;--wave-shift:${shift}px;--wave-amp:${(1+rough*.5).toFixed(2)}" d="${wavePath(2400,amp,y,period)}"/>`;
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

/* ---------- el cielo: disco solar/lunar y aguadas de acuarela ---------- */
function skyArt(tide,dateStr){
  const illum=Math.round(tide.illum*100);
  const phase=tide.phase.replace('luna ','');
  return `<span class="sea-wash sea-wash-1" aria-hidden="true"></span>
    <span class="sea-wash sea-wash-2" aria-hidden="true"></span>
    <span class="sea-disc" style="--illum:${Math.max(6,illum)}%" data-phase="${esc(phase)}" aria-hidden="true"></span>`;
}

/* ---------- la flota: cada botella en su punto real de la travesía ---------- */
function fleetList(bottles,today,part){
  if(!bottles.length)return '';
  return `<ul class="sea-fleet">${bottles.map(b=>{
    const p=voyageProgress(b,today);
    const tint=tintOf(b);
    const x=(driftX(p.pct)*100).toFixed(1);
    const seed=daysBetween('2020-01-01',b.castAt);
    const bob=(2.5+(seed%3)*1.4)*(1+part.rough*.9);
    const daysLeft=Math.max(0,p.total-p.atSea);
    const landing=daysLeft<=2&&p.fate==='drifting';
    return `<li class="sea-float ${landing?'is-landing':''}" style="--x:${x}%;--tint:${tint.hex};--lift:${(46+(seed%5)*2.6).toFixed(1)}%;--bob:${bob.toFixed(1)}px;--delay:${(seed%9*.4).toFixed(2)}s;--dur:${(5.6-part.rough*1.8).toFixed(1)}s">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${b.id}" title="${esc((b.text||'').slice(0,70))}">
        <span class="sea-wake" aria-hidden="true"></span>
        ${bottleGlyph(b)}
        <span class="sea-float-tag">${landing?'toca tierra':`${p.atSea} d · ${etaLabel(b,today)}`}</span>
      </button>
    </li>`;
  }).join('')}</ul>`;
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

/* ---------- la orilla: botellas devueltas, dobladas y selladas ---------- */
function shoreList(bottles,today){
  if(!bottles.length)return '';
  return `<div class="sea-shore"><span class="sea-shore-label">${icon('anchor')} La orilla</span>
    <div class="shore-list">${bottles.slice(0,4).map((b,i)=>`
      <button type="button" class="shore-bottle ${b.seen?'':'is-new'}" style="--i:${i}" data-action="open-bottle" data-id="${b.id}">
        <span class="shore-bottle-glow">${bottleGlyph(b,{class:'is-landed'})}</span>
        <span class="shore-bottle-meta">
          <strong>${daysBetween(b.castAt,b.returnedAt||today)} días después</strong>
          <small>${esc((b.text||'').slice(0,54))}${(b.text||'').length>54?'…':''}</small>
        </span>
        ${b.seen?'':'<span class="shore-new-dot" aria-label="Sin abrir"></span>'}
      </button>`).join('')}
    </div>
  </div>`;
}

/* ---------- el parte, en una línea ---------- */
export function partLine(dateStr=dateKey()){
  return `<span class="part-line">${esc(describePart(dateStr))}</span>`;
}

/* ---------- franjas del parte: día a día ---------- */
function ribbonDay(f){
  const inner=`<span class="ribbon-name">${f.marker||dayLabel(f.date)}</span>
      <span class="ribbon-water"><i style="height:${(f.level*100).toFixed(0)}%"></i></span>
      <span class="ribbon-glyph">${weatherIcon(f.weather.id)}</span>
      <span class="ribbon-dots">${'<b></b>'.repeat(Math.min(3,f.arrivalCount))}</span>
      ${f.tide.key==='spring'?'<span class="ribbon-spring" title="marea viva"></span>':''}`;
  const cls=`ribbon-day${f.arrivalCount?' is-arrival':''}`;
  const today=f.isToday?' data-today="1"':'';
  if(f.arrivalCount){
    const n=f.arrivalCount;
    return `<button type="button" class="${cls}" role="listitem" data-action="sea-day" data-date="${f.date}"${today} title="${n} ${n===1?'botella varada':'botellas varadas'}">${inner}</button>`;
  }
  return `<span class="${cls}" role="listitem" data-date="${f.date}"${today}>${inner}</span>`;
}
function forecastDay(f){
  const bottom=f.arrivalCount
    ?`<span class="forecast-cta">${icon('anchor')} abrir</span>`
    :(f.tide.key==='spring'?'<span class="forecast-spring">viva</span>':'<span class="forecast-spring is-ghost">&nbsp;</span>');
  const inner=`<span class="forecast-top"><b>${f.marker||dayLabel(f.date)}</b>${weatherIcon(f.weather.id)}</span>
      <span class="forecast-column"><i style="height:${(f.level*100).toFixed(0)}%"></i></span>
      <span class="forecast-dots">${f.arrivalCount?`<em>${f.arrivalCount}</em>`:''}</span>
      <span class="forecast-foot">${bottom}</span>`;
  const attrs=`data-date="${f.date}"${f.isToday?' data-today="1"':''}${f.tide.key==='spring'?' data-spring="1"':''}`;
  if(f.arrivalCount){
    return `<button type="button" class="forecast-day has-arrival" ${attrs} data-action="sea-day" title="${f.arrivalCount} ${f.arrivalCount===1?'botella':'botellas'} que ${f.arrivalCount===1?'toca tierra':'tocan tierra'}">${inner}</button>`;
  }
  return `<div class="forecast-day" ${attrs}>${inner}</div>`;
}

/* ---------- la portada del mar ---------- */
export function seaPanel(thoughts=[],today=dateKey(),opts={}){
  const groups=groupBottles(thoughts,today);
  const part=weatherOf(today);
  const tide=part.tide;
  const forecast=seaForecast({today,bottles:thoughts,days:opts.ribbonDays||7});
  const next=nextArrival(groups.drifting.length?groups.drifting:[],today);
  const lost=groups.lost.length?`<span class="sea-lost-note">${icon('anchor')} ${groups.lost.length} ${groups.lost.length===1?'botella perdida':'botellas perdidas'} en el mar</span>`:'';
  return `<section class="sea-panel ${groups.returned.length?'has-shore':''}" data-tide="${tide.key}" data-weather="${part.weather.id}"
    style="--water:${(part.level*100).toFixed(1)}%;--rough:${part.rough.toFixed(2)}" aria-label="El estado del mar hoy">
    <header class="sea-sky">
      ${skyArt(tide,today)}
      <span class="sea-tide-pill">${icon('tide')} ${esc(tide.name)} · luna al ${Math.round(tide.illum*100)}%</span>
      <h2 class="sea-headline">${seaHeadline(groups,today)}</h2>
      <p class="sea-sub">${esc(part.weather.desc)}</p>
      <p class="sea-part">${weatherIcon(part.weather.id)} ${esc(part.weather.label)} · viento ${esc(part.wind.label)}, ${part.wind.kmh} nudos${part.wind.offshore?' <span class="sea-part-flag">de tierra</span>':' <span class="sea-part-flag is-good">a favor</span>'}</p>
    </header>
    <div class="sea-water">
      ${part.weather.id==='rain'||part.weather.id==='gale'?'<span class="sea-veil" aria-hidden="true"></span>':''}
      ${wavesSvg(daysBetween('2020-01-01',today),part.rough)}
      <span class="sea-lighthouse" aria-hidden="true">${lighthouseSvg()}</span>
      ${fleetList(groups.drifting,today,part)}
      <span class="sea-horizon-line"></span>
    </div>
    <div class="sea-ribbon" role="list">${forecast.map(ribbonDay).join('')}</div>
    ${next?`<p class="sea-next">${icon('hourglass')} La próxima botella toca tierra el <b>${esc(longDate(next.date,{day:'numeric',month:'long'}))}</b> · ${next.daysLeft} ${next.daysLeft===1?'día':'días'} · marea ${esc(tideInfo(next.date).name.replace('Marea ',''))}</p>`:''}
    ${shoreList(groups.returned,today)}
    ${lost?`<footer class="sea-foot">${lost}<button type="button" class="text-button" data-view="thoughts" data-action="thoughts-tab" data-tab="lost">Ver el archivo ${icon('arrow')}</button></footer>`:''}
  </section>`;
}

function seaHeadline(groups,today){
  const out=groups.drifting.length,back=groups.returned.length;
  if(back>0)return `El mar te ha devuelto ${back} ${back===1?'pensamiento':'pensamientos'}`;
  if(out>0)return `${out} ${out===1?'pensamiento navega':'pensamientos navegan'} ${seaById(groups.drifting[0].sea).reach}`;
  return 'El mar está en calma';
}

/* ---------- el parte en tarjeta (aside) ---------- */
export function seaPartCard(today=dateKey(),bottles=[]){
  const p=weatherOf(today);
  const tide=p.tide;
  const groups=groupBottles(bottles,today);
  const soon=seaForecast({today,bottles,days:14}).filter(f=>f.arrivalCount).slice(0,3);
  return `<section class="card sea-part-card" data-weather="${p.weather.id}" style="--water:${(p.level*100).toFixed(1)}%;--rough:${p.rough.toFixed(2)}">
    <div class="section-heading">
      <p class="section-index">${weatherIcon(p.weather.id)} El parte de hoy</p>
      <span class="tag">${esc(tide.name)}</span>
    </div>
    <p class="sea-part-headline">${esc(p.weather.label)}, con el agua al ${Math.round(p.level*100)}%</p>
    <div class="part-rows">
      <div class="part-row">
        <span class="part-row-label">${icon('wind')} Viento</span>
        <span class="part-row-value">${esc(p.wind.label)} <b>${p.wind.kmh}</b> nudos</span>
        <span class="wind-rose" style="--dir:${roseAngle(p.wind.id)}" aria-hidden="true"><i></i></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${icon('tide')} Marea</span>
        <span class="part-row-value">${esc(tide.name.replace('Marea ',''))} <b>${Math.round(tide.strength*100)}</b>%</span>
        <span class="part-meter"><i style="width:${Math.round(tide.strength*100)}%"></i></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${icon('moon')} Luna</span>
        <span class="part-row-value">${esc(tide.phase)} <b>${Math.round(tide.illum*100)}</b>%</span>
        <span class="part-moon" style="--illum:${Math.round(tide.illum*100)}%" aria-hidden="true"></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${icon('sail')} En el agua</span>
        <span class="part-row-value"><b>${groups.drifting.length}</b> ${groups.drifting.length===1?'botella':'botellas'}</span>
      </div>
    </div>
    <p class="field-caption sea-part-note">${esc(tideNote(today))} ${p.push>0?`Hoy el mar no deja entrar a nadie: lo que suelles esperarà ${p.push} ${p.push===1?'día más':'días más'} en pleamar.`:'Con este viento, lo que eches hoy entra en cuanto suba la marea.'}</p>
    ${soon.length?`<ul class="part-soon">${soon.map(f=>`<li><button type="button" data-action="sea-day" data-date="${f.date}">${icon('anchor')} <b>${f.arrivalCount}</b> el ${esc(dayLabel(f.date))}${f.day===0?' (hoy)':f.day===1?' (mañana)':''}</button></li>`).join('')}</ul>`:''}
  </section>`;
}
const ROSE={'levante':90,'poniente':270,'noroeste':315,'gallego':225,'suroeste':225,'mistral':0,'libeccio':225,'gregal':45};
export const roseAngle=id=>ROSE[id]??0;

/* ---------- la costa en 14 días ---------- */
export function seaForecastStrip(forecast=[]){
  if(!forecast.length)return '';
  return `<section class="card forecast-card" aria-label="Pronóstico de la costa">
    <div class="section-heading">
      <p class="section-index">${icon('calendar')} La costa en dos semanas</p>
      <span class="field-caption">el agua sube con la marea viva · los puntos son botellas que llegan</span>
    </div>
    <div class="forecast-grid">${forecast.map(forecastDay).join('')}</div>
    <p class="forecast-legend"><span><i class="lg lg-water"></i> nivel del agua</span><span><i class="lg lg-spring"></i> marea viva: es cuando el mar devuelve las cosas</span><span><i class="lg lg-arrival"></i> botella que toca tierra</span></p>
  </section>`;
}

/* ---------- la lista de botellas, con los hitos del viaje ---------- */
export function milestoneTrack(bottle,today=dateKey()){
  const m=milestonesOf(bottle,today);
  const p=voyageProgress(bottle,today);
  const pct=Math.round((m.fate==='drifting'?m.pct:1)*100);
  return `<div class="mile-track" style="--pct:${pct}%" data-fate="${m.fate}">
    <span class="mile-rail"><i class="mile-fill"></i></span>
    ${m.list.map((h,i)=>`<span class="mile ${h.reached?'is-reached':''} ${i===m.current&&m.fate==='drifting'?'is-here':''}" style="--mi:${i}">
      <b class="mile-dot"></b><small>${esc(h.label)}</small></span>`).join('')}
    <p class="mile-caption">${m.fate==='lost'?esc(seaPhrase(bottle,today)):m.fate==='returned'?esc(seaPhrase(bottle,today)):m.next?`${esc(seaPhrase(bottle,today))} · el próximo hito: ${esc(m.next.label)}`:esc(p.label)}</p>
  </div>`;
}

/* ---------- escribir y soltar ---------- */
export function bottleComposer(setup={},today=dateKey(),draft={}){
  const draftText=String(draft.text||'');
  const words=draftText.trim()?draftText.trim().split(/\s+/).length:0;
  const part=weatherOf(today);
  const restored=draft.restoredFrom?`<p class="draft-note" role="status">${icon('refresh')} Recuperado de donde lo dejaste <span class="draft-when">${esc(draft.restoredFrom)}</span> <button type="button" class="text-button is-danger" data-action="discard-bottle-draft">${icon('close')} descartar</button></p>`:'';
  return `<form id="bottle-form" class="card bottle-composer" data-draft-scope="botella">
    <div class="section-heading">
      <p class="section-index">${icon('pen')} Escribe tu pensamiento</p>
      <span class="save-status" data-save-status="idle">${icon('check')} se guarda solo</span>
    </div>
    ${restored}
    <label class="sr-only" for="bottle-text">Pensamiento para la botella</label>
    <textarea id="bottle-text" name="text" class="bottle-text" data-draft="botella:text" maxlength="1200" rows="4"
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

    <div class="composer-part">
      ${weatherIcon(part.weather.id)}
      <p><b>${esc(part.weather.label)}</b>, viento ${esc(part.wind.label)} a ${part.wind.kmh} nudos y ${esc(part.tide.name.toLowerCase())}. ${part.push>0?`Hoy el mar retiene lo que eches ${part.push} ${part.push===1?'día':'días'} más.`:'Hoy el mar deja entrar rápido lo que suelles.'}</p>
    </div>

    <p class="section-index" style="margin-top:22px">${icon('wave')} ¿Hasta dónde lo lanzas?</p>
    <div class="sea-picker">
      ${SEAS.map((s,i)=>`<label class="sea-option" style="--opt-i:${i}">
        <input type="radio" name="sea" value="${s.id}" ${(draft.sea||'breeze')===s.id?'checked':''}>
        <span class="sea-option-waves" aria-hidden="true">${miniWaves(i)}</span>
        <span class="sea-option-top">
          <strong>${esc(s.label)}</strong>
          <small>${s.min}–${s.max} días</small>
        </span>
        <span class="sea-option-desc">${esc(s.desc)}</span>
        <span class="sea-option-odds"><i style="width:${Math.round(s.chance*100)}%"></i><em>${Math.round(s.chance*100)}/100 vuelven</em></span>
      </label>`).join('')}
    </div>

    <div class="save-area">
      <span>${icon('lock')} Nada sale de este navegador: el azar lo calcula tu propio cuaderno.</span>
      <button type="submit" class="button solid save-button" ${draftText.trim()?'':'disabled'}>${icon('send')} Echar al mar</button>
    </div>
  </form>`;
}
function miniWaves(index){
  const amps=[3,5,8,12];
  const a=amps[index%amps.length];
  let d='M0 14';
  for(let x=0;x<200;x+=40)d+=` q10 ${-a} 20 0 q10 ${a} 20 0`;
  return `<svg viewBox="0 0 200 28" preserveAspectRatio="none" aria-hidden="true"><path d="${d}" class="mini-wave"/><path d="${d} L200 28 L0 28 Z" class="mini-wave-fill"/></svg>`;
}

/* ---------- una botella en la lista ---------- */
export function bottleCard(bottle,today=dateKey(),index=0){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  const statusLabel=p.fate==='drifting'?'en el mar':p.fate==='returned'?'en la orilla':'perdida';
  const daysLeft=Math.max(0,p.total-p.atSea);
  const landing=p.fate==='drifting'&&daysLeft<=2;
  const weather=bottle.weather?`<span class="chiplet">${weatherIcon(bottle.weather)} ${esc((WEATHER_ICONS[bottle.weather]&&bottle.weather)||'')}</span>`:'';
  return `<article class="card bottle-card is-${p.fate} ${landing?'is-landing':''}" style="--tint:${tint.hex};--i:${Math.min(9,index)}" data-bottle-id="${bottle.id}">
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

    ${milestoneTrack(bottle,today)}

    <footer class="bottle-card-foot">
      <span class="chiplet">${icon('compass')} ${esc(bottle.current||'a la deriva')}</span>
      <span class="chiplet">${icon('wind')} ${p.miles} millas</span>
      ${bottle.wind?`<span class="chiplet" title="el parte del día que la soltaste">${weatherIcon(bottle.weather)} ${esc(bottle.wind)}${bottle.windSpeed?`, ${bottle.windSpeed} nudos`:''}</span>`:''}
      ${p.milesHome!==null&&p.fate==='drifting'?`<span class="chiplet">${icon('anchor')} a ${p.milesHome} millas de casa</span>`:''}
      <span class="chiplet ${landing?'is-hot':''}">${icon('hourglass')} ${esc(etaLabel(bottle,today))}</span>
      <div class="bottle-card-actions">
        ${p.fate==='drifting'?`<button type="button" class="text-button" data-action="recall-bottle" data-id="${bottle.id}">${icon('wind')} Traer a la orilla</button>`:''}
        ${p.fate==='returned'?`<button type="button" class="text-button" data-action="open-bottle" data-id="${bottle.id}">${icon('stamp')} Abrir</button>`:''}
        ${p.fate==='lost'?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${bottle.id}">${icon('refresh')} Volver a lanzar</button>`:''}
        <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${bottle.id}" aria-label="Romper la botella">${icon('trash')}</button>
      </div>
    </footer>
  </article>`;
}

/* ---------- al abrir la botella: descorchar y desplegar el papel ---------- */
export function bottleModal(bottle,today=dateKey(),setup={}){
  const p=voyageProgress(bottle,today);
  const tint=tintOf(bottle);
  const sea=seaById(bottle.sea);
  const mood=bottle.mood?MOODS[bottle.mood-1]:null;
  const tideBack=bottle.returnedAt?tideInfo(bottle.returnedAt):null;
  const atSea=Math.max(1,daysBetween(bottle.castAt,bottle.returnedAt||bottle.lostAt||today));
  const oldEntry=setup.name?`Cuaderno de ${esc(setup.name)}`:'Tu cuaderno';
  const castPart=bottle.weather?`${(WEATHER_ICONS[bottle.weather]?bottle.weather:'mar')} de aquel día`:'';
  return `<div class="modal-card bottle-modal ${bottle.seen===false?'is-fresh':''}" style="--tint:${tint.hex}" data-modal-bottle="${bottle.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <span class="bottle-wax" aria-hidden="true">${bottleGlyph(bottle,{paper:false})}<i class="wax-crack"></i></span>
    <p class="eyebrow">${oldEntry} · botella del ${esc(longDate(bottle.castAt,{day:'numeric',month:'long',year:'numeric'}))}</p>
    <h2 class="bottle-modal-title">${p.fate==='returned'?'El mar te la devolvió':p.fate==='lost'?'Se perdió en el mar':'Sigue en el mar'}</h2>
    ${mood?`<p class="bottle-modal-mood">${mood.emoji} Lo escribiste sintiendo: <b>${mood.label.toLowerCase()}</b></p>`:''}
    <div class="bottle-note" data-fate="${p.fate}">
      <span class="note-fold note-fold-1" aria-hidden="true"></span>
      <span class="note-fold note-fold-2" aria-hidden="true"></span>
      <blockquote class="bottle-modal-text">${esc(bottle.text)}</blockquote>
    </div>
    <div class="bottle-modal-voyage">
      ${ledger('Días a la deriva',atSea,'días')}
      ${ledger('Millas navegadas',p.miles,'millas')}
      ${ledger('Mar elegido',esc(sea.label.split(' ')[0]),'',sea.desc)}
      ${ledger('Marea',tideBack?esc(tideBack.name.replace('Marea ','')):'—','','las botellas vuelven en marea viva')}
      ${bottle.wind?ledger('Viento al soltarla',esc(bottle.wind),bottle.windSpeed?`${bottle.windSpeed} nudos`:'',bottle.push?`el mar la retuvo ${bottle.push} ${bottle.push===1?'día':'días'} más`:'entró en la primera pleamar'):''}
    </div>
    ${p.fate==='returned'?`<p class="bottle-modal-foot-note">${icon('check')} Volvió el ${esc(longDate(bottle.returnedAt||today,{day:'numeric',month:'long'}))}, ${atSea} días después de soltarla.</p>`:''}
    ${p.fate==='lost'?`<p class="bottle-modal-foot-note is-lost">${icon('anchor')} Nunca llegó a ninguna orilla. Lo que escribiste sigue aquí, si lo quieres leer.</p>`:''}
    ${bottle.reply?`<div class="bottle-reply-box"><span>${icon('reply')} Respondiste a tu yo de entonces${bottle.repliedAt?` · ${esc(longDate(bottle.repliedAt.slice(0,10),{day:'numeric',month:'long'}))}`:''}</span><p>${esc(bottle.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Qué le dirías hoy a quien escribió esto?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${bottle.id}:text" placeholder="Respóndele con la calma que te da el tiempo...">${esc(bottle.replyDraft||'')}</textarea>
        <span class="field-caption" data-reply-status>${bottle.replyDraft?'Tienes una respuesta a medias, guardada en este dispositivo.':'Si te vas a mitad, no se pierde: se queda escrito aquí.'}</span>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${bottle.reply?'':`<button class="button outline" data-modal="reply">${icon('reply')} Responder</button>`}
      ${bottle.reply?`<button class="button outline" data-modal="reply-clear">${icon('close')} Quitar respuesta</button>`:''}
      ${p.fate==='lost'?`<button class="button outline" data-modal="recast">${icon('refresh')} Volver a lanzar</button>`:''}
      <button class="button outline" data-modal="keep">${icon('bookmark')} ${bottle.kept?'Desanclar':'Anclar a la colección'}</button>
      <button class="button outline" data-modal="to-entry">${icon('pen')} Copiar en la entrada de hoy</button>
      ${p.fate==='drifting'?`<button class="button solid" data-modal="recall">${icon('wind')} Traer a la orilla</button>`:''}
    </div>
  </div>`;
}

/* ---------- el chapuzón al soltar la botella (capa de animación) ---------- */
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
  const part=weatherOf(today);
  const first=groups.returned[0];
  const drifting=groups.drifting.length;
  const next=nextArrival(groups.drifting,today);
  if(first){
    const tint=tintOf(first);
    return `<section class="card sea-teaser is-arrival" style="--tint:${tint.hex};--water:${(part.level*100).toFixed(1)}%">
      <div class="sea-teaser-waves">${wavesSvg(2,part.rough)}</div>
      <p class="eyebrow">${icon('wave')} El mar · ${esc(part.weather.label)}</p>
      <h2>Te ha vuelto una botella</h2>
      <p class="sea-teaser-quote">«${esc(first.text.slice(0,120))}${first.text.length>120?'…':''}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="button solid small-btn" data-action="open-bottle" data-id="${first.id}">${icon('stamp')} Abrir la botella</button>
        ${drifting?`<span class="sea-teaser-count">${drifting} ${drifting===1?'botella sigue':'botellas siguen'} en el agua</span>`:''}
      </div>
    </section>`;
  }
  return `<section class="card sea-teaser ${next?'':'is-idle'}" style="--water:${(part.level*100).toFixed(1)}%">
    <div class="sea-teaser-waves">${wavesSvg(5,part.rough)}</div>
    <p class="eyebrow">${icon('wave')} El mar · ${esc(part.weather.label)}</p>
    <h2>${drifting?`${drifting} ${drifting===1?'pensamiento navega':'pensamientos navegan'}`:'Nada escrito en el agua'}</h2>
    <p class="sea-teaser-quote">${drifting
      ?`${esc(seaPhrase(groups.drifting[0],today))}${next?` · ${esc(etaLabel(next.bottle,today))}`:''}`
      :'Escribe un pensamiento, séllalo y echa la botella al mar. Puede que vuelva a ti.'}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="button outline small-btn" data-view="thoughts">${icon('pen')} ${drifting?'Ver la travesía':'Escribir un pensamiento'}</button>
      ${drifting?`<span class="sea-teaser-count">${esc(tideNote(today))}</span>`:''}
    </div>
  </section>`;
}

export function emptySea(tab='shore'){
  const copy={
    shore:['Nada en la orilla','Cuando la marea viva traiga una botella, aparecerá aquí doblada y con su sello.'],
    sea:['El agua está vacía','Escribe algo que no quieras guardar y échalo a la deriva.'],
    kept:['Sin notas ancladas','Las botellas que ancles se quedan aquí para siempre.'],
    lost:['Ninguna se ha hundido','El mar todavía no se ha quedado nada tuyo.']
  }[tab]||['El mar está vacío','Escribe lo que no quieres guardar, échalo a la deriva y deja que la marea decida si devolvértelo.'];
  return `<div class="empty-state sea-empty" data-tab="${tab}">
    <span class="sea-empty-art">${bottleGlyph({})}<i class="sea-empty-ripple"></i><i class="sea-empty-ripple is-2"></i></span>
    <h3>${esc(copy[0])}</h3>
    <p>${esc(copy[1])}</p>
  </div>`;
}
