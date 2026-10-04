import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/400-italic.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './styles/main.css';
import './styles/sea.css';
import './styles/motion.css';

import {
  MOODS,ENERGY_LABELS,STRESS_LABELS,COUNTERS,THEMES,
  AGE_GROUPS,INTEREST_OPTIONS,WRITING_RITUALS,TONE_STYLES
} from './data/constants.js';
import {dateKey,addDays,dayNumber,longDate,weekStart,monthRange,monthMove} from './utils/dates.js';
import {
  calculateStats,currentStreak,maxStreak,inRange,formatNumber as f,sleepInterpretation,studyInterpretation,
  generateSummary,periodSummary,generateTrends,wordCount,tagFrequency,counterInterpretation,
  bestHabitStreak,liveHabitStreak
} from './utils/stats.js';
import {
  loadEntries,saveEntry,deleteEntry,clearEntries,exportData,parseImport,importData,
  loadHabits,saveHabit,deleteHabit,loadSetup,saveSetup,ageGroupFromAge,
  loadThoughts,saveThought,updateThought,deleteThought,recastThought
} from './utils/storage.js';
import {
  tideInfo,tideNote,seaById,groupBottles,shoreQueue,voyageProgress,
  weatherOf,seaForecast,nextArrival,arrivalDateOf
} from './utils/ocean.js';
import {
  seaPanel,bottleComposer,bottleCard,bottleModal,oceanLedger,shoreTeaser,emptySea,bottleGlyph,tideRule,
  seaPartCard,seaForecastStrip,castSplash
} from './components/ocean.js';
import {
  DRAFT_SCOPES,setDraft,draftData,clearDraft,draftIsNewer,draftSummary,
  pendingDrafts,clearAllDrafts,listDrafts,draftMinutes
} from './utils/drafts.js';
import {habitBoard,momentumGrid,habitStatsList,habitComposer,countersBoard,tomorrowBoard,routineTeaser,progressRing} from './components/habits.js';
import {
  detectCrisisRisk,getWritingPrompt,calculateEntryCompletion,getGreeting,getAgeProfile,
  generateThemeFaviconDataUri,generateThemeFaviconSvg
} from './utils/wellbeing.js';
import {
  icon,escape as esc,calendar,scaleField,tagPicker,
  moodChart,moodHeatmap,personalGoalsPanel,personalQuoteCard,exLibrisBadge,
  ledger,rankRow,emptyState,meterRows,crisisBanner,crisisSupportModal,
  dailyInspirationSection,setupWizardModal
} from './components/ui.js';

const app=document.querySelector('#app');
let entries=[],habits=[],thoughts=[],setup=loadSetup(),storageError='',view='diary',selected=dateKey(),month=dateKey(),miniMonth=dateKey(),
    thoughtsTab='shore',routineTab='hoy',bottleDraft={text:'',mood:null,sea:'breeze'},oceanAnimating=false,
    period=7,dirty=false,menu=false,sidebarCollapsed=false,historyQuery='',historyMood='',historyTag='',historyLayout='grid',
    archiveTab='list',statsTab='pulse',profileTab='personal',moreDetailsOpen=false,
    pendingImport=null,wordOffset=0,tipOffset=0,promptOffset=0,quoteOffset=0,showWritingPrompt=false,focusWriting=false,
    crisisBannerDismissed=false,breathingTimer=null,pageTurnDir='',
    oceanFilter='',lastView='',saveState='idle',saveAt=0,shellMounted=false,motionOn=true;
/* Movimiento: quien pide poco movimiento en el sistema lo recibe. */
try{
  const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  motionOn=!mq.matches;
  mq.addEventListener?.('change',e=>{motionOn=!e.matches;document.documentElement.dataset.motion=motionOn?'full':'calm';});
}catch{}
document.documentElement.dataset.motion=motionOn?'full':'calm';

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
  thoughts=loadThoughts();
  setup=loadSetup();
  sidebarCollapsed=Boolean(setup.sidebarCollapsed);
  applyTheme(setup.theme,setup);
}
try{refresh();}catch(e){
  storageError='No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. '+e.message;
}

const NAV_GROUPS=[
  {label:'El cuaderno',items:[['diary','pen','Hoy'],['thoughts','wave','Pensamientos'],['archive','book','Archivo']]},
  {label:'Constancia',items:[['routine','listChecks','Rutina'],['stats','chart','Progreso']]},
  {label:'Tuyo',items:[['setup','sliders','Perfil']]}
];
const MOBILE_TABS=['diary','thoughts','routine','archive','stats'];
function getNavs(){return NAV_GROUPS.flatMap(g=>g.items);}
const pageName=id=>getNavs().find(n=>n[0]===id)?.[2]||'Hoy';

function navBadge(id){
  if(id!=='thoughts')return '';
  const queue=shoreQueue(thoughts);
  const unseen=queue.some(t=>t.seen!==true);
  return `<span class="nav-badge ${unseen?'is-new':''}" ${queue.length?'':'hidden'} data-count="${queue.length}">${queue.length}</span>`;
}

function navButton([id,ico,label],index){
  const arrivals=id==='thoughts'?shoreQueue(thoughts).filter(t=>t.seen!==true).length:0;
  return `<button class="nav-item ${view===id?'active':''}" style="--nav-i:${index}" data-view="${id}" title="${esc(label)}" data-tooltip="${esc(label)}" ${view===id?'aria-current="page"':''}>
    <span class="nav-index">${String(index+1).padStart(2,'0')}</span>
    <span class="nav-item-icon">${icon(ico)}${arrivals?'<i class="nav-icon-ping" aria-hidden="true"></i>':''}</span>
    <span class="nav-label">${esc(label)}</span>${navBadge(id)}
  </button>`;
}

function navGroups(){
  let i=0;
  return NAV_GROUPS.map(group=>`<div class="nav-group">
    <p class="nav-group-label">${esc(group.label)}</p>
    ${group.items.map(item=>navButton(item,i++)).join('')}
  </div>`).join('');
}

function mobileTabs(){
  return `<nav class="tabbar" aria-label="Navegación inferior">
    ${MOBILE_TABS.map(id=>{
      const item=getNavs().find(n=>n[0]===id);
      if(!item)return '';
      return `<button type="button" class="tabbar-item ${view===id?'active':''}" data-view="${id}" ${view===id?'aria-current="page"':''}>
        <span class="tabbar-icon">${icon(item[1])}${navBadge(id)}</span>
        <span class="tabbar-label">${esc(item[2])}</span>
      </button>`;
    }).join('')}
  </nav>`;
}

/* ============================================================
   LA CARCASA (sidebar, barra superior, avisos) se monta una sola vez.
   Así la barra lateral puede animar su indicador deslizante, el scroll
   se conserva y los avisos no parpadean en cada repintado.
   ============================================================ */
function shell(){
  return `
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${icon('left')}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${exLibrisBadge(setup,entries.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${navGroups()}</nav>
    </div>
    <div class="sidebar-bottom" id="sidebar-bottom">${sidebarBottom()}</div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${icon('menu')}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${icon('sidebar')}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${setup.name?`Cuaderno de ${esc(setup.name)}`:'Diario'}</span> <span>/</span> <span id="breadcrumb-view">${esc(pageName(view))}</span></span>
      </div>
      <div class="topbar-right">
        <span id="draft-chip-slot"></span>
        <button type="button" id="sea-quick" class="sea-quick" data-view="thoughts" title="Pensamientos en el mar">
          ${icon('wave')}
          <span id="sea-quick-count"></span>
        </button>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${generateThemeFaviconSvg(setup.theme,setup)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${mobileTabs()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${icon('leaf')} ${esc(setup.motto||'Un día a la vez.')}</span>
      <span id="footer-owner">${setup.name?`Cuaderno de ${esc(setup.name)}`:'Guardado localmente en este navegador'}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar" aria-live="polite">
    <span id="floating-save-text">${icon('pen')} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${icon('stamp')} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`;
}

function sidebarBottom(){
  const pend=pendingDrafts();
  return `<div class="local-note">${icon('lock')}<div><strong>Guardado en tu dispositivo</strong>${setup.name?`Cuaderno de ${esc(setup.name)}.`:'Sin cuentas ni servidores externos.'}</div></div>
    <div class="save-note ${pend.total?'has-pending':''}" id="save-note">
      <span class="save-dot" data-state="${saveState}"></span>
      <div>
        <strong>${saveNoteTitle()}</strong>
        <small>${esc(saveNoteDetail())}</small>
      </div>
    </div>`;
}

function saveNoteTitle(){
  if(storageError)return 'Sin guardar';
  switch(saveState){
    case 'typing':case 'saving':return 'Guardando…';
    case 'draft':return 'Borrador a salvo';
    case 'error':return 'No se pudo guardar';
    default:return saveAt?`Guardado ${timeAgo(saveAt)}`:'Todo guardado';
  }
}
function saveNoteDetail(){
  const pend=pendingDrafts();
  if(saveState==='error')return 'Tus palabras siguen en el borrador de este navegador.';
  if(saveState==='draft'&&pend.total)return `${pend.total} ${pend.total===1?'texto a medias':'textos a medias'} recuperables.`;
  if(storageError)return 'Revisa el almacenamiento del navegador o descarga una copia.';
  return 'Se guarda solo, sin nube ni cuentas.';
}
function timeAgo(isoOrMs){
  const t=typeof isoOrMs==='number'?isoOrMs:Date.parse(isoOrMs);
  if(!Number.isFinite(t))return '';
  const mins=Math.round((Date.now()-t)/60000);
  if(mins<1)return 'ahora mismo';
  if(mins<60)return `hace ${mins} min`;
  if(mins<60*24)return `hace ${Math.round(mins/60)} h`;
  return `el ${new Date(t).toLocaleDateString('es-ES',{day:'numeric',month:'short'})}`;
}

function initShell(){
  bindDraftListeners();
  const sidebar=app.querySelector('.sidebar');
  if(sidebar){
    sidebar.classList.add('is-mounting');
    setTimeout(()=>sidebar.classList.remove('is-mounting'),900);
  }
  window.addEventListener('resize',()=>positionRails());
  document.fonts?.ready?.then(()=>positionRails());
}

