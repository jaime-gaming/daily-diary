import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/400-italic.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './styles/main.css';

import {MOODS,ENERGY_LABELS,STRESS_LABELS,TAGS,COUNTERS} from './data/constants.js';
import {dateKey,addDays,dayNumber,longDate,weekStart,monthRange,monthMove} from './utils/dates.js';
import {
  calculateStats,currentStreak,inRange,formatNumber as f,sleepInterpretation,studyInterpretation,
  generateSummary,periodSummary,generateTrends,wordCount,habitStreak,habitCount,tagFrequency,counterInterpretation
} from './utils/stats.js';
import {
  loadEntries,saveEntry,deleteEntry,clearEntries,exportData,parseImport,importData,
  loadHabits,saveHabit,deleteHabit
} from './utils/storage.js';
import {
  icon,escape as esc,calendar,scaleField,tagPicker,counterSteppers,habitChecklist,
  moodChart,ledger,rankRow,emptyState,meterRows
} from './components/ui.js';

const app=document.querySelector('#app');
let entries=[],habits=[],storageError='',view='diary',selected=dateKey(),month=dateKey(),miniMonth=dateKey(),
    period=7,dirty=false,menu=false,historyQuery='',historyMood='',pendingImport=null;

function refresh(){
  entries=loadEntries();
  habits=loadHabits();
}
try{refresh();}catch(e){
  storageError='No se han podido leer los datos guardados. No se sobrescribirán. Revisa el almacenamiento del navegador o recupera una copia. '+e.message;
}

const navs=[
  ['diary','pen','Mi diario'],['history','history','Historial'],['calendar','calendar','Calendario'],
  ['stats','chart','Estadísticas'],['week','week','Tu semana'],['month','month','Resumen del mes']
];
const pageName=id=>id==='privacy'?'Privacidad y datos':navs.find(n=>n[0]===id)?.[2]||'Mi diario';

function navButton([id,ico,label],index){
  return `<button class="nav-item ${view===id?'active':''}" data-view="${id}" ${view===id?'aria-current="page"':''}>
    <span class="nav-index">${String(index+1).padStart(2,'0')}</span>${icon(ico)}<span>${label}</span>
  </button>`;
}

function render(){
  app.innerHTML=`
  <aside class="sidebar ${menu?'is-open':''}">
    <a href="#" class="brand" data-action="today"><span class="brand-mark">diario<span class="brand-period">.</span></span></a>
    <div class="brand-rule"></div>
    <p class="brand-subtitle">UN MOMENTO PARA TI</p>
    <nav aria-label="Navegación principal">${navs.map(navButton).join('')}</nav>
    <div class="sidebar-bottom">
      ${navButton(['privacy','shield','Privacidad y datos'],navs.length)}
      <div class="local-note">${icon('lock')}<div><strong>Solo tuyo. Solo aquí.</strong>Tu diario vive en este dispositivo.</div></div>
      <div class="sidebar-decoration">
        <svg viewBox="0 0 180 100" fill="none" aria-hidden="true"><path d="M90 97c-2-33 7-65 20-87M94 72C72 69 56 54 57 37c26 5 38 17 37 35Zm5-21c1-21 18-34 38-37-2 24-18 36-38 37ZM89 92c-24-2-43-12-49-33 24-1 44 14 49 33Zm7-20c12-19 31-24 51-21-10 21-26 25-51 21Z" stroke="currentColor" stroke-width="1.2"/></svg>
        <p>Los pequeños momentos<br>también merecen quedarse.</p>
      </div>
      <span class="version">HECHO PARA IR DESPACIO</span>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="${menu}">${icon('menu')}</button>
      <span class="breadcrumb">Mi espacio <span>/</span> ${pageName(view)}</span>
      <div class="topbar-right">
        <span class="private-badge">${icon('shield')} <span>Privado y sin conexión</span></span>
        <span class="avatar" aria-label="Mi espacio personal">${icon('leaf')}</span>
      </div>
    </header>
    <main id="main">
      ${storageError?`<div class="error-banner" role="alert">${esc(storageError)}</div>`:''}
      ${page()}
    </main>
    <footer class="page-footer">
      <span>${icon('leaf')} Un día a la vez.</span>
      <span>Sin prisas. Sin juicios. Solo tú.</span>
    </footer>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`;
  bindForm();
}

function pageHeader(eyebrow,title,subtitle,action=''){
  return `<div class="page-heading">
    <div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="page-subtitle">${subtitle}</p></div>
    ${action}
  </div>`;
}

function page(){
  switch(view){
    case 'diary':return diaryPage();
    case 'history':return historyPage();
    case 'calendar':return calendarPage();
    case 'stats':return statsPage();
    case 'week':return periodPage(false);
    case 'month':return periodPage(true);
    case 'privacy':return privacyPage();
  }
}

/* ================= DIARIO ================= */
function dayNav(){
  return `<div class="day-navigation">
    <button data-action="previous" aria-label="Día anterior">${icon('left')}<span>Día anterior</span></button>
    <button data-action="today" class="today-button">Hoy</button>
    <button data-action="next" ${selected>=dateKey()?'disabled':''}><span>Día siguiente</span>${icon('right')}</button>
  </div>`;
}

function hero(e){
  const words=e?wordCount(e):0;
  const done=e?Object.values(e.habits||{}).filter(Boolean).length:0;
  return `<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Diario — día</small>${dayNumber(selected,entries)}</div>
      <div class="hero-meta">
        <span class="date-line">${longDate(selected)}</span>
        <div class="hero-chips">
          <span class="chip ${currentStreak(entries)>0?'hot':''}">${icon('flame')} Racha ${currentStreak(entries)} d</span>
          ${e?`<span class="chip">${words} palabras</span>`:''}
          ${habits.length&&e?`<span class="chip">${done}/${habits.length} hábitos</span>`:''}
          ${e?`<span class="entry-status">${icon('check')} Guardado</span>`:''}
        </div>
      </div>
    </div>
    ${dayNav()}
  </div>`;
}

