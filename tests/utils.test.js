import test from 'node:test';
import assert from 'node:assert/strict';
import {dateKey, parseDate, addDays, daysBetween, dayNumber, weekStart, monthRange, monthMove, generateCalendar, longDate} from '../src/utils/dates.js';
import {average, meanOrNull, median, standardDeviation, periodCoverage, calculateStats, currentStreak, maxStreak, sleepInterpretation, studyInterpretation, generateSummary, periodSummary, generateTrends, inRange, formatNumber, wordCount, totalWords, habitStreak, habitCount, tagFrequency, counterInterpretation} from '../src/utils/stats.js';
import {detectCrisisRisk, getDailyWord, getDailyTip, getContextualAdvice, calculateEntryCompletion, getGreeting, getAgeProfile, generateThemeFaviconSvg, generateThemeFaviconDataUri, getPersonalQuote, calculateGoalStats} from '../src/utils/wellbeing.js';

const entry = (date, mood, sleepHours, studyHours, extra = {}) => ({
  id: date, date, mood, sleepHours, studyHours, energy: null, stress: null,
  bestOfDay: '', differentToday: '', generalDay: 'Un día.', wordOfDay: '',
  gratitude: ['', '', ''], tomorrow: '', goals: [], tags: [],
  counters: {water: 0, exercise: 0, reading: 0, mindfulness: 0}, habits: {},
  createdAt: date, updatedAt: date, ...extra
});

test('fechas: claves y sumas de días', () => {
  assert.equal(dateKey(new Date(2026, 8, 30)), '2026-09-30');
  assert.equal(addDays('2026-09-30', 1), '2026-10-01');
  assert.equal(addDays('2026-01-01', -1), '2025-12-31');
  assert.equal(daysBetween('2026-09-24', '2026-09-30'), 6);
  assert.equal(daysBetween('2026-09-30', '2026-09-30'), 0);
});

test('número de día calculado desde la primera entrada', () => {
  const entries = [entry('2026-09-01', 3, 7, 1), entry('2026-09-15', 4, 8, 2)];
  assert.equal(dayNumber('2026-09-01', entries), 1);
  assert.equal(dayNumber('2026-09-30', entries), 30);
  assert.equal(dayNumber('2026-09-15', entries), 15);
});

test('semana y mes', () => {
  assert.equal(weekStart('2026-09-30'), '2026-09-28'); // miércoles -> lunes
  assert.deepEqual(monthRange('2026-09-30'), ['2026-09-01', '2026-09-30']);
  assert.equal(monthMove('2026-09-30', -1), '2026-08-01');
  assert.equal(monthMove('2026-12-10', 1), '2027-01-01');
  const cells = generateCalendar('2026-09-30');
  assert.equal(cells.length % 7, 0);
  assert.equal(cells.filter(c => c.inMonth).length, 30);
  assert.ok(longDate('2026-09-30').includes('2026'));
});

test('medias robustas, muestra disponible y rachas', () => {
  assert.equal(average([1, 2, 3]), 2);
  assert.equal(average([]), 0);
  assert.equal(meanOrNull([null, 2, 4]), 3);
  assert.equal(meanOrNull([null, undefined]), null);
  assert.equal(median([1, 9, 2]), 2);
  assert.equal(median([1, 2, 3, 4]), 2.5);
  assert.equal(median([]), null);
  assert.equal(standardDeviation([2, 2, 2]), 0);
  assert.equal(maxStreak([entry('2026-09-01', 3, 7, 1), entry('2026-09-02', 3, 7, 1), entry('2026-09-04', 3, 7, 1)]), 2);
  assert.equal(currentStreak([entry('2026-09-29', 3, 7, 1), entry('2026-09-30', 3, 7, 1)], '2026-09-30'), 2);
  assert.equal(currentStreak([entry('2026-09-29', 3, 7, 1)], '2026-09-30'), 1); // si ayer hay entrada, la racha sigue viva
  assert.equal(currentStreak([], '2026-09-30'), 0);
});

