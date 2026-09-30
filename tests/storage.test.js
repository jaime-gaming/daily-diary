import test from 'node:test';
import assert from 'node:assert/strict';
const store = new Map();
globalThis.localStorage = {
  getItem: k => store.has(k) ? store.get(k) : null,
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: k => store.delete(k)
};
const {loadEntries, saveEntry, loadEntry, deleteEntry, clearEntries, exportData, parseImport, importData, validateEntry} = await import('../src/utils/storage.js');

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
  assert.throws(() => parseImport('{"version":2,"entries":[]}'), /versión 1/);
  assert.throws(() => parseImport(JSON.stringify({version: 1, entries: [valid('2026-09-01'), valid('2026-09-01')]})), /duplicadas/);
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

test('exportar e importar', () => {
  clearEntries();
  saveEntry(valid('2026-09-30'));
  const json = exportData(loadEntries());
  const parsed = parseImport(json);
  assert.equal(parsed.length, 1);
  clearEntries();
  importData(parsed);
  assert.equal(loadEntries()[0].date, '2026-09-30');
  importData([valid('2026-09-30', {mood: 5}), valid('2026-09-29', {mood: 2})]);
  const merged = loadEntries();
  assert.equal(merged.length, 2);
  assert.equal(merged.find(e => e.date === '2026-09-30').mood, 5);
  clearEntries();
});
