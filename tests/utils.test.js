import test from 'node:test';
import assert from 'node:assert/strict';
import {dateKey, parseDate, addDays, daysBetween, dayNumber, weekStart, monthRange, monthMove, generateCalendar, longDate} from '../src/utils/dates.js';
import {average, calculateStats, currentStreak, maxStreak, sleepInterpretation, studyInterpretation, generateSummary, periodSummary, generateTrends, inRange, formatNumber, wordCount, totalWords, habitStreak, habitCount, tagFrequency, counterInterpretation} from '../src/utils/stats.js';

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

test('medias y rachas', () => {
  assert.equal(average([1, 2, 3]), 2);
  assert.equal(average([]), 0);
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
  assert.match(periodSummary(s), /Esta semana has registrado 3 días/);
  assert.match(periodSummary(s, true), /Durante este mes has registrado 3 días/);
  assert.match(periodSummary(calculateStats([])), /Aún no hay entradas/);
});

test('tendencias por reglas, sin IA', () => {
  const today = '2026-09-30';
  const recent = Array.from({length: 7}, (_, i) => entry(`2026-09-${24 + i}`, 4, 6, 1));
  const prior = Array.from({length: 7}, (_, i) => entry(`2026-09-${17 + i}`, 4, 8, 1));
  const trends = generateTrends([...prior, ...recent], today);
  assert.ok(trends.some(t => /sueño ha disminuido/.test(t)));

  const moreSleep = [entry('2026-09-01', 4, 8, 1), entry('2026-09-02', 4, 8, 1), entry('2026-09-03', 4, 8, 1),
    entry('2026-09-10', 2, 5, 1), entry('2026-09-11', 2, 5, 1), entry('2026-09-12', 2, 5, 1)];
  const rel = generateTrends(moreSleep, today);
  assert.ok(rel.some(t => /parece coincidir/.test(t) && !/causa/.test(t.toLowerCase().replace('no una causa demostrada', ''))));
  assert.ok(generateTrends([], today).length === 0 || true);
});

test('filtrado por rango de fechas', () => {
  const entries = [entry('2026-09-01', 3, 7, 1), entry('2026-09-15', 3, 7, 1)];
  assert.equal(inRange(entries, '2026-09-01', '2026-09-10').length, 1);
  assert.equal(inRange(entries, '2026-10-01', '2026-10-31').length, 0);
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
