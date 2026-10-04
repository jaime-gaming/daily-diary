import {defineConfig} from 'vite';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {ROUTE_PATHS} from './src/utils/routes.js';

/* GitHub Pages pasa el build por Jekyll; este marker vacío desactiva el procesado
   y sobrevive a `emptyOutDir` gracias al plugin de abajo. */
const nojekyll = {
  name: 'pages-nojekyll',
  apply: 'build',
  closeBundle() {
    writeFileSync(new URL('./docs/.nojekyll', import.meta.url), '');
  },
};

/* GitHub Pages no reescribe las rutas SPA: publica un index de apoyo en cada ruta. */
const staticRoutePages = {
  name: 'static-route-pages',
  apply: 'build',
  closeBundle() {
    const output = new URL('./docs', import.meta.url);
    const rootHtml = readFileSync(new URL('./docs/index.html', import.meta.url), 'utf8');
    for (const route of ROUTE_PATHS.filter(path => path !== '/')) {
      const depth = route.split('/').filter(Boolean).length;
      const relative = '../'.repeat(depth);
      const html = rootHtml
        .replaceAll('href="./assets/', `href="${relative}assets/`)
        .replaceAll('src="./assets/', `src="${relative}assets/`)
        .replaceAll('href="./favicon.svg"', `href="${relative}favicon.svg"`)
        .replaceAll('href="./manifest.webmanifest"', `href="${relative}manifest.webmanifest"`);
      const target = join(output.pathname, route.slice(1), 'index.html');
      mkdirSync(dirname(target), {recursive: true});
      writeFileSync(target, html);
    }
    const routePages=ROUTE_PATHS.filter(path=>path!=='/')
      .map(path=>`./${path.slice(1)}/index.html`);
    const serviceWorkerPath=join(output.pathname,'sw.js');
    const serviceWorker=readFileSync(serviceWorkerPath,'utf8');
    writeFileSync(serviceWorkerPath,serviceWorker.replace(
      'const ROUTE_PAGES = [];',
      `const ROUTE_PAGES = ${JSON.stringify(routePages)};`
    ));
  },
};

export default defineConfig({
  base: './',
  plugins: [nojekyll, staticRoutePages],
  server: {host: '0.0.0.0', allowedHosts: true},
  preview: {host: '0.0.0.0', allowedHosts: true},
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