test('interpretaciones de sueño y estudio (reglas fijas)', () => {
  assert.equal(sleepInterpretation(5), 'Has dormido poco.');
  assert.equal(sleepInterpretation(6), 'Una cantidad algo baja.');
  assert.equal(sleepInterpretation(8), 'Un descanso razonable.');
  assert.equal(sleepInterpretation(9.5), 'Has dormido bastante.');
  assert.equal(studyInterpretation(0), 'Hoy no has dedicado tiempo al estudio.');
  assert.equal(studyInterpretation(0.5), 'Has hecho un poco de estudio.');
  assert.equal(studyInterpretation(2), 'Has tenido una sesión de estudio considerable.');
  assert.equal(studyInterpretation(4), 'Has dedicado bastante tiempo.');
  assert.equal(studyInterpretation(6), 'Ha sido un día de estudio intenso.');
});

test('resumen del día por plantillas', () => {
  const summary = generateSummary(entry('2026-09-30', 4, 8, 2));
  assert.match(summary, /día bueno/);
  assert.match(summary, /Has dormido 8 horas/);
  assert.match(summary, /2 horas al estudio/);
  assert.match(generateSummary(entry('2026-09-30', 5, 9.5, 0)), /día genial/);
  assert.match(generateSummary(entry('2026-09-30', 1, 5, 6)), /día difícil/);
});

test('estadísticas de un período', () => {
  const entries = [entry('2026-09-01', 2, 6, 1), entry('2026-09-02', 4, 8, 3), entry('2026-09-03', 5, 9, 5)];
  const s = calculateStats(entries);
  assert.equal(s.count, 3);
  assert.equal(s.mood, 11 / 3);
  assert.equal(s.totalStudy, 9);
  assert.equal(s.totalSleep, 23);
  assert.equal(s.best.date, '2026-09-03');
  assert.equal(s.worst.date, '2026-09-01');
  assert.equal(s.mostStudy.studyHours, 5);
  assert.equal(s.mostSleep.sleepHours, 9);
  assert.deepEqual(s.moods, [0, 1, 0, 1, 1]);
  assert.match(periodSummary(s), /En la semana has registrado 3 días/);
  assert.match(periodSummary(s, true), /En el período has registrado 3 días/);
  assert.match(periodSummary(calculateStats([])), /Aún no hay entradas/);
});

test('las métricas opcionales sin datos se representan como ausentes y los días se cuentan una vez', () => {
  const first = entry('2026-09-01', 3, 7, 1, {energy: null, stress: null, counters: {water: 4}});
  const replacement = entry('2026-09-01', 5, 8, 2, {energy: 4, stress: null, counters: {water: 8}});
  const stats = calculateStats([first, replacement]);
  assert.equal(stats.count, 1);
  assert.equal(stats.mood, 5);
  assert.equal(stats.energy, 4);
  assert.equal(stats.stress, null);
  assert.equal(stats.metricCounts.stress, 0);
  assert.equal(stats.counters.water.total, 8);
  assert.equal(stats.counters.water.count, 1);
  assert.equal(calculateStats([first]).energy, null);
});

test('tendencias por reglas, sin IA', () => {
  const today = '2026-09-30';
  const recent = Array.from({length: 7}, (_, i) => entry(`2026-09-${24 + i}`, 4, 6, 1));
  const prior = Array.from({length: 7}, (_, i) => entry(`2026-09-${17 + i}`, 4, 8, 1));
  const trends = generateTrends([...prior, ...recent], today);
  assert.ok(trends.some(t => /sueño ha bajado/.test(t)));

  const moreSleep = [
    ...Array.from({length: 5}, (_, i) => entry(`2026-09-0${i + 1}`, 4, 8, 1)),
    ...Array.from({length: 5}, (_, i) => entry(`2026-09-${10 + i}`, 2, 5, 1))
  ];
  const rel = generateTrends(moreSleep, today);
  assert.ok(rel.some(t => /coincide/.test(t) && /asociación/.test(t) && /no una causa demostrada/.test(t)));
  assert.deepEqual(generateTrends([], today), []);
});

test('filtrado por rango y cobertura real del período', () => {
  const entries = [entry('2026-09-01', 3, 7, 1), entry('2026-09-15', 3, 7, 1)];
  assert.equal(inRange(entries, '2026-09-01', '2026-09-10').length, 1);
  assert.equal(inRange(entries, '2026-10-01', '2026-10-31').length, 0);
  assert.deepEqual(periodCoverage(entries, '2026-09-01', '2026-09-07', '2026-09-04'), {recorded: 1, days: 4, pct: 25});
  assert.deepEqual(periodCoverage(entries, '2026-09-05', '2026-09-09', '2026-09-04'), {recorded: 0, days: 0, pct: 0});
  assert.deepEqual(periodCoverage([...entries, entries[0]], '2026-09-01', '2026-09-30', '2026-09-30'), {recorded: 2, days: 30, pct: 7});
  assert.equal(formatNumber(7.25), '7,3');
});