/* El indicador de sección se desliza: es un elemento persistente que se recoloca. */
function positionRails(){
  const nav=app.querySelector('.nav-wrap');
  const rail=app.querySelector('.nav-rail');
  if(nav&&rail){
    const active=nav.querySelector('.nav-item.active')||nav.querySelector('.nav-item');
    if(active){
      rail.style.setProperty('--rail-y',`${active.offsetTop}px`);
      rail.style.setProperty('--rail-h',`${active.offsetHeight}px`);
      rail.classList.add('is-ready');
    }
  }
  const bar=app.querySelector('#tabbar');
  const tabRail=app.querySelector('.tabbar-rail');
  if(bar&&tabRail){
    const active=bar.querySelector('.tabbar-item.active')||bar.querySelector('.tabbar-item');
    if(active){
      tabRail.style.setProperty('--rail-x',`${active.offsetLeft}px`);
      tabRail.style.setProperty('--rail-w',`${active.offsetWidth}px`);
      tabRail.classList.add('is-ready');
    }
  }
}

function syncShell(){
  const themeObj=THEMES.find(t=>t.id===setup.theme)||THEMES[0];
  const sidebar=app.querySelector('.sidebar');
  const backdrop=app.querySelector('.sidebar-backdrop');
  const menuBtn=app.querySelector('.mobile-menu');
  if(sidebar){
    sidebar.classList.toggle('is-open',menu);
    sidebar.classList.toggle('is-collapsed',sidebarCollapsed);
    sidebar.classList.toggle('is-ready',true);
  }
  if(backdrop)backdrop.classList.toggle('is-visible',menu);
  if(menuBtn)menuBtn.setAttribute('aria-expanded',String(menu));
  for(const sel of ['.sidebar-collapse-btn','.desktop-sidebar-toggle']){
    const btn=app.querySelector(sel);
    if(!btn)continue;
    btn.title=`${sidebarCollapsed?'Desplegar menú (Ctrl+B)':'Plegar menú (Ctrl+B)'}`;
    btn.setAttribute('aria-expanded',String(!sidebarCollapsed));
  }
  const collapseIcon=app.querySelector('.sidebar-collapse-btn .icon');
  if(collapseIcon)collapseIcon.outerHTML=icon(sidebarCollapsed?'right':'left');

  app.querySelectorAll('#sidebar-nav .nav-item, #tabbar .tabbar-item').forEach(btn=>{
    const on=btn.dataset.view===view;
    btn.classList.toggle('active',on);
    if(on)btn.setAttribute('aria-current','page');else btn.removeAttribute('aria-current');
  });

  const arrivals=shoreQueue(thoughts);
  const unseen=arrivals.some(t=>t.seen!==true);
  app.querySelectorAll('[data-view="thoughts"] .nav-badge').forEach(el=>{
    el.textContent=arrivals.length;
    el.hidden=!arrivals.length;
    el.classList.toggle('is-new',unseen);
  });
  const quick=app.querySelector('#sea-quick');
  if(quick){
    quick.classList.toggle('has-new',unseen);
    const count=app.querySelector('#sea-quick-count');
    if(count)count.textContent=`${arrivals.length||groupBottles(thoughts).drifting.length||''}`;
  }
  const exSlot=app.querySelector('#ex-libris-slot');
  if(exSlot)exSlot.innerHTML=exLibrisBadge(setup,entries.length);
  const bottom=app.querySelector('#sidebar-bottom');
  if(bottom)bottom.innerHTML=sidebarBottom();
  const owner=app.querySelector('#breadcrumb-owner');
  if(owner)owner.textContent=setup.name?`Cuaderno de ${setup.name}`:'Diario';
  const crumb=app.querySelector('#breadcrumb-view');
  if(crumb)crumb.textContent=pageName(view);
  const pillLabel=app.querySelector('#theme-pill-label');
  if(pillLabel)pillLabel.textContent=themeObj.name;
  const pill=app.querySelector('#theme-pill');
  if(pill)pill.title=`Cambiar papel e icono (${themeObj.name})`;
  const fav=app.querySelector('#theme-pill-favicon');
  if(fav)fav.innerHTML=generateThemeFaviconSvg(setup.theme,setup);
  const avatar=app.querySelector('#avatar-slot');
  if(avatar)avatar.innerHTML=setup.name?`<span class="avatar-initial">${esc(setup.name.slice(0,1).toUpperCase())}</span>`:icon('user');
  const motto=app.querySelector('#footer-motto');
  if(motto)motto.innerHTML=`${icon('leaf')} ${esc(setup.motto||'Un día a la vez.')}`;
  const footerOwner=app.querySelector('#footer-owner');
  if(footerOwner)footerOwner.textContent=setup.name?`Cuaderno de ${setup.name}`:'Guardado localmente en este navegador';
  syncDraftChip();
  positionRails();
}

function render(opts={}){
  const run=()=>{
    applyTheme(setup.theme,setup);
    if(!shellMounted){
      app.innerHTML=shell();
      shellMounted=true;
      initShell();
    }
    renderPage(opts);
    syncShell();
  };
  /* La API de transiciones de vista hace el fundido entre páginas sin trampa ni cartón. */
  if(opts.transition&&motionOn&&typeof document.startViewTransition==='function'){
    document.startViewTransition(run);
  }else{
    run();
  }
}

function renderPage(opts={}){
  const main=document.querySelector('#main');
  if(!main)return;
  if(view==='thoughts')primeBottleDraft();
  const viewChanged=lastView!==view;
  const keepScroll=window.scrollY;
  const turnClass=pageTurnDir?`page-turn-${pageTurnDir}`:(viewChanged?'view-enter':'');
  pageTurnDir='';
  main.innerHTML=`
    ${storageError?`<div class="error-banner" role="alert">${esc(storageError)}</div>`:''}
    ${page()}`;
  main.className=`${turnClass}`;
  if(viewChanged||pageTurnDir){
    main.classList.remove('view-enter');
    void main.offsetWidth;
    main.classList.add('view-enter');
    staggerCards(main);
  }
  bindForm();
  bindOceanForm();
  bindRoutineForm();
  restoreAfterRender();
  if(viewChanged){
    lastView=view;
    window.scrollTo({top:0,behavior:opts.instant?'auto':'smooth'});
  }else if(keepScroll){
    window.scrollTo(0,keepScroll);
  }
  syncSaveIndicators();
}

