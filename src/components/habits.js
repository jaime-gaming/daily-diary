/* ============================================================
   Componentes de la pestaña Rutina
   (hábitos, contadores y tareas de mañana, fuera de la portada)
   ============================================================ */

import {icon,escape as esc,counterSteppers} from './ui.js';
import {COUNTERS} from '../data/constants.js';
import {dateKey,longDate,addDays,weekStart,parseDate} from '../utils/dates.js';
import {bestHabitStreak,liveHabitStreak,habitRate,habitMomentum,habitCount} from '../utils/stats.js';

const WEEK_LETTERS=['L','M','X','J','V','S','D'];
const weekdayLetter=date=>WEEK_LETTERS[(parseDate(date).getDay()+6)%7];

/* ---------- anillo de progreso del día ---------- */
export function progressRing(pct,label,sub=''){
  const r=26,circ=2*Math.PI*r,dash=(Math.min(100,Math.max(0,pct))/100*circ).toFixed(2);
  return `<div class="ring-widget ${pct>=100?'is-full':''}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="${r}"/>
      <circle class="ring-fill" cx="32" cy="32" r="${r}" stroke-dasharray="${dash} ${circ.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${label}</span>
    ${sub?`<span class="ring-sub">${esc(sub)}</span>`:''}
  </div>`;
}

/* ---------- el tablero de hábitos de un día ---------- */
export function habitBoard(habits=[],entry=null,entries=[],date=dateKey(),today=dateKey()){
  if(!habits.length)return '';
  return `<div class="habit-board">${habits.map((h,idx)=>{
    const checked=Boolean(entry?.habits?.[h.id]);
    const live=liveHabitStreak(entries,h.id,date>today?date:today);
    const week=habitRate(entries,h.id,7,date);
    return `<button type="button" class="habit-toggle ${checked?'is-done':''}" style="--habit-i:${idx}"
      data-action="toggle-habit" data-habit="${h.id}" data-date="${date}" aria-pressed="${checked}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${esc(h.name)}</strong>
        <small>${checked?'hecho hoy':date===today?'toca para marcarlo':'aún por hacer'}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(_,i)=>{
          const d=addDays(date,i-6);
          const done=Boolean(entries.find(e=>e.date===d)?.habits?.[h.id]);
          return `<i class="${done?'on':''} ${d>today?'future':''}"></i>`;
        }).join('')}
      </span>
      <span class="habit-streak ${live?'is-hot':''}" title="Racha actual">${live?`${icon('flame')} ${live}`:`${week.done}/7`}</span>
    </button>`;
  }).join('')}</div>`;
}

/* ---------- rejilla de constancia (momentum grid) ---------- */
export function momentumGrid(entries=[],habits=[],{days=28,end=dateKey(),today=dateKey(),title='Tus últimas 4 semanas'}={}){
  if(!habits.length)return '';
  const {dates,rows}=habitMomentum(entries,habits,days,end,today);
  const monthLabel=longDate(dates[0],{day:'numeric',month:'short'}).replace(/\./g,'');
  return `<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${icon('grid')} Constancia</p>
        <h2>${esc(title)}</h2>
      </div>
      <span class="field-caption">${esc(monthLabel)} → ${esc(longDate(dates[dates.length-1],{day:'numeric',month:'short'}))}</span>
    </div>
    <p class="momentum-hint">Toca cualquier casilla para anotar o quitar un hábito de ese día. Solo días pasados o el de hoy.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${days}">
        <span class="momentum-corner"></span>
        ${dates.map(d=>`<span class="momentum-day ${d===today?'is-today':''}">${d.slice(8,10)}</span>`).join('')}
        ${rows.map(row=>`
          <span class="momentum-name" title="${esc(row.habit.name)}">${esc(row.habit.name)}</span>
          ${row.cells.map(c=>`<button type="button" class="momentum-cell ${c.done?'is-done':''} ${c.future?'is-future':''} ${c.recorded?'':'is-blank'}"
            ${c.future?'disabled':''} data-action="toggle-habit" data-habit="${row.habit.id}" data-date="${c.date}" aria-pressed="${c.done}"
            aria-label="${esc(row.habit.name)} · ${longDate(c.date)} · ${c.done?'cumplido':'sin cumplir'}">
            <i></i>
          </button>`).join('')}
        `).join('')}
      </div>
      <div class="momentum-weekdays" style="--cols:${days}">
        <span class="momentum-corner"></span>
        ${dates.map(d=>`<span class="${weekdayLetter(d)==='L'?'is-mon':''}">${weekdayLetter(d)}</span>`).join('')}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${WEEK_LETTERS.join(' ')} · cada lunes resaltado</span>
    </div>
  </section>`;
}

