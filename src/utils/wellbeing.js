import {
  DAILY_WORDS, DAILY_TIPS, WRITING_PROMPTS, AGE_GROUPS, INTEREST_OPTIONS, TAGS, SUGGESTED_HABITS,
  THEMES, PERSONAL_QUOTES, WRITING_RITUALS, TONE_STYLES
} from '../data/constants.js';
import {dateKey} from './dates.js';
import {ageGroupFromAge} from './storage.js';
import {average, formatNumber} from './stats.js';

export function normalizeForMatch(text = '') {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function generateThemeFaviconSvg(themeId = 'paper', setup = {}) {
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  const {bg, page, accent, ink} = theme.favicon || {bg: '#211E17', page: '#F3EFE6', accent: '#B34A2E', ink: '#211E17'};
  const initial = String(setup?.name || '').trim().slice(0, 1).toUpperCase();
  const textNode = initial
    ? `<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${ink}">${initial.replace(/[<>&"']/g, '')}</text>`
    : `<path d="M29 29h14M29 36h10" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${bg}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${page}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${accent}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${accent}"/>
    ${textNode}
    <circle cx="46" cy="46" r="3" fill="${accent}"/>
  </svg>`.replace(/\s+/g, ' ').trim();
}

export function generateThemeFaviconDataUri(themeId = 'paper', setup = {}) {
  const svg = generateThemeFaviconSvg(themeId, setup);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const HIGH_RISK_PATTERNS = [
  {label: 'suicidio', regex: /\b(suicid(io|arme|arse|a)|conducta suicida)\b/},
  {label: 'quitarme la vida', regex: /\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},
  {label: 'no quiero vivir', regex: /\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},
  {label: 'quiero morir', regex: /\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},
  {label: 'autolesión', regex: /\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},
  {label: 'acabar con todo', regex: /\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}
];

function extractEntryText(entryOrText) {
  if (!entryOrText) return '';
  if (typeof entryOrText === 'string') return entryOrText;
  if (typeof entryOrText === 'object') {
    const g = Array.isArray(entryOrText.gratitude) ? entryOrText.gratitude.join(' ') : '';
    const goals = Array.isArray(entryOrText.goals) ? entryOrText.goals.join(' ') : '';
    const tags = Array.isArray(entryOrText.tags) ? entryOrText.tags.join(' ') : '';
    return [
      entryOrText.bestOfDay,
      entryOrText.differentToday,
      entryOrText.generalDay,
      entryOrText.wordOfDay,
      entryOrText.capsule,
      entryOrText.tomorrow,
      g,
      goals,
      tags
    ].filter(Boolean).join(' ');
  }
  return '';
}

export function getAgeProfile(setup = {}) {
  const groupId = setup?.age ? ageGroupFromAge(setup.age, setup.ageGroup || 'young') : (setup?.ageGroup || 'young');
  const group = AGE_GROUPS.find(g => g.id === groupId) || AGE_GROUPS[1];
  const interests = Array.isArray(setup?.interests) ? setup.interests : [];
  const interestObjs = INTEREST_OPTIONS.filter(i => interests.includes(i.id));
  const ritualObj = WRITING_RITUALS.find(r => r.id === setup?.ritual) || WRITING_RITUALS[0];
  const toneObj = TONE_STYLES.find(t => t.id === setup?.tone) || TONE_STYLES[0];

  let focusLabel = group.focusLabel;
  let focusQuestion = group.focusQuestion;
  if (interests.includes('study')) {
    focusLabel = 'Estudio';
    focusQuestion = 'Tiempo de estudio o repaso';
  } else if (interests.includes('projects') && group.id !== 'teen') {
    focusLabel = 'Proyectos y enfoque';
    focusQuestion = 'Tiempo dedicado a tus proyectos';
  }

  const suggestedHabits = [
    ...new Set([
      ...interestObjs.map(i => i.habit),
      ...group.habits,
      ...SUGGESTED_HABITS
    ])
  ].slice(0, 8);

  const tags = [
    ...new Set([
      ...interestObjs.map(i => i.tag),
      ...group.tags,
      ...TAGS
    ])
  ].slice(0, 12);

  const isMinor = Number.isFinite(Number(setup?.age)) && Number(setup.age) > 0 && Number(setup.age) < 18;

  let capsuleLabel = 'Nota al margen (canción, lectura, lugar...)';
  let capsulePlaceholder = 'Una canción, un libro, una película o un detalle que quieras recordar...';
  if (interests.includes('music')) {
    capsuleLabel = 'Canción, película o escena del día';
    capsulePlaceholder = '¿Qué has escuchado o visto hoy?';
  } else if (interests.includes('reading')) {
    capsuleLabel = 'Lectura o cita del día';
    capsulePlaceholder = 'Un libro que estés leyendo o una frase que te haya gustado...';
  } else if (interests.includes('gaming')) {
    capsuleLabel = 'Partida, serie o tema del día';
    capsulePlaceholder = 'A qué has jugado hoy o qué serie estás viendo...';
  }

  // Determinar qué contadores son relevantes para los gustos del usuario
  const activeCounterKeys = ['water'];
  if (interests.includes('sport') || interests.includes('nature') || !interests.length) activeCounterKeys.push('exercise');
  if (interests.includes('reading') || interests.includes('study') || !interests.length) activeCounterKeys.push('reading');
  if (interests.includes('calm') || !interests.length) activeCounterKeys.push('mindfulness');

  return {
    group,
    age: setup?.age || null,
    isMinor,
    interests: interestObjs,
    ritual: ritualObj,
    tone: toneObj,
    focusLabel,
    focusQuestion,
    capsuleLabel,
    capsulePlaceholder,
    activeCounterKeys,
    sleepRecommended: group.sleepRecommended,
    studyRecommended: group.studyRecommended,
    suggestedHabits,
    tags,
    placeholders: group.placeholders
  };
}

/**
 * Solo se activa cuando hay expresiones explícitas de riesgo grave (suicidio o autolesión).
 * Nunca salta por tener un mal día, dormir poco o estar estresado.
 */
export function detectCrisisRisk(input) {
  const rawText = extractEntryText(input);
  const normalized = normalizeForMatch(rawText);
  const matchedHigh = [];

  if (normalized) {
    for (const p of HIGH_RISK_PATTERNS) {
      if (p.regex.test(normalized)) matchedHigh.push(p.label);
    }
  }

  if (matchedHigh.length > 0) {
    return {
      triggered: true,
      level: 'high',
      matchedTerms: matchedHigh,
      reason: 'Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas.'
    };
  }

  return {triggered: false, level: 'none', matchedTerms: [], reason: ''};
}

export function daySeed(dateStr = dateKey()) {
  const clean = String(dateStr || '').replace(/[^0-9]/g, '');
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) >>> 0;
  }
  return hash || 1;
}