function textField(name,title,placeholder,value,required=false,large=true){
  const words=(value||'')?String(value).trim().split(/\s+/).length:0;
  return `<div class="writing-field" data-field="${name}">
    <label for="${name}">${title}${required?' <span>*</span>':''}<span class="word-count">${words} palabras</span></label>
    <textarea id="${name}" name="${name}" maxlength="20000" placeholder="${placeholder}" ${required?'required':''} class="${large?'large':''}">${esc(value||'')}</textarea>
  </div>`;
}

function goalRow(value=''){
  return `<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un pequeño objetivo..." maxlength="500" value="${esc(value)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${icon('close')}</button>
  </div>`;
}

function diaryPage(){
  const e=entries.find(x=>x.date===selected);
  return `
  ${hero(e)}
  <div class="diary-layout">
    <div class="diary-main">
      <form id="diary-form">
        <section class="card">
          <fieldset>
            <legend class="section-index">01 — Cómo te ha ido</legend>
            <p class="field-question">¿Cómo ha sido tu día, en una palabra o en un número?</p>
            <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
              ${MOODS.map(m=>`<label class="mood-option">
                <input type="radio" name="mood" value="${m.value}" ${e?.mood===m.value?'checked':''} required>
                <span class="mood-value">${m.value}</span>
                <span class="mood-face">${m.emoji}</span>
                <span class="mood-label">${m.label}</span>
              </label>`).join('')}
            </div>
            <p class="field-hint" id="mood-hint">${e?MOODS[e.mood-1].label:'Elige la opción que más se parezca a hoy.'}</p>
          </fieldset>
        </section>

        <section class="card hours-card">
          <div class="hour-field">
            <label for="sleepHours">${icon('moon')} Horas de sueño <span>*</span></label>
            <p>¿Cuántas horas has dormido?</p>
            <div class="number-wrap"><input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" placeholder="0" value="${e?.sleepHours??''}" required><span>horas</span></div>
            <small id="sleep-hint">${e?sleepInterpretation(e.sleepHours):'Un buen día empieza con descanso.'}</small>
          </div>
          <div class="hour-field">
            <label for="studyHours">${icon('study')} Horas de estudio <span>*</span></label>
            <p>¿Cuántas horas has estudiado?</p>
            <div class="number-wrap"><input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" placeholder="0" value="${e?.studyHours??''}" required><span>horas</span></div>
            <small id="study-hint">${e?studyInterpretation(e.studyHours):'Cada pequeño esfuerzo cuenta.'}</small>
          </div>
        </section>

        <section class="card">
          <p class="section-index">02 — Energía y estrés</p>
          <div class="scale-block">
            ${scaleField('energy',ENERGY_LABELS,e?.energy,'bolt','Energía','¿Con qué energía has empezado el día?','Opcional. Del 1 al 5.')}
            ${scaleField('stress',STRESS_LABELS,e?.stress,'storm','Estrés','¿Y el estrés?','Opcional. Del 1 al 5.')}
          </div>
        </section>

        <section class="card">
          <p class="section-index">03 — Contadores de hoy</p>
          <p class="field-question">Las cosas que se cuentan, cuentan.</p>
          ${counterSteppers(e?.counters,COUNTERS)}
        </section>

        <section class="card">
          <p class="section-index">04 — Lo que hace único este día</p>
          <p class="field-caption" style="margin:10px 0 0">No tiene que ser extraordinario para ser importante.</p>
          ${textField('bestOfDay','Lo mejor del día','Escribe aquí el mejor momento de hoy...',e?.bestOfDay)}
          ${textField('differentToday','¿Qué ha sido distinto?','Algo diferente, extraño, nuevo o fuera de lo habitual...',e?.differentToday)}
          ${textField('generalDay','¿Cómo ha ido en general?','Cuéntame cómo ha sido tu día...',e?.generalDay,true)}
          ${textField('wordOfDay','Palabra del día','Una palabra que resuma hoy...',e?.wordOfDay,false,false)}
        </section>

        <section class="card">
          <p class="section-index">05 — Etiquetas del día</p>
          <p class="field-question">Si hoy tuviera una etiqueta, sería…</p>
          ${tagPicker(e?.tags||[],TAGS)}
        </section>

        <section class="card">
          <div class="card-intro">
            <span class="soft-icon">${icon('moon')}</span>
            <div>
              <p class="eyebrow">Agradecimiento nocturno</p>
              <h2>Tres cosas buenas que has hecho hoy</h2>
              <p>Reconoce tus gestos, también los más pequeños.</p>
            </div>
          </div>
          <div class="gratitude-fields">
            ${['Hoy he...','También he...','Y además he...'].map((p,i)=>`<label><span>0${i+1}</span><input name="gratitude${i}" aria-label="${p}" placeholder="${p}" maxlength="20000" value="${esc(e?.gratitude?.[i]||'')}"></label>`).join('')}
          </div>
        </section>

        <section class="card">
          <div class="card-intro">
            <span class="soft-icon">${icon('sun')}</span>
            <div>
              <p class="eyebrow">Mañana quiero...</p>
              <h2>Una pequeña intención para mañana</h2>
            </div>
          </div>
          <textarea name="tomorrow" aria-label="Mañana quiero" maxlength="20000" placeholder="Mañana quiero estudiar, terminar ese proyecto, salir a caminar...">${esc(e?.tomorrow||'')}</textarea>
          <div id="goals">${(e?.goals||[]).map(goalRow).join('')}</div>
          <button type="button" class="text-button" data-action="add-goal">${icon('plus')} Añadir un objetivo <span>(opcional)</span></button>
        </section>

        <div class="save-area">
          <span>${icon('lock')} Estas palabras se quedan contigo.</span>
          <button class="button solid save-button" type="submit" ${storageError?'disabled':''}>${icon('stamp')} Guardar día</button>
        </div>
        <p class="required-note">* Obligatorios: estado de ánimo, horas de sueño, horas de estudio y reflexión general.</p>
      </form>
      ${e?`<section class="card daily-summary reveal">
        <p class="eyebrow">${icon('leaf')} Resumen del día</p>
        <h2>Tu día, en pocas palabras.</h2>
        <p>${generateSummary(e)}</p>
        <small>Creado con reglas y tus registros · sin IA</small>
      </section>`:''}
    </div>

    <aside class="diary-aside">
      ${weekPreview()}
      ${habitsCard(e)}
      <section class="card mini-calendar">
        ${calendar(miniMonth,entries,{mini:true,selected})}
        <div class="calendar-legend"><i></i> Un día para recordar</div>
        <button class="text-button full-link" data-view="calendar">Ver mi calendario ${icon('arrow')}</button>
      </section>
      <section class="quote-card">
        <div class="quote-symbol">“</div>
        <blockquote>No todos los días son buenos,<br>pero hay algo bueno<br>en cada día.</blockquote>
        <span>Guarda ese pequeño algo</span>
        <svg viewBox="0 0 160 120" fill="none" aria-hidden="true"><path d="M79 112c-1-39 0-57 14-95M82 81C55 82 37 63 39 41c25 4 42 21 43 40Zm3-20c3-27 22-45 48-47-1 29-22 43-48 47Zm-6 43C55 99 43 89 34 68c27 2 42 15 45 36Zm4-20c16-17 30-23 54-23-8 24-29 27-54 23Z" stroke="currentColor" stroke-width="1.2"/></svg>
      </section>
      <div class="aside-note">${icon('shield')}<p>Un espacio seguro para ser tú.<br>Sin cuentas, sin nube, sin miradas.</p></div>
    </aside>
  </div>`;
}

