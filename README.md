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

También puedes servir la carpeta `dist/` con cualquier servidor estático.

## Qué incluye

- **Mi diario** — entrada diaria con estado de ánimo (1–5), horas de sueño e estudio con
  interpretación automática por reglas, «Lo mejor del día», «¿Qué ha sido distinto?»,
  «¿Cómo ha ido en general?», *Agradecimiento nocturno* (tres cosas buenas que has hecho) y
  «Mañana quiero...» con objetivos opcionales.
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
├── components/ui.js      # piezas de interfaz (calendario, gráfico SVG, iconos…)
├── data/constants.js     # estados de ánimo y etiquetas
├── styles/main.css       # diseño mobile-first, animaciones suaves
├── utils/
│   ├── dates.js          # fechas, número de día, semanas, meses, calendario
│   ├── stats.js          # medias, rachas, resúmenes, tendencias
│   └── storage.js        # validar, guardar, cargar, borrar, exportar, importar
└── main.js               # vistas e interacción
public/                   # icono, manifest y service worker offline
tests/                    # pruebas de las funciones puras (npm test)
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

## Privacidad

Todo ocurre en tu dispositivo: no hay servidores, seguimiento, anuncios, fuentes remotas ni
inteligencia artificial de ningún tipo. Los textos nunca se analizan con modelos; solo se muestran
tal cual los escribiste.