test('palabras, hábitos y etiquetas', () => {
  assert.equal(wordCount(entry('2026-09-01', 3, 7, 1)), 2); // "Un día."
  const e = entry('2026-09-02', 3, 7, 1, {
    generalDay: 'Hoy he escrito tres palabras aquí',
    habits: {h1: true}, tags: ['Tranquilo', 'Social'], counters: {water: 6}
  });
  assert.equal(wordCount(e), 6);
  assert.equal(totalWords([e]), 6);
  const list = [entry('2026-09-01', 3, 7, 1, {habits: {h1: true}}),
    entry('2026-09-02', 3, 7, 1, {habits: {h1: true}}),
    entry('2026-09-03', 3, 7, 1, {})];
  assert.equal(habitStreak(list, 'h1'), 2);
  assert.equal(habitCount(list, 'h1'), 2);
  assert.equal(habitStreak(list, 'ninguno'), 0);
  assert.deepEqual(tagFrequency([entry('2026-09-01', 3, 7, 1, {tags: ['Social', 'Tranquilo']}),
    entry('2026-09-02', 3, 7, 1, {tags: ['Social']})])[0], ['Social', 2]);
});

test('interpretaciones de contadores y resumen ampliado', () => {
  assert.match(counterInterpretation('water', 0), /Sin registrar agua/);
  assert.match(counterInterpretation('water', 10), /hidratación/);
  assert.match(counterInterpretation('exercise', 30), /notable/);
  assert.match(counterInterpretation('reading', 90), /mucha lectura/);
  assert.match(counterInterpretation('mindfulness', 15), /considerable/);
  const summary = generateSummary(entry('2026-09-30', 4, 8, 2, {
    energy: 5, stress: 2, habits: {h1: true, h2: true, h3: false},
    counters: {water: 7, exercise: 30, reading: 10, mindfulness: 5}
  }));
  assert.match(summary, /día bueno/);
  assert.match(summary, /energía se ha sentido muy alta/);
  assert.match(summary, /estrés ha sido bajo/);
  assert.match(summary, /cumplido 2 de tus hábitos/);
  assert.match(summary, /7 vasos de agua/);
});

test('estadísticas ampliadas: escalas, contadores y palabras', () => {
  const entries = [
    entry('2026-09-01', 3, 7, 1, {energy: 4, stress: 2, counters: {water: 6, exercise: 30}, generalDay: 'Dos palabras'}),
    entry('2026-09-02', 5, 8, 3, {energy: 2, stress: 4, counters: {water: 8, exercise: 10}, generalDay: 'Tres palabras aquí'})
  ];
  const s = calculateStats(entries);
  assert.equal(s.energy, 3);
  assert.equal(s.stress, 3);
  assert.equal(s.counters.water.total, 14);
  assert.equal(s.counters.exercise.average, 20);
  assert.equal(s.words, 5);
  assert.equal(average([null, 3, 5]), 4); // los nulos se ignoran
});

test('detección de riesgo de suicidio / autolesión y alertas de bienestar', () => {
  const safe = detectCrisisRisk('Hoy he salido a caminar, he estudiado dos horas y he cenado tranquilo.');
  assert.equal(safe.triggered, false);
  assert.equal(safe.level, 'none');

  const highRisk1 = detectCrisisRisk('No quiero vivir más, pienso en quitarme la vida.');
  assert.equal(highRisk1.triggered, true);
  assert.equal(highRisk1.level, 'high');
  assert.ok(highRisk1.matchedTerms.length >= 1);

  const highRisk2 = detectCrisisRisk({generalDay: 'Hoy he tenido pensamientos de suicidio y hacerme daño.'});
  assert.equal(highRisk2.triggered, true);
  assert.equal(highRisk2.level, 'high');

  const normalBadDay = detectCrisisRisk({mood: 1, stress: 5, generalDay: 'Un día muy pesado y cansado.'});
  assert.equal(normalBadDay.triggered, false);
  assert.equal(normalBadDay.level, 'none');
});