function weekPreview(){
  const start=weekStart(selected),end=addDays(start,6);
  const weekly=inRange(entries,start,end),s=calculateStats(weekly);
  return `<section class="card week-preview">
    <div class="section-heading"><h2>Tu semana</h2><span class="tag">${weekly.length}/7 días</span></div>
    <p>Pequeños pasos, una historia.</p>
    <div class="week-dots">
      ${Array.from({length:7},(_,i)=>{
        const d=addDays(start,i),e=weekly.find(x=>x.date===d);
        return `<button type="button" data-action="open-day" data-date="${d}" ${d>dateKey()?'disabled':''} aria-label="${longDate(d)}${e?', '+MOODS[e.mood-1].label:''}">
          <span>${['L','M','X','J','V','S','D'][i]}</span>
          <i class="${e?'filled':''} ${d===dateKey()?'current':''}" style="--mood:${e?MOODS[e.mood-1].color:''}">${e?icon('check'):'·'}</i>
        </button>`;
      }).join('')}
    </div>
    <div class="mini-metrics">
      <div>${icon('heart')}<strong>${s.count?f(s.mood):'—'}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${icon('moon')}<strong>${s.count?f(s.sleep):'—'}<small>h</small></strong><span>Sueño</span></div>
      <div>${icon('study')}<strong>${s.count?f(s.study):'—'}<small>h</small></strong><span>Estudio</span></div>
    </div>
    <div class="streak-note">${icon('flame')}<p><strong>${currentStreak(entries)} días de constancia</strong><span>${currentStreak(entries)?'Estás creando un bonito hábito.':'Tu historia empieza con un día.'}</span></p></div>
    <button class="text-button full-link" data-view="week">Ver resumen semanal ${icon('arrow')}</button>
  </section>`;
}

function habitsCard(e){
  return `<section class="card">
    <div class="section-heading"><h2>Tus hábitos</h2><span class="tag">${habits.length} activos</span></div>
    <p class="habit-empty" style="margin:8px 0 0">Marca los que hayas cumplido hoy.</p>
    ${habits.length?habitChecklist(habits,e):'<p class="habit-empty">Todavía no has creado hábitos. Añade el primero aquí abajo.</p>'}
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nuevo hábito…" aria-label="Nuevo hábito">
      <button class="icon-button" data-action="add-habit" aria-label="Añadir hábito">${icon('plus')}</button>
    </div>
  </section>`;
}

/* ================= HISTORIAL ================= */
function historyPage(){
  const visible=entries.filter(e=>
    (!historyMood||e.mood===+historyMood)&&
    (!historyQuery||[e.date,e.generalDay,e.bestOfDay,e.differentToday,e.tomorrow,e.wordOfDay,...e.gratitude,...(e.goals||[]),...(e.tags||[])].join(' ').toLocaleLowerCase().includes(historyQuery.toLocaleLowerCase()))
  ).sort((a,b)=>b.date.localeCompare(a.date));
  return `${pageHeader('Tus recuerdos','Cada día cuenta.','Un lugar para volver a los momentos que has vivido.',`<span class="count-badge">${entries.length} días · ${f(entries.reduce((s,e)=>s+wordCount(e),0))} palabras</span>`)}
  <div class="history-controls">
    <label class="search-box">${icon('search')}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar entre tus recuerdos..." value="${esc(historyQuery)}"></label>
    <select id="history-mood" aria-label="Filtrar por estado de ánimo">
      <option value="">Todos los estados</option>
      ${MOODS.map(m=>`<option value="${m.value}" ${historyMood==m.value?'selected':''}>${m.emoji} ${m.label}</option>`).join('')}
    </select>
  </div>
  <div class="history-grid">
    ${visible.length?visible.map(e=>{
      const doneHabits=Object.values(e.habits||{}).filter(Boolean).length;
      return `<article class="card history-card" style="--mood:${MOODS[e.mood-1].color}">
        <div class="section-heading">
          <p class="eyebrow">Día ${dayNumber(e.date,entries)}</p>
          <span class="mood-tag" style="--mood:${MOODS[e.mood-1].color}">${MOODS[e.mood-1].emoji} ${MOODS[e.mood-1].label}</span>
        </div>
        <h2>${longDate(e.date,{day:'numeric',month:'long',year:'numeric'})}</h2>
        <p class="entry-excerpt">${esc(e.generalDay)}</p>
        ${e.wordOfDay?`<p class="entry-excerpt" style="min-height:0;font-size:.88rem">«${esc(e.wordOfDay)}»</p>`:''}
        <div class="history-numbers">
          <span class="chiplet">${icon('moon')} ${f(e.sleepHours)} h</span>
          <span class="chiplet">${icon('study')} ${f(e.studyHours)} h</span>
          <span class="chiplet">${icon('drop')} ${e.counters?.water||0}</span>
          <span class="chiplet">${icon('run')} ${e.counters?.exercise||0}′</span>
          ${habits.length?`<span class="chiplet">${icon('target')} ${doneHabits}/${habits.length}</span>`:''}
          <span class="chiplet">${icon('pen')} ${wordCount(e)} palabras</span>
        </div>
        <div class="history-actions">
          <button class="text-button" data-action="read" data-date="${e.date}">Ver entrada ${icon('arrow')}</button>
          <button class="icon-button ghost" data-action="open-day" data-date="${e.date}" aria-label="Editar entrada del ${e.date}">${icon('pen')}</button>
          <button class="icon-button ghost delete-button" data-action="delete" data-date="${e.date}" aria-label="Eliminar entrada del ${e.date}">${icon('trash')}</button>
        </div>
      </article>`;
    }).join(''):emptyState(entries.length?'No hay coincidencias.':'Tu historia está por escribir.','Los días que guardes aparecerán aquí. Puedes volver a ellos cuando quieras.')}
  </div>`;
}

