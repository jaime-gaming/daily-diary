# Diario · Tu espacio personal

Diario personal, minimalista y **100 % local**. La navegación se organiza alrededor de Hoy, Rutina,
Archivo y Progreso; Pensamientos es un espacio opcional, no el tema de todo el cuaderno. Sin
backend, sin cuentas, sin IA y sin APIs externas: los resúmenes, estadísticas y tendencias se
calculan en tu navegador con JavaScript, reglas y plantillas de texto. Las entradas se guardan en
`localStorage` y la aplicación funciona sin conexión después de la primera carga.

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

- **Rutas reales** — `/pensamientos` y sus vistas `/pensamientos/pendientes`, `/pensamientos/guardados`
  y `/pensamientos/archivados`; `/rutina` con `/rutina/semana`, `/rutina/contadores` y `/rutina/rachas`;
  `/archivo` y `/archivo/calendario`; `/progreso`, `/progreso/semana` y `/progreso/mes`; `/ajustes`,
  `/ajustes/apariencia`, `/ajustes/contenido` y `/ajustes/datos`. Atrás y Adelante funcionan; el build crea páginas estáticas.
- **Hoy** — ánimo, sueño, dedicación, notas, etiquetas, energía, estrés y gratitud. Las tendencias
  y los resúmenes usan reglas locales.
- **Pensamientos** — un espacio independiente. Las botellas no muestran ni permiten abrir el texto
  mientras están a la deriva; solo se leen al volver. La fecha de regreso no aparece en pantalla.
- **Rutina** — hábitos, rachas, constancia de 35 días, contadores y tareas para mañana.
- **Ajustes** — perfil, apariencia, contenido y datos. Permite elegir temas, añadir campos y crear
  contadores con unidad, meta e icono.
- **Guardado local** — conserva cambios y borradores internos, recupera la escritura y sincroniza
  al cerrar o cambiar de día. La interfaz no muestra avisos de borradores ni de autoguardado.
- **Móvil** — cabecera compacta, acceso a Ajustes y navegación inferior con espacio para las áreas
  seguras del dispositivo.
- **Movimiento** — transiciones entre páginas y animaciones de tarjetas. Respeta
  `prefers-reduced-motion` y la opción de reducir animaciones en Ajustes.
- **Resumen del día** generado con plantillas `if/else` y frases fijas (sin ningún modelo).
- **Historial** — tarjetas con búsqueda y filtro por estado; ver, editar y eliminar con confirmación.
- **Calendario** — los días registrados se marcan con el color de su estado de ánimo.
- **Estadísticas** — gráfico SVG adaptable con escalas explícitas para ánimo y sueño, huecos cuando
  faltan días y meta de sueño. Incluye cobertura real (sin contar días futuros), media y mediana,
  ignora métricas opcionales no registradas y evita duplicar días; las tendencias comparan medianas
  y exigen más datos antes de sugerir asociaciones (nunca causalidad).
- **Tu semana / Resumen del mes** — promedios, totales, mejores y peores días, rachas y un texto
  automático por plantillas.
- **Privacidad y datos** — exportar/importar JSON, descargar copia y borrar todo, con confirmación.

## Estructura

```
src/
├── components/
│   ├── ui.js             # piezas de interfaz (calendario, gráfico SVG, iconos…)
│   ├── ocean.js          # el mar: agua, botellas que flotan, ficha y modal
│   └── habits.js         # rutina: tablero de hábitos, rejilla de constancia, contadores
├── data/constants.js     # estados de ánimo, etiquetas y las piezas que se pueden personalizar
├── utils/
│   ├── dates.js          # fechas, número de día, semanas, meses, calendario
│   ├── routes.js         # rutas, subpáginas, URL y base del sitio
│   ├── stats.js          # métricas, mediana, cobertura, rachas y tendencias
│   ├── ocean.js          # mareas, clima, sorteo del viaje y estado de cada botella
│   ├── drafts.js         # los borradores: que nada se quede a medias
│   └── storage.js        # validar, guardar, cargar, borrar, exportar, importar
├── styles/
│   ├── main.css          # identidad de papel, portada, diario, rutina, archivo, progreso
│   ├── sea.css           # el mar y sus animaciones (agua, orilla, botellas, chapuzón)
│   └── motion.css        # sistema de movimiento, barra lateral y transiciones de vista
└── main.js               # navegación (Hoy · Archivo · Rutina · Progreso · Pensamientos · Ajustes) y las vistas
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
  "energy": 3,
  "stress": 2,
  "bestOfDay": "…",
  "differentToday": "…",
  "generalDay": "…",
  "tomorrow": "…",
  "wordOfDay": "…",
  "capsule": "…",
  "gratitude": ["…", "…", "…"],
  "goals": ["…"],
  "tags": ["…"],
  "counters": { "water": 6, "ejercicio": 30, "p-31": 2 },
  "parts": { "p-12": "lo que escribiste en tu propia parte del día" },
  "habits": { "h-3": true, "h-7": false },
  "createdAt": "…",
  "updatedAt": "…"
}
```

