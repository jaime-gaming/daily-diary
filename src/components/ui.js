import {MOODS,WEEKDAYS} from '../data/constants.js';
import {dateKey,generateCalendar,longDate,parseDate} from '../utils/dates.js';
import {formatNumber} from '../utils/stats.js';

export const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const paths={
  book:'M4 4h14a2 2 0 0 1 2 2v15H6a3 3 0 0 1-3-3V6a2 2 0 0 1 1-2Zm3 0v17M3 17h17M11 8h5',
  pen:'m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14v6Z',
  history:'M3 11a9 9 0 1 1 2 7M3 4v7h7m2-5v6l4 2',
  calendar:'M5 5h14a2 2 0 0 1 2 2v15H3V7a2 2 0 0 1 2-2Zm2-3v6m10-6v6M3 11h18m-13 4h1m6 0h1',
  chart:'M4 3v17h17M8 15v-4m5 4V7m5 8V4',
  week:'M3 5h18v15H3V5Zm4-3v5m10-5v5M3 10h18m-14 4h3m4 0h3',
  month:'M3 5h18v15H3V5Zm4-3v5m10-5v5M3 10h18m-9 3v4m-2-2h4',
  shield:'m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6',
  moon:'M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z',
  study:'m2 8 10-5 10 5-10 5L2 8Zm4 3v6c4 3 8 3 12 0v-6m4-3v8',
  sun:'M12 3v2m0 14v2M3 12h2m14 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  leaf:'M20 3C5 2 2 12 7 17c6 6 15-1 13-14ZM5 21 16 9',
  arrow:'M5 12h14m-5-5 5 5-5 5',
  left:'m14 6-6 6 6 6',right:'m10 6 6 6-6 6',
  check:'m5 12 4 4L19 6',plus:'M12 5v14M5 12h14',close:'m6 6 12 12M6 18 18 6',
  download:'M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5',upload:'M12 16V4m-5 5 5-5 5 5M4 15v5h16v-5',
  trash:'M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7',
  lock:'M6 10h12v11H6V10Zm3 0V6a3 3 0 0 1 6 0v4m-3 5v2',
  spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',
  heart:'M12 20S2 14 2 8c0-5 7-7 10-2 3-5 10-3 10 2 0 6-10 12-10 12Z',
  menu:'M4 6h16M4 12h16M4 18h16',
  search:'M16 16l5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
  flame:'M12 2c2 7 8 8 8 14a8 8 0 0 1-16 0c0-4 3-7 5-9 0 4 2 5 2 5s4-4 1-10Z',
  drop:'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z',
  run:'M13 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 3-3 4 3 3 1 6m-1-9 4 2 3-1m-7 4-2 6',
  bolt:'m13 2-8 11h6l-1 9 8-12h-6l1-8Z',
  storm:'M6 15a4 4 0 1 1 1-7 5.5 5.5 0 0 1 10 1 3.5 3.5 0 1 1 1 6H6Zm5-1-2 4h3l-2 4',
  hash:'M9 3 7 21M17 3l-2 18M4 8h17M3 16h17',
  target:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-4h.01',
  stamp:'M5 21h14M7 17h10v-3c0-3-2-4-2-7a3 3 0 0 1 6 0c0 3-2 4-2 7',
  quote:'M6 15c-2-2-3-5-2-9 3 1 5 4 4 8m6-1c-2-2-3-5-2-9 3 1 5 4 4 8M5 17h6v4H5zm8 0h6v4h-6z'
};
export const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.leaf}"/></svg>`;

/* ---------- escalas 1–5 ---------- */
export function scaleField(name,labels,value,ico,title,question,legend){
  return `<fieldset class="scale-field" id="${name}-field">
    <legend><span class="section-index">${title}</span></legend>
    <p class="field-question">${question}</p>
    <div class="scale-row" role="radiogroup" aria-label="${question}">
      ${labels.slice(1).map((label,i)=>{
        const n=i+1;
        return `<label class="scale-step"><input type="radio" name="${name}" value="${n}" ${value===n?'checked':''}>
          <span class="scale-number">${n}</span><span class="scale-label">${label}</span></label>`;
      }).join('')}
    </div>
    <p class="field-hint" id="${name}-hint">${legend||'Opcional.'}</p>
  </fieldset>`;
}

/* ---------- etiquetas ---------- */
export function tagPicker(tags,options){
  return `<div class="tag-picker" role="group" aria-label="Etiquetas del día">
    ${options.map(t=>`<label class="tag-chip"><input type="checkbox" name="tags" value="${escape(t)}" ${tags.includes(t)?'checked':''}><span>${escape(t)}</span></label>`).join('')}
    <span class="tag-chip ghost">…o escribe la tuya abajo</span>
  </div>
  <input class="tag-custom" name="tagCustom" maxlength="40" placeholder="Etiqueta propia (intro para añadir)" aria-label="Etiqueta propia">`;
}

/* ---------- contadores ---------- */
export function counterSteppers(counters,presets){
  return `<div class="counter-list">${presets.map(c=>{
    const value=counters?.[c.key]??0;
    return `<div class="counter-row" data-counter="${c.key}">
      <span class="counter-label">${icon(c.icon)} ${c.label}<small>${c.unit}</small></span>
      <div class="stepper">
        <button type="button" class="step-btn" data-action="counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Menos ${c.label}">−</button>
        <input type="number" name="counter_${c.key}" value="${value}" min="${c.min}" max="${c.max}" step="${c.step}" aria-label="${c.label} en ${c.unit}">
        <button type="button" class="step-btn" data-action="counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Más ${c.label}">+</button>
      </div>
      <p class="counter-hint" id="hint-${c.key}"></p>
    </div>`;
  }).join('')}</div>`;
}