/* ================= CALENDARIO ================= */
function calendarPage(){
  return `${pageHeader('Un mapa de tus días','Tu calendario.','Cada casilla guarda un pequeño capítulo de tu historia.')}
  <section class="card full-calendar">
    ${calendar(month,entries,{selected})}
    <div class="mood-legend">
      ${MOODS.map(m=>`<span><i style="background:${m.color}"></i>${m.label}</span>`).join('')}
      <span>Sin casilla marcada: sin registro</span>
    </div>
  </section>
  <p class="quiet-note">Selecciona un día para leer o escribir su entrada. Los días futuros todavía están por vivir.</p>`;
}

/* ================= SEMANA / MES ================= */
function periodControls(monthly){
  return `<div class="period-controls">
    <button class="icon-button ghost" data-action="period-prev" aria-label="Período anterior">${icon('left')}</button>
    <strong>${monthly?longDate(month,{month:'long',year:'numeric'}):`${longDate(weekStart(selected),{day:'numeric',month:'short'})} – ${longDate(addDays(weekStart(selected),6),{day:'numeric',month:'short',year:'numeric'})}`}</strong>
    <button class="icon-button ghost" data-action="period-next" aria-label="Período siguiente">${icon('right')}</button>
  </div>`;
}

function periodPage(monthly){
  const [start,end]=monthly?monthRange(month):[weekStart(selected),addDays(weekStart(selected),6)];
  const records=inRange(entries,start,end),s=calculateStats(records);
  return `${pageHeader(monthly?'Resumen del mes':'Tu semana',monthly?'Una mirada al mes.':'Así han sido tus días.','No se trata de hacerlo perfecto, sino de conocerte un poco más.',periodControls(monthly))}
  <div class="ledger-grid">
    ${ledger('Días registrados',s.count,monthly?'días':'/ 7')}
    ${ledger('Estado medio',s.count?f(s.mood):'—','/ 5')}
    ${ledger('Energía media',s.count&&Number.isFinite(s.energy)?f(s.energy):'—','/ 5')}
    ${ledger('Estrés medio',s.count&&Number.isFinite(s.stress)?f(s.stress):'—','/ 5')}
    ${ledger('Sueño medio',s.count?f(s.sleep):'—','h')}
    ${ledger('Estudio medio',s.count?f(s.study):'—','h')}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${icon('leaf')}</span>
    <div>
      <p class="eyebrow">${monthly?'Tu mes':'Tu semana'}, en palabras</p>
      <p>${periodSummary(s,monthly)}</p>
      <small>Un resumen con plantillas, a partir de tus días registrados.</small>
    </div>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Momentos que destacan</h2><span class="field-caption">Dentro del período seleccionado</span></div>
    <div class="highlights">
      ${rankRow('Mejor valoración',s.best)}
      ${rankRow('Valoración más baja',s.worst)}
      ${rankRow('Más tiempo de estudio',s.mostStudy,'studyHours')}
      ${rankRow('Más horas de sueño',s.mostSleep,'sleepHours')}
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tu constancia</h2>
      <div class="large-stat">${monthly?s.maxStreak:currentStreak(entries)} <span>días seguidos</span></div>
      <p>${monthly?'Tu racha más larga dentro de este mes.':'Tu racha actual, hasta hoy o ayer.'}</p>
      ${monthly?`
        <div class="total-row"><span>Total de horas de estudio</span><strong>${f(s.totalStudy)} h</strong></div>
        <div class="total-row"><span>Total de sueño registrado</span><strong>${f(s.totalSleep)} h</strong></div>
        <div class="total-row"><span>Palabras escritas</span><strong>${f(s.words)}</strong></div>
        ${COUNTERS.map(c=>`<div class="total-row"><span>Total ${c.label.toLowerCase()}</span><strong>${f(s.counters[c.key].total)} ${c.unit}</strong></div>`).join('')}
      `:`
        <div class="total-row"><span>Palabras escritas</span><strong>${f(s.words)}</strong></div>
        ${COUNTERS.map(c=>`<div class="total-row"><span>Total ${c.label.toLowerCase()}</span><strong>${f(s.counters[c.key].total)} ${c.unit}</strong></div>`).join('')}
      `}
    </section>
    <section class="card">
      <h2>Un lugar para cada emoción</h2>
      <div style="margin-top:14px">
        ${meterRows(MOODS.map((m,i)=>({label:`${m.emoji} ${m.label}`,count:s.moods[i],total:s.count,color:m.color})))}
      </div>
      ${records.length?`<div class="total-row" style="margin-top:8px"><span>Etiquetas más usadas</span><strong>${(tagFrequency(records)[0]||['—'])[0]}</strong></div>`:''}
    </section>
  </div>
  <p class="quiet-note">Las medias solo incluyen días registrados. En caso de empate se muestra el primer día.</p>`;
}

