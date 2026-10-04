# Diario · Un momento para ti

Diario personal, minimalista y **100 % local**. Sin backend, sin cuentas, sin IA y sin APIs externas:
todos los resúmenes, estadísticas y tendencias se calculan en tu navegador con JavaScript, reglas y
plantillas de texto. Las entradas se guardan en el `localStorage` de tu dispositivo y la aplicación
funciona sin conexión después de la primera carga.

## Cómo usarlo

```bash
npm install
npm run dev      # http://localhost:5173
```

Para la versión definitiva (con soporte offline mediante service worker):

```bash
npm run build
npm run preview
```

También puedes servir la carpeta `docs/` (build de producción) con cualquier servidor estático.

## Qué incluye

- **Hoy** — portada con captura rápida: estado de ánimo (1–5) en un clic, horas de sueño y
  dedicación con atajos, «Tu página de hoy» (nota libre + palabra del día), etiquetas, energía,
  estrés y tres cosas buenas. Los resúmenes se generan con reglas, nunca con IA.
- **Pensamientos (el mar)** — notas rápidas que se escriben, se sellan en una botella y se echan
  al mar. Cada botella sortea su travesía (cuatro mares posibles, de «a la orilla» a «alta mar»):
  puede volver a ti en un día de marea viva o perderse para siempre. Al volver puedes leerla,
  responder a tu yo de entonces, anclarla al cuaderno o volver a lanzarla. Todo el azar se
  calcula en tu navegador con una semilla derivada de tus palabras y de la fecha.
- **Rutina** — pestaña propia para la tasklist: hábitos del día con rachas, rejilla de constancia
  (35 días, se puede pintar cualquier día pasado), contadores (agua, ejercicio, lectura, pausa)
  y la lista de «para mañana». Todo se guarda al instante, sin botón de guardar.
- **Resumen del día** generado con plantillas `if/else` y frases fijas (sin ningún modelo).
- **Historial** — tarjetas con búsqueda y filtro por estado; ver, editar y eliminar con confirmación.
- **Calendario** — los días registrados se marcan con el color de su estado de ánimo.
- **Estadísticas** — gráfico SVG de ánimo de 7/30 días, medias de sueño y estudio, racha actual,
  evolución frente al período anterior y tendencias por reglas («parece coincidir», nunca causalidad).
- **Tu semana / Resumen del mes** — promedios, totales, mejores y peores días, rachas y un texto
  automático por plantillas.
- **Privacidad y datos** — exportar/importar JSON, descargar copia y borrar todo, con confirmación.

## Estructura

```
src/
├── components/
│   ├── ui.js             # piezas de interfaz (calendario, gráfico SVG, iconos…)
│   ├── ocean.js          # el mar: olas SVG, botellas, orilla, ficha y modal de la botella
│   └── habits.js         # rutina: tablero de hábitos, rejilla de constancia, contadores
├── data/constants.js     # estados de ánimo, mareas visuales, etiquetas
├── styles/main.css       # diseño mobile-first, temas de papel, animaciones suaves
├── utils/
│   ├── dates.js          # fechas, número de día, semanas, meses, calendario
│   ├── stats.js          # medias, rachas (diario y por hábito), resúmenes, tendencias
│   ├── ocean.js          # mareas, sorteo determinista del viaje y estado de cada botella
│   └── storage.js        # validar, guardar, cargar, borrar, exportar, importar
└── main.js               # navegación (Hoy · Pensamientos · Archivo · Rutina · Progreso · Perfil)
public/                   # icono, manifest y service worker offline
tests/                    # pruebas de las funciones puras y de pintado (npm test)
```

## Datos

Cada entrada se guarda como JSON en `localStorage` (`diario.entries.v1`):

```json
{
  "id": "…",
  "date": "2026-09-30",
  "dayNumber": 27,
  "mood": 4,
  "sleepHours": 7.5,
  "studyHours": 2,
  "bestOfDay": "…",
  "differentToday": "…",
  "generalDay": "…",
  "gratitude": ["…", "…", "…"],
  "tomorrow": "…",
  "goals": ["…"],
  "createdAt": "…",
  "updatedAt": "…"
}
```