/* ---------- estadísticas por hábito ---------- */
export function habitStatsList(habits=[],entries=[],today=dateKey()){
  if(!habits.length)return '';
  return `<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${icon('chart')}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${habits.map(h=>{
        const rate=habitRate(entries,h.id,28,today);
        const live=liveHabitStreak(entries,h.id,today);
        const best=bestHabitStreak(entries,h.id);
        return `<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${esc(h.name)}</strong>
            <small>${habitCount(entries,h.id)} ${habitCount(entries,h.id)===1?'día marcado':'días marcados'} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${rate.pct}%"></i><span>${rate.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${icon('flame')} <b>${live}</b> d</span>
            <span title="Mejor racha">${icon('seal')} <b>${best}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${h.id}" aria-label="Renombrar ${esc(h.name)}">${icon('pen')}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${h.id}" data-name="${esc(h.name)}" aria-label="Eliminar ${esc(h.name)}">${icon('trash')}</button>
          </div>
        </li>`;
      }).join('')}
    </ul>
  </section>`;
}

/* ---------- añadir y sugerencias ---------- */
export function habitComposer(profile={},habits=[]){
  const existing=new Set(habits.map(h=>h.name.toLowerCase()));
  const suggestions=(profile.suggestedHabits||[]).filter(h=>!existing.has(h.toLowerCase())).slice(0,6);
  return `<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${icon('plus')}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${habits.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito (ej. Leer 20 minutos)" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${icon('plus')} Añadir</button>
    </div>
    ${suggestions.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias para tu etapa · toca para añadir</p>
      <div class="tag-picker">
        ${suggestions.map(s=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${esc(s)}"><span>+ ${esc(s)}</span></button>`).join('')}
      </div>`:''}
    ${!habits.length?`<p class="habit-empty">Aún no tienes hábitos. Añade uno, o marca algunos en tu perfil y aparecerán aquí.</p>`:''}
  </section>`;
}

/* ---------- contadores del día ---------- */
export function countersBoard(entry={},setup={},visible=[]){
  return `<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${icon('drop')} Contadores</p><h2>Lo de hoy, en cifras</h2></div>
      <span class="field-caption">se guarda al instante</span>
    </div>
    ${counterSteppers(entry?.counters||{},COUNTERS,setup,{action:'routine'})}
    ${visible.length?`<p class="sleep-mood-insight">${icon('spark')} ${esc(visible[0])}</p>`:''}
  </section>`;
}

/* ---------- lista de tareas para mañana ---------- */
export function tomorrowBoard(entry={},date=dateKey()){
  const goals=entry?.goals||[];
  return `<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${icon('sail')} Para mañana</p><h2>La lista de la próxima marea</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${icon('plus')} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero... (una frase basta)">${esc(entry?.tomorrow||'')}</textarea>
    <div class="task-list" id="routine-goals">
      ${goals.length?goals.map((g,i)=>`<div class="task-row">
        <span class="task-index">${String(i+1).padStart(2,'0')}</span>
        <input class="task-input" data-index="${i}" value="${esc(g)}" maxlength="200" aria-label="Tarea ${i+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${i}" aria-label="Quitar tarea">${icon('close')}</button>
      </div>`).join(''):`<p class="habit-empty">Nada apuntado para mañana. Tres tareas concretas suelen funcionar mejor que diez genéricas.</p>`}
    </div>
  </section>`;
}

/* ---------- resumen compacto para la portada ---------- */
export function routineTeaser(habits=[],entry=null,entries=[],date=dateKey()){
  const done=habits.filter(h=>entry?.habits?.[h.id]).length;
  const pct=habits.length?Math.round((done/habits.length)*100):0;
  const todayStreak=habits.length?Math.max(0,...habits.map(h=>liveHabitStreak(entries,h.id,date))):0;
  const weekStartLabel=longDate(weekStart(date),{day:'numeric',month:'short'});
  return `<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${icon('listChecks')} Rutina de hoy</p><h2>${done}/${habits.length||0} ${habits.length===1?'hábito':'hábitos'}</h2></div>
      ${progressRing(pct,`${pct}%`)}
    </div>
    <p class="routine-teaser-note">${habits.length
      ?`La lista completa, los contadores y tus rachas viven ahora en su propia pestaña. Semana del ${esc(weekStartLabel)}.`
      :'Todavía no hay hábitos: crea tu lista en la pestaña Rutina.'}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${icon('arrow')}</button>
    ${todayStreak?`<span class="routine-teaser-flame">${icon('flame')} racha de ${todayStreak} días</span>`:''}
  </section>`;
}
