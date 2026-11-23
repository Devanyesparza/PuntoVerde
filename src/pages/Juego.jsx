import { useCallback, useEffect, useRef, useState } from 'react'
import { CONTENEDORES, CONTENEDOR_POR_ID } from '../data/contenedores.js'
import { RESIDUOS } from '../data/residuos.js'

const DURACION = 90
const MAZO = RESIDUOS.filter((r) => r.enJuego !== false)

const RANGOS = [
  {
    min: 240,
    titulo: 'Maestro de la Sostenibilidad Urbana',
    emoji: '👑',
    texto:
      'Separación impecable. Podrías enseñar el modelo del Punto Verde en tu colonia.',
  },
  {
    min: 180,
    titulo: 'Experto en Economía Circular',
    emoji: '🏅',
    texto: 'Dominas los casos difíciles. Te faltan detalles finos, no criterio.',
  },
  {
    min: 120,
    titulo: 'Guardián del Punto Verde',
    emoji: '🛡️',
    texto: 'Buena base. Repasa las restricciones de compraventa y sube de nivel.',
  },
  {
    min: 60,
    titulo: 'Separador en Formación',
    emoji: '♻️',
    texto: 'Vas entendiendo la lógica. La guía de clasificación te va a ayudar mucho.',
  },
  {
    min: 0,
    titulo: 'Aprendiz del Reciclaje',
    emoji: '🌱',
    texto: 'Todos empezamos aquí. Lee la guía y vuelve a intentarlo: se aprende jugando.',
  },
]

