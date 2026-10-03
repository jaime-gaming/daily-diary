import test from 'node:test';
import assert from 'node:assert/strict';
const store = new Map();
globalThis.localStorage = {
  getItem: k => store.has(k) ? store.get(k) : null,
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: k => store.delete(k)
};
const {loadEntries, saveEntry, loadEntry, deleteEntry, clearEntries, exportData, parseImport, importData, validateEntry, loadHabits, saveHabit, deleteHabit} = await import('../src/utils/storage.js');

const valid = (date, extra = {}) => ({
  date, mood: 4, sleepHours: 7.5, studyHours: 2,
  bestOfDay: 'Pasear', differentToday: 'Nada', generalDay: 'Bien.',
  gratitude: ['a', 'b', 'c'], tomorrow: 'Estudiar', goals: ['Leer'], ...extra
});

test('validación de entradas', () => {
  assert.equal(validateEntry(valid('2026-09-30')).mood, 4);
  assert.throws(() => validateEntry(valid('30-09-2026')), /fecha no válida/);
  assert.throws(() => validateEntry(valid('2026-02-30')), /fecha no válida/);
  assert.throws(() => validateEntry(valid('2099-01-01')), /futuros/);
  assert.throws(() => validateEntry(valid('2026-09-30', {mood: 9})), /cómo te ha ido/);
  assert.throws(() => validateEntry(valid('2026-09-30', {sleepHours: 30})), /entre 0 y 24/);
  assert.throws(() => validateEntry(valid('2026-09-30', {generalDay: '  '})), /en general/);
  assert.throws(() => validateEntry(valid('2026-09-30', {gratitude: ['a', 'b']})), /tres campos/);
  assert.throws(() => validateEntry(valid('2026-09-30', {energy: 9})), /escalas/);
  assert.throws(() => validateEntry(valid('2026-09-30', {tags: ['x'.repeat(50)]})), /etiqueta/);
  assert.throws(() => validateEntry(valid('2026-09-30', {counters: {water: 200}})), /Agua/);
});

test('campos nuevos con valores por defecto (compatibilidad)', () => {
  const e = validateEntry(valid('2026-09-30'));
  assert.equal(e.energy, null);
  assert.equal(e.stress, null);
  assert.equal(e.wordOfDay, '');
  assert.deepEqual(e.counters, {water: 0, exercise: 0, reading: 0, mindfulness: 0});
  assert.deepEqual(e.habits, {});
  assert.deepEqual(e.tags, []);
  const full = validateEntry(valid('2026-09-30', {
    energy: 5, stress: 2, wordOfDay: 'Calma', tags: ['Tranquilo', 'Tranquilo'],
    counters: {water: 6, exercise: 30}, habits: {h1: true, h2: false}
  }));
  assert.equal(full.energy, 5);
  assert.equal(full.stress, 2);
  assert.equal(full.counters.water, 6);
  assert.equal(full.counters.reading, 0);
  assert.deepEqual(full.tags, ['Tranquilo']);
  assert.deepEqual(full.habits, {h1: true, h2: false});
});

test('guardar, cargar y eliminar', () => {
  clearEntries();
  saveEntry(valid('2026-09-30'));
  saveEntry(valid('2026-09-28'));
  let entries = loadEntries();
  assert.equal(entries.length, 2);
  assert.equal(entries[0].date, '2026-09-28');
  assert.equal(entries[0].dayNumber, 1);
  assert.equal(entries[1].dayNumber, 3);
  assert.equal(loadEntry('2026-09-30').sleepHours, 7.5);
  saveEntry(valid('2026-09-30', {studyHours: 5}));
  assert.equal(loadEntries().length, 2);
  assert.equal(loadEntry('2026-09-30').studyHours, 5);
  deleteEntry('2026-09-28');
  assert.equal(loadEntries().length, 1);
  clearEntries();
  assert.equal(loadEntries().length, 0);
});

test('hábitos: crear, renombrar por id y eliminar', () => {
  clearEntries();
  const saved = saveHabit({name: 'Leer'});
  assert.equal(saved.length, 1);
  assert.equal(saved[0].name, 'Leer');
  saveHabit({id: saved[0].id, name: 'Leer 20 páginas'});
  assert.equal(loadHabits()[0].name, 'Leer 20 páginas');
  saveHabit({name: 'Caminar'});
  assert.equal(loadHabits().length, 2);
  assert.throws(() => saveHabit({name: '   '}), /nombre/);
  deleteHabit(saved[0].id);
  assert.deepEqual(loadHabits().map(h => h.name), ['Caminar']);
  clearEntries();
});

test('exportar e importar (entradas y hábitos)', () => {
  clearEntries();
  saveEntry(valid('2026-09-30', {counters: {water: 8}, tags: ['Productivo']}));
  const habit = saveHabit({name: 'Meditar'})[0];
  const json = exportData(loadEntries());
  const parsed = parseImport(json);
  assert.equal(parsed.entries.length, 1);
  assert.equal(parsed.entries[0].counters.water, 8);
  assert.equal(parsed.habits.length, 1);
  clearEntries();
  importData(parsed);
  assert.equal(loadEntries()[0].date, '2026-09-30');
  assert.equal(loadHabits()[0].id, habit.id);
  importData({entries: [valid('2026-09-30', {mood: 5}), valid('2026-09-29', {mood: 2})], habits: []});
  const merged = loadEntries();
  assert.equal(merged.length, 2);
  assert.equal(merged.find(e => e.date === '2026-09-30').mood, 5);
  assert.throws(() => parseImport('not json'), /JSON válida/);
  assert.throws(() => parseImport('{"version":2,"entries":[]}'), /versión 1/);
  assert.throws(() => parseImport(JSON.stringify({version: 1, entries: [valid('2026-09-01'), valid('2026-09-01')]})), /duplicadas/);
  clearEntries();
});
