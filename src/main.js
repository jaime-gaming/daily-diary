import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/400-italic.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './styles/main.css';

import {
  MOODS,ENERGY_LABELS,STRESS_LABELS,COUNTERS,THEMES,
  AGE_GROUPS,INTEREST_OPTIONS,WRITING_RITUALS,TONE_STYLES
} from './data/constants.js';
import {dateKey,addDays,dayNumber,longDate,weekStart,monthRange,monthMove} from './utils/dates.js';
import {
  calculateStats,currentStreak,inRange,formatNumber as f,sleepInterpretation,studyInterpretation,
  generateSummary,periodSummary,generateTrends,wordCount,habitStreak,habitCount,tagFrequency,counterInterpretation
} from './utils/stats.js';
import {
  loadEntries,saveEntry,deleteEntry,clearEntries,exportData,parseImport,importData,
  loadHabits,saveHabit,deleteHabit,loadSetup,saveSetup,ageGroupFromAge
} from './utils/storage.js';
import {
  detectCrisisRisk,getWritingPrompt,calculateEntryCompletion,getGreeting,getAgeProfile,
  generateThemeFaviconDataUri,generateThemeFaviconSvg
} from './utils/wellbeing.js';
import {
  icon,escape as esc,calendar,scaleField,tagPicker,counterSteppers,habitChecklist,
  moodChart,moodHeatmap,personalGoalsPanel,personalQuoteCard,exLibrisBadge,
  ledger,rankRow,emptyState,meterRows,crisisBanner,crisisSupportModal,
  dailyInspirationSection,setupWizardModal
} from './components/ui.js';

const app=document.querySelector('#app');
let entries=[],habits=[],setup=loadSetup(),storageError='',view='diary',selected=dateKey(),month=dateKey(),miniMonth=dateKey(),
    period=7,dirty=false,menu=false,sidebarCollapsed=false,historyQuery='',historyMood='',historyTag='',historyLayout='grid',
    archiveTab='list',statsTab='pulse',profileTab='personal',moreDetailsOpen=false,
    pendingImport=null,wordOffset=0,tipOffset=0,promptOffset=0,quoteOffset=0,showWritingPrompt=false,focusWriting=false,
    crisisBannerDismissed=false,breathingTimer=null,pageTurnDir='';

function applyTheme(themeId,customSetup=setup){
  const themeObj=THEMES.find(t=>t.id===themeId)||THEMES[0];
  document.documentElement.dataset.theme=themeObj.id;
  try{
    const faviconUri=generateThemeFaviconDataUri(themeObj.id,customSetup);
    let link=document.querySelector('link[rel="icon"]');
    if(!link){
      link=document.createElement('link');
      link.rel='icon';
      document.head.appendChild(link);
    }
    link.type='image/svg+xml';
    link.href=faviconUri;
    const metaTheme=document.querySelector('meta[name="theme-color"]');
    if(metaTheme)metaTheme.setAttribute('content',themeObj.colors[0]);
    document.title=customSetup?.name
      ?`Cuaderno de ${customSetup.name}`
      :'Diario';
  }catch{}
}

function refresh(){
  entries=loadEntries();
  habits=loadHabits();
  setup=loadSetup();
  sidebarCollapsed=Boolean(setup.sidebarCollapsed);
  applyTheme(setup.theme,setup);
}
try{refresh();}catch(e){
  storageError='No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. '+e.message;
}

function getNavs(){
  return [
    ['diary','pen','Hoy'],
    ['archive','book','Archivo'],
    ['stats','chart','Progreso'],
    ['setup','sliders','Perfil']
  ];
}
const pageName=id=>getNavs().find(n=>n[0]===id)?.[2]||'Hoy';

function navButton([id,ico,label],index){
  return `<button class="nav-item ${view===id?'active':''}" style="--nav-i:${index}" data-view="${id}" title="${esc(label)}" data-tooltip="${esc(label)}" ${view===id?'aria-current="page"':''}>
    ${icon(ico)}<span class="nav-label">${esc(label)}</span>
  </button>`;
}

function render(){
  applyTheme(setup.theme,setup);
  const navs=getNavs();
  const currentThemeObj=THEMES.find(t=>t.id===setup.theme)||THEMES[0];
  const turnClass=pageTurnDir?`page-turn-${pageTurnDir}`:'view-enter';
  pageTurnDir='';
  app.innerHTML=`
  <div class="sidebar-backdrop ${menu?'is-visible':''}" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar ${menu?'is-open':''} ${sidebarCollapsed?'is-collapsed':''}" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" title="${sidebarCollapsed?'Desplegar menú (Ctrl+B)':'Plegar menú (Ctrl+B)'}" aria-label="${sidebarCollapsed?'Desplegar menú':'Plegar menú'}" aria-expanded="${!sidebarCollapsed}">
        ${icon(sidebarCollapsed?'right':'left')}
      </button>
    </div>
    <div class="brand-rule"></div>
    ${exLibrisBadge(setup,entries.length)}
    <nav aria-label="Navegación principal">${navs.map(navButton).join('')}</nav>
    <div class="sidebar-bottom">
      <div class="local-note">${icon('lock')}<div><strong>Guardado en tu dispositivo</strong>${setup.name?`Cuaderno de ${esc(setup.name)}.`:'Sin cuentas ni servidores externos.'}</div></div>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="${menu}">${icon('menu')}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" title="${sidebarCollapsed?'Desplegar menú (Ctrl+B)':'Plegar menú (Ctrl+B)'}" aria-label="Alternar barra lateral">${icon('sidebar')}</button>
        <span class="breadcrumb">${setup.name?`Cuaderno de ${esc(setup.name)}`:'Diario'} <span>/</span> ${esc(pageName(view))}</span>
      </div>
      <div class="topbar-right">
        <button type="button" class="theme-pill" data-action="cycle-theme" title="Cambiar papel e icono (${esc(currentThemeObj.name)})">
          <span class="topbar-favicon-mini">${generateThemeFaviconSvg(setup.theme,setup)}</span>
          <span>${esc(currentThemeObj.name)}</span>
        </button>
        <button type="button" class="avatar" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil">
          ${setup.name?`<span class="avatar-initial">${esc(setup.name.slice(0,1).toUpperCase())}</span>`:icon('user')}
        </button>
      </div>
    </header>
    <main id="main" class="${turnClass}">
      ${storageError?`<div class="error-banner" role="alert">${esc(storageError)}</div>`:''}
      ${page()}
    </main>
    <footer class="page-footer">
      <span>${icon('leaf')} ${esc(setup.motto||'Un día a la vez.')}</span>
      <span>${setup.name?`Cuaderno de ${esc(setup.name)}`:'Guardado localmente en este navegador'}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar ${dirty?'is-visible':''}" aria-live="polite">
    <span>${icon('pen')} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${icon('stamp')} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`;
  bindForm();
}

function pageHeader(eyebrow,title,subtitle,action=''){
  return `<div class="page-heading">
    <div>${eyebrow?`<p class="eyebrow">${eyebrow}</p>`:''}<h1>${title}</h1>${subtitle?`<p class="page-subtitle">${subtitle}</p>`:''}</div>
    ${action}
  </div>`;
}

function page(){
  switch(view){
    case 'diary':return diaryPage();
    case 'archive':return archivePage();
    case 'stats':return statsUnifiedPage();
    case 'setup':return setupUnifiedPage();
    default:return diaryPage();
  }
}

/* ================= HOY (DIARIO SIMPLIFICADO Y ADAPTATIVO) ================= */
function dayNav(){
  return `<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${icon('left')}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${selected>=dateKey()?'disabled':''}><span>Siguiente</span>${icon('right')}</button>
  </div>`;
}

function setupOnboardingBanner(){
  if(setup.completed)return '';
  return `<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${icon('sliders')}</span>
      <div>
        <h2>Adapta el diario a tu edad y a tus gustos</h2>
        <p>En 30 segundos ajustamos las metas, los hábitos, las frases y el papel para que solo veas lo que te interesa.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${icon('sliders')} Personalizar ahora</button>
      <button type="button" class="button outline" data-action="dismiss-setup-banner">Omitir</button>
    </div>
  </section>`;
}