export function getDailyWord(dateStr = dateKey(), offset = 0) {
  const idx = (daySeed(dateStr) + Math.abs(offset)) % DAILY_WORDS.length;
  return DAILY_WORDS[idx];
}

export function getDailyTip(dateStr = dateKey(), offset = 0, setup = {}) {
  const profile = getAgeProfile(setup);
  const groupId = profile.group.id;
  const userInterests = new Set(setup?.interests || []);

  const pool = DAILY_TIPS.filter(t => {
    const matchesAge = !t.ageGroups || t.ageGroups.includes(groupId);
    const matchesInterest = !t.interests || t.interests.some(i => userInterests.has(i));
    return matchesAge || matchesInterest;
  });

  const list = pool.length ? pool : DAILY_TIPS;
  const idx = (daySeed(dateStr) * 7 + Math.abs(offset)) % list.length;
  return list[idx];
}

export function getPersonalQuote(dateStr = dateKey(), offset = 0, setup = {}) {
  const profile = getAgeProfile(setup);
  const groupId = profile.group.id;
  const tone = setup?.tone || 'warm';
  const userInterests = new Set(setup?.interests || []);
  const savedQuotes = Array.isArray(setup?.savedQuotes) ? setup.savedQuotes : [];

  if (savedQuotes.length > 0 && offset % 3 === 0) {
    const sIdx = (daySeed(dateStr) + Math.abs(offset)) % savedQuotes.length;
    return {
      text: savedQuotes[sIdx],
      author: setup?.name ? `Guardada por ${setup.name}` : 'De tu colección',
      isCustom: true
    };
  }

  const scored = PERSONAL_QUOTES.map(q => {
    let score = 0;
    if (q.tones?.includes(tone)) score += 3;
    if (q.ageGroups?.includes(groupId)) score += 2;
    if (q.interests?.some(i => userInterests.has(i))) score += 4;
    return {q, score};
  });

  const maxScore = Math.max(...scored.map(s => s.score), 0);
  const filtered = scored.filter(s => s.score >= Math.max(2, maxScore - 2)).map(s => s.q);
  const list = filtered.length >= 4 ? filtered : PERSONAL_QUOTES;
  const idx = (daySeed(dateStr) * 5 + Math.abs(offset)) % list.length;
  return list[idx];
}