/* ---------- hábitos ---------- */
export function habitChecklist(habits,entry){
  return `<ul class="habit-list">${habits.map(h=>{
    const done=!!entry?.habits?.[h.id];
    return `<li class="habit-item">
      <label class="habit-check"><input type="checkbox" name="habit_${escape(h.id)}" ${done?'checked':''}>
        <span class="habit-box">${icon('check')}</span><span class="habit-name">${escape(h.name)}</span></label>
      <span class="habit-meta" data-habit-id="${escape(h.id)}"></span>
      <button type="button" class="icon-button ghost" data-action="delete-habit" data-habit="${escape(h.id)}" data-name="${escape(h.name)}" aria-label="Eliminar hábito ${escape(h.name)}">${icon('close')}</button>
    </li>`;
  }).join('')}</ul>`;
}

/* ---------- calendario ---------- */
export function calendar(month,entries,{mini=false,selected=''}={}){
  const map=new Map(entries.map(e=>[e.date,e]));
  return `<div class="calendar ${mini?'mini':''}">
    <div class="calendar-heading">
      <strong>${longDate(month,{month:'long',year:'numeric'})}</strong>
      <div class="calendar-arrows">
        <button class="icon-button ghost" data-action="month-prev" data-mini="${mini?'1':'0'}" aria-label="Mes anterior">${icon('left')}</button>
        <button class="icon-button ghost" data-action="month-next" data-mini="${mini?'1':'0'}" aria-label="Mes siguiente">${icon('right')}</button>
      </div>
    </div>
    <div class="calendar-grid">
      ${WEEKDAYS.map(w=>`<span class="weekday">${w}</span>`).join('')}
      ${generateCalendar(month).map(({date,inMonth})=>{
        const e=map.get(date);
        return `<button class="calendar-day ${inMonth?'':'outside'} ${date===dateKey()?'today':''} ${date===selected?'selected':''} ${e?'recorded':''}"
          data-action="open-day" data-date="${date}" ${date>dateKey()?'disabled':''}
          aria-label="${longDate(date)}${e?', '+MOODS[e.mood-1].label+', registrado':''}">
          <span>${parseDate(date).getDate()}</span>
          ${e?`<i style="--mood:${MOODS[e.mood-1].color}"></i>`:''}
        </button>`;
      }).join('')}
    </div>
  </div>`;
}

/* ---------- gráficos y cifras ---------- */
export function moodChart(entries,start,days){
  const width=720,height=170,pad=25;
  const points=entries.map(e=>({x:pad+(Math.round((parseDate(e.date)-parseDate(start))/86400000)/(days-1))*(width-pad*2),y:height-pad-(e.mood-1)*(height-pad*2)/4,e}));
  return `<div class="chart-wrap"><svg class="mood-chart" role="img" aria-label="Estado de ánimo de los últimos ${days} días. ${entries.length} registros." viewBox="0 0 ${width} ${height}">
    ${[1,2,3,4,5].map(m=>`<line x1="25" x2="700" y1="${height-pad-(m-1)*(height-pad*2)/4}" y2="${height-pad-(m-1)*(height-pad*2)/4}" stroke="#D9D2C4" stroke-dasharray="2 6"/><text x="2" y="${height-pad-(m-1)*(height-pad*2)/4+4}" fill="#8B8375" font-size="11" font-family="IBM Plex Mono,monospace">${m}</text>`).join('')}
    ${points.slice(1).map((p,i)=>Math.round((parseDate(p.e.date)-parseDate(points[i].e.date))/86400000)===1?`<line x1="${points[i].x}" y1="${points[i].y}" x2="${p.x}" y2="${p.y}" stroke="#211E17" stroke-width="1.6"/>`:'').join('')}
    ${points.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="5.5" fill="${MOODS[p.e.mood-1].color}" stroke="#FBF8F1" stroke-width="2"><title>${longDate(p.e.date)}: ${MOODS[p.e.mood-1].label}</title></circle>`).join('')}
  </svg></div>`;
}

export function ledger(label,value,unit,hint=''){
  return `<div class="ledger-cell">
    <span class="ledger-label">${label}</span>
    <div class="ledger-value">${value}<small>${unit}</small></div>
    ${hint?`<p class="ledger-hint">${hint}</p>`:''}
  </div>`;
}

export function rankRow(label,entry,field='mood'){
  return `<div class="rank-row">
    <span class="rank-label">${label}</span>
    <strong>${entry?longDate(entry.date,{day:'2-digit',month:'short'}):'—'}</strong>
    <small>${entry?(field==='mood'?MOODS[entry.mood-1].emoji+' '+MOODS[entry.mood-1].label:formatNumber(entry[field])+' h'):'sin datos'}</small>
  </div>`;
}

export function emptyState(title,description){
  return `<div class="empty-state">${icon('book')}<h3>${title}</h3><p>${description}</p><button class="button solid" data-action="today">Escribir hoy ${icon('arrow')}</button></div>`;
}

export function meterRows(items){
  return `<div class="meter-list">${items.map(({label,count,total,color})=>`
    <div class="meter-row">
      <span>${label}</span>
      <div class="meter-track"><i style="width:${total?count/total*100:0}%;background:${color}"></i></div>
      <strong>${count}</strong>
    </div>`).join('')}</div>`;
}