function hero(e,profile){
  const words=e?wordCount(e):0;
  const done=e?Object.values(e.habits||{}).filter(Boolean).length:0;
  const greeting=getGreeting(setup.name);
  return `<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${dayNumber(selected,entries)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${esc(greeting)} <span class="age-stage-tag">${setup.age?`· ${setup.age} años`:''}</span></p>
        <span class="date-line">${longDate(selected)}</span>
        <div class="hero-chips">
          ${currentStreak(entries)>0?`<span class="chip hot">${icon('flame')} ${currentStreak(entries)} d seguidos</span>`:''}
          <span class="chip" id="hero-words-chip">${words} palabras</span>
          ${habits.length?`<span class="chip" id="hero-habits-chip">${done}/${habits.length} hábitos</span>`:''}
          ${profile.interests.slice(0,2).map(i=>`<span class="chip personal-interest-chip">${icon(i.icon)} ${esc(i.label.split(' ')[0])}</span>`).join('')}
          ${e?`<span class="entry-status">${icon('check')} Guardado</span>`:`<span class="entry-status pending">Borrador</span>`}
        </div>
      </div>
    </div>
    <div class="hero-right">
      ${dayNav()}
    </div>
  </div>`;
}

function textField(name,title,placeholder,value,large=true){
  const words=(value||'')?String(value).trim().split(/\s+/).length:0;
  return `<div class="writing-field" data-field="${name}">
    <label for="${name}">${title}<span class="word-count">${words} palabras</span></label>
    <textarea id="${name}" name="${name}" maxlength="20000" placeholder="${esc(placeholder)}" class="${large?'large':''}">${esc(value||'')}</textarea>
  </div>`;
}

function goalRow(value=''){
  return `<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto..." maxlength="500" value="${esc(value)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${icon('close')}</button>
  </div>`;
}

function savedNotebookSheet(e,profile){
  if(!e)return '';
  const doneHabits=habits.filter(h=>e.habits?.[h.id]);
  const ownerSign=setup.name?`Cuaderno de ${setup.name}`:'Resumen guardado';
  return `<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${icon('book')} Día ${dayNumber(e.date,entries)}</p>
        <h2>${longDate(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${MOODS[e.mood-1].color}">${MOODS[e.mood-1].emoji} ${MOODS[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay || e.capsule ? `
      <div class="sheet-capsules">
        ${e.wordOfDay ? `<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${esc(e.wordOfDay)}»</strong></div>` : ''}
        ${e.capsule ? `<div class="sheet-capsule-item"><span>${esc(profile.capsuleLabel)}</span><strong>${esc(e.capsule)}</strong></div>` : ''}
      </div>
    ` : ''}
    <p class="sheet-narrative">${generateSummary(e)}</p>
    ${e.bestOfDay ? `<div class="sheet-quote-note"><span>Lo mejor:</span> «${esc(e.bestOfDay)}»</div>` : ''}
    ${doneHabits.length ? `<div class="sheet-habits-line">${icon('check')} ${doneHabits.map(h=>`<b>${esc(h.name)}</b>`).join(' · ')}</div>` : ''}
    <div class="sheet-footer">
      <small>${esc(ownerSign)} · ${wordCount(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${icon('arrow')}</button>
    </div>
  </section>`;
}

function hasExtraDetails(e){
  if(!e)return false;
  return Boolean(
    e.bestOfDay ||
    e.differentToday ||
    e.tomorrow ||
    e.energy ||
    e.stress ||
    (e.tags&&e.tags.length) ||
    (e.gratitude&&e.gratitude.some(Boolean)) ||
    (e.goals&&e.goals.length) ||
    Object.values(e.counters||{}).some(v=>v>0)
  );
}

function diaryPage(){
  const e=entries.find(x=>x.date===selected);
  const profile=getAgeProfile(setup);
  const risk=!crisisBannerDismissed ? detectCrisisRisk(e||{}) : {triggered:false};
  const activePrompt=getWritingPrompt(selected,promptOffset);
  const moodColor=e?.mood?MOODS[e.mood-1].color:'';
  const defaultSleep=e?.sleepHours ?? setup.sleepGoal ?? profile.sleepRecommended ?? 7.5;
  const defaultStudy=e?.studyHours ?? 0;
  const showExtras=moreDetailsOpen || hasExtraDetails(e);

  const sleepPresets=[6,7,7.5,8,9];
  const studyPresets=[0,1,2,3,4];

  return `
  ${setupOnboardingBanner()}
  ${hero(e,profile)}
  <div id="crisis-alert-slot">${crisisBanner(risk,setup)}</div>
  <div id="inspiration-slot">${dailyInspirationSection(selected,wordOffset,tipOffset,setup,e,e?.wordOfDay||'')}</div>
  <div class="diary-layout ${focusWriting?'is-focus-writing':''}">
    <div class="diary-main">
      <form id="diary-form" style="${moodColor?`--active-mood:${moodColor}`:''}">
        <!-- TARJETA 1: ÁNIMO Y RITMO CON 1 CLIC -->
        <section class="card mood-card-section" style="--i:1">
          <fieldset>
            <legend class="section-index">¿Cómo ha ido hoy?</legend>
            <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?" style="margin-top:12px">
              ${MOODS.map(m=>`<label class="mood-option" style="--mood-color:${m.color}">
                <input type="radio" name="mood" value="${m.value}" ${(e?.mood||0)===m.value?'checked':''}>
                <span class="mood-face">${m.emoji}</span>
                <span class="mood-label">${m.label}</span>
              </label>`).join('')}
            </div>
          </fieldset>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${icon('moon')} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${sleepPresets.map(v=>`<button type="button" class="quick-pill ${Number(defaultSleep)===v?'active':''}" data-action="quick-number" data-target="sleepHours" data-val="${v}">${f(v)}h</button>`).join('')}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${defaultSleep}">
                <span>horas (meta: ${f(setup.sleepGoal||profile.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${icon('study')} ${esc(profile.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${studyPresets.map(v=>`<button type="button" class="quick-pill ${Number(defaultStudy)===v?'active':''}" data-action="quick-number" data-target="studyHours" data-val="${v}">${f(v)}h</button>`).join('')}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${defaultStudy}">
                <span>horas (meta: ${f(setup.studyGoal??profile.studyRecommended)} h)</span>
              </div>
            </div>
          </div>
        </section>

        <!-- TARJETA 2: TU PÁGINA DE HOY (ESCRITURA LIBRE Y CÁPSULA) -->
        <section class="card writing-card-section" style="--i:2">
          <div class="section-heading">
            <p class="section-index" style="flex:1">Tu página de hoy</p>
            <div class="writing-tools-bar">
              <button type="button" class="text-button prompt-trigger-btn" data-action="inspire-prompt">
                ${icon('spark')} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${focusWriting?'Salir del modo enfoque':'Ampliar zona de escritura'}" aria-label="Modo enfoque">
                ${icon('expand')}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${showWritingPrompt?'is-open':''}" ${showWritingPrompt?'':'hidden'}>
            <div>
              <p id="writing-prompt-text">${esc(activePrompt)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${icon('refresh')} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${icon('pen')} Usar</button>
            </div>
          </div>
          ${textField('generalDay','Notas del día (opcional si solo quieres un registro rápido)',profile.placeholders.generalDay,e?.generalDay,true)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${icon('spark')} ${esc(profile.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${esc(profile.capsulePlaceholder)}" value="${esc(e?.capsule||'')}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${icon('book')} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy..." value="${esc(e?.wordOfDay||'')}">
            </div>
          </div>
        </section>

        <!-- ACORDEÓN ANIMADO: MÁS DETALLES DEL DÍA (ADAPTADO A TUS GUSTOS) -->
        <div class="extras-accordion ${showExtras?'is-open':''}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${showExtras}">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, contadores, lo mejor de hoy, gratitud o intención para mañana</small>
            </div>
            <span class="extras-chevron">${icon('chevronDown')}</span>
          </button>
          <div class="extras-Work-shell">
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${tagPicker(e?.tags||[],profile.tags)}
              </section>

              <section class="card">
                <p class="section-index">Contadores adaptados a ti</p>
                ${counterSteppers(e?.counters,COUNTERS,setup)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${scaleField('energy',ENERGY_LABELS,e?.energy,'bolt','Energía','Del 1 al 5','Opcional')}
                  ${scaleField('stress',STRESS_LABELS,e?.stress,'storm','Estrés','Del 1 al 5','Opcional')}
                </div>
                ${textField('bestOfDay','Lo mejor del día',profile.placeholders.bestOfDay,e?.bestOfDay,false)}
                ${textField('differentToday','¿Qué ha sido distinto hoy?',profile.placeholders.differentToday,e?.differentToday,false)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas y mañana</p>
                <div class="gratitude-fields" style="margin-bottom:16px">
                  ${['1. Hoy agradezco o valoro...','2. También...','3. Y además...'].map((p,i)=>`<label><span>0${i+1}</span><input name="gratitude${i}" aria-label="${p}" placeholder="${p}" maxlength="20000" value="${esc(e?.gratitude?.[i]||'')}"></label>`).join('')}
                </div>
                <textarea name="tomorrow" aria-label="Intención para mañana" maxlength="20000" placeholder="${esc(profile.placeholders.tomorrow)}">${esc(e?.tomorrow||'')}</textarea>
                <div id="goals">${(e?.goals||[]).map(goalRow).join('')}</div>
                <button type="button" class="text-button" data-action="add-goal">${icon('plus')} Añadir objetivo concreto</button>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${icon('lock')} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${storageError?'disabled':''}>${icon('stamp')} Guardar día</button>
        </div>
      </form>
      ${savedNotebookSheet(e,profile)}
    </div>

    <aside class="diary-aside">
      ${habitsCard(e)}
      ${weekPreview()}
      <div id="quote-slot">${personalQuoteCard(selected,quoteOffset,setup)}</div>
    </aside>
  </div>`;
}