/* ================= ESTADÍSTICAS ================= */
function statsPage(){
  const today=dateKey(),start=addDays(today,1-period);
  const recent=inRange(entries,start,today),prior=inRange(entries,addDays(start,-period),addDays(start,-1));
  const s=calculateStats(recent),p=calculateStats(prior),trends=generateTrends(entries);
  const evolution=(key,unit)=>{
    if(recent.length<3||prior.length<3)return 'Se necesitan 3 registros por período para comparar.';
    if(!Number.isFinite(s[key])||!Number.isFinite(p[key]))return 'Sin datos suficientes en ambos períodos.';
    const d=s[key]-p[key];
    return {text:`${d>0?'↑':d<0?'↓':'→'} ${f(Math.abs(d))}${unit} vs. período anterior`,down:d<0&&key!=='stress'};
  };
  const evo=k=>{const r=evolution(k);return typeof r==='string'?r:r.text;};
  return `${pageHeader('Estadísticas','Conócete un poco más.','Tus días, vistos con perspectiva. Sin etiquetas ni juicios.',`
    <div class="segmented">
      <button data-action="range" data-range="7" class="${period===7?'active':''}">7 días</button>
      <button data-action="range" data-range="30" class="${period===30?'active':''}">30 días</button>
    </div>`)}
  <div class="ledger-grid">
    ${ledger('Estado medio',s.count?f(s.mood):'—','/ 5',evo('mood',''))}
    ${ledger('Energía media',Number.isFinite(s.energy)?f(s.energy):'—','/ 5',evo('energy',''))}
    ${ledger('Estrés medio',Number.isFinite(s.stress)?f(s.stress):'—','/ 5',evo('stress',''))}
    ${ledger('Sueño medio',s.count?f(s.sleep):'—','h',evo('sleep',' h'))}
    ${ledger('Estudio medio',s.count?f(s.study):'—','h',evo('study',' h'))}
    ${ledger('Racha actual',currentStreak(entries),'días',`${s.count} días en el período`)}
  </div>
  <section class="card chart-card">
    <div class="section-heading"><h2>El ritmo de tus emociones</h2><span class="tag">Últimos ${period} días</span></div>
    ${moodChart(recent,start,period)}
    <div class="chart-dates"><span>${longDate(start,{day:'numeric',month:'short'})}</span><span>${longDate(today,{day:'numeric',month:'short'})}</span></div>
    ${!recent.length?'<p class="quiet-note">Tus primeras entradas darán forma al gráfico.</p>':''}
    <details>
      <summary>Ver datos del gráfico</summary>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Día</th><th>Estado</th><th>Energía</th><th>Estrés</th><th>Sueño</th><th>Estudio</th></tr></thead>
          <tbody>${recent.map(e=>`<tr>
            <td>${longDate(e.date,{day:'numeric',month:'short'})}</td>
            <td>${MOODS[e.mood-1].label} (${e.mood}/5)</td>
            <td>${e.energy??'—'}</td><td>${e.stress??'—'}</td>
            <td>${f(e.sleepHours)} h</td><td>${f(e.studyHours)} h</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </details>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Contadores del período</h2>
      <div class="total-row" style="margin-top:12px"><span>${icon('drop')} Agua total</span><strong>${f(s.counters.water.total)} vasos</strong></div>
      <div class="total-row"><span>${icon('run')} Ejercicio total</span><strong>${f(s.counters.exercise.total)} min</strong></div>
      <div class="total-row"><span>${icon('book')} Lectura total</span><strong>${f(s.counters.reading.total)} min</strong></div>
      <div class="total-row"><span>${icon('leaf')} Pausa consciente</span><strong>${f(s.counters.mindfulness.total)} min</strong></div>
      <div class="total-row"><span>${icon('pen')} Palabras escritas</span><strong>${f(s.words)}</strong></div>
    </section>
    <section class="card">
      <h2>Etiquetas más repetidas</h2>
      ${tagFrequency(recent).length?meterRows(tagFrequency(recent).slice(0,6).map(([t,c])=>({label:t,count:c,total:recent.length,color:'#B34A2E'}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>
  <section class="card trends-card">
    <div class="card-intro">
      <span class="soft-icon">${icon('leaf')}</span>
      <div><h2>Pequeñas observaciones</h2><p>Lo que se observa en tus registros, mediante reglas sencillas.</p></div>
    </div>
    ${trends.length?trends.map(t=>`<p class="trend-item">${icon('arrow')}<span>${t}</span></p>`).join(''):'<p class="habit-empty">Sigue escribiendo. Para comparar semanas necesitamos al menos 3 entradas en cada uno de los dos últimos períodos de 7 días.</p>'}
    <div class="rule-note">Comparamos los últimos 7 días con los 7 anteriores. Para las relaciones entre sueño, ejercicio y ánimo usamos los últimos 30 días, con al menos 3 registros por grupo. No son conclusiones científicas ni consejos médicos.</div>
  </section>`;
}

/* ================= PRIVACIDAD ================= */
function privacyPage(){
  return `${pageHeader('Privacidad y datos','Tus palabras son solo tuyas.','Un diario personal debería ser exactamente eso: personal.')}
  <section class="card privacy-hero">
    <span class="privacy-icon">${icon('shield')}</span>
    <h2>Tus diarios se almacenan únicamente en este dispositivo.</h2>
    <p>Sin cuentas. Sin servidores. Sin inteligencia artificial.<br>Todo se guarda en el almacenamiento local de este navegador.</p>
    <span class="tag">${icon('lock')} 100 % local</span>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Llévate tus recuerdos</h2>
      <p>Exporta todas tus entradas y hábitos en un archivo JSON. Guárdalo en un lugar seguro: contiene tus textos sin cifrar.</p>
      <button class="button solid" data-action="export">${icon('download')} Exportar diario</button>
    </section>
    <section class="card">
      <h2>Vuelve a tu historia</h2>
      <p>Importa una copia de Diario. Se añadirán sus entradas; podrás confirmar antes de reemplazar fechas coincidentes.</p>
      <button class="button outline" data-action="import">${icon('upload')} Importar diario</button>
      <input type="file" id="import-file" accept=".json,application/json" hidden>
    </section>
  </div>
  <section class="card backup-card">
    <div>
      <h2>Una copia es un poco de tranquilidad</h2>
      <p>El navegador puede borrar su almacenamiento. Descarga una copia regularmente y antes de cambiar de dispositivo.</p>
    </div>
    <button class="button outline" data-action="backup">${icon('download')} Descargar copia</button>
  </section>
  <section class="card">
    <h2>Cómo funciona tu privacidad</h2>
    <ul class="privacy-list">
      <li>Los resúmenes usan frases programadas y operaciones matemáticas. Ningún modelo ni API procesa tus textos.</li>
      <li>Después de la primera carga completa, puedes volver a abrir esta dirección sin conexión. La aplicación guarda sus archivos para usarlos offline.</li>
      <li>Los datos pertenecen a este navegador y a esta dirección web. No se sincronizan entre dispositivos ni entre direcciones distintas.</li>
      <li>No hay seguimiento, anuncios, fuentes remotas ni analítica. Cualquier persona con acceso a este perfil del navegador podría leer tus entradas.</li>
      <li>En modo privado, los datos pueden desaparecer al cerrar la ventana. Esta aplicación no sustituye una copia de seguridad.</li>
    </ul>
  </section>
  <section class="card danger-zone">
    <div>
      <h2>Empezar de nuevo</h2>
      <p>Elimina todas las entradas y hábitos de este navegador. Esta acción no se puede deshacer.</p>
    </div>
    <button class="button danger" data-action="clear">${icon('trash')} Borrar todos los datos</button>
  </section>`;
}

/* ================= INTERACCIÓN ================= */
function countWords(text){const t=String(text||'').trim();return t?t.split(/\s+/).length:0;}

function collectForm(form){
  const data=new FormData(form);
  const current=entries.find(x=>x.date===selected);
  const customTag=(data.get('tagCustom')||'').toString().trim();
  const tags=[...new Set([...data.getAll('tags').map(t=>t.toString().trim()),customTag].filter(Boolean))];
  const counters={};
  for(const c of COUNTERS)counters[c.key]=parseFloat(data.get(`counter_${c.key}`))||0;
  const habitMap={};
  for(const h of habits)habitMap[h.id]=data.get(`habit_${h.id}`)==='on';
  return {
    id:current?.id,date:selected,
    mood:+data.get('mood'),
    sleepHours:parseFloat(data.get('sleepHours')),
    studyHours:parseFloat(data.get('studyHours')),
    energy:data.get('energy')?+data.get('energy'):null,
    stress:data.get('stress')?+data.get('stress'):null,
    bestOfDay:(data.get('bestOfDay')||'').toString().trim(),
    differentToday:(data.get('differentToday')||'').toString().trim(),
    generalDay:(data.get('generalDay')||'').toString().trim(),
    wordOfDay:(data.get('wordOfDay')||'').toString().trim(),
    gratitude:[0,1,2].map(i=>(data.get(`gratitude${i}`)||'').toString().trim()),
    tomorrow:(data.get('tomorrow')||'').toString().trim(),
    goals:data.getAll('goal').map(g=>g.toString().trim()).filter(Boolean),
    tags,counters,habits:habitMap,
    createdAt:current?.createdAt
  };
}

function validateForForm(entry){
  if(!entry.mood)throw new Error('Selecciona cómo te ha ido el día.');
  for(const [key,label] of [['sleepHours','horas de sueño'],['studyHours','horas de estudio']]){
    const value=entry[key];
    if(!Number.isFinite(value)||value<0||value>24)throw new Error(`Escribe unas ${label} válidas, entre 0 y 24.`);
  }
  if(!entry.generalDay)throw new Error('Escribe cómo ha ido tu día en general.');
  return entry;
}

function bindForm(){
  const form=document.querySelector('#diary-form');
  if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(storageError)return;
    try{
      const entry=validateForForm(collectForm(form));
      entries=saveEntry(entry);
      dirty=false;
      render();
      showStamp();
      toast('Día guardado ✓');
      document.querySelector('.daily-summary')?.classList.add('reveal');
    }catch(err){toast(err.message||'No se ha podido guardar este día.',true);}
  });
  form.addEventListener('input',event=>{
    dirty=true;
    const t=event.target;
    if(t.name==='sleepHours')document.querySelector('#sleep-hint').textContent=t.value===''?'Un buen día empieza con descanso.':sleepInterpretation(parseFloat(t.value));
    if(t.name==='studyHours')document.querySelector('#study-hint').textContent=t.value===''?'Cada pequeño esfuerzo cuenta.':studyInterpretation(parseFloat(t.value));
    if(t.name==='mood')document.querySelector('#mood-hint').textContent=MOODS[+t.value-1].label+'.';
    if(t.name?.startsWith('counter_')){
      const key=t.name.slice(8);
      const hint=document.querySelector(`#hint-${key}`);
      if(hint)hint.textContent=counterInterpretation(key,parseFloat(t.value)||0);
    }
    const field=t.closest('.writing-field');
    if(field){
      const wc=field.querySelector('.word-count');
      if(wc)wc.textContent=`${countWords(t.value)} palabras`;
    }
    if(t.name?.startsWith('habit_')){
      updateHabitMeta();
    }
  });
  form.addEventListener('keydown',event=>{
    if(event.target.id==='tagCustom'&&event.key==='Enter'){
      event.preventDefault();
      const value=event.target.value.trim();
      if(value){
        event.target.insertAdjacentHTML('beforebegin',`<label class="tag-chip"><input type="checkbox" name="tags" value="${esc(value)}" checked><span>${esc(value)}</span></label>`);
        event.target.value='';
      }
    }
  });
  updateHabitMeta();
  refreshCounterHints();
}

function updateHabitMeta(){
  for(const h of habits){
    const meta=document.querySelector(`.habit-meta[data-habit-id="${h.id}"]`);
    if(meta)meta.innerHTML=`<b>${habitStreak(entries,h.id)}</b> seg. · ${habitCount(entries,h.id)} en total`;
  }
}
function refreshCounterHints(){
  const form=document.querySelector('#diary-form');
  if(!form)return;
  for(const c of COUNTERS){
    const input=form.querySelector(`[name="counter_${c.key}"]`);
    const hint=document.querySelector(`#hint-${c.key}`);
    if(input&&hint&&input.value!=='')hint.textContent=counterInterpretation(c.key,parseFloat(input.value)||0);
  }
}

function showStamp(){
  const stamp=document.querySelector('#stamp');
  if(!stamp)return;
  stamp.innerHTML=`<div class="stamp-face">Guardado<small>${longDate(selected)}</small></div>`;
  stamp.classList.remove('show');
  void stamp.offsetWidth;
  stamp.classList.add('show');
}

function toast(message,error=false){
  const el=document.querySelector('#toast');
  if(!el)return;
  el.innerHTML=`<div class="${error?'error':''}">${icon(error?'close':'check')}<span>${esc(message)}</span></div>`;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3200);
}

