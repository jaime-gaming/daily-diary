import {defineConfig} from 'vite';
import {writeFileSync} from 'node:fs';

/* GitHub Pages pasa el build por Jekyll; este marker vacío desactiva el procesado
   y sobrevive a `emptyOutDir` gracias al plugin de abajo. */
const nojekyll = {
  name: 'pages-nojekyll',
  apply: 'build',
  closeBundle() {
    writeFileSync(new URL('./docs/.nojekyll', import.meta.url), '');
  },
};

export default defineConfig({
  base: './',
  plugins: [nojekyll],
  server: {host: '0.0.0.0', allowedHosts: true},
  preview: {host: '0.0.0.0', allowedHosts: true},
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