/* Entrada escalonada de las tarjetas: solo al cambiar de vista. */
function staggerCards(main){
  if(!motionOn)return;
  const cards=[...main.querySelectorAll('.page-heading, .sea-panel, .card, .forecast-card, .day-hero')].slice(0,12);
  cards.forEach((c,i)=>{
    c.style.setProperty('--enter-i',i);
    c.classList.add('is-entering');
    setTimeout(()=>c.classList.remove('is-entering'),520+i*55);
  });
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
    case 'thoughts':return thoughtsPage();
    case 'routine':return routinePage();
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
  const groups=groupBottles(thoughts,selected);
  const atSea=groups.drifting.length,arrivals=groups.returned.length;
  return `<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${dayNumber(selected,entries)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${esc(greeting)} <span class="age-stage-tag">${setup.age?`· ${setup.age} años`:''}</span></p>
        <span class="date-line">${longDate(selected)}</span>
        <div class="hero-chips">
          ${currentStreak(entries)>0?`<span class="chip hot">${icon('flame')} ${currentStreak(entries)} d seguidos</span>`:''}
          <span class="chip" id="hero-words-chip">${words} palabras</span>
          ${habits.length?`<button type="button" class="chip chip-link" data-view="routine" id="hero-routine-chip">${icon('listChecks')} ${done}/${habits.length} rutina</button>`:''}
          ${arrivals?`<button type="button" class="chip chip-link is-new" data-view="thoughts">${icon('anchor')} ${arrivals} ${arrivals===1?'botella':'botellas'} en la orilla</button>`
            :atSea?`<button type="button" class="chip chip-link" data-view="thoughts">${icon('wave')} ${atSea} en el mar</button>`
            :`<button type="button" class="chip chip-link" data-view="thoughts">${icon('pen')} Echar un pensamiento al mar</button>`}
          ${profile.interests.slice(0,2).map(i=>`<span class="chip personal-interest-chip">${icon(i.icon)} ${esc(i.label.split(' ')[0])}</span>`).join('')}
          ${e?`<span class="entry-status">${icon('check')} Escrito en el cuaderno</span>`:`<span class="entry-status pending">Aún sin cerrar</span>`}
          <span class="save-status" data-save-status>${saveStatusHtml()}</span>
        </div>
      </div>
    </div>
    <div class="hero-right">
      ${dayNav()}
      <p class="hero-tide">${icon('tide')} <span>${esc(tideNote(selected))}</span></p>
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
    (e.gratitude&&e.gratitude.some(Boolean))
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
  <div class="tide-rule-wrap">${tideRule()}</div>
  <div id="crisis-alert-slot">${crisisBanner(risk,setup)}</div>
  <div class="diary-layout ${focusWriting?'is-focus-writing':''}">
    <div class="diary-main">
      <form id="diary-form" style="${moodColor?`--active-mood:${moodColor}`:''}" autocomplete="off">
        <div id="entry-draft-slot" data-live="1"></div>

        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture" style="--i:1">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
            <span class="capture-hint">${icon('spark')} un clic vale como entrada</span>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${MOODS.map(m=>`<label class="mood-option" style="--mood-color:${m.color}">
              <input type="radio" name="mood" value="${m.value}" ${(e?.mood||0)===m.value?'checked':''}>
              <span class="mood-face">${m.emoji}</span>
              <span class="mood-label">${m.label}</span>
            </label>`).join('')}
          </div>

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

        <!-- 2 · TU PÁGINA DE HOY -->
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

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${showExtras?'is-open':''}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${showExtras}">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, energía, lo mejor de hoy y tres cosas buenas · la rutina y los contadores viven en su pestaña</small>
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
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${scaleField('energy',ENERGY_LABELS,e?.energy,'bolt','Energía','Del 1 al 5','Opcional')}
                  ${scaleField('stress',STRESS_LABELS,e?.stress,'storm','Estrés','Del 1 al 5','Opcional')}
                </div>
                ${textField('bestOfDay','Lo mejor del día',profile.placeholders.bestOfDay,e?.bestOfDay,false)}
                ${textField('differentToday','¿Qué ha sido distinto hoy?',profile.placeholders.differentToday,e?.differentToday,false)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${['1. Hoy agradezco o valoro...','2. También...','3. Y además...'].map((p,i)=>`<label><span>0${i+1}</span><input name="gratitude${i}" aria-label="${p}" placeholder="${p}" maxlength="20000" value="${esc(e?.gratitude?.[i]||'')}"></label>`).join('')}
                </div>
                <p class="aside-note" style="margin-top:14px">${icon('listChecks')}<span>Lo de mañana (intención y tareas) se apunta en la pestaña <button type="button" class="inline-link" data-view="routine">Rutina</button>.</span></p>
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
      ${shoreTeaser(thoughts)}
      <div id="inspiration-slot">${dailyInspirationSection(selected,wordOffset,tipOffset,setup,e,e?.wordOfDay||'')}</div>
      ${routineTeaser(habits,e,entries,selected)}
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

/* ================= PENSAMIENTOS: EL MAR DE LAS BOTELLAS ================= */
function thoughtsPage(){
  const today=dateKey();
  const groups=groupBottles(thoughts,today);
  const tabs=[
    ['shore','anchor','La orilla',groups.returned.length],
    ['sea','wave','En el mar',groups.drifting.length],
    ['kept','bookmark','Ancladas',groups.kept.length],
    ['lost','storm','Perdidas',groups.lost.length]
  ];
  return `${pageHeader('Pensamientos',setup.name?`El mar de ${esc(setup.name)}`:'El mar de los pensamientos',
    'Escribe lo que no quieres guardar, séllalo en una botella y échalo al mar. Cuando la marea quiera, puede volver a ti.',`
    <span class="count-badge">${thoughts.length} ${thoughts.length===1?'botella':'botellas'} en tu mar</span>
  `)}
  ${seaPanel(thoughts,today)}
  ${seaForecastStrip(seaForecast({today,bottles:thoughts,days:14}))}
  <div class="tide-rule-wrap is-after-sea">${tideRule()}</div>
  <div class="ocean-layout">
    <div class="ocean-main">
      <div id="composer-slot">${bottleComposer(setup,today,bottleDraft)}</div>
      <div class="segmented ocean-tabs">
        ${tabs.map(([id,ico,label,count])=>`<button type="button" data-action="thoughts-tab" data-tab="${id}" class="${thoughtsTab===id?'active':''}">
          ${icon(ico)} ${esc(label)}${count?`<span class="seg-count">${count}</span>`:''}
        </button>`).join('')}
      </div>
      <div id="ocean-body" class="tab-panel-enter">${oceanTabBody(groups,today)}</div>
    </div>
    <aside class="ocean-aside">
      ${seaPartCard(today,thoughts)}
      ${tideCard(today)}
      ${seaRulesCard(groups,today)}
      ${oceanLedger(thoughts,today)}
    </aside>
  </div>`;
}

function groupsForFilter(){
  const today=dateKey();
  return thoughts.filter(b=>arrivalDateOf(b)===oceanFilter&&fateOf(b,today)==='drifting');
}
function oceanTabBody(groups,today){
  if(!thoughts.length)return emptySea(thoughtsTab);
  const map={shore:groups.returned,sea:groups.drifting,kept:groups.kept,lost:groups.lost};
  let list=map[thoughtsTab]??groups.returned;
  if(oceanFilter){
    list=list.filter(b=>arrivalDateOf(b)===oceanFilter||b.lostOn===oceanFilter);
    if(!list.length)return oceanEmptyFor(thoughtsTab);
  }
  const chip=oceanFilter?`<div class="filter-chip">${icon('calendar')} Botellas que tocan tierra el ${esc(longDate(oceanFilter,{day:'numeric',month:'long'}))}<button type="button" class="text-button" data-action="clear-sea-filter">${icon('close')} Quitar el filtro</button></div>`:'';
  return `${chip}<div class="bottle-grid">${list.map((b,i)=>bottleCard(b,today,i)).join('')}</div>`;
}

function oceanEmptyFor(tab){
  const copy={
    shore:['La orilla está seca','Ninguna botella ha vuelto todavía. Cuando la marea viva traiga una, aparecerá aquí y en tu portada.'],
    sea:['No hay nada a la deriva','Echa una botella al mar y la verás alejarse por esta pantalla.'],
    kept:['Nada anclado','Al abrir una botella puedes guardarla en el cuaderno para que se quede contigo.'],
    lost:['El mar no se ha quedado nada','Todavía ninguna botella se ha perdido. Suerte, o paciencia.']
  };
  const [title,text]=copy[tab]||copy.shore;
  return `${emptyState(title,text,tab==='lost'?'':`<button type="button" class="button outline" data-action="focus-composer">${icon('pen')} Escribir un pensamiento</button>`)}`;
}

function tideCard(today){
  const t=tideInfo(today);
  const half=14.765;
  const pos=Math.round((((t.age%half)+half)%half/half)*100);
  return `<section class="card tide-card" data-tide="${t.key}">
    <div class="section-heading">
      <p class="section-index" style="margin-bottom:0">La marea</p>
      <span class="tag">${esc(t.name)}</span>
    </div>
    <p class="tide-headline">${esc(tideNote(today))}</p>
    <div class="tide-dial">
      <span class="tide-track" style="--pct:${pos}%"><i style="width:${pos}%"></i><b class="tide-pin"></b></span>
      <span class="tide-track-labels"><small>${icon('moon')} Luna nueva</small><small class="tide-now">${esc(t.phase)}</small><small>${icon('moon')} Luna llena</small></span>
    </div>
    <p class="field-caption">Las botellas que vuelven lo hacen con la marea viva, cerca de la luna nueva o de la llena.</p>
  </section>`;
}

function seaRulesCard(groups,today){
  const nearest=groups.drifting[0];
  const eta=nearest?voyageProgress(nearest,today):null;
  return `<section class="card sea-rules">
    <p class="section-index">${icon('compass')} Cómo funciona</p>
    <ol class="sea-rules-list">
      <li><b>Escribe</b> un pensamiento suelto: una duda, un deseo, una rabia, una frase que no va a ningún sitio.</li>
      <li><b>Mira el parte.</b> El clima del día en que la sueltas no es decorado: con viento a favor entra en la primera pleamar; con temporal o viento de tierra se queda fuera uno o dos días más.</li>
      <li><b>Elige el mar.</b> Cuanto más lejos lo lances, más tarda y más fácil es que no regrese.</li>
      <li><b>El azar se calcula aquí.</b> Sale de tus propias palabras, del día y del mar elegido; no hay servidores, ni cuentas, ni IA.</li>
      <li><b>Espérate a la marea.</b> Solo vuelve en marea viva. Tú decides si la abres, la anclas o la vuelves a lanzar; si se hundió, se quedó perdida para siempre (aunque se puede leer).</li>
    </ol>
    ${nearest?`<p class="sea-rules-now">${icon('wave')} <span>La más cercana: <b>${esc(seaById(nearest.sea).label.toLowerCase())}</b>, ${eta.total-eta.atSea<=1?'a un día de la orilla':`${eta.total-eta.atSea} días por delante`}.</span></p>`:'<p class="sea-rules-now"><span>Nada en el agua ahora mismo.</span></p>'}
  </section>`;
}

/* ================= RUTINA: HÁBITOS, CONTADORES Y MAÑANA ================= */
function routinePage(){
  const e=entries.find(x=>x.date===selected);
  const tabs=[
    ['hoy','listChecks','Hoy'],
    ['week','grid','Semana'],
    ['counters','drop','Contadores'],
    ['streaks','flame','Rachas']
  ];
  return `${pageHeader('Rutina','Hábitos, contadores y la lista de mañana',
    'Todo lo que se marca en un toque y se guarda al instante, sin escribir una sola línea.',`
    <div class="segmented">
      ${tabs.map(([id,ico,label])=>`<button type="button" data-action="routine-tab" data-tab="${id}" class="${routineTab===id?'active':''}">${icon(ico)} ${esc(label)}</button>`).join('')}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${routineHero(e)}
      <div id="routine-body">${routineBody(e)}</div>
    </div>
    <aside class="routine-aside">${routineStatsAside(e)}</aside>
  </div>`;
}

function dayNavInPlace(){
  return `<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${icon('left')}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${selected===dateKey()?'disabled':''}>${icon('sun')} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${selected>=dateKey()?'disabled':''}><span>Siguiente</span>${icon('right')}</button>
  </div>`;
}

function routineHero(e){
  const done=habits.filter(h=>e?.habits?.[h.id]).length;
  const pct=habits.length?Math.round((done/habits.length)*100):0;
  const headline=!habits.length?'Tu lista está vacía':done===0?'Aún no has marcado nada':done===habits.length?'Rutina completa':`Vas a ${done} de ${habits.length}`;
  const note=pct>=100?'Todos los casilleros llenos: eso también se lee en tus estadísticas.'
    :pct>0?'Cada casilla cuenta igual que un párrafo entero.'
    :'Si hoy no puedes con todo, marca uno y da el día por bueno.';
  return `<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${icon('sun')} ${esc(longDate(selected,{weekday:'long',day:'numeric',month:'long'}))}</p>
      <h2>${esc(headline)}</h2>
      <p class="routine-hero-note">${esc(note)}</p>
      ${dayNavInPlace()}
    </div>
    ${progressRing(pct,habits.length?`${pct}%`:'—','de hoy')}
  </section>`;
}

function routineBody(e){
  const profile=getAgeProfile(setup);
  const today=dateKey();
  if(routineTab==='week'){
    return `${momentumGrid(entries,habits,{days:35,end:today,today,title:'Tus últimas cinco semanas'})}${weekHabitSummary()}`;
  }
  if(routineTab==='counters'){
    const recent=inRange(entries,addDays(today,-27),today);
    return `${countersBoard(e,setup,[])||''}${personalGoalsPanel(recent,setup)}`;
  }
  if(routineTab==='streaks'){
    return habits.length
      ? `${habitStatsList(habits,entries,today)}${streakBoard()}`
      : emptyState('Todavía no hay hábitos','Añade el primero y en unos días verás aquí sus rachas y su constancia.',`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${icon('plus')} Crear hábitos</button>`);
  }
  return `${habits.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${icon('listChecks')} La tasklist de hoy</p><h2>Marcar y seguir</h2></div>
      <span class="field-caption">${habits.filter(h=>e?.habits?.[h.id]).length}/${habits.length}</span>
    </div>
    ${habitBoard(habits,e,entries,selected,today)}
    <p class="board-hint">${icon('spark')} Toca un hábito para marcarlo: se guarda solo, sin botón de guardar.</p>
  </section>`:emptyState('Sin hábitos todavía','Crea tu lista abajo o toma prestados los sugeridos para tu etapa.',`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${icon('flame')} Ver rachas</button>`)}
  ${tomorrowBoard(e,selected)}
  ${habitComposer(profile,habits)}`;
}

function weekHabitSummary(){
  const start=weekStart(selected),end=addDays(start,6);
  const weekly=inRange(entries,start,end);
  const rows=habits.map(h=>{
    const done=weekly.filter(e=>e.habits?.[h.id]).length;
    return {label:h.name,count:done,total:7,color:done>=5?'var(--green)':done>=3?'var(--ochre)':'var(--red)'};
  });
  return `<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${icon('week')}Esta semana</p><h2>${esc(longDate(start,{day:'numeric',month:'short'}))} → ${esc(longDate(end,{day:'numeric',month:'short'}))}</h2></div>
      <span class="tag">${weekly.length}/7 días con entrada</span></div>
    ${habits.length?meterRows(rows):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`;
}

function streakBoard(){
  const best=habits.map(h=>({h,best:bestHabitStreak(entries,h.id),live:liveHabitStreak(entries,h.id)})).filter(x=>x.best>0).sort((a,b)=>b.best-a.best).slice(0,6);
  if(!best.length)return '';
  const top=best[0].best||1;
  return `<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${icon('flame')}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${best.map((x,i)=>`<li>
        <span class="streak-rank">${String(i+1).padStart(2,'0')}</span>
        <span class="streak-name">${esc(x.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round((x.best/top)*100))}%"></i></span>
        <span class="streak-num"><b>${x.best}</b> d${x.live?` · viva ${x.live}`:''}</span>
      </li>`).join('')}
    </ol>
  </section>`;
}

function fullRoutineDays(){
  if(!habits.length)return 0;
  return entries.filter(e=>habits.every(h=>e.habits?.[h.id])).length;
}

function routineStatsAside(e){
  const today=dateKey();
  const recent=inRange(entries,addDays(today,-27),today);
  const sleepPct=e?Math.min(100,Math.round((e.sleepHours/(setup.sleepGoal||7.5))*100)):0;
  return `
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${esc(longDate(selected,{day:'numeric',month:'short'}))}</span></div>
    <div class="mini-metrics">
      <div>${icon('moon')}<strong>${e?f(e.sleepHours):'—'}<small>h</small></strong><span>Sueño</span></div>
      <div>${icon('study')}<strong>${e?f(e.studyHours):'—'}<small>h</small></strong><span>Enfoque</span></div>
      <div>${icon('drop')}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${sleepPct}%"></span></div>
      <p class="field-caption">${esc(sleepInterpretation(e.sleepHours))}</p>`:`<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>`}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${selected}">Escribir sobre este día ${icon('arrow')}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${icon('flame')} Días seguidos escribiendo</span><strong>${currentStreak(entries)}</strong></div>
      <div><span>${icon('seal')} Mejor racha histórica</span><strong>${maxStreak(entries)}</strong></div>
      <div><span>${icon('check')} Días con toda la rutina</span><strong>${fullRoutineDays()}</strong></div>
      <div><span>${icon('moon')} Sueño medio</span><strong>${recent.length?f(calculateStats(recent).sleep):'—'} h</strong></div>
    </div>
  </section>
  ${weekPreview()}`;
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
      <p class="field-caption" style="margin-top:6px">Los hábitos que elijas se marcan en su propia pestaña, <b>Rutina</b>, junto a los contadores.</p>
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

/* ================= GUARDADO RÁPIDO DESDE RUTINA Y MAR ================= */
function entryDraftFor(date){
  const current=entries.find(x=>x.date===date);
  const profile=getAgeProfile(setup);
  if(current)return {...current};
  return {
    date,
    mood:3,
    sleepHours:setup.sleepGoal||profile.sleepRecommended||7.5,
    studyHours:0,
    energy:null,stress:null,
    bestOfDay:'',differentToday:'',
    generalDay:'Registro rápido desde la rutina.',
    wordOfDay:'',capsule:'',
    gratitude:['','',''],tomorrow:'',goals:[],tags:[],counters:{},habits:{}
  };
}
function patchDay(date,patch){
  if(date>dateKey())throw new Error('Ese día todavía no ha llegado.');
  entries=saveEntry({...entryDraftFor(date),...patch});
}

function currentGoalsRaw(){
  return [...document.querySelectorAll('#routine-goals .task-input')].map(i=>i.value.trim());
}
function commitTomorrowFromDom(){
  const textarea=document.querySelector('#routine-tomorrow');
  if(!textarea)return;
  const goals=currentGoalsRaw().filter(Boolean);
  try{patchDay(selected,{tomorrow:textarea.value.trim(),goals});}
  catch(err){toast(err.message||'No se pudo guardar la lista.',true);}
}

function bindRoutineForm(){
  const textarea=document.querySelector('#routine-tomorrow');
  if(!textarea)return;
  textarea.addEventListener('change',commitTomorrowFromDom);
  textarea.addEventListener('input',()=>draftDebounce('manana',commitTomorrowFromDom,500));
  document.querySelectorAll('#routine-goals .task-input').forEach(inp=>{
    inp.addEventListener('change',commitTomorrowFromDom);
    inp.addEventListener('input',()=>draftDebounce('manana-tarea',commitTomorrowFromDom,600));
    inp.addEventListener('keydown',event=>{
      if(event.key==='Enter'){event.preventDefault();commitTomorrowFromDom();render();}
      if(event.key==='Escape')render();
    });
  });
}

let routineCounterTimer=null;
function updateCounterRow(input,key,value){
  const row=input.closest('.counter-row');
  const hint=document.querySelector(`#hint-${key}`);
  if(hint)hint.textContent=counterInterpretation(key,value);
  input.classList.remove('num-bump');
  void input.offsetWidth;
  input.classList.add('num-bump');
  if(key==='water'){
    const goal=setup.waterGoal||8;
    const pill=row?.querySelector('.counter-goal-pill');
    const bar=row?.querySelector('.counter-progress i');
    if(pill){pill.textContent=`Meta: ${value}/${goal}`;pill.classList.toggle('met',value>=goal);}
    if(bar)bar.style.width=`${Math.min(100,Math.round((value/goal)*100))}%`;
  }
}
function saveRoutineCounters(){
  const patch={};
  const stored=entries.find(x=>x.date===selected);
  for(const c of COUNTERS){
    const input=document.querySelector(`[name="counter_${c.key}"]`);
    patch[c.key]=input?(parseFloat(input.value)||0):(Number(stored?.counters?.[c.key])||0);
  }
  try{patchDay(selected,{counters:patch});}
  catch(err){toast(err.message||'No se pudo guardar el contador.',true);}
}

function commitHabitName(id,value){
  const name=String(value||'').trim().slice(0,40);
  const habit=habits.find(h=>h.id===id);
  if(!habit)return;
  if(!name){toast('El hábito necesita un nombre.',true);return;}
  if(name.toLowerCase()!==habit.name.toLowerCase()&&habits.some(h=>h.name.toLowerCase()===name.toLowerCase())){
    toast('Ya tienes un hábito con ese nombre.',true);return;
  }
  if(name===habit.name)return;
  habits=saveHabit({...habit,name});
  render();
  toast('Hábito renombrado');
}

/* Pequeño destello en la casilla recién marcada, para que se vea el efecto del clic. */
function flashHabit(id){
  if(!motionOn)return;
  const row=document.querySelector(`.habit-toggle[data-habit="${id}"]`);
  if(row){
    row.classList.add('is-flashed');
    setTimeout(()=>row.classList.remove('is-flashed'),700);
  }
  const cell=document.querySelector(`.momentum-cell[data-habit="${id}"]`);
  if(cell){
    cell.classList.add('is-flashed');
    setTimeout(()=>cell.classList.remove('is-flashed'),700);
  }
}

function syncNavBadges(){
  const arrivals=shoreQueue(thoughts);
  const count=arrivals.length;
  const isNew=arrivals.some(t=>t.seen!==true);
  document.querySelectorAll('.nav-badge').forEach(el=>{
    el.textContent=count;
    el.classList.toggle('is-new',isNew);
    el.hidden=!count;
  });
  const quick=document.querySelector('.sea-quick');
  if(quick){
    const label=quick.querySelector('span');
    if(label)label.textContent=count||groupBottles(thoughts).drifting.length||'';
    quick.classList.toggle('has-new',isNew);
  }
}

/* ---------- abrir, traer y volver a lanzar botellas ---------- */
function openBottle(id){
  const bottle=thoughts.find(t=>t.id===id);
  if(!bottle)return;
  if(bottle.status==='returned'&&bottle.seen!==true){
    thoughts=updateThought(id,{seen:true});
    syncNavBadges();
  }
  const replyDraft=bottle.reply?'':(draftData(DRAFT_SCOPES.reply(id))?.text||'');
  const modal=showModal(bottleModal({...bottle,replyDraft},dateKey(),setup));
  playModalUncork(modal);
  const again=()=>{modal.close();render();};
  modal.onclick=event=>{
    const act=event.target.closest('[data-modal]')?.dataset.modal;
    if(!act){if(event.target===modal)modal.close();return;}
    if(act==='close'){again();return;}
    if(act==='reply'){
      const value=(modal.querySelector('#bottle-reply')?.value||'').trim();
      if(!value){toast('Escribe primero lo que quieres contestarte.',true);return;}
      draftCancel(`respuesta:${id}`);
      thoughts=updateThought(id,{reply:value,seen:true,repliedAt:new Date().toISOString()});
      clearDraft(DRAFT_SCOPES.reply(id));
      modal.close();render();openBottle(id);
      toast('Le has respondido a tu yo de entonces');
      return;
    }
    if(act==='reply-clear'){
      draftCancel(`respuesta:${id}`);
      clearDraft(DRAFT_SCOPES.reply(id));
      thoughts=updateThought(id,{reply:''});
      modal.close();render();openBottle(id);
      return;
    }
    if(act==='keep'){
      const keep=!bottle.kept;
      thoughts=updateThought(id,{kept:keep,keptOn:keep?dateKey():null,seen:true});
      again();
      toast(keep?'Botella anclada a tu cuaderno':'Botella desanclada');
      return;
    }
    if(act==='to-entry'){
      try{
        bottleToEntry(bottle);
        again();
        toast('Copiado en la entrada de hoy');
      }catch(err){toast(err.message||'No se pudo copiar.',true);}
      return;
    }
    if(act==='recall'){
      thoughts=updateThought(id,{status:'returned',returnedAt:dateKey(),seen:true});
      again();
      toast('La marea te la trajo antes de tiempo');
      return;
    }
    if(act==='recast'){
      thoughts=recastThought(id);
      again();
      toast('La botella vuelve a navegar');
      return;
    }
  };
}

function bottleToEntry(bottle){
  const today=dateKey();
  const entry=entries.find(x=>x.date===today);
  const line=`Del mar (botella del ${longDate(bottle.castAt,{day:'numeric',month:'long'})}): «${bottle.text}»`;
  const generalDay=[entry?.generalDay,line].filter(Boolean).join('\n\n');
  patchDay(today,{
    generalDay,
    capsule:entry?.capsule||String(bottle.text).slice(0,240),
    tags:[...new Set([...(entry?.tags||[]),'Pensamiento'])].slice(0,20)
  });
  thoughts=updateThought(bottle.id,{kept:true,keptOn:today,seen:true});
  selected=today;
  view='diary';
}

/* El momento del chapuzón: arco, golpe de agua, ondas y la superficie agitándose. */
function playCastSplash(bottle){
  const layerHost=document.querySelector('#ocean-fx')||document.body;
  if(layerHost===document.body){
    const created=document.createElement('div');
    created.id='ocean-fx';
    created.className='ocean-fx';
    document.body.appendChild(created);
  }
  const layer=document.querySelector('#ocean-fx');
  const target=document.querySelector('.sea-panel')||document.querySelector('#bottle-form');
  const rect=target?.getBoundingClientRect();
  const el=document.createElement('div');
  el.className='splash-wrap';
  el.innerHTML=castSplash(bottle);
  if(rect){
    el.style.setProperty('--to-x',`${Math.round(rect.left+rect.width*.5)}px`);
    el.style.setProperty('--to-y',`${Math.round(rect.top+rect.height*.42)}px`);
  }
  layer.appendChild(el);
  document.documentElement.classList.add('is-casting');
  setTimeout(()=>document.documentElement.classList.remove('is-casting'),1400);
  setTimeout(()=>el.remove(),motionOn?1500:60);
}
function playModalUncork(modal){
  const card=modal.querySelector('.bottle-modal');
  if(!card||!motionOn)return;
  card.classList.add('is-uncorking');
  setTimeout(()=>card.classList.remove('is-uncorking'),1100);
}

function castBottle(form){
  const data=new FormData(form);
  const value=(data.get('text')||'').toString().trim();
  if(value.length<2){toast('Escribe algo antes de soltar la botella.',true);return;}
  const moodRaw=data.get('mood');
  const sea=data.get('sea')||'breeze';
  try{
    const id=crypto.randomUUID();
    thoughts=saveThought({id,text:value,mood:moodRaw?+moodRaw:null,sea,castAt:dateKey()});
    const bottle=thoughts.find(t=>t.id===id);
    draftCancel('botella');
    clearDraft(DRAFT_SCOPES.bottle());
    bottleDraft={text:'',mood:null,sea};
    bottleDraftRestored='';
    thoughtsTab='sea';
    oceanFilter='';
    playCastSplash(bottle||{});
    setSaveState('saved');
    setTimeout(()=>render(),motionOn?1150:0);
    const part=weatherOf(dateKey());
    toast(bottle
      ?`Botella al mar${bottle.push?` · el ${part.weather.short} la retiene ${bottle.push} ${bottle.push===1?'día':'días'}`:''} · la orilla la espera hacia el ${longDate(bottle.arriveOn,{day:'numeric',month:'long'})}`
      :'Botella al mar');
  }catch(err){toast(err.message||'No se pudo echar la botella al mar.',true);}
}

function bindOceanForm(){
  const form=document.querySelector('#bottle-form');
  if(!form)return;
  const text=form.querySelector('#bottle-text');
  const words=form.querySelector('#bottle-words');
  const sync=()=>{
    const moodEl=form.querySelector('[name="mood"]:checked');
    bottleDraft={
      text:text?.value||'',
      mood:moodEl?+moodEl.value:null,
      sea:form.querySelector('[name="sea"]:checked')?.value||'breeze'
    };
    if(words)words.textContent=`${countWords(text?.value||'')} palabras`;
  };
  const submit=form.querySelector('button[type="submit"]');
  const arm=()=>{
    if(!submit)return;
    const has=Boolean((text?.value||'').trim());
    submit.disabled=!has;
    submit.classList.toggle('is-armed',has);
  };
  sync();
  arm();
  text?.addEventListener('input',()=>{sync();arm();});
  form.addEventListener('change',()=>{sync();arm();});
  if(document.activeElement===text&&text.value)text.setSelectionRange(text.value.length,text.value.length);
  form.addEventListener('submit',event=>{
    event.preventDefault();
    castBottle(form);
  });
}

function requestDeleteBottle(id){
  const bottle=thoughts.find(t=>t.id===id);
  if(!bottle)return;
  confirmDialog({
    title:'¿Romper esta botella?',
    text:'El pensamiento se borrará de este navegador. No se puede deshacer.',
    confirmLabel:'Romperla',danger:true
  }).then(ok=>{
    if(!ok)return;
    thoughts=deleteThought(id);
    render();
    toast('Botella rota');
  });
}

/* ============================================================
   EL GUARDADO — que nada se quede a medias
   ------------------------------------------------------------
   Dos capas:
   1. Borrador local (diario.drafts.v1): cada tecla guarda lo escrito,
      con su hora. Si cierras la pestaña, al volver sigue ahí.
   2. Autoguardado de la entrada: tras un rato sin teclear, el día se
      escribe solo en el cuaderno (nunca si está vacío).
   ============================================================ */
const ENTRY_TEXT_FIELDS=['generalDay','bestOfDay','differentToday','capsule','wordOfDay','tomorrow','gratitude0','gratitude1','gratitude2','tagCustom'];
const draftTimers=new Map();
let bottleDraftRestored='',autosavePending=false;

function draftCancel(key){
  const timer=draftTimers.get(key);
  if(timer){clearTimeout(timer);draftTimers.delete(key);}
}
function draftCancelAll(matcher){
  for(const key of [...draftTimers.keys()]){if(matcher(key)){draftCancel(key);}}
}
function draftDebounce(key,fn,ms=460){
  clearTimeout(draftTimers.get(key));
  draftTimers.set(key,setTimeout(()=>{draftTimers.delete(key);fn();},ms));
}
function draftFlushNow(key,fn){
  if(draftTimers.has(key)){clearTimeout(draftTimers.get(key));draftTimers.delete(key);fn();}
}
function entryScope(){return DRAFT_SCOPES.entry(selected);}

function rawFormValues(form){
  const out={};
  if(!form)return out;
  for(const name of ENTRY_TEXT_FIELDS){
    const el=form.querySelector(`[name="${name}"]`);
    if(el&&typeof el.value==='string')out[name]=el.value;
  }
  for(const name of ['mood','energy','stress']){
    const el=form.querySelector(`[name="${name}"]:checked`);
    if(el)out[name]=Number(el.value);
  }
  for(const name of ['sleepHours','studyHours']){
    const el=form.querySelector(`[name="${name}"]`);
    if(el&&el.value!=='')out[name]=Number(el.value);
  }
  const tags=[...form.querySelectorAll('[name="tags"]:checked')].map(e=>e.value);
  if(tags.length)out.tags=tags;
  const counters={};
  for(const el of form.querySelectorAll('[name^="counter_"]'))counters[el.name.slice(8)]=Number(el.value)||0;
  if(Object.keys(counters).length)out.counters=counters;
  const habitsOn={};
  for(const el of form.querySelectorAll('[name^="habit_"]'))habitsOn[el.name.slice(6)]=el.checked;
  if(Object.keys(habitsOn).length)out.habits=habitsOn;
  const goals=[...form.querySelectorAll('[name="goal"]')].map(e=>e.value).filter(v=>v.trim());
  if(goals.length)out.goals=goals;
  return out;
}

/* ¿El formulario dice hoy lo mismo que el cuaderno? Entonces no hay borrador. */
function entryMatchesStored(values){
  const stored=entries.find(x=>x.date===selected);
  if(!stored)return !Object.keys(values).length;
  for(const key of ENTRY_TEXT_FIELDS){
    if(!(key in values))continue;
    let had='';
    if(key.startsWith('gratitude'))had=(stored.gratitude||[])[+key.slice(9)]||'';
    else if(key==='tagCustom')continue;
    else had=stored[key]??'';
    if(String(values[key]??'').trim()!==String(had).trim())return false;
  }
  for(const key of ['mood','energy','stress','sleepHours','studyHours']){
    if(values[key]===undefined)continue;
    const storedVal=stored[key];
    if(storedVal===null||storedVal===undefined){if(Number(values[key])!==0&&values[key]!==3)return false;continue;}
    if(Number(values[key])!==Number(storedVal))return false;
  }
  const storedCounters=stored.counters||{};
  for(const [k,v] of Object.entries(values.counters||{})){
    if(Number(v)!==Number(storedCounters[k]||0))return false;
  }
  const storedHabits=stored.habits||{};
  for(const [k,v] of Object.entries(values.habits||{})){
    if(Boolean(v)!==Boolean(storedHabits[k]))return false;
  }
  if((stored.tags||[]).slice().sort().join('|')!==(values.tags||[]).slice().sort().join('|'))return false;
  if((stored.goals||[]).join('|')!==(values.goals||[]).join('|'))return false;
  return true;
}

function captureEntryDraft(){
  const form=document.querySelector('#diary-form');
  if(!form)return;
  const values=rawFormValues(form);
  if(entryMatchesStored(values)){
    const had=clearDraft(entryScope());
    if(had)setSaveState('saved');
    else setSaveState(saveState==='typing'?'saved':saveState);
    renderDraftSlot();
    return;
  }
  const meta=setDraft(entryScope(),values);
  if(meta&&!meta.ok)setSaveState('error');
  else if(meta)setSaveState('draft');
  renderDraftSlot();
}

function captureBottleDraft(){
  const form=document.querySelector('#bottle-form');
  if(!form)return;
  const meta=setDraft(DRAFT_SCOPES.bottle(),{
    text:form.querySelector('#bottle-text')?.value||'',
    mood:+(form.querySelector('[name="mood"]:checked')?.value||0)||null,
    sea:form.querySelector('[name="sea"]:checked')?.value||'breeze'
  });
  if(meta&&!meta.ok)setSaveState('error');
}

function captureReplyDraft(id,el){
  if(!el||!document.contains(el))return;   // el modal ya se cerró: nada que guardar
  setDraft(DRAFT_SCOPES.reply(id),{text:el.value||''});
}

function onEntryEdit(){
  setSaveState('typing');
  draftDebounce('entrada',captureEntryDraft,420);
  draftDebounce('autosave',()=>commitEntry({silent:true}),2400);
}
function onBottleEdit(){
  const form=document.querySelector('#bottle-form');
  if(!form)return;
  const text=form.querySelector('#bottle-text');
  bottleDraft={
    text:text?.value||'',
    mood:+(form.querySelector('[name="mood"]:checked')?.value||0)||null,
    sea:form.querySelector('[name="sea"]:checked')?.value||'breeze'
  };
  setSaveState('typing');
  draftDebounce('botella',captureBottleDraft,380);
}
function captureSetupDraft(){
  const form=document.querySelector('#setup-page-form');
  if(!form)return;
  const data={};
  for(const el of form.querySelectorAll('textarea,input[type="text"],input:not([type])')){
    if(!el.name)continue;
    data[el.name]=el.value;
  }
  const quotes=form.querySelector('#new-custom-quote');
  if(quotes?.value)data.customQuote=quotes.value;
  setDraft(DRAFT_SCOPES.setup(),data);
}
function onSetupEdit(){
  draftDebounce('perfil',captureSetupDraft,700);
}

function bindDraftListeners(){
  app.addEventListener('input',event=>{
    const el=event.target;
    if(!el||!el.closest)return;
    if(el.closest('#diary-form')){onEntryEdit();return;}
    if(el.closest('#bottle-form')){onBottleEdit();return;}
    if(el.closest('#setup-page-form')){onSetupEdit();return;}
    if(el.id==='bottle-reply'&&el.closest('#modal')){
      const id=el.closest('[data-modal-bottle]')?.dataset.modalBottle;
      if(id)draftDebounce(`respuesta:${id}`,()=>captureReplyDraft(id,el),360);
    }
  });
  app.addEventListener('change',event=>{
    const el=event.target;
    if(!el||!el.closest)return;
    if(el.closest('#diary-form'))onEntryEdit();
    if(el.closest('#bottle-form'))onBottleEdit();
  });
  /* Al irse, cerrar la pestaña o cambiar de app: se guarda lo último sin preguntar. */
  window.addEventListener('pagehide',flushAllDrafts);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushAllDrafts();});
}
function flushAllDrafts(){
  draftFlushNow('entrada',captureEntryDraft);
  draftFlushNow('botella',captureBottleDraft);
  draftFlushNow('manana',commitTomorrowFromDom);
  draftFlushNow('manana-tarea',commitTomorrowFromDom);
  for(const [key,timer] of [...draftTimers.entries()]){
    if(key.startsWith('respuesta:')){clearTimeout(timer);draftTimers.delete(key);}
  }
  if(document.querySelector('#diary-form')&&!autosavePending&&saveState==='draft')commitEntry({silent:true,final:true});
}

/* ---------- recuperar lo escrito a medias ---------- */
function restoreAfterRender(){
  restoreEntryDraft();
  renderDraftSlot();
}
function applyToField(form,name,value){
  if(value===undefined||value===null)return;
  const el=form.querySelector(`[name="${name}"]`);
  if(!el)return;
  if(el.type==='radio'){
    const target=form.querySelector(`[name="${name}"][value="${value}"]`);
    if(target)target.checked=true;
    return;
  }
  el.value=Array.isArray(value)?value.join('\n'):value;
}
function restoreEntryDraft(){
  const form=document.querySelector('#diary-form');
  if(!form)return;
  const stored=entries.find(x=>x.date===selected);
  if(!draftIsNewer(entryScope(),stored?.updatedAt))return;
  const data=draftData(entryScope());
  if(!data)return;
  for(const key of ENTRY_TEXT_FIELDS)applyToField(form,key,data[key]);
  for(const key of ['mood','energy','stress','sleepHours','studyHours']){
    if(data[key]!==undefined)applyToField(form,key,data[key]);
  }
  if(Array.isArray(data.tags)){
    form.querySelectorAll('[name="tags"]').forEach(box=>{box.checked=data.tags.includes(box.value);});
  }
  if(data.counters){
    for(const [k,v] of Object.entries(data.counters)){
      const input=form.querySelector(`[name="counter_${k}"]`);
      if(input)input.value=v;
    }
  }
  if(data.habits){
    for(const [k,v] of Object.entries(data.habits)){
      const box=form.querySelector(`[name="habit_${k}"]`);
      if(box)box.checked=Boolean(v);
    }
  }
  if(Array.isArray(data.goals)){
    const rows=[...form.querySelectorAll('[name="goal"]')];
    rows.forEach((row,i)=>{if(data.goals[i]!==undefined)row.value=data.goals[i];});
  }
  form.dispatchEvent(new Event('input',{bubbles:true}));
  setSaveState('draft');
}
function renderDraftSlot(){
  const slot=document.querySelector('#entry-draft-slot');
  if(!slot)return;
  const stored=entries.find(x=>x.date===selected);
  const live=slot.dataset.live==='1';
  if(!live&&!draftIsNewer(entryScope(),stored?.updatedAt)){slot.innerHTML='';return;}
  const summary=draftSummary(entryScope());
  if(!summary){slot.innerHTML='';return;}
  slot.innerHTML=`<div class="draft-note ${live?'is-live':''}" role="status">
    ${icon(live?'pen':'refresh')}
    <span>${live
      ?`Escribiendo: guardado <b>${esc(summary.when||'ahora mismo')}</b> · ${summary.words} palabras`
      :`Recuperado de donde lo dejaste <b>${esc(summary.when)}</b> · ${summary.words} palabras`}</span>
    <button type="button" class="text-button" data-action="commit-draft">${icon('stamp')} Dejarlo escrito ya</button>
    <button type="button" class="text-button is-danger" data-action="discard-draft">${icon('close')} Descartar</button>
  </div>`;
}
function primeBottleDraft(){
  if(bottleDraft.text||bottleDraftRestored)return;
  const data=draftData(DRAFT_SCOPES.bottle());
  if(!data?.text)return;
  bottleDraft={text:data.text,mood:data.mood||null,sea:data.sea||'breeze'};
  bottleDraftRestored=draftSummary(DRAFT_SCOPES.bottle())?.when||'';
}

/* ---------- el autoguardado ---------- */
function entryHasSubstance(values){
  const words=ENTRY_TEXT_FIELDS
    .map(k=>String(values[k]||''))
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  if(words>3)return true;
  if(Object.values(values.counters||{}).some(v=>Number(v)>0))return true;
  if(Object.values(values.habits||{}).some(Boolean))return true;
  if((values.tags||[]).length)return true;
  if((values.gratitude0||'').trim()||(values.gratitude1||'').trim()||(values.gratitude2||'').trim())return true;
  return false;
}
function commitEntry({silent=false,final=false}={}){
  const form=document.querySelector('#diary-form');
  if(!form||storageError)return false;
  const values=rawFormValues(form);
  if(silent&&!entryHasSubstance(values))return false;
  autosavePending=true;
  /* lo que había en el tintero del debounce ya no hace falta: se guarda ahora */
  draftCancel('entrada');
  draftCancel('autosave');
  try{
    const entry=validateForForm(collectForm(form));
    entries=saveEntry(entry);
    clearDraft(entryScope());
    dirty=false;
    setSaveState(silent?'autosaved':'saved');
    syncHeroChips(entries.find(x=>x.date===selected));
    if(!silent){
      render();
      showStamp();
      toast('Día guardado');
      document.querySelector('.daily-summary')?.classList.add('reveal');
      const risk=detectCrisisRisk(entry);
      if(risk.triggered&&risk.level==='high')setTimeout(()=>openCrisisModal('help'),550);
    }else if(final){
      /* La pestaña se cierra: el write sí o sí tiene que entrar. */
      try{localStorage.setItem('diario.lastflush.v1',JSON.stringify({at:new Date().toISOString(),date:selected}));}catch{}
    }
    return true;
  }catch(err){
    setSaveState('error');
    if(!silent)toast(err.message||'No se ha podido guardar este día.',true);
    else if(!String(err.message||'').includes('Ese día'))toast('No he podido autoguardar; tu texto sigue a salvo en el borrador.',true);
    return false;
  }finally{
    autosavePending=false;
  }
}
function syncHeroChips(entry){
  const stored=entry||entries.find(x=>x.date===selected);
  const chip=document.querySelector('#hero-words-chip');
  if(chip&&stored)chip.textContent=`${wordCount(stored)} palabras`;
  const status=document.querySelector('.entry-status');
  if(status){
    status.textContent=stored?.updatedAt?`Autoguardado ${timeAgo(stored.updatedAt)}`:'Sin escribir todavía';
    status.classList.remove('is-flash');
    void status.offsetWidth;
    status.classList.add('is-flash');
  }
  syncDraftChip();
}

/* ---------- indicadores ---------- */
function setSaveState(next){
  if(next==='saved'||next==='autosaved')saveAt=Date.now();
  saveState=next;
  syncSaveIndicators();
}
function saveStatusHtml(){
  const map={
    typing:['pen','Escribiendo…','is-working'],
    saving:['save','Guardando…','is-working'],
    draft:['paper','Borrador a salvo, sin enviar','is-draft'],
    error:['close','Sin guardar · reintenta','is-error'],
    autosaved:['check','Autoguardado','is-ok'],
    idle:['check',saveAt?`Guardado ${timeAgo(saveAt)}`:'Todo guardado','is-ok']
  };
  const [name,text,cls]=map[saveState]||map.idle;
  return `<span class="save-dot ${cls}"></span>${icon(name)}<span>${esc(text)}</span>`;
}
function syncSaveIndicators(){
  document.querySelectorAll('[data-save-status]').forEach(el=>{
    el.className=`save-status ${saveState==='draft'?'is-draft':''} ${saveState==='error'?'is-error':''} ${saveState==='typing'||saveState==='saving'?'is-working':''}`;
    el.innerHTML=saveStatusHtml();
  });
  const note=document.querySelector('#save-note');
  if(note){
    note.outerHTML=`<div class="save-note ${pendingDrafts().total?'has-pending':''}" id="save-note">
      <span class="save-dot ${saveState==='error'?'is-error':saveState==='draft'?'is-draft':'is-ok'}"></span>
      <div><strong>${saveNoteTitle()}</strong><small>${esc(saveNoteDetail())}</small></div>
    </div>`;
  }
  const bar=document.querySelector('#floating-save');
  if(bar){
    const show=saveState==='error'||dirty;
    bar.classList.toggle('is-visible',show);
    const text=document.querySelector('#floating-save-text');
    if(text)text.innerHTML=saveState==='error'
      ?`${icon('close')} El autoguardado falló · tu texto está en el borrador`
      :`${icon('pen')} Cambios sin guardar`;
  }
  syncDraftChip();
}
function syncDraftChip(){
  const slot=document.querySelector('#draft-chip-slot');
  if(!slot)return;
  const pend=pendingDrafts();
  if(!pend.total){
    if(slot.firstElementChild)slot.innerHTML='';
    return;
  }
  slot.innerHTML=`<button type="button" class="draft-chip" data-action="show-drafts" title="${pend.total} ${pend.total===1?'texto a medias guardado':'textos a medias guardados'}">
    ${icon('paper')}<span>${pend.total}</span>
  </button>`;
}

/* ---------- el inventario de borradores ---------- */
function draftBrief(d){
  const text=Object.entries(d.data||{})
    .filter(([,v])=>typeof v==='string')
    .map(([,v])=>v)
    .join(' ')
    .replace(/\s+/g,' ')
    .trim();
  const words=text?text.split(/\s+/).length:0;
  const minutes=draftMinutes(d.scope);
  const when=minutes===null?'':minutes<1?'hace un momento':minutes<60?`hace ${minutes} min`:`el ${new Date(d.savedAt).toLocaleDateString('es-ES',{day:'numeric',month:'short'})}`;
  return {
    scope:d.scope,
    label:draftLabel(d.scope),
    words,
    when,
    preview:text?`«${text.slice(0,76)}${text.length>76?'…':''}»`:'(solo cifras y marcas)',
    goto:d.scope.startsWith('entrada:')?d.scope.slice(8):''
  };
}
function draftsModalHtml(){
  const list=listDrafts().map(draftBrief);
  const rows=list.length?list.map(d=>`
    <li class="draft-row">
      <div class="draft-row-main">
        <strong>${esc(d.label)}</strong>
        <small>${d.words} palabras · ${esc(d.when)} · ${esc(d.preview)}</small>
      </div>
      <div class="draft-row-actions">
        ${d.goto?`<button type="button" class="text-button" data-modal="goto" data-date="${esc(d.goto)}">${icon('arrow')} Ir a recuperarlo</button>`:''}
        <button type="button" class="text-button is-danger" data-modal="drop" data-scope="${esc(d.scope)}">${icon('close')} Descartar</button>
      </div>
    </li>`).join(''):`<li class="draft-row is-empty">${icon('check')} No hay nada a medias: todo está escrito ya en el cuaderno.</li>`;
  return `<div class="modal-card drafts-modal">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${icon('close')}</button>
    <p class="eyebrow">${icon('paper')} Lo que se quedó a medias</p>
    <h2>Ni una palabra perdida</h2>
    <p class="modal-lead">Esto es lo que escribiste y todavía no está cerrado en el cuaderno. Se guarda solo en este dispositivo: nada viaja a ningún sitio.</p>
    <ul class="draft-list">${rows}</ul>
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${list.length?`<button class="button danger" data-modal="drop-all">${icon('trash')} Descartar todos</button>`:''}
      <button class="button solid" data-modal="save-all">${icon('stamp')} Escribirlo todo ahora</button>
    </div>
  </div>`;
}
function draftLabel(scope){
  if(scope.startsWith('entrada:'))return `La entrada del ${longDate(scope.slice(8),{day:'numeric',month:'long'})}`;
  if(scope==='botella')return 'Una botella a medio escribir';
  if(scope.startsWith('respuesta:'))return 'Una respuesta a una botella';
  if(scope==='perfil')return 'Tu perfil';
  return 'Un texto pendiente';
}
function openDraftsModal(){
  const modal=showModal(draftsModalHtml());
  modal.onclick=event=>{
    const btn=event.target.closest('[data-modal]');
    const act=btn?.dataset.modal;
    if(!act){if(event.target===modal)modal.close();return;}
    if(act==='close'){modal.close();render();return;}
    if(act==='drop'){
      clearDraft(btn.dataset.scope);
      modal.innerHTML=draftsModalHtml();
      setSaveState(pendingDrafts().total?'draft':'saved');
      render();
      modal.showModal();
      toast('Borrador descartado');
      return;
    }
    if(act==='drop-all'){
      clearAllDrafts();
      modal.close();
      render();
      toast('Todos los borradores descartados');
      return;
    }
    if(act==='save-all'){
      const before=pendingDrafts().total;
      for(const d of listDrafts()){
        if(d.scope.startsWith('entrada:')){
          selected=d.scope.slice(8);
          view='diary';
          renderPage();
          commitEntry({silent:false});
        }else if(d.scope==='botella'&&draftData('botella')?.text){
          castBottleFromDraft(draftData('botella'));
        }else if(d.scope.startsWith('respuesta:')){
          const rid=d.scope.slice(10);
          const text=draftData(d.scope)?.text;
          if(text){thoughts=updateThought(rid,{reply:text,seen:true,repliedAt:new Date().toISOString()});toast('Respuesta guardada');}
        }
      }
      modal.close();
      clearAllDrafts();
      render();
      toast(before?`Cerrados ${before} textos a medias`:'No había nada que escribir');
      return;
    }
    if(act==='goto'){
      modal.close();
      openDay(btn.dataset.date);
      return;
    }
  };
}
function castBottleFromDraft(data){
  if(!data?.text)return;
  try{
    const id=crypto.randomUUID();
    thoughts=saveThought({id,text:data.text,mood:data.mood||null,sea:data.sea||'breeze',castAt:dateKey()});
    clearDraft(DRAFT_SCOPES.bottle());
    bottleDraft={text:'',mood:null,sea:data.sea||'breeze'};
    bottleDraftRestored='';
    toast('Tu botella a medias ya está en el mar');
  }catch(err){toast(err.message||'No se pudo echar la botella al mar.',true);}
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
  for(const c of COUNTERS){
    const input=form.querySelector(`[name="counter_${c.key}"]`);
    counters[c.key]=input?(parseFloat(input.value)||0):(Number(current?.counters?.[c.key])||0);
  }
  // Hábitos, contadores y tareas de mañana pueden estar en la pestaña Rutina:
  // si hoy no hay campos en el DOM, se conservan los valores guardados.
  const habitMap={};
  const habitInputs=[...form.querySelectorAll('[name^="habit_"]')];
  for(const h of habits){
    habitMap[h.id]=habitInputs.length?Boolean(form.querySelector(`[name="habit_${h.id}"]`)?.checked):Boolean(current?.habits?.[h.id]);
  }

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
    tomorrow:data.has('tomorrow')?(data.get('tomorrow')||'').toString().trim():(current?.tomorrow||''),
    goals:form.querySelector('[name="goal"]')
      ?data.getAll('goal').map(g=>g.toString().trim()).filter(Boolean)
      :(current?.goals||[]),
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
  if(floatBar)floatBar.classList.toggle('is-visible',dirty||saveState==='error');

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
    commitEntry();
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
  savePendingText();
  pageTurnDir=dir||(date<selected?'prev':date>selected?'next':'');
  dirty=false;selected=date;view='diary';menu=false;crisisBannerDismissed=false;render({transition:true});
}
/* Antes de mudar de página o de día: se guarda lo escrito (y se autocommite si hay materia). */
function savePendingText(){
  draftFlushNow('entrada',captureEntryDraft);
  draftFlushNow('botella',captureBottleDraft);
  if(document.querySelector('#diary-form')&&saveState==='draft')commitEntry({silent:true});
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
    sb.classList.add('is-animating');
    setTimeout(()=>{sb.classList.remove('is-animating');positionRails();},420);
    setTimeout(()=>positionRails(),60);
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
    savePendingText();
    dirty=false;
    if(next!==view){oceanFilter='';}
    view=next;menu=false;
    if(view==='diary')selected=dateKey();
    render({transition:true});
    return;
  }
  if(!actionButton)return;
  const {action,date,range,mini,key,step,habit,name,word,tab,quote,index,layout,target,val,monthly,id,delta}=actionButton.dataset;
  switch(action){
    case 'menu':menu=!menu;render();break;
    case 'close-menu':menu=false;render();break;
    case 'toggle-sidebar':toggleSidebar();break;
    case 'archive-tab':archiveTab=tab||'list';render();break;
    case 'stats-tab':statsTab=tab||'pulse';render();break;
    case 'profile-tab':profileTab=tab||'personal';render();break;
    case 'thoughts-tab':thoughtsTab=tab||'shore';oceanFilter='';render();break;
    case 'sea-day':{
      oceanFilter=oceanFilter===date?'':date;
      if(oceanFilter&&!groupsForFilter().length){oceanFilter='';toast('Ese día no toca tierra ninguna botella.',true);}
      thoughtsTab=oceanFilter?'sea':thoughtsTab;
      render();
      if(oceanFilter)setTimeout(()=>document.querySelector('#ocean-body')?.scrollIntoView({behavior:motionOn?'smooth':'auto',block:'center'}),80);
      break;
    }
    case 'clear-sea-filter':oceanFilter='';render();break;
    case 'show-drafts':openDraftsModal();break;
    case 'commit-draft':commitEntry();break;
    case 'discard-draft':{
      confirmDialog({
        title:'¿Descartar lo escrito a medias?',
        text:'Se borrar el borrador de este día en este dispositivo. Lo que ya está guardado en el cuaderno se queda.',
        confirmLabel:'Descartarlo',danger:true
      }).then(ok=>{
        if(!ok)return;
        draftCancel('entrada');
        draftCancel('autosave');
        clearDraft(entryScope());
        setSaveState('saved');
        render();
        toast('Borrador descartado');
      });
      break;
    }
    case 'discard-bottle-draft':{
      draftCancel('botella');
      clearDraft(DRAFT_SCOPES.bottle());
      bottleDraft={text:'',mood:null,sea:bottleDraft.sea||'breeze'};
      bottleDraftRestored='';
      render();
      toast('Borrador de la botella descartado');
      break;
    }
    case 'routine-tab':routineTab=tab||'hoy';render();break;
    case 'shift-day':{
      const next=addDays(selected,parseInt(delta||'1',10));
      if(next>dateKey()){toast('Ese día todavía no ha llegado.',true);break;}
      selected=next;render();window.scrollTo({top:0,behavior:'smooth'});break;
    }
    case 'today-routine':selected=dateKey();render();break;
    case 'focus-composer':{
      const el=document.querySelector('#bottle-text');
      if(el){el.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>el.focus(),250);}
      break;
    }
    case 'toggle-habit':{
      const day=date||selected;
      if(day>dateKey()){toast('Ese día todavía no ha llegado.',true);break;}
      const stored=entries.find(x=>x.date===day);
      const map={...(stored?.habits||{})};
      const next=!map[habit];
      map[habit]=next;
      try{
        patchDay(day,{habits:map});
        const created=!stored;
        render();
        flashHabit(habit);
        const label=habits.find(h=>h.id===habit)?.name||'Hábito';
        const total=habits.length;
        const done=habits.filter(h=>map[h.id]).length;
        if(next&&day===dateKey()&&total&&done===total)toast('Rutina de hoy completada');
        else if(created&&next)toast(`«${label}» marcado · creé una entrada mínima para ese día`);
        else toast(next?`«${label}» marcado`:`«${label}» desmarcado`);
      }catch(err){toast(err.message||'No se pudo guardar el hábito.',true);}
      break;
    }
    case 'add-suggested-habit':{
      if(!name)break;
      if(habits.length>=30){toast('Máximo 30 hábitos.',true);break;}
      if(habits.some(h=>h.name.toLowerCase()===name.toLowerCase())){toast('Ya está en tu lista.',true);break;}
      habits=saveHabit({name});
      render();
      toast(`«${name}» añadido a tu rutina`);
      break;
    }
    case 'edit-habit':{
      const row=actionButton.closest('.habit-stat-row');
      const nameEl=row?.querySelector('.habit-stat-name strong');
      const target=habits.find(h=>h.id===habit);
      if(!nameEl||!target)break;
      nameEl.outerHTML=`<input class="habit-rename" maxlength="40" value="${esc(target.name)}" aria-label="Renombrar hábito">`;
      const input=row.querySelector('.habit-rename');
      input.focus();
      input.select();
      input.addEventListener('keydown',event=>{
        if(event.key==='Enter'){event.preventDefault();input.dataset.done='1';commitHabitName(habit,input.value);}
        if(event.key==='Escape'){input.dataset.done='1';render();}
      });
      input.addEventListener('blur',()=>{if(input.dataset.done!=='1')commitHabitName(habit,input.value);});
      break;
    }
    case 'routine-counter-plus':case 'routine-counter-minus':{
      const input=document.querySelector(`[name="counter_${key}"]`);
      if(!input)break;
      const dir=action==='routine-counter-plus'?1:-1;
      const s=parseFloat(step)||1;
      const value=Math.min(parseFloat(input.max),Math.max(parseFloat(input.min),(parseFloat(input.value)||0)+dir*s));
      input.value=Math.round(value*10)/10;
      updateCounterRow(input,key,parseFloat(input.value));
      clearTimeout(routineCounterTimer);
      routineCounterTimer=setTimeout(saveRoutineCounters,400);
      break;
    }
    case 'add-goal-routine':{
      commitTomorrowFromDom();
      const list=currentGoalsRaw().filter(Boolean);
      list.push('');
      try{
        patchDay(selected,{goals:list});
        render();
        const inputs=document.querySelectorAll('#routine-goals .task-input');
        inputs[inputs.length-1]?.focus();
      }catch(err){toast(err.message||'No se pudo añadir la tarea.',true);}
      break;
    }
    case 'remove-goal-routine':{
      const list=currentGoalsRaw().filter((_,i)=>i!==+index);
      const entry=entries.find(x=>x.date===selected);
      try{
        patchDay(selected,{goals:list.filter(Boolean),tomorrow:document.querySelector('#routine-tomorrow')?.value.trim()??(entry?.tomorrow||'')});
        render();
      }catch(err){toast(err.message||'No se pudo quitar la tarea.',true);}
      break;
    }
    case 'open-bottle':openBottle(id);break;
    case 'recall-bottle':{
      thoughts=updateThought(id,{status:'returned',returnedAt:dateKey(),seen:true});
      render();
      toast('Botella recogida en la orilla');
      break;
    }
    case 'recast-bottle':{
      thoughts=recastThought(id);
      render();
      toast('Vuelve a estar en el agua');
      break;
    }
    case 'delete-bottle':requestDeleteBottle(id);break;

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
      if(habits.some(h=>h.name.toLowerCase()===habitName.toLowerCase())){toast('Ya existe un hábito con ese nombre.',true);break;}
      habits=saveHabit({name:habitName});
      render();
      document.querySelector('#new-habit')?.focus();
      toast(`Hábito «${habitName}» añadido`);
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

/* El autoguardado ya escribe solo: solo molestamos si algo no ha podido guardarse. */
window.addEventListener('beforeunload',event=>{
  flushAllDrafts();
  if(saveState==='error'){event.preventDefault();event.returnValue='';}
});
/* Otra pestaña toca el cuaderno: se refresca y el texto en curso sigue en el borrador. */
window.addEventListener('storage',event=>{
  if(!event.key||!String(event.key).startsWith('diario.'))return;
  try{
    refresh();
    render();
    toast('Otra pestaña cambió el cuaderno: lo he actualizado');
  }catch(err){toast('No pude refrescar los datos: '+err.message,true);}
});

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch(() => {});
  });
}