function showModal(html){
  const modal=document.querySelector('#modal');
  modal.innerHTML=html;
  modal.showModal();
  return modal;
}

function confirmDialog({title,text,confirmLabel,danger=false}){
  return new Promise(resolve=>{
    const modal=showModal(`<div class="modal-card">
      <h2>${esc(title)}</h2><p>${esc(text)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${danger?'danger':'solid'}" data-modal="confirm">${esc(confirmLabel)}</button>
      </div>
    </div>`);
    modal.addEventListener('click',function handler(event){
      const action=event.target.closest('[data-modal]')?.dataset.modal;
      if(action){modal.close();modal.removeEventListener('click',handler);resolve(action==='confirm');}
      else if(event.target===modal){modal.close();modal.removeEventListener('click',handler);resolve(false);}
    });
  });
}

function readEntry(date){
  const e=entries.find(x=>x.date===date);
  if(!e){openDay(date);return;}
  const done=habits.filter(h=>e.habits?.[h.id]);
  const modal=showModal(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">Día ${dayNumber(e.date,entries)}</p><h2>${longDate(e.date)}</h2></div>
      <span class="mood-tag" style="--mood:${MOODS[e.mood-1].color}">${MOODS[e.mood-1].emoji} ${MOODS[e.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${icon('moon')} ${f(e.sleepHours)} h sueño</span>
      <span class="chiplet">${icon('study')} ${f(e.studyHours)} h estudio</span>
      ${e.energy?`<span class="chiplet">${icon('bolt')} energía ${e.energy}/5</span>`:''}
      ${e.stress?`<span class="chiplet">${icon('storm')} estrés ${e.stress}/5</span>`:''}
      <span class="chiplet">${icon('pen')} ${wordCount(e)} palabras</span>
    </div>
    ${(e.tags||[]).length?`<div class="read-metrics">${e.tags.map(t=>`<span class="chiplet">${icon('hash')} ${esc(t)}</span>`).join('')}</div>`:''}
    <div class="read-section"><h3>Lo mejor del día</h3><p>${esc(e.bestOfDay)||'<em>Sin anotar.</em>'}</p></div>
    <div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${esc(e.differentToday)||'<em>Sin anotar.</em>'}</p></div>
    <div class="read-section"><h3>¿Cómo ha ido en general?</h3><p>${esc(e.generalDay)||'<em>Sin anotar.</em>'}</p></div>
    ${e.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${esc(e.wordOfDay)}»</p></div>`:''}
    <div class="read-section"><h3>Agradecimiento nocturno</h3><ol>${e.gratitude.map(g=>`<li>${esc(g)||'<em>Sin anotar.</em>'}</li>`).join('')}</ol></div>
    ${(e.tomorrow||e.goals?.length)?`<div class="read-section"><h3>Mañana quiero...</h3><p>${esc(e.tomorrow)}</p>${e.goals?.length?`<ul>${e.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul>`:''}</div>`:''}
    <div class="read-section"><h3>Contadores</h3><p>${COUNTERS.map(c=>`${c.label}: ${e.counters?.[c.key]??0} ${c.unit}`).join(' · ')}</p></div>
    ${habits.length?`<div class="read-section"><h3>Hábitos del día</h3><p>${done.length?done.map(h=>esc(h.name)).join(' · '):'Ninguno marcado.'}</p></div>`:''}
    <div class="read-summary"><p class="eyebrow">Resumen del día</p><p>${generateSummary(e)}</p></div>
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${icon('pen')} Editar</button>
    </div>
  </article>`);
  modal.addEventListener('click',function handler(event){
    const action=event.target.closest('[data-modal]')?.dataset.modal;
    const close=()=>{modal.close();modal.removeEventListener('click',handler);};
    if(action==='close'||event.target===modal)close();
    if(action==='edit'){close();openDay(e.date);}
    if(action==='delete'){close();requestDelete(e.date);}
  });
}

function openDay(date){
  if(date>dateKey()){toast('Ese día todavía no ha llegado.',true);return;}
  if(dirty&&!window.confirm('Tienes cambios sin guardar. ¿Quieres salir igualmente?'))return;
  dirty=false;selected=date;view='diary';menu=false;render();
  window.scrollTo({top:0,behavior:'smooth'});
}

async function requestDelete(date){
  if(await confirmDialog({
    title:'¿Eliminar esta entrada?',
    text:`Se borrará del dispositivo el registro de ${longDate(date)}. Esta acción no se puede deshacer.`,
    confirmLabel:'Sí, eliminar',danger:true
  })){
    entries=deleteEntry(date);render();toast('Entrada eliminada.');
  }
}

function download(name,content){
  const blob=new Blob([content],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=name;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

app.addEventListener('click',async event=>{
  const viewButton=event.target.closest('[data-view]');
  const actionButton=event.target.closest('[data-action]');
  if(event.target.closest('.brand')){event.preventDefault();openDay(dateKey());return;}
  if(viewButton&&!actionButton){
    const next=viewButton.dataset.view;
    if(dirty&&!window.confirm('Tienes cambios sin guardar. ¿Quieres salir igualmente?'))return;
    dirty=false;view=next;menu=false;
    if(view==='diary')selected=dateKey();
    render();window.scrollTo({top:0,behavior:'smooth'});
    return;
  }
  if(!actionButton)return;
  const {action,date,range,mini,key,step,habit,name}=actionButton.dataset;
  switch(action){
    case 'menu':menu=!menu;render();break;
    case 'previous':openDay(addDays(selected,-1));break;
    case 'next':openDay(addDays(selected,1));break;
    case 'today':openDay(dateKey());break;
    case 'open-day':openDay(date);break;
    case 'read':readEntry(date);break;
    case 'delete':requestDelete(date);break;
    case 'add-goal':
      document.querySelector('#goals').insertAdjacentHTML('beforeend',goalRow());
      document.querySelector('#goals .goal-row:last-child input')?.focus();
      dirty=true;break;
    case 'remove-goal':actionButton.closest('.goal-row').remove();dirty=true;break;
    case 'counter-plus':case 'counter-minus':{
      const input=document.querySelector(`[name="counter_${key}"]`);
      if(!input)break;
      const dir=action==='counter-plus'?1:-1;
      const s=parseFloat(step)||1;
      const value=Math.min(parseFloat(input.max),Math.max(parseFloat(input.min),(parseFloat(input.value)||0)+dir*s));
      input.value=Math.round(value*10)/10;
      input.dispatchEvent(new Event('input',{bubbles:true}));
      break;
    }
    case 'add-habit':{
      const input=document.querySelector('#new-habit');
      const habitName=input?.value.trim();
      if(!habitName){toast('Escribe un nombre para el hábito.',true);break;}
      if(habits.length>=30){toast('Puedes tener como máximo 30 hábitos.',true);break;}
      habits=saveHabit({name:habitName});
      render();toast(`Hábito «${habitName}» añadido.`);
      break;
    }
    case 'delete-habit':{
      if(await confirmDialog({
        title:'¿Eliminar este hábito?',
        text:`Se eliminará «${name}» de tu lista. Los días ya guardados conservarán su registro.`,
        confirmLabel:'Eliminar',danger:true
      })){
        habits=deleteHabit(habit);render();toast('Hábito eliminado.');
      }
      break;
    }
    case 'month-prev':mini==='1'?miniMonth=monthMove(miniMonth,-1):month=monthMove(month,-1);render();break;
    case 'month-next':mini==='1'?miniMonth=monthMove(miniMonth,1):month=monthMove(month,1);render();break;
    case 'period-prev':if(view==='month')month=monthMove(month,-1);else selected=addDays(selected,-7);render();break;
    case 'period-next':if(view==='month')month=monthMove(month,1);else selected=addDays(selected,7);render();break;
    case 'range':period=+range;render();break;
    case 'export':case 'backup':
      download(`diario-${dateKey()}.json`,exportData(entries));
      toast('Copia descargada. Guárdala en un lugar seguro.');break;
    case 'import':document.querySelector('#import-file').click();break;
    case 'clear':
      if(await confirmDialog({
        title:'¿Borrar todos los datos?',
        text:'Se eliminarán todas las entradas y hábitos de este dispositivo. Esta acción no se puede deshacer. Te recomendamos exportar una copia antes.',
        confirmLabel:'Borrar todo',danger:true
      })){
        clearEntries();entries=[];habits=[];selected=dateKey();view='diary';render();
        toast('Se han borrado todos los datos.');
      }
      break;
  }
});

app.addEventListener('change',event=>{
  if(event.target.id==='import-file'){
    const file=event.target.files[0];
    if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        pendingImport=parseImport(reader.result);
        const modal=showModal(`<div class="modal-card">
          <h2>Importar diario</h2>
          <p>La copia contiene <strong>${pendingImport.entries.length}</strong> ${pendingImport.entries.length===1?'entrada':'entradas'} y <strong>${pendingImport.habits.length}</strong> ${pendingImport.habits.length===1?'hábito':'hábitos'}. Si una fecha ya existe, se sustituirá por la de la copia.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);
        modal.addEventListener('click',function handler(e){
          const a=e.target.closest('[data-modal]')?.dataset.modal;
          if(a==='confirm'){importData(pendingImport);refresh();toast('Diario importado correctamente.');}
          if(a){modal.close();modal.removeEventListener('click',handler);render();}
        });
      }catch(err){toast(err.message||'No se ha podido importar la copia.',true);}
      event.target.value='';
    };
    reader.readAsText(file);
  }
  if(event.target.id==='history-mood'){historyMood=event.target.value;render();}
});

app.addEventListener('input',event=>{
  if(event.target.id==='history-search'){
    historyQuery=event.target.value;
    const active=document.activeElement===event.target;
    render();
    if(active){
      const input=document.querySelector('#history-search');
      input.focus();
      input.setSelectionRange(input.value.length,input.value.length);
    }
  }
});

window.addEventListener('beforeunload',event=>{
  if(dirty){event.preventDefault();event.returnValue='';}
});

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}

render();
