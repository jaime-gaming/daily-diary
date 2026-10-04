import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ROUTE_PATHS, appPathname, inferBasePath, normalizeBasePath,
  pathForState, routeStateFromPath, urlForState
} from '../src/utils/routes.js';

test('cada sección y subsección tiene una ruta limpia y una página de estado', () => {
  const cases = [
    [{view: 'diary'}, '/'],
    [{view: 'thoughts', thoughtsTab: 'shore'}, '/pensamientos'],
    [{view: 'thoughts', thoughtsTab: 'sea'}, '/pensamientos/pendientes'],
    [{view: 'thoughts', thoughtsTab: 'kept'}, '/pensamientos/guardados'],
    [{view: 'thoughts', thoughtsTab: 'lost'}, '/pensamientos/archivados'],
    [{view: 'routine', routineTab: 'week'}, '/rutina/semana'],
    [{view: 'routine', routineTab: 'counters'}, '/rutina/contadores'],
    [{view: 'routine', routineTab: 'streaks'}, '/rutina/rachas'],
    [{view: 'archive', archiveTab: 'calendar'}, '/archivo/calendario'],
    [{view: 'stats', statsTab: 'week'}, '/progreso/semana'],
    [{view: 'stats', statsTab: 'month'}, '/progreso/mes'],
    [{view: 'setup', profileTab: 'appearance'}, '/ajustes/apariencia'],
    [{view: 'setup', profileTab: 'custom'}, '/ajustes/contenido'],
    [{view: 'setup', profileTab: 'data'}, '/ajustes/datos']
  ];

  for (const [state, path] of cases) {
    assert.equal(pathForState(state), path);
    assert.deepEqual(routeStateFromPath(path), {...state, path});
    assert.equal(urlForState(state), path === '/' ? '/' : `${path}/`);
  }
  assert.ok(ROUTE_PATHS.includes('/pensamientos'));
  assert.ok(ROUTE_PATHS.includes('/progreso/semana'));
});

test('las rutas se resuelven debajo de la base del sitio y con o sin barra final', () => {
  assert.equal(normalizeBasePath('/diario/'), '/diario');
  assert.equal(appPathname('/diario/pensamientos/', '/diario'), '/pensamientos');
  assert.deepEqual(routeStateFromPath('/diario/ajustes/datos/', '/diario'), {
    view: 'setup', profileTab: 'data', path: '/ajustes/datos'
  });
  assert.equal(urlForState({view: 'thoughts'}, '/diario'), '/diario/pensamientos/');
  assert.deepEqual(routeStateFromPath('/diario/una-ruta-inexistente', '/diario'), {
    view: 'diary', path: '/una-ruta-inexistente'
  });
});

test('la base se infiere desde el módulo en desarrollo o el bundle de producción', () => {
  assert.equal(inferBasePath(['http://localhost:5173/src/main.js']), '');
  assert.equal(inferBasePath(['https://ejemplo.test/cuaderno/assets/index.js']), '/cuaderno');
  assert.equal(inferBasePath(['../assets/index.js'], 'https://ejemplo.test/cuaderno/pensamientos/'), '/cuaderno');
  assert.equal(inferBasePath([], 'https://ejemplo.test/'), '');
});