El número de día se calcula automáticamente desde la fecha de la primera entrada. Lo que no está en
esa lista no se guarda: `validateEntry` limpia y rechaza lo que no conoce.

### Las listas que puedes cambiar tú

En `diario.setup.v1` viven dos arrays que definen qué se pinta cada día. `counters` son las cifras
de la Rutina y `parts`, las partes de la entrada:

```json
{
  "counters": [
    { "key": "p-31", "label": "Flexiones", "unit": "repeticiones", "min": 0, "max": 200, "step": 10, "goal": 50, "icon": "flame" }
  ],
  "parts": [
    { "key": "p-12", "label": "Cabeza", "hint": "lo que no te deja pensar en otra cosa", "type": "text" },
    { "key": "p-8",  "label": "Mañana", "hint": "", "type": "line" }
  ]
}
```

- `type` es `text` (párrafo en la página de hoy) o `line` (una línea, como la palabra del día).
- `key` la genera el propio cuaderno (`p-<n>`), y es la misma que verás en `entry.parts` y
  `entry.counters`. Por eso **quitar una parte o un contador no borra nada**: sólo deja de pintarse,
  y lo ya escrito y las cifras apuntadas siguen en cada día por si vuelves a ponerla.
- Máximos: 8 partes y 12 contadores. Un contador se queda sin definir si le quitas el título, y
  las entradas nunca se rompen por un número raro en un contador propio: se ignora la cifra.
- El contador del agua usa como meta tu `waterGoal` del perfil; los demás llevan su meta propia.
- Hay ocho rótulos de partida (`COUNTERS` en `src/data/constants.js`) y ocho presets de escritura
  (`PART_PRESETS`). Añadir uno nuevo es, literalmente, un botón en *Ajustes → Contenido*.

Los pensamientos viajan en `diario.thoughts.v1`. El parte del día en que la tiraste es una función
determinista de la fecha, así que viaja dentro de la botella y no necesita red:

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
  "weather": "wind",
  "wind": "poniente",
  "windSpeed": 19,
  "push": 0,
  "kept": false,
  "seen": false
}
```

`status` pasa de `drifting` a `returned` (la marea viva la devolvió) o `lost` (se hundió) al abrir
el cuaderno; `reply`/`kept` son tu respuesta y si la anclaste; `weather`, `wind`, `windSpeed` y
`push` son la firma del día en que la soltaste — explican por qué tardó lo que tardó, y nada más.
Nunca sale del dispositivo.

Los textos a medias viven aparte, en `diario.drafts.v1`, con esta pinta:

```json
{ "entrada:2026-10-04": { "data": { "generalDay": "lo que estaba escribiendo…" }, "savedAt": "…" } }
```

Un borrador solo se recupera si es **más reciente** que lo ya guardado, así que nunca te devuelve
texto viejo ni duplica nada.

## Desplegar en GitHub Pages (por branch, sin Actions)

Este repositorio está configurado para **GitHub Pages por branch**, sin usar GitHub Actions.

- El build de producción se genera en `docs/` (`vite.config.js` → `outDir: 'docs'`).
- `docs/` incluye `.nojekyll` para que GitHub Pages sirva los assets tal cual y publica un `index.html`
  por cada ruta para admitir enlaces directos en hosting estático.
- `base: './'` en Vite y los enlaces relativos permiten que funcione tanto en
  `usuario.github.io/daily-diary/` como en dominio propio.

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

El mar tampoco es magia: las botellas no viajan a ningún sitio. Si vuelven o no se decide con una
función determinista (`src/utils/ocean.js`) a partir del texto, la fecha y el mar elegido, y el
resultado se guarda en tu `localStorage`. Nadie más puede leerlas, y tus pensamientos no se pierden
si cambias de dispositivo: viajan dentro de tu copia de seguridad.
