import { useMemo, useState } from 'react'
import { CENTROS, CONSEJOS } from '../data/centros.js'

const FILTROS = ['Todos', 'Ciudad Frontera', 'Monclova']

export default function Directorio({ onIr }) {
  const [filtro, setFiltro] = useState('Todos')

  const visibles = useMemo(() => {
    if (filtro === 'Todos') return CENTROS
    if (filtro === 'Ciudad Frontera')
      return CENTROS.filter((c) => c.ciudad.includes('Frontera') && c.id !== 'acopio-monclova')
    return CENTROS.filter((c) => c.id === 'acopio-monclova' || c.ciudad.includes('Monclova'))
  }, [filtro])

  return (
    <>
      <section className="cabecera-pagina">
        <div className="wrap">
          <span className="kicker">Pestaña 03 · Directorio</span>
          <h1 className="titulo-pagina">
            Dale valor a tus residuos: compra-venta y centros de acopio en la región.
          </h1>
          <p className="lede">
            Reciclar no solo ayuda al planeta: en nuestra región existen centros
            especializados donde puedes vender tus materiales por kilo o volumen. Estas son
            las ubicaciones de referencia en Ciudad Frontera y Monclova. En Castaños el
            acopio se canaliza por puntos municipales y campañas de recolección: confirma
            la ubicación vigente con el Ayuntamiento antes de trasladar tu material.
          </p>
          <div className="chips chips--filtro" role="group" aria-label="Filtrar por municipio">
            {FILTROS.map((f) => (
              <button
                key={f}
                className={`chip chip--simple ${filtro === f ? 'is-active' : ''}`}
                onClick={() => setFiltro(f)}
                aria-pressed={filtro === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap">
          <div className="centros">
            {visibles.map((c, i) => (
              <article className="centro" key={c.id}>
                <div className="centro__top">
                  <span className="centro__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="etiqueta etiqueta--verde">{c.ciudad}</span>
                </div>
                <h2>{c.nombre}</h2>
                <p className="centro__tipo">{c.tipo}</p>
                <p className="centro__ubicacion">
                  <span aria-hidden="true">📍</span> {c.ubicacion}
                </p>
                <p className="centro__detalle">{c.detalle}</p>
                <div className="materiales">
                  {c.materiales.map((m) => (
                    <span className="material" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
                <a
                  className="btn btn--linea centro__mapa"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.maps)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buscar en el mapa <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="nota">
            <strong>Nota honesta:</strong> las direcciones son referencias del corredor
            industrial y de la zona metropolitana. Los horarios, la aceptación de materiales
            y los precios por kilo cambian; confirma por teléfono o en el mapa antes de
            cargar el vehículo.
          </div>
        </div>
      </section>

      <section className="seccion seccion--hueso">
        <div className="wrap">
          <span className="kicker">Antes de ir a vender</span>
          <h2 className="titulo-seccion">Consejos de oro</h2>
          <div className="consejos">
            {CONSEJOS.map((c) => (
              <article className="consejo" key={c.titulo}>
                <span className="consejo__emoji" aria-hidden="true">
                  {c.emoji}
                </span>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
              </article>
            ))}
          </div>

          <div className="checklist">
            <h3>Checklist del viaje</h3>
            <ul>
              <li>Material separado por categoría, en costales distintos.</li>
              <li>Envases enjuagados, escurridos y aplastados.</li>
              <li>Vidrio sin tapas ni etiquetas, y envuelto si está roto.</li>
              <li>Precio del día preguntado antes de salir.</li>
              <li>Báscula revisada al entregar: pide el peso por escrito.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="seccion seccion--cta">
        <div className="wrap cta">
          <div>
            <h2>Lo que no se vende, tampoco se mezcla.</h2>
            <p>
              Aprende en qué contenedor va cada residuo y comprueba con el EcoReto si
              realmente lo dominas.
            </p>
          </div>
          <div className="cta__botones">
            <button className="btn btn--oscuro" onClick={() => onIr('guia')}>
              Guía de clasificación
            </button>
            <button className="btn btn--linea" onClick={() => onIr('juego')}>
              Jugar EcoReto
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
