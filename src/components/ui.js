import {MOODS,WEEKDAYS,CRISIS_HELPLINES,THEMES,AGE_GROUPS,INTEREST_OPTIONS,WRITING_RITUALS,TONE_STYLES} from '../data/constants.js';
import {dateKey,generateCalendar,longDate,dayNumber,addDays} from '../utils/dates.js';
import {formatNumber,counterInterpretation} from '../utils/stats.js';
import {getDailyWord,getDailyTip,getContextualAdvice,getAgeProfile,getPersonalQuote,calculateGoalStats,generateThemeFaviconSvg} from '../utils/wellbeing.js';

const ICONS={
  pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',
  month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  left:'<path d="m15 18-6-6 6-6"/>',
  right:'<path d="m9 18 6-6-6-6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',
  upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',
  leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
  storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',
  drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',
  run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',
  book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',
  sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',
  wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',
  spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',
  quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',
  expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  chevronDown:'<path d="m6 9 6 6 6-6"/>',
  wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',
  tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',
  send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',
  anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',
  bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',
  reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',
  seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',
  eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',
  sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',
  fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',
  rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',
  hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',
  gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',
  paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',
  splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',
  save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
};

export const icon=name=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||''}</svg>`;
export const escape=text=>String(text??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

export function exLibrisBadge(setup={},entriesCount=0){
  const profile=getAgeProfile(setup);
  const owner=setup.name?escape(setup.name):'Personalizar perfil';
  const ageTag=setup.age?`${setup.age} años`:profile.group.label;
  return `<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${generateThemeFaviconSvg(setup.theme||'paper',setup)}</span>
    <div class="ex-libris-meta">
      <strong>${owner}</strong>
      <small>${escape(ageTag)} · ${entriesCount} ${entriesCount===1?'día':'días'}</small>
    </div>
  </button>`;
}

export function scaleField(name,labels,selected,ico,title,question,hint){
  return `<div class="scale-field">
    <p class="field-title">${icon(ico)} ${title}</p>
    <p class="field-caption">${question}</p>
    <div class="level-scale" role="radiogroup" aria-label="${title}">
      ${[1,2,3,4,5].map(v=>`<label class="level-option">
        <input type="radio" name="${name}" value="${v}" ${selected===v?'checked':''}>
        <span class="level-num">${v}</span>
        <span class="level-text">${labels[v]}</span>
      </label>`).join('')}
    </div>
    <small id="${name}-hint">${selected?labels[selected]+'.':hint}</small>
  </div>`;
}

export function tagPicker(selected=[],tagsList=[]){
  const set=new Set(selected);
  const all=[...new Set([...tagsList,...selected])];
  return `<div class="tag-picker">
    ${all.map(t=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${escape(t)}" ${set.has(t)?'checked':''}>
      <span>${escape(t)}</span>
    </label>`).join('')}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`;
}

export function counterSteppers(values={},counters=[],setup={},opts={}){
  const profile=getAgeProfile(setup);
  const activeSet=new Set(profile.activeCounterKeys||['water']);
  const visibleCounters=counters.filter(c=>activeSet.has(c.key)||(Number(values?.[c.key])||0)>0);
  const list=visibleCounters.length?visibleCounters:counters;
  const prefix=opts.action?`${opts.action}-`:'';

  return `<div class="counters-grid">${list.map(c=>{
    const v=Number(values?.[c.key])||0;
    const isWater=c.key==='water';
    const goal=isWater?(setup.waterGoal||8):0;
    const pct=goal?Math.min(100,Math.round((v/goal)*100)):0;
    return `<div class="counter-row" data-counter="${c.key}">
      <div>
        <p class="field-title">${icon(c.icon)} ${c.label} ${goal?`<small class="counter-goal-pill ${v>=goal?'met':''}">Meta: ${v}/${goal}</small>`:''}</p>
        <p class="field-caption" id="hint-${c.key}">${counterInterpretation(c.key,v)}</p>
        ${goal?`<div class="counter-progress"><i style="width:${pct}%"></i></div>`:''}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${prefix}counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Restar ${c.label}">${icon('minus')}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${c.key}" min="0" max="${c.max}" step="${c.step}" value="${v}" aria-label="${c.label}" data-counter-input="${c.key}">
          <span>${c.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${prefix}counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Sumar ${c.label}">${icon('plus')}</button>
      </div>
    </div>`;
  }).join('')}</div>`;
}

export function habitChecklist(habits,entry){
  return `<div class="habits-list">${habits.map((h,idx)=>{
    const checked=Boolean(entry?.habits?.[h.id]);
    return `<div class="habit-item ${checked?'is-done':''}" style="--habit-i:${idx}">
      <label class="habit-check">
        <input type="checkbox" name="habit_${h.id}" data-habit="${h.id}" ${checked?'checked':''}>
        <span class="habit-box" aria-hidden="true">
          <svg class="habit-check-svg" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="habit-name">${escape(h.name)}</span>
      </label>
      <span class="habit-meta" data-habit-id="${h.id}"></span>
      <button type="button" class="icon-button ghost habit-del" data-action="delete-habit" data-habit="${h.id}" data-name="${escape(h.name)}" aria-label="Eliminar hábito ${escape(h.name)}">${icon('close')}</button>
    </div>`;
  }).join('')}</div>`;
}

export function calendar(monthDate,entries,{mini=false,selected=dateKey()}={}){
  const byDate=new Map(entries.map(e=>[e.date,e]));
  const today=dateKey();
  const cells=generateCalendar(monthDate).map(c=>{
    const e=byDate.get(c.date),m=e?MOODS[e.mood-1]:null,future=c.date>today;
    const classes=['calendar-day',!c.inMonth&&'outside',c.date===today&&'today',c.date===selected&&'selected',e&&'recorded'].filter(Boolean).join(' ');
    const label=`${longDate(c.date)}${m?`, ${m.label}`:', sin entrada'}`;
    return `<button type="button" class="${classes}" data-action="open-day" data-date="${c.date}" ${future?'disabled':''} aria-label="${label}" style="${m?`--mood:${m.color}`:''}">
      <span>${c.day}</span>${m?'<i aria-hidden="true"></i>':''}
    </button>`;
  }).join('');
  return `<div class="calendar ${mini?'mini':''}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${mini?'1':'0'}" aria-label="Mes anterior">${icon('left')}</button>
      <strong>${longDate(monthDate,{month:'long',year:'numeric'})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${mini?'1':'0'}" aria-label="Mes siguiente">${icon('right')}</button>
    </div>
    <div class="calendar-grid">
      ${WEEKDAYS.map(d=>`<span class="weekday">${d}</span>`).join('')}
      ${cells}
    </div>
  </div>`;
}

export function moodChart(entries,start,days,setup={}){
  const byDate=new Map(entries.map(e=>[e.date,e]));
  const width=680,height=230,padX=36,padY=26,innerW=width-padX*2,innerH=height-padY*2;
  const x=i=>padX+(days===1?innerW/2:i*innerW/(days-1));
  const y=m=>padY+(5-m)*innerH/4;
  const sleepY=h=>padY+innerH-Math.min(12,Math.max(0,h||0))/12*innerH;
  const pts=[];
  const sleepBars=[];
  const barW=Math.max(6,Math.min(18,Math.floor(innerW/days)-6));

  for(let i=0;i<days;i++){
    const d=addDays(start,i),e=byDate.get(d);
    if(e){
      pts.push({x:x(i),y:y(e.mood),e,d});
      const sy=sleepY(e.sleepHours);
      const bh=Math.max(2,padY+innerH-sy);
      sleepBars.push(`<rect x="${(x(i)-barW/2).toFixed(1)}" y="${sy.toFixed(1)}" width="${barW}" height="${bh.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${longDate(d)}: ${formatNumber(e.sleepHours)} h de sueño</title></rect>`);
    }
  }
  const line=pts.map((p,i)=>`${i?'L':'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area=pts.length>1?`${line} L${pts[pts.length-1].x.toFixed(1)},${height-padY} L${pts[0].x.toFixed(1)},${height-padY} Z`:'';
  const sleepGoal=setup?.sleepGoal||7.5;
  const goalLineY=sleepY(sleepGoal);
  return `<div class="chart-wrap">
    <svg viewBox="0 0 ${width} ${height}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(m=>`<line x1="${padX}" x2="${width-padX}" y1="${y(m)}" y2="${y(m)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${y(m)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${m}</text>`).join('')}
      <line x1="${padX}" x2="${width-padX}" y1="${goalLineY.toFixed(1)}" y2="${goalLineY.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${sleepBars.join('')}
      ${area?`<path class="chart-area-path" d="${area}" fill="url(#moodAreaGrad)"/>`:''}
      ${line?`<path class="chart-line-path" d="${line}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:''}
      ${pts.map((p,idx)=>`<g>
        <circle class="chart-dot" style="--dot-i:${idx}" cx="${p.x}" cy="${p.y}" r="5.5" fill="${MOODS[p.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${longDate(p.d)} · ${MOODS[p.e.mood-1].label} (${p.e.mood}/5) · ${formatNumber(p.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join('')}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${formatNumber(sleepGoal)} h)</span>
    </div>
  </div>`;
}

export function moodHeatmap(entries=[],today=dateKey(),days=28){
  const byDate=new Map(entries.map(e=>[e.date,e]));
  const start=addDays(today,1-days);
  const cells=[];
  for(let i=0;i<days;i++){
    const d=addDays(start,i);
    const e=byDate.get(d);
    const m=e?MOODS[e.mood-1]:null;
    cells.push(`<button type="button" class="heatmap-cell ${e?'filled':''}" data-action="open-day" data-date="${d}" style="${m?`--mood:${m.color}`:''}" title="${longDate(d)}${m?`: ${m.label} (${e.mood}/5) · ${formatNumber(e.sleepHours)} h sueño`:': sin registro'}">
      <span>${d.slice(8)}</span>
      ${m?`<small>${m.emoji}</small>`:''}
    </button>`);
  }
  return `<div class="heatmap-strip">${cells.join('')}</div>`;
}

export function personalGoalsPanel(entries=[],setup={}){
  const g=calculateGoalStats(entries,setup);
  const profile=getAgeProfile(setup);
  if(!g.total){
    return `<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${icon('sliders')} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${formatNumber(g.sleepGoal)} h), ${escape(profile.focusLabel.toLowerCase())} (${formatNumber(g.studyGoal)} h) y agua (${g.waterGoal} vasos).</p>
    </section>`;
  }
  return `<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${icon('sliders')} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${icon('moon')} Sueño (≥ ${formatNumber(g.sleepGoal)} h)</span>
          <strong>${g.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${g.sleepPct}%;background:var(--green)"></i></div>
        <small>${g.sleepMet} de ${g.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${icon('study')} ${escape(profile.focusLabel)} (≥ ${formatNumber(g.studyGoal)} h)</span>
          <strong>${g.studyPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${g.studyPct}%;background:var(--red)"></i></div>
        <small>${g.studyMet} de ${g.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${icon('drop')} Agua (≥ ${g.waterGoal} vasos)</span>
          <strong>${g.waterPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${g.waterPct}%;background:var(--ochre)"></i></div>
        <small>${g.waterMet} de ${g.total} días cumplidos</small>
      </div>
    </div>
    ${(g.moodWhenSleepMet&&g.moodWhenSleepMissed)?`
      <div class="sleep-mood-insight">
        ${icon('spark')}
        <p>Cuando alcanzas tu meta de <b>${formatNumber(g.sleepGoal)} h</b> de sueño, tu estado medio es <b>${g.moodWhenSleepMet}/5</b> (frente a <b>${g.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:''}
  </section>`;
}

export function personalQuoteCard(dateStr,quoteOffset=0,setup={}){
  const q=getPersonalQuote(dateStr,quoteOffset,setup);
  const isSaved=(setup?.savedQuotes||[]).includes(q.text);
  return `<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${icon('quote')} ${q.isCustom?'Tu colección':'Frase del día'}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${isSaved?'is-saved':''}" data-action="save-quote" data-quote="${escape(q.text)}" title="${isSaved?'Guardada en tus frases':'Guardar en mis frases'}" aria-label="Guardar frase">${icon('heart')}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${icon('refresh')}</button>
      </div>
    </div>
    <p class="quote-text">«${escape(q.text)}»</p>
    <small class="quote-author">— ${escape(q.author)}</small>
  </section>`;
}

export function ledger(label,value,unit='',hint=''){
  return `<div class="ledger-cell">
    <span class="ledger-label">${label}</span>
    <div class="ledger-value">${value}${unit?`<small>${unit}</small>`:''}</div>
    ${hint?`<span class="ledger-hint">${hint}</span>`:''}
  </div>`;
}

export function rankRow(label,entry,field='mood'){
  if(!entry)return `<div class="rank-row"><span class="rank-label">${label}</span><strong>—</strong><small>Sin datos aún</small></div>`;
  const detail=field==='mood'?`${MOODS[entry.mood-1].emoji} ${MOODS[entry.mood-1].label} (${entry.mood}/5)`:`${formatNumber(entry[field])} h`;
  return `<div class="rank-row">
    <span class="rank-label">${label}</span>
    <strong>${longDate(entry.date,{weekday:'short',day:'numeric',month:'short'})}</strong>
    <small>${detail}</small>
  </div>`;
}

export function emptyState(title,text,action=''){
  return `<div class="empty-state">
    ${icon('leaf')}
    <h3>${title}</h3>
    <p>${text}</p>
    ${action}
  </div>`;
}

export function meterRows(rows){
  return `<div class="meter-list">${rows.map(r=>{
    const pct=r.total?Math.round(r.count/r.total*100):0;
    return `<div class="meter-row">
      <span>${r.label}</span>
      <div class="meter-track"><i style="width:${pct}%;background:${r.color||'var(--ink)'}"></i></div>
      <strong>${r.count}</strong>
    </div>`;
  }).join('')}</div>`;
}

/* ================= APOYO EMOCIONAL DISCRETO (SOLO RIESGO GRAVE) ================= */
export function crisisBanner(risk,setup={}){
  if(!risk?.triggered || risk.level!=='high')return '';
  const trustedName=setup?.trustedContactName?.trim();
  const trustedPhone=setup?.trustedContactPhone?.trim();
  return `<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${icon('heart')} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${icon('close')}</button>
    </div>
    <p class="crisis-reason">${escape(risk.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${icon('phone')} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${trustedName&&trustedPhone?`<a href="tel:${escape(trustedPhone.replace(/\s+/g,''))}" class="button outline">${icon('user')} Llamar a ${escape(trustedName)}</a>`:''}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${icon('wind')} Respiración guiada</button>
    </div>
  </section>`;
}

export function crisisSupportModal(setup={},initialTab='help'){
  const profile=getAgeProfile(setup);
  const trustedName=setup?.trustedContactName?.trim();
  const trustedPhone=setup?.trustedContactPhone?.trim();
  return `<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${icon('heart')} Apoyo y calma</p>
        <h2>Un espacio para respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${initialTab==='help'?'active':''}" data-crisis-tab="help" role="tab">${icon('phone')} Teléfonos 24h</button>
      <button type="button" class="crisis-tab ${initialTab==='breathe'?'active':''}" data-crisis-tab="breathe" role="tab">${icon('wind')} Respirar (4-4-6)</button>
      <button type="button" class="crisis-tab ${initialTab==='ground'?'active':''}" data-crisis-tab="ground" role="tab">${icon('compass')} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${initialTab==='help'?'active':''}" data-panel="help">
      <p class="crisis-intro">Hablar con alguien cuando todo pesa es un paso valiente. Estos servicios son confidenciales, gratuitos y atienden las 24 horas.</p>
      ${trustedName&&trustedPhone?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${escape(trustedName)}</h3>
            <p>${escape(trustedPhone)}</p>
          </div>
          <a href="tel:${escape(trustedPhone.replace(/\s+/g,''))}" class="button solid">${icon('phone')} Llamar</a>
        </div>
      `:''}
      <div class="helpline-grid">
        ${CRISIS_HELPLINES.map(h=>{
          const highlightMinor = profile.isMinor && h.youth;
          return `
          <div class="helpline-card ${h.primary || highlightMinor ?'primary':''}">
            <div class="helpline-info">
              <h3>${escape(h.name)}</h3>
              <p>${escape(h.detail)}</p>
            </div>
            <a href="${escape(h.tel)}" class="helpline-phone">${icon('phone')} <span>${escape(h.number)}</span></a>
          </div>
        `}).join('')}
      </div>
    </div>

    <div class="crisis-tab-panel ${initialTab==='breathe'?'active':''}" data-panel="breathe">
      <div class="breathing-box">
        <div class="breathing-circle-wrap">
          <div class="breathing-circle" id="breathing-visual">
            <span id="breathing-phase">Preparado</span>
            <small id="breathing-timer">4 — 4 — 6</small>
          </div>
        </div>
        <p class="breathing-instructions" id="breathing-guide">Inhala 4 segundos por la nariz, mantén el aire 4 segundos y suelta despacio durante 6 segundos.</p>
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${icon('wind')} Empezar ejercicio</button>
      </div>
    </div>

    <div class="crisis-tab-panel ${initialTab==='ground'?'active':''}" data-panel="ground">
      <p class="crisis-intro">Cuando la cabeza va demasiado deprisa, nombrar lo que tienes alrededor ayuda a bajar el ritmo:</p>
      <div class="grounding-list">
        ${[
          {count:5,sense:'Cosas que puedas ver',prompt:'Fíjate en 5 objetos a tu alrededor.'},
          {count:4,sense:'Cosas que puedas tocar',prompt:'Nota el tacto de 4 superficies cercanas.'},
          {count:3,sense:'Sonidos que puedas oír',prompt:'Escucha 3 sonidos del entorno.'},
          {count:2,sense:'Olores que percibas',prompt:'Identifica 2 aromas cercanos.'},
          {count:1,sense:'Una respiración profunda',prompt:'Toma aire hondo y suéltalo despacio.'}
        ].map(g=>`
          <label class="grounding-step">
            <input type="checkbox">
            <span class="grounding-num"><b>${g.count}</b></span>
            <div>
              <strong>${escape(g.sense)}</strong>
              <p>${escape(g.prompt)}</p>
            </div>
          </label>
        `).join('')}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" class="button outline" data-modal="close">Cerrar</button>
    </div>
  </div>`;
}

/* ================= PALABRA Y CONSEJO DIARIO ================= */
export function dailyInspirationSection(dateStr,wordOffset,tipOffset,setup={},currentEntry={},currentWordInput=''){
  const showWord=setup?.showDailyWord!==false;
  const showTip=setup?.showDailyTip!==false;
  if(!showWord && !showTip)return '';

  const wordObj=getDailyWord(dateStr,wordOffset);
  const tipObj=getDailyTip(dateStr,tipOffset,setup);
  const contextual=getContextualAdvice(currentEntry,setup);
  const isWordApplied=currentWordInput && currentWordInput.toLowerCase()===wordObj.word.toLowerCase();

  return `<div class="daily-inspiration-grid">
    ${showWord?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${icon('book')} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${icon('refresh')}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${escape(wordObj.word)}</h2>
            <span class="daily-word-origin">${escape(wordObj.type)} · ${escape(wordObj.origin)}</span>
          </div>
          <button type="button" class="button ${isWordApplied?'solid':'outline'} small-btn" data-action="use-daily-word" data-word="${escape(wordObj.word)}">
            ${icon(isWordApplied?'check':'pen')} ${isWordApplied?'Elegida hoy':'Usar hoy'}
          </button>
        </div>
        <p class="daily-word-meaning">${escape(wordObj.meaning)}</p>
      </article>
    `:''}

    ${showTip?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${icon('spark')} Consejo · ${escape(tipObj.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${icon('refresh')}</button>
        </div>
        <h2 class="daily-tip-title">${escape(tipObj.title)}</h2>
        <p class="daily-tip-body">${escape(tipObj.tip)}</p>
        ${contextual.length?`
          <div class="contextual-advice-list">
            ${contextual.map(c=>`
              <div class="contextual-advice-item">
                ${icon(c.icon)}
                <div><strong>${escape(c.title)}:</strong> ${escape(c.text)}</div>
              </div>
            `).join('')}
          </div>
        `:''}
      </article>
    `:''}
  </div>`;
}

/* ================= MODAL DE SET UP / BIENVENIDA ================= */
export function setupWizardModal(setup={},habits=[],step=1){
  const profile=getAgeProfile(setup);
  const existingNames=new Set(habits.map(h=>h.name.toLowerCase()));
  const selectedInterests=new Set(setup.interests||[]);
  return `<div class="modal-card setup-wizard-modal" data-current-step="${step}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${icon('sliders')} Paso ${step} de 3</p>
        <h2>${step===1?'Sobre ti, tu edad y tus gustos':step===2?'Tu ritmo y tus hábitos':'Papel e icono de tu cuaderno'}</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    </div>

    <div class="wizard-steps-bar" aria-hidden="true">
      <span class="${step>=1?'done':''} ${step===1?'current':''}">1. Tú y tus gustos</span>
      <span class="${step>=2?'done':''} ${step===2?'current':''}">2. Ritmo y hábitos</span>
      <span class="${step>=3?'done':''} ${step===3?'current':''}">3. Papel e icono</span>
    </div>

    <form id="setup-wizard-form">
      <div class="wizard-step-body ${step===1?'active':''}" data-step="1" ${step===1?'':'hidden'}>
        <div class="setup-name-age-row">
          <div class="setup-field">
            <label for="setup-name">${icon('user')} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo..." value="${escape(setup.name||'')}">
          </div>
          <div class="setup-field">
            <label for="setup-age">¿Cuántos años tienes?</label>
            <div class="age-input-wrap">
              <input id="setup-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${setup.age??''}">
              <span>años</span>
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Tu etapa vital</label>
          <div class="age-group-grid" id="wizard-age-groups">
            ${AGE_GROUPS.map(g=>`
              <label class="age-group-card ${profile.group.id===g.id?'is-selected':''}" data-age-group-card="${g.id}">
                <input type="radio" name="ageGroup" value="${g.id}" ${profile.group.id===g.id?'checked':''}>
                <span class="age-range-badge">${escape(g.label)}</span>
                <strong>${escape(g.title)}</strong>
                <small>${escape(g.desc)}</small>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="setup-field">
          <label>¿Qué cosas te gustan o te importan más?</label>
          <p class="setup-caption">El diario mostrará solo los bloques, etiquetas y frases que encajen contigo:</p>
          <div class="interests-grid">
            ${INTEREST_OPTIONS.map(item=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${item.id}" ${selectedInterests.has(item.id)?'checked':''}>
                <span>${icon(item.icon)} ${escape(item.label)}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${step===2?'active':''}" data-step="2" ${step===2?'':'hidden'}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${icon('compass')}
          <div>
            <strong>Adaptado a: ${escape(profile.group.title)} (${escape(profile.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${formatNumber(profile.sleepRecommended)} h) y dedicación (${formatNumber(profile.studyRecommended)} h).</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${icon('moon')} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${setup.sleepGoal??profile.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${icon('study')} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${setup.studyGoal??profile.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${icon('drop')} Vasos de agua</label>
            <div class="number-wrap">
              <input id="setup-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${setup.waterGoal??8}">
              <span>vasos</span>
            </div>
          </div>
        </div>

        <div class="two-columns" style="margin-top:14px">
          <div class="setup-field" style="margin-top:0">
            <label>¿Cuándo sueles escribir?</label>
            <div class="ritual-stack">
              ${WRITING_RITUALS.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${r.id}" ${(setup.ritual||'night')===r.id?'checked':''}>
                  <span class="purpose-icon">${icon(r.icon)}</span>
                  <div><strong>${escape(r.label)}</strong></div>
                </label>
              `).join('')}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${TONE_STYLES.map(t=>`
                <label class="purpose-card compact">
                  <input type="radio" name="tone" value="${t.id}" ${(setup.tone||'warm')===t.id?'checked':''}>
                  <div><strong>${escape(t.label)}</strong><small>${escape(t.desc)}</small></div>
                </label>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos para ti</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${profile.suggestedHabits.map(h=>{
              const already=existingNames.has(h.toLowerCase());
              return `<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${escape(h)}" ${already?'checked':''}>
                <span>${escape(h)}</span>
              </label>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${step===3?'active':''}" data-step="3" ${step===3?'':'hidden'}>
        <div class="setup-field">
          <label>${icon('palette')} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${THEMES.map(t=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${t.id}" ${(setup.theme||'paper')===t.id?'checked':''}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${generateThemeFaviconSvg(t.id,setup)}</span>
                  <div class="theme-swatches">
                    ${t.colors.map(c=>`<i style="background:${c}"></i>`).join('')}
                  </div>
                </div>
                <strong>${escape(t.name)}</strong>
                <small>${escape(t.desc)}</small>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada (opcional)</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${escape(setup.motto||'Un día a la vez.')}">
        </div>

        <div class="setup-toggles">
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${setup.showDailyWord!==false?'checked':''}>
            <span><strong>Mostrar Palabra del día</strong><small>Sugiere cada día una palabra nueva en la cabecera.</small></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${setup.showDailyTip!==false?'checked':''}>
            <span><strong>Mostrar Consejo del día</strong><small>Adaptado a tu edad y a tus intereses.</small></span>
          </label>
        </div>
      </div>

      <div class="modal-actions wizard-footer">
        ${step>1?`<button type="button" class="button outline" data-wizard="prev">${icon('left')} Anterior</button>`:`<button type="button" class="button outline" data-modal="close">Ahora no</button>`}
        <div style="flex:1"></div>
        ${step<3
          ?`<button type="button" class="button solid" data-wizard="next">Siguiente ${icon('right')}</button>`
          :`<button type="submit" class="button solid">${icon('check')} Guardar</button>`
        }
      </div>
    </form>
  </div>`;
}