El número de día se calcula automáticamente desde la fecha de la primera entrada.

Los pensamientos viajan en `diario.thoughts.v1`; cada botella guárdala así:

```json
{
  "id": "…",
  "text": "Un pensamiento suelto",
  "castAt": "2026-10-04",
  "mood": 3,
  "sea": "breeze",
  "returns": true,
  "driftDays": 18,
  "arriveOn": "2026-10-22",
  "lostOn": null,
  "speed": 21,
  "current": "la corriente fría",
  "glass": "amber",
  "status": "drifting",
  "returnedAt": null,
  "reply": "",
  "kept": false,
  "seen": false
}
```

`status` pasa de `drifting` a `returned` (la marea viva la devolvió) o `lost` (se hundió) al abrir
el cuaderno, y `reply`/`kept` son tu respuesta y si la anclaste. Nunca sale del dispositivo.

## Desplegar en GitHub Pages (por branch, sin Actions)

Este repositorio está configurado para **GitHub Pages por branch**, sin usar GitHub Actions.

- El build de producción se genera en `docs/` (`vite.config.js` → `outDir: 'docs'`).
- `docs/` incluye `.nojekyll` para que GitHub Pages sirva los assets tal cual.
- `base: './'` en Vite permite que funcione tanto en `usuario.github.io/daily-diary/` como en dominio propio.

**Pasos para activar Pages:**

1. Genera el build:
   ```bash
   npm run build   # crea/actualiza docs/
   ```
2. Haz commit de `docs/` y push a `main`:
   ```bash
   git add docs
   git commit -m "build: actualizar docs para Pages"
   git push origin main
   ```
3. En GitHub → **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / Folder: `/docs`
   - Guarda.

Cada `git push` a `main` con `docs/` actualizado publica automáticamente. No hay workflow de Actions.

URL resultante: `https://<usuario>.github.io/daily-diary/`

## Desplegar en Render

El repositorio incluye un `render.yaml` listo para usar. Dos formas de desplegar:

**Opción A — Blueprint (recomendada, un clic)**

1. Sube este repositorio a GitHub.
2. En [render.com](https://render.com) → **New** → **Blueprint** y selecciona el repositorio.
3. Render lee `render.yaml`, crea el *Static Site* y despliega solo. Cada `git push` a `main` redespliega automáticamente.

**Opción B — Manual**

1. En Render → **New** → **Static Site**.
2. Conecta el repositorio.
3. *Build Command*: `npm ci && npm run build`
4. *Publish Directory*: `docs`
5. En **Redirects/Rewrites** añade: `/* → /index.html` (rewrite). El `render.yaml` ya lo incluye si usas Blueprint.

Notas del despliegue:

- Es un sitio 100 % estático: no hay servidor que mantener ni variables de secreto.
- La app funciona sin conexión tras la primera carga (service worker). El HTML se
  actualiza en cada recarga y los assets llevan hash, así que cada deploy se ve al instante.
- El diario sigue estando **solo en el navegador de cada visitante**: hosting en Render
  no implica que tus entradas se envíen a ningún servidor; nunca salen del dispositivo.
- Dominio por defecto: `https://<nombre>.onrender.com`. Puedes añadir un dominio propio
  desde el panel de Render (el plan gratuito incluye HTTPS).

## Privacidad

Todo ocurre en tu dispositivo: no hay servidores, seguimiento, anuncios, fuentes remotas ni
inteligencia artificial de ningún tipo. Los textos nunca se analizan con modelos; solo se muestran
tal cual los escribiste.

El mar tampoco es magia: las botellas no viajan a ningún sitio. El «a ver si vuelve» se decide con
una función determinista (`src/utils/ocean.js`) a partir del texto, la fecha y el mar elegido, y el
resultado se guarda en tu `localStorage`. Por eso ninguna botella puede la leer otra persona, y por
eso tus pensamientos no se pierden si cambias de dispositivo: viajan dentro de tu copia de seguridad.
