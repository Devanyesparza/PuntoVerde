import { useState } from 'react'
import { CONTENEDORES } from '../data/contenedores.js'

export default function Guia({ onIr }) {
  const [activo, setActivo] = useState(CONTENEDORES[0].id)
  const c = CONTENEDORES.find((x) => x.id === activo)

  return (
    <>
      <section className="cabecera-pagina">
        <div className="wrap">
          <span className="kicker">Pestaña 02 · Guía</span>
          <h1 className="titulo-pagina">
            Aprende a separar: la guía oficial basada en nuestro Punto Verde.
          </h1>
          <p className="lede">
            Para que un residuo pueda ser reciclado o comercializado de manera efectiva
            necesitamos esquemas rigurosos de clasificación por contenedores. Todos los
            materiales deben entregarse <strong>completamente limpios y secos</strong>.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap">
          <div className="chips" role="tablist" aria-label="Contenedores">
            {CONTENEDORES.map((cont) => (
              <button
                key={cont.id}
                role="tab"
                aria-selected={activo === cont.id}
                className={`chip ${activo === cont.id ? 'is-active' : ''}`}
                style={{
                  '--chip': cont.hex,
                  '--chip-tinta': cont.tinta,
                }}
                onClick={() => setActivo(cont.id)}
              >
                <span className="chip__punto" aria-hidden="true" />
                <span className="chip__texto">
                  <strong>{cont.material}</strong>
                  <small>Contenedor {cont.nombre}</small>
                </span>
              </button>
            ))}
          </div>

          <article
            className="panel"
            key={c.id}
            style={{ '--color': c.hex, '--color-tinta': c.tinta }}
          >
            <div className="panel__lado" style={{ background: c.fondo, color: c.tinta }}>
              <span className="panel__emoji" aria-hidden="true">
                {c.emoji}
              </span>
              <span className="panel__rotulo">Contenedor</span>
              <h2>{c.nombre}</h2>
              <span className="panel__material">{c.material}</span>
              <div className="panel__franja" aria-hidden="true" />
            </div>

            <div className="panel__cuerpo">
              <p className="panel__resumen">{c.resumen}</p>

              <div className="panel__columnas">
                <div>
                  <h3 className="sub">
                    <span aria-hidden="true">✓</span> ¿Qué se acepta?
                  </h3>
                  <ul className="lista lista--ok">
                    {c.acepta.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="sub">
                    <span aria-hidden="true">✕</span> Restricciones de compraventa
                  </h3>
                  <ul className="lista lista--no">
                    {c.noAcepta.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="aviso">
                <span className="aviso__icono" aria-hidden="true">
                  🚿
                </span>
                <p>
                  <strong>Requisito indispensable:</strong> {c.requisito}
                </p>
              </div>

              <p className="dato">
                <span aria-hidden="true">💡</span> {c.dato}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="seccion seccion--hueso">
        <div className="wrap">
          <span className="kicker">Regla de oro</span>
          <h2 className="titulo-seccion">Limpio y seco, o no cuenta</h2>
          <div className="reglas">
            <div className="regla">
              <span aria-hidden="true">1</span>
              <h3>Vacía y enjuaga</h3>
              <p>
                Un envase con restos de comida contamina el lote completo. Un chorro de
                agua basta; no necesitas jabón ni secarlo con toalla.
              </p>
            </div>
            <div className="regla">
              <span aria-hidden="true">2</span>
              <h3>Seca al aire</h3>
              <p>
                El cartón y el papel húmedos pierden peso comercial y arruinan la fibra.
                Déjalos escurrir antes de enfardar.
              </p>
            </div>
            <div className="regla">
              <span aria-hidden="true">3</span>
              <h3>Compacta</h3>
              <p>
                Aplasta botellas y latas. Ocupas menos espacio en casa y el acopio
                transporta más material por viaje.
              </p>
            </div>
            <div className="regla">
              <span aria-hidden="true">4</span>
              <h3>Separa colores</h3>
              <p>
                Vidrio transparente, ámbar y verde se funden por separado. El PET
                transparente se paga mejor que el coloreado.
              </p>
            </div>
          </div>

          <div className="tabla">
            <div className="tabla__fila tabla__fila--head">
              <span>Error común</span>
              <span>Por qué falla</span>
              <span>Qué hacer</span>
            </div>
            <div className="tabla__fila">
              <span>Tetra Pak en el azul</span>
              <span>No es cartón puro: lleva polietileno y aluminio</span>
              <span>Contenedor marrón, enjuagado y aplastado</span>
            </div>
            <div className="tabla__fila">
              <span>Caja de pizza grasosa al cartón</span>
              <span>La grasa arruina la fibra de todo el lote</span>
              <span>Basura común; el cartón limpio sí se recicla</span>
            </div>
            <div className="tabla__fila">
              <span>Botellas con tapa y etiqueta al vidrio</span>
              <span>La tapa es otro material y ensucia la fundición</span>
              <span>Retira tapa y etiqueta antes de entregar</span>
            </div>
            <div className="tabla__fila">
              <span>Todo «reciclable» en una sola bolsa</span>
              <span>La báscula penaliza el material mezclado</span>
              <span>Una bolsa o caja por categoría</span>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion seccion--cta">
        <div className="wrap cta">
          <div>
            <h2>¿Ya te la sabes? Demuéstralo.</h2>
            <p>
              19 residuos, cinco contenedores y 90 segundos. Incluye los casos especiales
              que más se fallan en la vida real.
            </p>
          </div>
          <div className="cta__botones">
            <button className="btn btn--oscuro" onClick={() => onIr('juego')}>
              Jugar EcoReto
            </button>
            <button className="btn btn--linea" onClick={() => onIr('directorio')}>
              Ver centros de acopio
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