function weekPreview(){
  const start=weekStart(selected),end=addDays(start,6);
  const weekly=inRange(entries,start,end),s=calculateStats(weekly);
  return `<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${weekly.length}/7 días</span></div>
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
      <div>${icon('study')}<strong>${s.count?f(s.study):'—'}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${icon('arrow')}</button>
  </section>`;
}

function habitsCard(e){
  const doneCount=habits.filter(h=>e?.habits?.[h.id]).length;
  const pct=habits.length?Math.round((doneCount/habits.length)*100):0;
  return `<section class="card">
    <div class="section-heading"><h2>Tus hábitos</h2><span class="tag ${doneCount===habits.length&&habits.length>0?'all-done':''}" id="habits-badge">${doneCount}/${habits.length}</span></div>
    ${habits.length?`<div class="habit-progress-bar"><i id="habit-progress-fill" style="width:${pct}%"></i></div>`:''}
    ${habits.length?habitChecklist(habits,e):'<p class="habit-empty" style="margin-top:10px">Añade aquí los hábitos que quieras seguir a diario.</p>'}
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Añadir hábito…" aria-label="Nuevo hábito">
      <button class="icon-button" data-action="add-habit" aria-label="Añadir hábito">${icon('plus')}</button>
    </div>
  </section>`;
}