test('palabras diarias, consejos diarios y progreso del registro', () => {
  const w1 = getDailyWord('2026-10-03', 0);
  const w2 = getDailyWord('2026-10-03', 1);
  assert.ok(w1.word && w1.meaning && w1.prompt);
  assert.notEqual(w1.word, w2.word);

  const t1 = getDailyTip('2026-10-03', 0);
  const t2 = getDailyTip('2026-10-03', 1);
  assert.ok(t1.title && t1.tip && t1.action);
  assert.notEqual(t1.title, t2.title);

  const advice = getContextualAdvice({sleepHours: 4.5, stress: 5, mood: 1}, {sleepGoal: 8});
  assert.ok(advice.length >= 2);

  const comp = calculateEntryCompletion(entry('2026-10-03', 4, 8, 2, {energy: 4, wordOfDay: 'Calma', gratitude: ['Sol', '', '']}), 0);
  assert.equal(comp.percent, 100);
  assert.match(getGreeting('Jaime', 9), /Buenos días, Jaime/);
});

test('adaptación por edad, grupo de edad y gustos', () => {
  const teenProfile = getAgeProfile({age: 15, interests: ['music', 'sport']});
  assert.equal(teenProfile.group.id, 'teen');
  assert.equal(teenProfile.isMinor, true);
  assert.equal(teenProfile.sleepRecommended, 8.5);
  assert.ok(teenProfile.tags.includes('Exámenes'));
  assert.ok(teenProfile.tags.includes('Deporte'));
  assert.ok(teenProfile.suggestedHabits.some(h => /álbum|Entrenar|deporte|caminar/i.test(h)));

  const adultProfile = getAgeProfile({age: 35, interests: ['projects', 'reading']});
  assert.equal(adultProfile.group.id, 'adult');
  assert.equal(adultProfile.isMinor, false);
  assert.match(adultProfile.focusLabel, /enfoque|proyectos/i);
  assert.ok(adultProfile.suggestedHabits.some(h => /proyecto|Leer/i.test(h)));
});

test('generación dinámica del favicon según el tema y monograma del usuario', () => {
  const paperSvg = generateThemeFaviconSvg('paper', {name: 'Jaime'});
  const nightSvg = generateThemeFaviconSvg('night', {name: 'Jaime'});
  const oceanUri = generateThemeFaviconDataUri('ocean', {name: ''});
  assert.ok(paperSvg.includes('#F3EFE6'));
  assert.ok(paperSvg.includes('>J<'));
  assert.ok(nightSvg.includes('#151412'));
  assert.notEqual(paperSvg, nightSvg);
  assert.ok(oceanUri.startsWith('data:image/svg+xml'));
});

test('frases personalizadas y metas personales en estadísticas', () => {
  const q1 = getPersonalQuote('2026-10-03', 0, {age: 19, interests: ['reading'], tone: 'literary'});
  const q2 = getPersonalQuote('2026-10-03', 1, {age: 19, interests: ['reading'], tone: 'literary'});
  assert.ok(q1.text && q1.author);
  assert.notEqual(q1.text, q2.text);

  const customQuote = getPersonalQuote('2026-10-03', 0, {name: 'Jaime', savedQuotes: ['Mi frase favorita de hoy']});
  assert.ok(customQuote.text.length > 0);

  const sampleEntries = [
    entry('2026-10-01', 5, 8, 3, {counters: {water: 8, exercise: 30, reading: 20, mindfulness: 10}}),
    entry('2026-10-02', 4, 8.5, 2.5, {counters: {water: 9, exercise: 20, reading: 15, mindfulness: 5}}),
    entry('2026-10-03', 2, 5.5, 1, {counters: {water: 4, exercise: 0, reading: 0, mindfulness: 0}})
  ];
  const goals = calculateGoalStats(sampleEntries, {sleepGoal: 7.5, studyGoal: 2, waterGoal: 8});
  assert.equal(goals.total, 3);
  assert.equal(goals.sleepMet, 2);
  assert.equal(goals.studyMet, 2);
  assert.equal(goals.waterMet, 2);
  assert.equal(goals.sleepPct, 67);
  assert.equal(goals.sleepTracked, 3);
  const untracked = calculateGoalStats([{date:'2026-10-04', mood:4}], {});
  assert.equal(untracked.sleepPct, null);
  assert.equal(untracked.studyPct, null);
  assert.ok(Number.isFinite(untracked.studyGoal), 'la meta de estudio usa un valor recomendado, no NaN');
});