function barajar(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function rango(puntos) {
  return RANGOS.find((r) => puntos >= r.min)
}

export default function Juego({ onIr }) {
  const [fase, setFase] = useState('inicio') // inicio | jugando | fin
  const [mazo, setMazo] = useState([])
  const [idx, setIdx] = useState(0)
  const [puntos, setPuntos] = useState(0)
  const [aciertos, setAciertos] = useState(0)
  const [errores, setErrores] = useState(0)
  const [restante, setRestante] = useState(DURACION)
  const [feedback, setFeedback] = useState(null)
  const [historial, setHistorial] = useState([])
  const [motivo, setMotivo] = useState('completo')
  const [arrastrando, setArrastrando] = useState(false)
  const [sobre, setSobre] = useState(null)
  const [record, setRecord] = useState(() => {
    const g = Number(window.localStorage.getItem('ecoreto_record') || 0)
    return Number.isFinite(g) ? g : 0
  })
  const [recordPrevio, setRecordPrevio] = useState(0)

  const finRef = useRef(0)
  const bloqueoRef = useRef(false)
  const timerRef = useRef(null)
  const juegoRef = useRef(null)
  const pausaRef = useRef(0)

  const actual = fase === 'jugando' ? mazo[idx] : null
  const progreso = mazo.length ? (idx / mazo.length) * 100 : 0

  const terminar = useCallback((motivoFin = 'tiempo') => {
    if (timerRef.current) clearInterval(timerRef.current)
    bloqueoRef.current = true
    setMotivo(motivoFin)
    setFase('fin')
  }, [])

  useEffect(() => {
    if (fase !== 'jugando') return
    timerRef.current = setInterval(() => {
      const ms = finRef.current - Date.now()
      const s = Math.max(0, Math.ceil(ms / 1000))
      setRestante(s)
      if (ms <= 0) terminar()
    }, 150)
    return () => clearInterval(timerRef.current)
  }, [fase, terminar])

  useEffect(() => {
    if (fase !== 'fin') return
    if (puntos > record) {
      setRecord(puntos)
      window.localStorage.setItem('ecoreto_record', String(puntos))
    }
  }, [fase, puntos, record])

  useEffect(() => {
    if (fase !== 'jugando' || !juegoRef.current) return
    juegoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [fase])

  const iniciar = () => {
    setMazo(barajar(MAZO))
    setRecordPrevio(record)
    setIdx(0)
    setPuntos(0)
    setAciertos(0)
    setErrores(0)
    setRestante(DURACION)
    setFeedback(null)
    setHistorial([])
    setArrastrando(false)
    setSobre(null)
    bloqueoRef.current = false
    finRef.current = Date.now() + DURACION * 1000
    setFase('jugando')
  }

  const responder = (contenedorId) => {
    if (fase !== 'jugando' || !actual || bloqueoRef.current) return
    bloqueoRef.current = true
    setArrastrando(false)
    setSobre(null)

    const ok = actual.contenedor === contenedorId
    const delta = ok ? (actual.especial ? 20 : 10) : -5

    if (ok) setAciertos((n) => n + 1)
    else setErrores((n) => n + 1)
    setPuntos((p) => Math.max(0, p + delta))
    setHistorial((h) => [
      ...h,
      {
        ...actual,
        elegido: contenedorId,
        ok,
        delta,
      },
    ])
    setFeedback({ ok, delta, residuo: actual, elegido: contenedorId })

    // El reloj se detiene mientras se lee la explicación educativa.
    pausaRef.current = Date.now()

    window.setTimeout(
      () => {
        if (pausaRef.current) {
          finRef.current += Date.now() - pausaRef.current
          pausaRef.current = 0
        }
        if (Date.now() >= finRef.current) {
          terminar('tiempo')
          return
        }
        if (idx + 1 >= mazo.length) {
          terminar('completo')
          return
        }
        setIdx((n) => n + 1)
        setFeedback(null)
        bloqueoRef.current = false
      },
      ok ? 1200 : 2600,
    )
  }

  useEffect(() => {
    const onKey = (e) => {
      if (fase !== 'jugando' || bloqueoRef.current) return
      const n = Number(e.key)
      if (n >= 1 && n <= 5) responder(CONTENEDORES[n - 1].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const tiempoBajo = restante <= 15
  const r = rango(puntos)
  const respondidos = aciertos + errores
  const precision = respondidos ? Math.round((aciertos / respondidos) * 100) : 0
  const fallos = historial.filter((h) => !h.ok)

  return (
    <>
      <section className="cabecera-pagina cabecera-pagina--juego">
        <div className="wrap">
          <span className="kicker">Pestaña 04 · Módulo interactivo</span>
          <h1 className="titulo-pagina">
            Zona de juegos: conviértete en un experto del Punto Verde.
          </h1>
          <p className="lede">
            19 residuos, 5 contenedores y 90 segundos. Acierto <strong>+10</strong>, caso
            especial <strong>+20</strong>, error <strong>−5</strong> con explicación.
          </p>
        </div>
      </section>

      <section className="seccion seccion--juego">
        <div className="wrap">
          <div className="juego" ref={juegoRef}>
            <div className="juego__barra">
              <div className="juego__marca">
                <span className="juego__titulo">EcoReto de clasificación</span>
                <span className="juego__sub">Estilo Punto Verde · 19 residuos</span>
              </div>
              <div className="juego__stats">
                <div className="stat">
                  <small>Puntos</small>
                  <strong key={puntos} className="stat__valor">
                    {puntos}
                  </strong>
                </div>
                <div className={`stat stat--tiempo ${tiempoBajo && fase === 'jugando' ? 'is-bajo' : ''}`}>
                  <small>Tiempo</small>
                  <strong>
                    {String(Math.floor(restante / 60)).padStart(1, '0')}:
                    {String(restante % 60).padStart(2, '0')}
                  </strong>
                </div>
                <div className="stat stat--record">
                  <small>Récord</small>
                  <strong>{record}</strong>
                </div>
              </div>
            </div>

            {fase === 'inicio' && (
              <div className="juego__inicio">
                <span className="juego__emoji" aria-hidden="true">
                  ♻️
                </span>
                <h2>Jugando a clasificar</h2>
                <p>
                  Aparecerán objetos cotidianos: una botella de plástico, un cartón de leche
                  Tetra Pak, una lata de aluminio, periódicos… Arrástralos al contenedor que
                  les corresponde —Amarillo, Azul, Gris, Verde o Marrón— guiándote por el
                  modelo oficial.
                </p>
                <ul className="juego__puntos">
                  <li>
                    <span className="pastilla pastilla--ok">+10</span> acierto en el
                    contenedor correcto
                  </li>
                  <li>
                    <span className="pastilla pastilla--especial">+20</span> acierto en un
                    caso con restricción especial
                  </li>
                  <li>
                    <span className="pastilla pastilla--no">−5</span> error, con mensaje
                    educativo
                  </li>
                  <li>
                    <span className="pastilla">90 s</span> para clasificar los 19 residuos
                  </li>
                </ul>
                <p className="juego__tip">
                  En computadora arrastra el objeto o usa las teclas <kbd>1</kbd>–
                  <kbd>5</kbd>. En celular basta con tocar el residuo y luego el contenedor.
                </p>
                <button className="btn btn--lima btn--grande" onClick={iniciar}>
                  Empezar el reto <span aria-hidden="true">→</span>
                </button>
                {record > 0 && (
                  <p className="juego__record">
                    Tu mejor marca: <strong>{record} puntos</strong> ({rango(record).titulo})
                  </p>
                )}
              </div>
            )}

            {fase === 'jugando' && actual && (
              <div className="juego__area">
                <div className="progreso">
                  <div className="progreso__texto">
                    <span>
                      Residuo <strong>{idx + 1}</strong> de {mazo.length}
                    </span>
                    <span className="progreso__aciertos">
                      ✓ {aciertos} · ✕ {errores}
                    </span>
                  </div>
                  <div className="progreso__barra">
                    <span style={{ width: `${progreso}%` }} />
                  </div>
                </div>

                <div className="pista-zona">
                  {feedback ? (
                    <div
                      className={`feedback ${feedback.ok ? 'feedback--ok' : 'feedback--no'}`}
                      role="status"
                      aria-live="polite"
                    >
                      <div className="feedback__cabecera">
                        <strong>
                          {feedback.ok ? '¡Correcto!' : 'No exactamente'}{' '}
                          <span className="feedback__delta">
                            {feedback.delta > 0 ? `+${feedback.delta}` : feedback.delta}
                          </span>
                        </strong>
                        {!feedback.ok && (
                          <span className="feedback__correcto">
                            Va en el contenedor{' '}
                            <b
                              style={{
                                color: CONTENEDOR_POR_ID[feedback.residuo.contenedor].hexDark,
                              }}
                            >
                              {CONTENEDOR_POR_ID[feedback.residuo.contenedor].nombre} ·{' '}
                              {CONTENEDOR_POR_ID[feedback.residuo.contenedor].material}
                            </b>
                          </span>
                        )}
                      </div>
                      <p>{feedback.residuo.mensaje}</p>
                    </div>
                  ) : (
                    <>
                      <div
                        className={`residuo ${arrastrando ? 'is-drag' : ''}`}
                        draggable
                        onDragStart={(e) => {
                          e.dataTransfer.setData('text/plain', actual.id)
                          e.dataTransfer.effectAllowed = 'move'
                          setArrastrando(true)
                        }}
                        onDragEnd={() => setArrastrando(false)}
                        onClick={() => setArrastrando((v) => !v)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Residuo: ${actual.nombre}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setArrastrando((v) => !v)
                          }
                        }}
                      >
                        <span className="residuo__emoji" aria-hidden="true">
                          {actual.emoji}
                        </span>
                        <span className="residuo__nombre">{actual.nombre}</span>
                        <span className="residuo__accion">
                          {arrastrando ? 'Elige un contenedor' : 'Arrástrame'}
                        </span>
                        {actual.especial && (
                          <span className="residuo__especial">⚠️ Caso especial · +20</span>
                        )}
                      </div>
                      <p className="pista-zona__ayuda">
                        {arrastrando
                          ? 'Ahora toca o suelta el contenedor correcto.'
                          : 'Suelta el residuo en el contenedor o toca uno.'}
                      </p>
                    </>
                  )}
                </div>

                <div className="contenedores">
                  {CONTENEDORES.map((c, i) => (
                    <button
                      key={c.id}
                      className={`contenedor ${
                        sobre === c.id ? 'is-sobre' : ''
                      } ${
                        feedback && feedback.elegido === c.id
                          ? feedback.ok
                            ? 'is-ok'
                            : 'is-no'
                          : ''
                      } ${
                        feedback &&
                        !feedback.ok &&
                        feedback.residuo.contenedor === c.id
                          ? 'is-correcto'
                          : ''
                      }`}
                      style={{ '--color': c.hex, '--color-tinta': c.tinta }}
                      onDragOver={(e) => {
                        e.preventDefault()
                        e.dataTransfer.dropEffect = 'move'
                        setSobre(c.id)
                      }}
                      onDragLeave={() => setSobre((s) => (s === c.id ? null : s))}
                      onDrop={(e) => {
                        e.preventDefault()
                        responder(c.id)
                      }}
                      onClick={() => responder(c.id)}
                      disabled={!!feedback}
                      aria-label={`Contenedor ${c.nombre}: ${c.material} (tecla ${i + 1})`}
                    >
                      <span className="contenedor__tecla">{i + 1}</span>
                      <span className="contenedor__emoji" aria-hidden="true">
                        {c.emoji}
                      </span>
                      <span className="contenedor__nombre">{c.nombre}</span>
                      <span className="contenedor__material">{c.material}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {fase === 'fin' && (
              <div className="resultados">
                <div className="resultados__cabecera">
                  <span className="resultados__emoji" aria-hidden="true">
                    {r.emoji}
                  </span>
                  <span className="kicker">Rango ambiental</span>
                  <h2>{r.titulo}</h2>
                  <p>{r.texto}</p>
                </div>

                <div className="resultados__numeros">
                  <div className="resultado-cifra">
                    <strong>{puntos}</strong>
                    <small>puntos</small>
                  </div>
                  <div className="resultado-cifra">
                    <strong>{aciertos}</strong>
                    <small>{aciertos === 1 ? 'acierto' : 'aciertos'}</small>
                  </div>
                  <div className="resultado-cifra">
                    <strong>{errores}</strong>
                    <small>{errores === 1 ? 'error' : 'errores'}</small>
                  </div>
                  <div className="resultado-cifra">
                    <strong>{precision}%</strong>
                    <small>precisión</small>
                  </div>
                </div>

                {puntos > recordPrevio && puntos > 0 && (
                  <p className="resultados__record">🌟 ¡Nuevo récord personal!</p>
                )}

                {respondidos === 0 ? (
                  <p className="resultados__perfecto resultados__perfecto--alerta">
                    No alcanzaste a clasificar ningún residuo. Repasa la guía y vuelve a
                    intentarlo: el reloj se detiene mientras lees cada explicación.
                  </p>
                ) : errores === 0 && respondidos === mazo.length ? (
                  <p className="resultados__perfecto">
                    Clasificaste los {mazo.length} residuos sin un solo error. Nivel
                    maestro.
                  </p>
                ) : respondidos === mazo.length ? (
                  <p className="resultados__perfecto resultados__perfecto--alerta">
                    Clasificaste los {mazo.length} residuos con {errores}{' '}
                    {errores === 1 ? 'error' : 'errores'}. Revisa el repaso para afinar
                    los detalles.
                  </p>
                ) : (
                  <p className="resultados__perfecto resultados__perfecto--alerta">
                    {motivo === 'tiempo'
                      ? `Se acabó el tiempo: clasificaste ${respondidos} de ${mazo.length} residuos.`
                      : `Clasificaste ${respondidos} de ${mazo.length} residuos.`}
                  </p>
                )}

                {fallos.length > 0 && (
                  <div className="repaso">
                    <h3>Repaso de lo que falló</h3>
                    <ul>
                      {fallos.map((f) => (
                        <li key={f.id}>
                          <span className="repaso__emoji" aria-hidden="true">
                            {f.emoji}
                          </span>
                          <div>
                            <strong>{f.nombre}</strong>{' '}
                            <span className="repaso__error">
                              elegiste {CONTENEDOR_POR_ID[f.elegido]?.material ?? '—'}
                            </span>
                            <p>
                              Correcto: <b>{CONTENEDOR_POR_ID[f.contenedor].nombre}</b>.{' '}
                              {f.mensaje}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="resultados__acciones">
                  <button className="btn btn--lima btn--grande" onClick={iniciar}>
                    Jugar otra vez
                  </button>
                  <button className="btn btn--linea" onClick={() => onIr('guia')}>
                    Repasar la guía
                  </button>
                </div>
              </div>
            )}
          </div>

          {fase === 'jugando' && (
            <p className="juego__pie">
              Los residuos cambian de orden en cada partida. Los casos especiales valen
              doble porque son los que más se fallan en la vida real.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