/* ================= ARCHIVO UNIFICADO (ENTRADAS + CALENDARIO) ================= */
function archivePage(){
  const allUsedTags=[...new Set(entries.flatMap(e=>e.tags||[]))];
  const visible=entries.filter(e=>
    (!historyMood||e.mood===+historyMood)&&
    (!historyTag||(e.tags||[]).includes(historyTag))&&
    (!historyQuery||[e.date,e.generalDay,e.bestOfDay,e.differentToday,e.tomorrow,e.wordOfDay,e.capsule,...e.gratitude,...(e.goals||[]),...(e.tags||[])].join(' ').toLocaleLowerCase().includes(historyQuery.toLocaleLowerCase()))
  ).sort((a,b)=>b.date.localeCompare(a.date));

  return `${pageHeader('Archivo',setup.name?`Recuerdos de ${esc(setup.name)}`:'Tus días guardados',`${entries.length} ${entries.length===1?'entrada':'entradas'} · ${f(entries.reduce((s,e)=>s+wordCount(e),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${archiveTab==='list'?'active':''}">${icon('book')} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${archiveTab==='calendar'?'active':''}">${icon('calendar')} Calendario</button>
    </div>
  `)}

  ${archiveTab==='calendar'?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${calendar(month,entries,{selected})}
        <div class="mood-legend">
          ${MOODS.map(m=>`<span><i style="background:${m.color}"></i>${m.label}</span>`).join('')}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${icon('search')}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta..." value="${esc(historyQuery)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${MOODS.map(m=>`<option value="${m.value}" ${historyMood==m.value?'selected':''}>${m.emoji} ${m.label}</option>`).join('')}
        </select>
        ${allUsedTags.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${allUsedTags.map(t=>`<option value="${esc(t)}" ${historyTag===t?'selected':''}>#${esc(t)}</option>`).join('')}
          </select>
        `:''}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${historyLayout==='grid'?'active':''}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${historyLayout==='timeline'?'active':''}">Hilo</button>
        </div>
      </div>
      <div class="${historyLayout==='timeline'?'history-timeline':'history-grid'}">
        ${visible.length?visible.map((e,idx)=>{
          const doneHabits=Object.values(e.habits||{}).filter(Boolean).length;
          return `<article class="card history-card" style="--mood:${MOODS[e.mood-1].color};--i:${Math.min(idx,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${dayNumber(e.date,entries)}</p>
              <span class="mood-tag" style="--mood:${MOODS[e.mood-1].color}">${MOODS[e.mood-1].emoji} ${MOODS[e.mood-1].label}</span>
            </div>
            <h2>${longDate(e.date,{day:'numeric',month:'long',year:'numeric'})}</h2>
            <p class="entry-excerpt">${esc(e.generalDay)}</p>
            ${(e.wordOfDay||e.capsule)?`
              <div class="history-capsules">
                ${e.wordOfDay?`<span class="history-word-pill">«${esc(e.wordOfDay)}»</span>`:''}
                ${e.capsule?`<span class="history-capsule-pill">${icon('spark')} ${esc(e.capsule)}</span>`:''}
              </div>
            `:''}
            <div class="history-numbers">
              <span class="chiplet">${icon('moon')} ${f(e.sleepHours)} h</span>
              <span class="chiplet">${icon('study')} ${f(e.studyHours)} h</span>
              ${habits.length?`<span class="chiplet">${icon('check')} ${doneHabits}/${habits.length}</span>`:''}
              <span class="chiplet">${icon('pen')} ${wordCount(e)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${e.date}">Abrir ${icon('arrow')}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${e.date}" aria-label="Editar">${icon('pen')}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${e.date}" aria-label="Eliminar">${icon('trash')}</button>
            </div>
          </article>`;
        }).join(''):emptyState(entries.length?'Sin resultados':'Aún no hay entradas guardadas','Las páginas que guardes aparecerán aquí.')}
      </div>
    </div>
  `}`;
}

/* ================= PROGRESO UNIFICADO (ESTADÍSTICAS + SEMANA + MES) ================= */
function statsUnifiedPage(){
  return `${pageHeader('Progreso',setup.name?`Tu evolución, ${esc(setup.name.split(' ')[0])}`:'Tu evolución','Tus patrones de descanso, ánimo, hábitos y metas personales.',`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${statsTab==='pulse'?'active':''}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${statsTab==='week'?'active':''}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${statsTab==='month'?'active':''}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${statsTab==='week'?periodBody(false):statsTab==='month'?periodBody(true):statsPulseBody()}
  </div>`;
}

function statsPulseBody(){
  const today=dateKey(),start=addDays(today,1-period);
  const recent=inRange(entries,start,today),prior=inRange(entries,addDays(start,-period),addDays(start,-1));
  const s=calculateStats(recent),p=calculateStats(prior),trends=generateTrends(entries);
  const profile=getAgeProfile(setup);
  const evolution=(key,unit)=>{
    if(recent.length<3||prior.length<3)return '';
    if(!Number.isFinite(s[key])||!Number.isFinite(p[key]))return '';
    const d=s[key]-p[key];
    return `${d>0?'↑':d<0?'↓':'→'} ${f(Math.abs(d))}${unit} vs. anterior`;
  };
  return `
  <div class="ledger-grid">
    ${ledger('Estado medio',s.count?f(s.mood):'—','/ 5',evolution('mood',''))}
    ${ledger('Sueño medio',s.count?f(s.sleep):'—','h',evolution('sleep',' h'))}
    ${ledger(profile.focusLabel,s.count?f(s.study):'—','h',evolution('study',' h'))}
    ${ledger('Racha actual',currentStreak(entries),'días',`${s.count} días registrados`)}
  </div>
  ${personalGoalsPanel(recent,setup)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${period===7?'active':''}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${period===30?'active':''}">30 días</button>
      </div>
    </div>
    ${moodChart(recent,start,period,setup)}
    <div class="chart-dates"><span>${longDate(start,{day:'numeric',month:'short'})}</span><span>${longDate(today,{day:'numeric',month:'short'})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${moodHeatmap(entries,today,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${trends.length?trends.map(t=>`<p class="trend-item">${icon('arrow')}<span>${t}</span></p>`).join(''):'<p class="habit-empty">Con 3 o más registros por semana verás comparativas automáticas aquí.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${tagFrequency(recent).length?meterRows(tagFrequency(recent).slice(0,6).map(([t,c])=>({label:t,count:c,total:recent.length,color:'var(--red)'}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`;
}

function periodBody(monthly){
  const [start,end]=monthly?monthRange(month):[weekStart(selected),addDays(weekStart(selected),6)];
  const records=inRange(entries,start,end),s=calculateStats(records);
  return `
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${monthly?longDate(month,{month:'long',year:'numeric'}):`${longDate(weekStart(selected),{day:'numeric',month:'short'})} – ${longDate(addDays(weekStart(selected),6),{day:'numeric',month:'short',year:'numeric'})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${monthly?'1':'0'}" aria-label="Anterior">${icon('left')}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${monthly?'1':'0'}" aria-label="Siguiente">${icon('right')}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${ledger('Días registrados',s.count,monthly?'días':'/ 7')}
    ${ledger('Estado medio',s.count?f(s.mood):'—','/ 5')}
    ${ledger('Sueño medio',s.count?f(s.sleep):'—','h')}
    ${ledger('Dedicación media',s.count?f(s.study):'—','h')}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${icon('leaf')}</span>
    <div>
      <p>${periodSummary(s,monthly)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${rankRow('Mejor día',s.best)}
        ${rankRow('Más sueño',s.mostSleep,'sleepHours')}
        ${rankRow('Más dedicación',s.mostStudy,'studyHours')}
        ${rankRow('Día más difícil',s.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${meterRows(MOODS.map((m,i)=>({label:`${m.emoji} ${m.label}`,count:s.moods[i],total:s.count,color:m.color})))}
      </div>
    </section>
  </div>`;
}

/* ================= PERFIL Y DATOS UNIFICADOS ================= */
function setupUnifiedPage(){
  return `${pageHeader('Perfil y ajustes','Hecho a tu medida','Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.',`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${profileTab==='personal'?'active':''}">${icon('sliders')} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${profileTab==='data'?'active':''}">${icon('shield')} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${profileTab==='data'?dataAndPrivacyBody():setupFormBody()}
  </div>`;
}

function setupFormBody(){
  const profile=getAgeProfile(setup);
  const existingNames=new Set(habits.map(h=>h.name.toLowerCase()));
  const selectedInterests=new Set(setup.interests||[]);
  return `<form id="setup-page-form" class="setup-page-grid">
    <section class="card" style="--i:1">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${icon('user')} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre..." value="${esc(setup.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${setup.age??''}">
            <span>años</span>
          </div>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${AGE_GROUPS.map(g=>`
            <label class="age-group-card ${profile.group.id===g.id?'is-selected':''}" data-age-group-card="${g.id}">
              <input type="radio" name="ageGroup" value="${g.id}" ${profile.group.id===g.id?'checked':''}>
              <span class="age-range-badge">${esc(g.label)}</span>
              <strong>${esc(g.title)}</strong>
              <small>${esc(g.desc)}</small>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${esc(setup.motto)}">
      </div>
    </section>

    <section class="card" style="--i:2">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${INTEREST_OPTIONS.map(item=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${item.id}" ${selectedInterests.has(item.id)?'checked':''}>
            <span>${icon(item.icon)} ${esc(item.label)}</span>
          </label>
        `).join('')}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${WRITING_RITUALS.map(r=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${r.id}" ${(setup.ritual||'night')===r.id?'checked':''}>
                <span class="purpose-icon">${icon(r.icon)}</span>
                <div><strong>${esc(r.label)}</strong></div>
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
                <div><strong>${esc(t.label)}</strong><small>${esc(t.desc)}</small></div>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="card" style="--i:3">
      <h2>Metas, hábitos y frases propias</h2>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${icon('compass')}
        <div>
          <strong>Etapa activa: ${esc(profile.group.title)} (${esc(profile.group.label)})</strong>
          <p>Sueño recomendado: <b>${f(profile.sleepRecommended)} h</b> · Dedicación sugerida: <b>${f(profile.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${icon('moon')} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${setup.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${icon('study')} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${setup.studyGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-water">${icon('drop')} Meta de agua (vasos)</label>
          <input id="sp-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${setup.waterGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${profile.suggestedHabits.map(h=>{
            const already=existingNames.has(h.toLowerCase());
            return `<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${esc(h)}" ${already?'checked':''}><span>${already?'✓ ':'+ '}${esc(h)}</span></label>`;
          }).join('')}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${icon('quote')} Tus frases guardadas (${(setup.savedQuotes||[]).length})</label>
        ${(setup.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${setup.savedQuotes.map((q,idx)=>`
              <div class="saved-quote-item">
                <span>«${esc(q)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${idx}" aria-label="Quitar frase">${icon('close')}</button>
              </div>
            `).join('')}
          </div>
        `:''}
        <div class="habit-add" style="margin-top:10px">
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia...">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${icon('plus')}</button>
        </div>
      </div>
    </section>

    <section class="card" style="--i:4">
      <h2>Papel e icono de la pestaña</h2>
      <div class="setup-field">
        <div class="theme-picker-grid">
          ${THEMES.map(t=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${t.id}" ${setup.theme===t.id?'checked':''}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${generateThemeFaviconSvg(t.id,setup)}</span>
                <div class="theme-swatches">${t.colors.map(c=>`<i style="background:${c}"></i>`).join('')}</div>
              </div>
              <strong>${esc(t.name)}</strong>
              <small>${esc(t.desc)}</small>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="setup-toggles" style="margin-top:16px">
        <label class="toggle-row">
          <input type="checkbox" name="sidebarCollapsed" ${sidebarCollapsed?'checked':''}>
          <span><strong>Barra lateral compacta</strong><small>Reducir el menú a iconos en escritorio (Ctrl+B).</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyWord" ${setup.showDailyWord!==false?'checked':''}>
          <span><strong>Mostrar Palabra del día</strong><small>Muestra una palabra diaria en la parte superior.</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyTip" ${setup.showDailyTip!==false?'checked':''}>
          <span><strong>Mostrar Consejo del día</strong><small>Recomendaciones breves adaptadas a tu edad y gustos.</small></span>
        </label>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <span>${icon('lock')} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${icon('check')} Guardar perfil</button>
    </div>
  </form>`;
}

function dataAndPrivacyBody(){
  return `
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia de seguridad</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Descarga todas tus entradas, hábitos y tu perfil en un archivo JSON para guardarlo o llevarlo a otro dispositivo.</p>
      <button class="button solid" data-action="export">${icon('download')} Descargar copia (.json)</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Recupera un archivo JSON exportado previamente. Te pedirá confirmación antes de fusionar los datos.</p>
      <button class="button outline" data-action="import">${icon('upload')} Seleccionar archivo</button>
      <input type="file" id="import-file" accept=".json,application/json" hidden>
    </section>
  </div>
  <section class="card">
    <h2>Privacidad local</h2>
    <ul class="privacy-list">
      <li>Tus entradas y preferencias se guardan únicamente en el almacenamiento local (<code>localStorage</code>) de este navegador.</li>
      <li>No existen cuentas, servidores externos, telemetría ni envíos a terceros.</li>
      <li>La aplicación funciona sin conexión a internet tras la primera carga.</li>
    </ul>
  </section>
  <section class="card danger-zone">
    <div>
      <h2>Borrar todos los datos</h2>
      <p>Elimina todas las entradas, hábitos y ajustes guardados en este navegador.</p>
    </div>
    <button class="button danger" data-action="clear">${icon('trash')} Borrar todo</button>
  </section>`;
}

/* ================= INTERACCIÓN ================= */
function countWords(text){const t=String(text||'').trim();return t?t.split(/\s+/).length:0;}

function collectForm(form){
  const data=new FormData(form);
  const current=entries.find(x=>x.date===selected);
  const profile=getAgeProfile(setup);
  const customTag=(data.get('tagCustom')||'').toString().trim();
  const tags=[...new Set([...data.getAll('tags').map(t=>t.toString().trim()),customTag].filter(Boolean))];
  const counters={};
  for(const c of COUNTERS)counters[c.key]=parseFloat(data.get(`counter_${c.key}`))||0;
  const habitMap={};
  for(const h of habits)habitMap[h.id]=Boolean(document.querySelector(`[name="habit_${h.id}"]`)?.checked ?? (data.get(`habit_${h.id}`)==='on'));

  const rawMood=+data.get('mood') || current?.mood || 3;
  const rawSleep=data.get('sleepHours');
  const sleepHours=rawSleep!==null&&rawSleep!==''?parseFloat(rawSleep):(setup.sleepGoal||profile.sleepRecommended||7.5);
  const rawStudy=data.get('studyHours');
  const studyHours=rawStudy!==null&&rawStudy!==''?parseFloat(rawStudy):0;

  const bestOfDay=(data.get('bestOfDay')||'').toString().trim();
  const differentToday=(data.get('differentToday')||'').toString().trim();
  const capsule=(data.get('capsule')||'').toString().trim();
  const wordOfDay=(data.get('wordOfDay')||'').toString().trim();
  let generalDay=(data.get('generalDay')||'').toString().trim();

  // Sin campos obligatorios pesados: si el usuario guarda rápido sin escribir párrafo largo, generamos una nota limpia
  if(!generalDay){
    generalDay = bestOfDay || capsule || (wordOfDay ? `Palabra del día: ${wordOfDay}.` : `Día ${MOODS[rawMood-1].label.toLowerCase()}.`);
  }

  return {
    id:current?.id,date:selected,
    mood:rawMood,
    sleepHours,
    studyHours,
    energy:data.get('energy')?+data.get('energy'):null,
    stress:data.get('stress')?+data.get('stress'):null,
    bestOfDay,
    differentToday,
    generalDay,
    wordOfDay,
    capsule,
    gratitude:[0,1,2].map(i=>(data.get(`gratitude${i}`)||'').toString().trim()),
    tomorrow:(data.get('tomorrow')||'').toString().trim(),
    goals:data.getAll('goal').map(g=>g.toString().trim()).filter(Boolean),
    tags,counters,habits:habitMap,
    createdAt:current?.createdAt
  };
}

function validateForForm(entry){
  for(const [key,label] of [['sleepHours','horas de sueño'],['studyHours','horas de dedicación']]){
    const value=entry[key];
    if(!Number.isFinite(value)||value<0||value>24)throw new Error(`Escribe unas ${label} válidas, entre 0 y 24.`);
  }
  return entry;
}

function updateLiveIndicators(form){
  if(!form)return;
  const draft=collectForm(form);
  const wordsChip=document.querySelector('#hero-words-chip');
  if(wordsChip)wordsChip.textContent=`${wordCount(draft)} palabras`;

  const floatBar=document.querySelector('#floating-save');
  if(floatBar)floatBar.classList.toggle('is-visible',dirty);

  const risk=detectCrisisRisk(draft);
  const slot=document.querySelector('#crisis-alert-slot');
  if(slot){
    if(risk.triggered && risk.level==='high' && !crisisBannerDismissed){
      slot.innerHTML=crisisBanner(risk,setup);
    }else if(!risk.triggered){
      slot.innerHTML='';
    }
  }
}

function bindAgeAndInterestsLivePreview(formEl,prefix){
  if(!formEl)return;
  const ageInput=formEl.querySelector(`[name="age"]`);
  const updatePreview=()=>{
    const data=new FormData(formEl);
    const rawAge=data.get('age');
    const chosenGroup=rawAge?ageGroupFromAge(rawAge,data.get('ageGroup')||'young'):(data.get('ageGroup')||'young');
    const interests=data.getAll('interests').map(String);

    formEl.querySelectorAll('[data-age-group-card]').forEach(card=>{
      const isMatch=card.dataset.ageGroupCard===chosenGroup;
      card.classList.toggle('is-selected',isMatch);
      const radio=card.querySelector('input[type="radio"]');
      if(radio&&rawAge)radio.checked=isMatch;
    });

    const previewProfile=getAgeProfile({age:rawAge||null,ageGroup:chosenGroup,interests});
    const sleepIn=formEl.querySelector('[name="sleepGoal"]');
    const studyIn=formEl.querySelector('[name="studyGoal"]');
    if(sleepIn&&rawAge)sleepIn.value=previewProfile.sleepRecommended;
    if(studyIn&&rawAge)studyIn.value=previewProfile.studyRecommended;

    const callout=formEl.querySelector(`#${prefix}-adaptation-callout`);
    if(callout){
      callout.innerHTML=`
        ${icon('compass')}
        <div>
          <strong>Adaptado a: ${esc(previewProfile.group.title)} (${esc(previewProfile.group.label)})</strong>
          <p>Sueño recomendado: <b>${f(previewProfile.sleepRecommended)} h</b> · Dedicación sugerida: <b>${f(previewProfile.studyRecommended)} h</b>.</p>
        </div>`;
    }

    const habitsContainer=formEl.querySelector(`#${prefix}-suggested-habits`);
    if(habitsContainer){
      const existingNames=new Set(habits.map(h=>h.name.toLowerCase()));
      habitsContainer.innerHTML=previewProfile.suggestedHabits.map(h=>{
        const already=existingNames.has(h.toLowerCase());
        return `<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${esc(h)}" ${already?'checked':''}><span>${already?'✓ ':'+ '}${esc(h)}</span></label>`;
      }).join('');
    }
  };

  if(ageInput){
    ageInput.addEventListener('input',updatePreview);
  }
  formEl.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(el=>{
    el.addEventListener('change',updatePreview);
  });
}

function bindForm(){
  const setupPageForm=document.querySelector('#setup-page-form');
  if(setupPageForm){
    bindAgeAndInterestsLivePreview(setupPageForm,'sp');
    setupPageForm.addEventListener('submit',event=>{
      event.preventDefault();
      saveSetupFromForm(setupPageForm);
      render();
      toast('Perfil actualizado');
    });
    setupPageForm.addEventListener('change',event=>{
      if(event.target.name==='theme'){
        applyTheme(event.target.value,setup);
      }
    });
  }

  const form=document.querySelector('#diary-form');
  if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(storageError)return;
    try{
      const entry=validateForForm(collectForm(form));
      const risk=detectCrisisRisk(entry);
      entries=saveEntry(entry);
      dirty=false;
      render();
      showStamp();
      toast('Día guardado');
      document.querySelector('.daily-summary')?.classList.add('reveal');
      if(risk.triggered && risk.level==='high'){
        setTimeout(()=>openCrisisModal('help'),550);
      }
    }catch(err){toast(err.message||'No se ha podido guardar este día.',true);}
  });
  form.addEventListener('input',event=>{
    dirty=true;
    const t=event.target;
    if(t.name==='mood'){
      const mObj=MOODS[+t.value-1];
      form.style.setProperty('--active-mood',mObj.color);
    }
    if(t.name==='sleepHours' || t.name==='studyHours'){
      const val=parseFloat(t.value);
      form.querySelectorAll(`[data-action="quick-number"][data-target="${t.name}"]`).forEach(btn=>{
        btn.classList.toggle('active',parseFloat(btn.dataset.val)===val);
      });
    }
    if(t.name==='energy'){
      const el=document.querySelector('#energy-hint');
      if(el)el.textContent=ENERGY_LABELS[+t.value]+'.';
    }
    if(t.name==='stress'){
      const el=document.querySelector('#stress-hint');
      if(el)el.textContent=STRESS_LABELS[+t.value]+'.';
    }
    if(t.name?.startsWith('counter_')){
      const key=t.name.slice(8);
      const val=parseFloat(t.value)||0;
      const hint=document.querySelector(`#hint-${key}`);
      if(hint)hint.textContent=counterInterpretation(key,val);
      if(key==='water'){
        const goal=setup.waterGoal||8;
        const row=t.closest('.counter-row');
        const pill=row?.querySelector('.counter-goal-pill');
        const bar=row?.querySelector('.counter-progress i');
        if(pill){pill.textContent=`Meta: ${val}/${goal}`;pill.classList.toggle('met',val>=goal);}
        if(bar)bar.style.width=`${Math.min(100,Math.round((val/goal)*100))}%`;
      }
    }
    const field=t.closest('.writing-field');
    if(field){
      const wc=field.querySelector('.word-count');
      if(wc)wc.textContent=`${countWords(t.value)} palabras`;
    }
    updateLiveIndicators(form);
  });
  form.addEventListener('keydown',event=>{
    if(event.target.id==='tagCustom'&&event.key==='Enter'){
      event.preventDefault();
      const value=event.target.value.trim();
      if(value){
        const picker=form.querySelector('.tag-picker .tag-chip.ghost');
        if(picker){
          picker.insertAdjacentHTML('beforebegin',`<label class="tag-chip"><input type="checkbox" name="tags" value="${esc(value)}" checked><span>${esc(value)}</span></label>`);
        }
        event.target.value='';
        dirty=true;
        updateLiveIndicators(form);
      }
    }
  });

  document.querySelectorAll('.habit-check input').forEach(chk=>{
    chk.addEventListener('change',()=>{
      dirty=true;
      const item=chk.closest('.habit-item');
      if(item){
        item.classList.toggle('is-done',chk.checked);
        if(chk.checked){
          item.classList.remove('just-checked');
          void item.offsetWidth;
          item.classList.add('just-checked');
        }
      }
      const doneNow=document.querySelectorAll('.habit-check input:checked').length;
      const badge=document.querySelector('#habits-badge');
      const fill=document.querySelector('#habit-progress-fill');
      const heroHabits=document.querySelector('#hero-habits-chip');
      if(badge){
        badge.textContent=`${doneNow}/${habits.length}`;
        badge.classList.toggle('all-done',doneNow===habits.length&&habits.length>0);
      }
      if(fill&&habits.length)fill.style.width=`${Math.round((doneNow/habits.length)*100)}%`;
      if(heroHabits)heroHabits.textContent=`${doneNow}/${habits.length} hábitos`;
      if(chk.checked && doneNow===habits.length && habits.length>0){
        toast('Todos los hábitos de hoy completados');
      }
      updateHabitMeta();
      updateLiveIndicators(form);
    });
  });

  updateHabitMeta();
  refreshCounterHints();
}

function saveSetupFromForm(formEl){
  const data=new FormData(formEl);
  const chosenHabits=data.getAll('suggestedHabits').map(s=>s.toString().trim()).filter(Boolean);
  const existingNames=new Set(habits.map(h=>h.name.toLowerCase()));
  for(const hName of chosenHabits){
    if(!existingNames.has(hName.toLowerCase()) && habits.length<30){
      habits=saveHabit({name:hName});
      existingNames.add(hName.toLowerCase());
    }
  }
  const hasSidebarToggle=formEl.querySelector('[name="sidebarCollapsed"]')!==null;
  const rawAge=data.get('age');
  const parsedAge=rawAge!==null&&rawAge!==''?parseInt(rawAge.toString(),10):null;
  const chosenAgeGroup=parsedAge?ageGroupFromAge(parsedAge,data.get('ageGroup')||'young'):(data.get('ageGroup')||setup.ageGroup);
  const chosenInterests=data.getAll('interests').map(s=>s.toString().trim()).filter(Boolean);

  const nextSetup=saveSetup({
    completed:true,
    name:data.get('name')||'',
    age:Number.isFinite(parsedAge)?parsedAge:null,
    ageGroup:chosenAgeGroup,
    interests:chosenInterests,
    ritual:data.get('ritual')||setup.ritual,
    tone:data.get('tone')||setup.tone,
    purpose:data.get('purpose')||setup.purpose,
    motto:data.get('motto')||'Un día a la vez.',
    theme:data.get('theme')||setup.theme,
    sleepGoal:parseFloat(data.get('sleepGoal'))||7.5,
    studyGoal:parseFloat(data.get('studyGoal'))??2,
    waterGoal:parseInt(data.get('waterGoal'),10)||8,
    showDailyWord:formEl.querySelector('[name="showDailyWord"]')?.checked??true,
    showDailyTip:formEl.querySelector('[name="showDailyTip"]')?.checked??true,
    sidebarCollapsed:hasSidebarToggle?Boolean(formEl.querySelector('[name="sidebarCollapsed"]')?.checked):sidebarCollapsed
  });
  setup=nextSetup;
  sidebarCollapsed=Boolean(setup.sidebarCollapsed);
  applyTheme(setup.theme,setup);
}

function updateHabitMeta(){
  for(const h of habits){
    const meta=document.querySelector(`.habit-meta[data-habit-id="${h.id}"]`);
    if(meta)meta.innerHTML=`<b>${habitStreak(entries,h.id)}</b> d`;
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

function refreshInspirationSlot(targetCardSelector=''){
  const slot=document.querySelector('#inspiration-slot');
  if(!slot)return;
  const form=document.querySelector('#diary-form');
  const draft=form?collectForm(form):entries.find(x=>x.date===selected);
  slot.innerHTML=dailyInspirationSection(selected,wordOffset,tipOffset,setup,draft,draft?.wordOfDay||'');
  if(targetCardSelector){
    const card=slot.querySelector(targetCardSelector);
    if(card){
      card.classList.remove('card-flip-in');
      void card.offsetWidth;
      card.classList.add('card-flip-in');
    }
  }
}

function refreshQuoteSlot(){
  const slot=document.querySelector('#quote-slot');
  if(!slot)return;
  slot.innerHTML=personalQuoteCard(selected,quoteOffset,setup);
  const card=slot.querySelector('.quote-card');
  if(card){
    card.classList.remove('card-flip-in');
    void card.offsetWidth;
    card.classList.add('card-flip-in');
  }
}

function showStamp(){
  const stamp=document.querySelector('#stamp');
  if(!stamp)return;
  const stampOwner=setup.name?`Cuaderno de ${esc(setup.name)}`:'Guardado';
  stamp.innerHTML=`<div class="stamp-face">${stampOwner}<small>${longDate(selected)}</small></div>`;
  stamp.classList.remove('show');
  void stamp.offsetWidth;
  stamp.classList.add('show');
}

function toast(message,error=false){
  const el=document.querySelector('#toast');
  if(!el)return;
  el.innerHTML=`<div class="${error?'error':''}">${icon(error?'close':'check')}<span>${esc(message)}</span></div>`;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

function stopBreathingExercise(){
  if(breathingTimer){
    clearInterval(breathingTimer);
    breathingTimer=null;
  }
}

function showModal(html){
  stopBreathingExercise();
  const modal=document.querySelector('#modal');
  modal.innerHTML=html;
  if(!modal.open)modal.showModal();
  return modal;
}

function openCrisisModal(initialTab='help'){
  const modal=showModal(crisisSupportModal(setup,initialTab));
  let isBreathing=false;
  const cleanup=()=>{
    stopBreathingExercise();
    modal.close();
  };
  modal.onclick=event=>{
    const closeBtn=event.target.closest('[data-modal="close"]');
    if(closeBtn || event.target===modal){
      cleanup();
      return;
    }
    const tabBtn=event.target.closest('[data-crisis-tab]');
    if(tabBtn){
      const tab=tabBtn.dataset.crisisTab;
      modal.querySelectorAll('.crisis-tab').forEach(b=>b.classList.toggle('active',b.dataset.crisisTab===tab));
      modal.querySelectorAll('.crisis-tab-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===tab));
      if(tab!=='breathe')stopBreathingExercise();
      return;
    }
    const breatheBtn=event.target.closest('[data-action="toggle-breathing"]');
    if(breatheBtn){
      const visual=modal.querySelector('#breathing-visual');
      const phaseEl=modal.querySelector('#breathing-phase');
      const timerEl=modal.querySelector('#breathing-timer');
      const guideEl=modal.querySelector('#breathing-guide');
      if(isBreathing){
        isBreathing=false;
        stopBreathingExercise();
        visual?.classList.remove('inhale','hold','exhale');
        if(phaseEl)phaseEl.textContent='En pausa';
        if(timerEl)timerEl.textContent='4 — 4 — 6';
        breatheBtn.innerHTML=`${icon('wind')} Seguir respirando`;
      }else{
        isBreathing=true;
        breatheBtn.innerHTML=`${icon('close')} Pausar`;
        let tick=0;
        const stepFn=()=>{
          const cycle=tick%14;
          visual?.classList.remove('inhale','hold','exhale');
          if(cycle<4){
            visual?.classList.add('inhale');
            if(phaseEl)phaseEl.textContent='Toma aire...';
            if(timerEl)timerEl.textContent=`${4-cycle} s`;
            if(guideEl)guideEl.textContent='Inhala despacio por la nariz.';
          }else if(cycle<8){
            visual?.classList.add('hold');
            if(phaseEl)phaseEl.textContent='Mantén...';
            if(timerEl)timerEl.textContent=`${8-cycle} s`;
            if(guideEl)guideEl.textContent='Sostén el aire sin tensar los hombros.';
          }else{
            visual?.classList.add('exhale');
            if(phaseEl)phaseEl.textContent='Suelta...';
            if(timerEl)timerEl.textContent=`${14-cycle} s`;
            if(guideEl)guideEl.textContent='Deja salir el aire poco a poco.';
          }
          tick++;
        };
        stepFn();
        breathingTimer=setInterval(stepFn,1000);
      }
    }
  };
}

function openSetupWizard(initialStep=1){
  let currentStep=initialStep;
  const modal=showModal(setupWizardModal(setup,habits,currentStep));
  const formEl=modal.querySelector('#setup-wizard-form');
  bindAgeAndInterestsLivePreview(formEl,'wiz');

  const switchStep=nextStep=>{
    currentStep=Math.max(1,Math.min(3,nextStep));
    modal.querySelectorAll('.wizard-step-body').forEach(el=>{
      const s=+el.dataset.step;
      el.classList.toggle('active',s===currentStep);
      el.hidden=s!==currentStep;
    });
    const eyebrow=modal.querySelector('.setup-wizard-header .eyebrow');
    const title=modal.querySelector('.setup-wizard-header h2');
    if(eyebrow)eyebrow.innerHTML=`${icon('sliders')} Paso ${currentStep} de 3`;
    if(title)title.textContent=currentStep===1?'Sobre ti, tu edad y tus gustos':currentStep===2?'Tu ritmo y tus hábitos':'Papel e icono de tu cuaderno';
    const stepsBar=modal.querySelectorAll('.wizard-steps-bar span');
    stepsBar.forEach((sp,idx)=>{
      sp.classList.toggle('done',currentStep>=idx+1);
      sp.classList.toggle('current',currentStep===idx+1);
    });
    const footer=modal.querySelector('.wizard-footer');
    if(footer){
      footer.innerHTML=`
        ${currentStep>1?`<button type="button" class="button outline" data-wizard="prev">${icon('left')} Anterior</button>`:`<button type="button" class="button outline" data-modal="close">Ahora no</button>`}
        <div style="flex:1"></div>
        ${currentStep<3
          ?`<button type="button" class="button solid" data-wizard="next">Siguiente ${icon('right')}</button>`
          :`<button type="submit" class="button solid">${icon('check')} Guardar</button>`
        }`;
    }
  };

  modal.onchange=event=>{
    if(event.target.name==='theme'){
      applyTheme(event.target.value,setup);
    }
  };

  modal.onsubmit=event=>{
    event.preventDefault();
    if(formEl)saveSetupFromForm(formEl);
    modal.close();
    render();
    toast('Tu cuaderno se ha adaptado a tus gustos');
  };

  modal.onclick=event=>{
    const closeBtn=event.target.closest('[data-modal="close"]');
    if(closeBtn || event.target===modal){
      applyTheme(setup.theme,setup);
      modal.close();
      return;
    }
    const wizBtn=event.target.closest('[data-wizard]');
    if(wizBtn){
      const dir=wizBtn.dataset.wizard;
      switchStep(dir==='next'?currentStep+1:currentStep-1);
    }
  };
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
    modal.onclick=event=>{
      const action=event.target.closest('[data-modal]')?.dataset.modal;
      if(action){modal.close();resolve(action==='confirm');}
      else if(event.target===modal){modal.close();resolve(false);}
    };
  });
}

function readEntry(date){
  const e=entries.find(x=>x.date===date);
  if(!e){openDay(date);return;}
  const profile=getAgeProfile(setup);
  const done=habits.filter(h=>e.habits?.[h.id]);
  const modal=showModal(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${setup.name?`Cuaderno de ${esc(setup.name)} · `:''}Día ${dayNumber(e.date,entries)}</p><h2>${longDate(e.date)}</h2></div>
      <span class="mood-tag" style="--mood:${MOODS[e.mood-1].color}">${MOODS[e.mood-1].emoji} ${MOODS[e.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${icon('moon')} ${f(e.sleepHours)} h sueño</span>
      <span class="chiplet">${icon('study')} ${f(e.studyHours)} h dedicación</span>
      ${e.energy?`<span class="chiplet">${icon('bolt')} energía ${e.energy}/5</span>`:''}
      ${e.stress?`<span class="chiplet">${icon('storm')} estrés ${e.stress}/5</span>`:''}
      <span class="chiplet">${icon('pen')} ${wordCount(e)} palabras</span>
    </div>
    ${(e.tags||[]).length?`<div class="read-metrics">${e.tags.map(t=>`<span class="chiplet">${icon('hash')} ${esc(t)}</span>`).join('')}</div>`:''}
    ${e.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${esc(e.wordOfDay)}»</p></div>`:''}
    ${e.capsule?`<div class="read-section"><h3>${esc(profile.capsuleLabel)}</h3><p>${esc(e.capsule)}</p></div>`:''}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${esc(e.generalDay)}</p></div>
    ${e.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${esc(e.bestOfDay)}</p></div>`:''}
    ${e.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${esc(e.differentToday)}</p></div>`:''}
    ${e.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${e.gratitude.filter(Boolean).map(g=>`<li>${esc(g)}</li>`).join('')}</ol></div>`:''}
    ${(e.tomorrow||e.goals?.length)?`<div class="read-section"><h3>Para mañana</h3><p>${esc(e.tomorrow)}</p>${e.goals?.length?`<ul>${e.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul>`:''}</div>`:''}
    ${habits.length&&done.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${done.map(h=>esc(h.name)).join(' · ')}</p></div>`:''}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${icon('pen')} Editar</button>
    </div>
  </article>`);
  modal.onclick=event=>{
    const action=event.target.closest('[data-modal]')?.dataset.modal;
    const close=()=>modal.close();
    if(action==='close'||event.target===modal)close();
    if(action==='edit'){close();openDay(e.date);}
    if(action==='delete'){close();requestDelete(e.date);}
  };
}

function openDay(date,dir=''){
  if(date>dateKey()){toast('Ese día todavía no ha llegado.',true);return;}
  if(dirty&&!window.confirm('Tienes cambios sin guardar. ¿Quieres salir igualmente?'))return;
  pageTurnDir=dir||(date<selected?'prev':date>selected?'next':'');
  dirty=false;selected=date;view='diary';menu=false;crisisBannerDismissed=false;render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleSidebar(){
  if(window.innerWidth<=980){
    menu=!menu;
    document.querySelector('.sidebar')?.classList.toggle('is-open',menu);
    document.querySelector('.sidebar-backdrop')?.classList.toggle('is-visible',menu);
    return;
  }
  sidebarCollapsed=!sidebarCollapsed;
  setup=saveSetup({sidebarCollapsed});
  const sb=document.querySelector('.sidebar');
  if(sb){
    sb.classList.toggle('is-collapsed',sidebarCollapsed);
    const btn=sb.querySelector('.sidebar-collapse-btn');
    if(btn){
      btn.innerHTML=icon(sidebarCollapsed?'right':'left');
      btn.title=sidebarCollapsed?'Desplegar menú (Ctrl+B)':'Plegar menú (Ctrl+B)';
      btn.setAttribute('aria-expanded',String(!sidebarCollapsed));
    }
  }
}

async function requestDelete(date){
  if(await confirmDialog({
    title:'¿Eliminar esta entrada?',
    text:`Se borrará del dispositivo el registro de ${longDate(date)}.`,
    confirmLabel:'Eliminar',danger:true
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
  const {action,date,range,mini,key,step,habit,name,word,tab,quote,index,layout,target,val,monthly}=actionButton.dataset;
  switch(action){
    case 'menu':menu=!menu;render();break;
    case 'close-menu':menu=false;render();break;
    case 'toggle-sidebar':toggleSidebar();break;
    case 'archive-tab':archiveTab=tab||'list';render();break;
    case 'stats-tab':statsTab=tab||'pulse';render();break;
    case 'profile-tab':profileTab=tab||'personal';render();break;
    case 'toggle-more-details':{
      moreDetailsOpen=!moreDetailsOpen;
      const acc=document.querySelector('#extras-accordion');
      if(acc){
        acc.classList.toggle('is-open',moreDetailsOpen);
        actionButton.setAttribute('aria-expanded',String(moreDetailsOpen));
      }
      break;
    }
    case 'quick-number':{
      const input=document.querySelector(`#${target}`);
      if(input&&val!==undefined){
        input.value=val;
        input.classList.remove('num-bump');
        void input.offsetWidth;
        input.classList.add('num-bump');
        input.dispatchEvent(new Event('input',{bubbles:true}));
      }
      break;
    }
    case 'cycle-theme':{
      const idx=THEMES.findIndex(t=>t.id===setup.theme);
      const nextTheme=THEMES[(idx+1)%THEMES.length];
      setup=saveSetup({theme:nextTheme.id});
      applyTheme(setup.theme,setup);
      const pillSpan=document.querySelector('.theme-pill > span:last-child');
      const miniFav=document.querySelector('.topbar-favicon-mini');
      const exLibrisFav=document.querySelector('.ex-libris-icon');
      if(pillSpan)pillSpan.textContent=nextTheme.name;
      if(miniFav)miniFav.innerHTML=generateThemeFaviconSvg(setup.theme,setup);
      if(exLibrisFav)exLibrisFav.innerHTML=generateThemeFaviconSvg(setup.theme,setup);
      toast(`Tema: ${nextTheme.name}`);
      break;
    }
    case 'open-setup-wizard':openSetupWizard(1);break;
    case 'dismiss-setup-banner':
      setup=saveSetup({completed:true});
      document.querySelector('.setup-welcome-banner')?.remove();
      break;
    case 'open-crisis-modal':openCrisisModal(tab||'help');break;
    case 'dismiss-crisis-banner':
      crisisBannerDismissed=true;
      document.querySelector('#crisis-alert-slot').innerHTML='';
      break;
    case 'next-daily-word':
      wordOffset++;
      refreshInspirationSlot('.word-of-day-card');
      break;
    case 'next-daily-tip':
      tipOffset++;
      refreshInspirationSlot('.tip-of-day-card');
      break;
    case 'next-quote':
      quoteOffset++;
      refreshQuoteSlot();
      break;
    case 'save-quote':{
      if(!quote)break;
      const list=setup.savedQuotes||[];
      const exists=list.includes(quote);
      const nextQuotes=exists?list.filter(q=>q!==quote):[quote,...list];
      setup=saveSetup({savedQuotes:nextQuotes});
      refreshQuoteSlot();
      toast(exists?'Frase quitada de tus guardadas':'Frase guardada en tu perfil');
      break;
    }
    case 'add-custom-quote':{
      const input=document.querySelector('#new-custom-quote');
      const v=input?.value.trim();
      if(!v){toast('Escribe una frase primero.',true);break;}
      setup=saveSetup({savedQuotes:[v,...(setup.savedQuotes||[])]});
      render();
      toast('Frase añadida');
      break;
    }
    case 'remove-saved-quote':{
      const idx=parseInt(index,10);
      const next=(setup.savedQuotes||[]).filter((_,i)=>i!==idx);
      setup=saveSetup({savedQuotes:next});
      render();
      toast('Frase eliminada');
      break;
    }
    case 'toggle-focus-writing':{
      focusWriting=!focusWriting;
      document.querySelector('.diary-layout')?.classList.toggle('is-focus-writing',focusWriting);
      break;
    }
    case 'history-layout':{
      historyLayout=layout||'grid';
      render();
      break;
    }
    case 'use-daily-word':{
      const wordInput=document.querySelector('#wordOfDay');
      if(wordInput&&word){
        wordInput.value=word;
        dirty=true;
        wordInput.dispatchEvent(new Event('input',{bubbles:true}));
        wordInput.classList.add('highlight-flash');
        setTimeout(()=>wordInput.classList.remove('highlight-flash'),900);
        refreshInspirationSlot();
        toast(`«${word}» anotada`);
      }
      break;
    }
    case 'inspire-prompt':{
      showWritingPrompt=!showWritingPrompt;
      const box=document.querySelector('#writing-prompt-box');
      if(box){
        box.hidden=!showWritingPrompt;
        box.classList.toggle('is-open',showWritingPrompt);
      }
      break;
    }
    case 'next-writing-prompt':{
      promptOffset++;
      const textEl=document.querySelector('#writing-prompt-text');
      if(textEl){
        textEl.classList.remove('text-swap');
        void textEl.offsetWidth;
        textEl.textContent=getWritingPrompt(selected,promptOffset);
        textEl.classList.add('text-swap');
      }
      break;
    }
    case 'insert-writing-prompt':{
      const promptText=getWritingPrompt(selected,promptOffset);
      const genArea=document.querySelector('#generalDay');
      if(genArea){
        const cur=genArea.value.trim();
        genArea.value=cur?`${cur}\n\n— ${promptText}\n`:`— ${promptText}\n`;
        genArea.focus();
        genArea.setSelectionRange(genArea.value.length,genArea.value.length);
        genArea.dispatchEvent(new Event('input',{bubbles:true}));
      }
      break;
    }
    case 'quick-save':{
      const form=document.querySelector('#diary-form');
      if(form)form.requestSubmit();
      break;
    }
    case 'previous':openDay(addDays(selected,-1),'prev');break;
    case 'next':openDay(addDays(selected,1),'next');break;
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
      input.classList.remove('num-bump');
      void input.offsetWidth;
      input.classList.add('num-bump');
      input.dispatchEvent(new Event('input',{bubbles:true}));
      break;
    }
    case 'add-habit':{
      const input=document.querySelector('#new-habit');
      const habitName=input?.value.trim();
      if(!habitName){toast('Escribe un nombre para el hábito.',true);break;}
      if(habits.length>=30){toast('Máximo 30 hábitos.',true);break;}
      habits=saveHabit({name:habitName});
      render();toast(`Hábito «${habitName}» añadido`);
      break;
    }
    case 'delete-habit':{
      if(await confirmDialog({
        title:'¿Eliminar este hábito?',
        text:`Se quitará «${name}» de tu lista actual.`,
        confirmLabel:'Eliminar',danger:true
      })){
        habits=deleteHabit(habit);render();toast('Hábito eliminado');
      }
      break;
    }
    case 'month-prev':mini==='1'?miniMonth=monthMove(miniMonth,-1):month=monthMove(month,-1);render();break;
    case 'month-next':mini==='1'?miniMonth=monthMove(miniMonth,1):month=monthMove(month,1);render();break;
    case 'period-prev':if(monthly==='1')month=monthMove(month,-1);else selected=addDays(selected,-7);render();break;
    case 'period-next':if(monthly==='1')month=monthMove(month,1);else selected=addDays(selected,7);render();break;
    case 'range':period=+range;render();break;
    case 'export':case 'backup':
      download(`diario-${dateKey()}.json`,exportData(entries,habits,setup));
      toast('Copia descargada');break;
    case 'import':document.querySelector('#import-file').click();break;
    case 'clear':
      if(await confirmDialog({
        title:'¿Borrar todos los datos?',
        text:'Se eliminarán todas las entradas, hábitos y preferencias de este navegador.',
        confirmLabel:'Borrar todo',danger:true
      })){
        clearEntries();refresh();selected=dateKey();view='diary';render();
        toast('Datos eliminados');
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
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${pendingImport.entries.length}</strong> ${pendingImport.entries.length===1?'entrada':'entradas'} y <strong>${pendingImport.habits.length}</strong> ${pendingImport.habits.length===1?'hábito':'hábitos'}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);
        modal.onclick=e=>{
          const a=e.target.closest('[data-modal]')?.dataset.modal;
          if(a==='confirm'){importData(pendingImport);refresh();toast('Copia importada');}
          if(a||e.target===modal){modal.close();render();}
        };
      }catch(err){toast(err.message||'No se ha podido importar el archivo.',true);}
      event.target.value='';
    };
    reader.readAsText(file);
  }
  if(event.target.id==='history-mood'){historyMood=event.target.value;render();}
  if(event.target.id==='history-tag'){historyTag=event.target.value;render();}
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

window.addEventListener('keydown',event=>{
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='b'){
    event.preventDefault();
    toggleSidebar();
  }
});

window.addEventListener('beforeunload',event=>{
  if(dirty){event.preventDefault();event.returnValue='';}
});

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch(() => {});
  });
}

render();
