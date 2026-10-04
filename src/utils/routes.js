const ROUTE_TABLE = Object.freeze({
  '/': Object.freeze({view: 'diary'}),
  '/pensamientos': Object.freeze({view: 'thoughts', thoughtsTab: 'shore'}),
  '/pensamientos/pendientes': Object.freeze({view: 'thoughts', thoughtsTab: 'sea'}),
  '/pensamientos/guardados': Object.freeze({view: 'thoughts', thoughtsTab: 'kept'}),
  '/pensamientos/archivados': Object.freeze({view: 'thoughts', thoughtsTab: 'lost'}),
  '/rutina': Object.freeze({view: 'routine', routineTab: 'hoy'}),
  '/rutina/semana': Object.freeze({view: 'routine', routineTab: 'week'}),
  '/rutina/contadores': Object.freeze({view: 'routine', routineTab: 'counters'}),
  '/rutina/rachas': Object.freeze({view: 'routine', routineTab: 'streaks'}),
  '/archivo': Object.freeze({view: 'archive', archiveTab: 'list'}),
  '/archivo/calendario': Object.freeze({view: 'archive', archiveTab: 'calendar'}),
  '/progreso': Object.freeze({view: 'stats', statsTab: 'pulse'}),
  '/progreso/semana': Object.freeze({view: 'stats', statsTab: 'week'}),
  '/progreso/mes': Object.freeze({view: 'stats', statsTab: 'month'}),
  '/ajustes': Object.freeze({view: 'setup', profileTab: 'personal'}),
  '/ajustes/apariencia': Object.freeze({view: 'setup', profileTab: 'appearance'}),
  '/ajustes/contenido': Object.freeze({view: 'setup', profileTab: 'custom'}),
  '/ajustes/datos': Object.freeze({view: 'setup', profileTab: 'data'})
});

export const ROUTE_PATHS = Object.freeze(Object.keys(ROUTE_TABLE));

const normalizePath = value => {
  const path = `/${String(value || '').replace(/^\/+|\/+$/g, '')}`;
  return path === '/' ? '/' : path;
};

export function normalizeBasePath(value = '') {
  const base = String(value || '').trim();
  if (!base || base === '/') return '';
  return `/${base.replace(/^\/+|\/+$/g, '')}`;
}

export function appPathname(pathname = '/', basePath = '') {
  const path = normalizePath(pathname);
  const base = normalizeBasePath(basePath);
  if (!base) return path;
  if (path === base) return '/';
  return path.startsWith(`${base}/`) ? normalizePath(path.slice(base.length)) : path;
}

export function routeStateFromPath(pathname = '/', basePath = '') {
  const path = appPathname(pathname, basePath);
  return {...(ROUTE_TABLE[path] || ROUTE_TABLE['/']), path};
}

export function pathForState(state = {}) {
  switch (state.view) {
    case 'thoughts':
      return ({sea: '/pensamientos/pendientes', kept: '/pensamientos/guardados', lost: '/pensamientos/archivados'})[state.thoughtsTab] || '/pensamientos';
    case 'routine':
      return ({week: '/rutina/semana', counters: '/rutina/contadores', streaks: '/rutina/rachas'})[state.routineTab] || '/rutina';
    case 'archive': return state.archiveTab === 'calendar' ? '/archivo/calendario' : '/archivo';
    case 'stats': return ({week: '/progreso/semana', month: '/progreso/mes'})[state.statsTab] || '/progreso';
    case 'setup':
      return ({appearance: '/ajustes/apariencia', custom: '/ajustes/contenido', data: '/ajustes/datos'})[state.profileTab] || '/ajustes';
    case 'diary':
    default: return '/';
  }
}

export function urlForState(state = {}, basePath = '') {
  const base = normalizeBasePath(basePath);
  const path = pathForState(state);
  return `${base}${path === '/' ? '/' : `${path}/`}`;
}

/** Infer the app mount point from Vite's source module in dev and the built asset in production. */
export function inferBasePath(scriptUrls = [], origin = 'http://localhost') {
  for (const source of scriptUrls) {
    let pathname;
    try {
      pathname = new URL(source, origin).pathname;
    } catch {
      continue;
    }
    for (const marker of ['/assets/', '/src/']) {
      const index = pathname.lastIndexOf(marker);
      if (index >= 0) return normalizeBasePath(pathname.slice(0, index));
    }
  }
  return '';
}
