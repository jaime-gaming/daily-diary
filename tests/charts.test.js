import test from 'node:test';
import assert from 'node:assert/strict';
import {moodChart, moodHeatmap} from '../src/components/ui.js';

const entry=(date,mood,sleepHours)=>({date,mood,sleepHours,studyHours:1});

test('la gráfica distingue escalas, respeta los huecos y etiqueta las fechas',()=>{
  const html=moodChart([
    entry('2026-10-01',4,8),
    entry('2026-10-02',4,7),
    entry('2026-10-04',2,5),
    entry('2026-10-05',3,6)
  ],'2026-10-01',5,{sleepGoal:7.5});

  assert.match(html,/Ánimo · escala 1–5/);
  assert.match(html,/Sueño · escala 0–12 h/);
  assert.match(html,/12h/);
  assert.match(html,/0h/);
  assert.match(html,/Meta de sueño/);
  assert.match(html,/1 oct/);
  assert.match(html,/2/);
  assert.match(html,/3/);
  assert.equal((html.match(/class="chart-line-path"/g)||[]).length,2,'no une días con huecos');
  assert.equal((html.match(/class="chart-dot"/g)||[]).length,4);
  assert.doesNotMatch(html,/min-width:\s*520px/);
});

test('la gráfica vacía explica que no hay datos y el mapa permite identificar cada día',()=>{
  const chart=moodChart([], '2026-10-01', 7, {});
  assert.match(chart,/Sin registros en este período/);
  const heatmap=moodHeatmap([entry('2026-10-04',5,8)],'2026-10-04',7);
  assert.match(heatmap,/aria-label="domingo, 4 de octubre de 2026: Genial · 5\/5 · 8 h de sueño/i);
  assert.equal((heatmap.match(/class="heatmap-cell/g)||[]).length,7);
});
