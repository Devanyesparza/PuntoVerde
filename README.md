# Punto Verde — Aprendiendo a separar mis residuos

Sitio web educativo sobre concientización ambiental y clasificación de residuos para la
región centro de Coahuila (Monclova, Ciudad Frontera y Castaños). Construido con
**React 18 + Vite**.

## Contenido

| Pestaña | Ruta | Qué incluye |
| --- | --- | --- |
| Inicio / Concientización | `#inicio` | «Más allá del contenedor», el problema del ciclo lineal, tres razones para clasificar y comparación lineal vs. circular |
| Guía de clasificación | `#guia` | Los 5 contenedores del Punto Verde con qué se acepta, qué se rechaza, requisitos y datos clave; reglas de oro y tabla de errores comunes |
| Directorio de acopio | `#directorio` | Fichas de Intermetals, Recicladora de Metales Especiales y centros de acopio de Monclova, con materiales, filtro por municipio, enlace a mapas y consejos antes de vender |
| EcoReto | `#juego` | Juego de arrastrar y soltar: 19 residuos, 5 contenedores, 90 segundos, puntuación (+10 / +20 / −5), retroalimentación educativa y rango final |

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # genera dist/
npm run preview  # sirve la versión compilada
```

## Estructura

```
src/
├── App.jsx                  # navegación por hash entre las 4 pestañas
├── components/
│   ├── Header.jsx           # barra superior sticky con nav responsive
│   └── Footer.jsx
├── data/
│   ├── contenedores.js      # los 5 contenedores (contenido de la guía)
│   ├── residuos.js          # banco de 20 residuos del juego (19 en juego)
│   └── centros.js           # directorio y consejos
├── pages/
│   ├── Inicio.jsx
│   ├── Guia.jsx
│   ├── Directorio.jsx
│   └── Juego.jsx            # lógica del EcoReto
└── styles.css               # sistema de diseño completo (tokens, layout, responsive)
```

## Reglas del EcoReto

- **+10** acierto en el contenedor correcto.
- **+20** acierto en un residuo con restricción especial (Tetra Pak, yogur, bolsa de papel…).
- **−5** error, con mensaje que explica el criterio correcto (el puntaje nunca baja de 0).
- **90 segundos** para clasificar los 19 residuos. El reloj se detiene mientras se lee la
  explicación de un error.
- El mazo se baraja en cada partida y el récord personal se guarda en `localStorage`.
- Se juega arrastrando, tocando el residuo y luego el contenedor, o con las teclas `1`–`5`.

Rangos: Aprendiz del Reciclaje → Separador en Formación → Guardián del Punto Verde →
Experto en Economía Circular → Maestro de la Sostenibilidad Urbana.

## Notas de contenido

Las direcciones de los centros de acopio son **referencias** del corredor industrial y de la
zona metropolitana; horarios, aceptación de materiales y precios por kilo cambian y deben
confirmarse antes de acudir. En Castaños el acopio se canaliza por puntos municipales y
campañas de recolección.

El caso de la caja de pizza grasosa se explica en la guía pero **no** forma parte del mazo
del juego: al no existir un contenedor de rechazo, no se puede responder sin enseñar algo
incorrecto.