export function getWritingPrompt(dateStr = dateKey(), offset = 0) {
  const idx = (daySeed(dateStr) * 13 + Math.abs(offset)) % WRITING_PROMPTS.length;
  return WRITING_PROMPTS[idx];
}

export function getContextualAdvice(entry = {}, setup = {}) {
  const advice = [];
  const profile = getAgeProfile(setup);
  const sleepGoal = Number(setup?.sleepGoal) || profile.sleepRecommended || 7.5;
  const sleep = Number(entry?.sleepHours);
  const stress = Number(entry?.stress);
  const mood = Number(entry?.mood);

  if (Number.isFinite(sleep) && sleep > 0 && sleep < sleepGoal - 1.5) {
    advice.push({
      icon: 'moon',
      title: 'Descanso corto',
      text: `Has dormido ${sleep} h (tu meta es ${sleepGoal} h). Intenta bajar el ritmo esta tarde.`
    });
  }

  if (Number.isFinite(stress) && stress >= 4) {
    advice.push({
      icon: 'wind',
      title: 'Día cargado',
      text: 'Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana.'
    });
  }

  if (Number.isFinite(mood) && mood === 1) {
    advice.push({
      icon: 'heart',
      title: 'Día cuesta arriba',
      text: 'En los días pesados basta con descansar y cubrir lo básico.'
    });
  }

  return advice.slice(0, 2);
}

export function calculateGoalStats(entries = [], setup = {}) {
  const profile = getAgeProfile(setup);
  const sleepGoal = Number(setup?.sleepGoal) || profile.sleepRecommended || 7.5;
  const studyGoal = Number(setup?.studyGoal) ?? profile.studyRecommended ?? 2;
  const waterGoal = Number(setup?.waterGoal) || 8;
  const total = entries.length;
  if (!total) {
    return {
      total: 0,
      sleepGoal, studyGoal, waterGoal,
      sleepMet: 0, studyMet: 0, waterMet: 0,
      sleepPct: 0, studyPct: 0, waterPct: 0,
      moodWhenSleepMet: null, moodWhenSleepMissed: null
    };
  }
  const sleepEntries = entries.filter(e => e.sleepHours >= sleepGoal);
  const sleepMissed = entries.filter(e => e.sleepHours < sleepGoal);
  const studyEntries = entries.filter(e => e.studyHours >= studyGoal);
  const waterEntries = entries.filter(e => (e.counters?.water || 0) >= waterGoal);

  return {
    total,
    sleepGoal,
    studyGoal,
    waterGoal,
    sleepMet: sleepEntries.length,
    studyMet: studyEntries.length,
    waterMet: waterEntries.length,
    sleepPct: Math.round((sleepEntries.length / total) * 100),
    studyPct: Math.round((studyEntries.length / total) * 100),
    waterPct: Math.round((waterEntries.length / total) * 100),
    moodWhenSleepMet: sleepEntries.length ? formatNumber(average(sleepEntries.map(e => e.mood))) : null,
    moodWhenSleepMissed: sleepMissed.length ? formatNumber(average(sleepMissed.map(e => e.mood))) : null
  };
}

export function calculateEntryCompletion(entry = {}, habitsCount = 0) {
  let completed = 0;
  let total = 3; // Estado de ánimo, texto del día, ritmo de sueño/dedicación
  if (entry?.mood >= 1 && entry?.mood <= 5) completed++;
  if (String(entry?.generalDay || '').trim().length > 0 || String(entry?.bestOfDay || '').trim().length > 0) completed++;
  if (Number.isFinite(Number(entry?.sleepHours)) && entry?.sleepHours !== '') completed++;

  if (habitsCount > 0) {
    total++;
    const anyHabit = Object.values(entry?.habits || {}).some(Boolean);
    if (anyHabit) completed++;
  }

  return {
    completed,
    total,
    percent: Math.min(100, Math.round((completed / total) * 100))
  };
}

export function getGreeting(name = '', hour = new Date().getHours()) {
  const cleanName = String(name || '').trim();
  const suffix = cleanName ? `, ${cleanName}` : '';
  if (hour >= 5 && hour < 13) return `Buenos días${suffix}`;
  if (hour >= 13 && hour < 20) return `Buenas tardes${suffix}`;
  return `Buenas noches${suffix}`;
}