render();
setSaveState('idle');

/* Al abrir el cuaderno: si el mar trajo botellas que aún no has abierto, te lo
   dice y las varadas entran despacio, saliendo del agua. */
const arrivalsAtBoot=shoreQueue(thoughts).filter(t=>t.seen!==true);
if(arrivalsAtBoot.length){
  setTimeout(()=>{
    toast(`El mar te ha devuelto ${arrivalsAtBoot.length} ${arrivalsAtBoot.length===1?'pensamiento':'pensamientos'}`);
    document.querySelectorAll('.shore-bottle').forEach((el,i)=>{
      el.style.setProperty('--wash-delay',`${i*140}ms`);
      el.classList.add('is-washing');
    });
    document.querySelector('.sea-panel')?.classList.add('is-rising');
    setTimeout(()=>document.querySelector('.sea-panel')?.classList.remove('is-rising'),2600);
  },820);
}

/* Y si algo se quedó a medias, se recupera solo: basta con decirlo. */
const pend=awaitPendingNotice();
function awaitPendingNotice(){
  const drafts=pendingDrafts();
  if(!drafts.total)return drafts;
  const bits=[];
  if(drafts.entries)bits.push(`${drafts.entries} ${drafts.entries===1?'entrada':'entradas'}`);
  if(drafts.bottles)bits.push(`${drafts.bottles} ${drafts.bottles===1?'botella':'botellas'} a medio escribir`);
  if(bits.length)setTimeout(()=>toast(`Recuperado lo que dejaste a medias: ${bits.join(' y ')}`),arrivalsAtBoot.length?2400:1100);
  return drafts;
}
