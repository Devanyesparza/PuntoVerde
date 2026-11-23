const PILARES = [
  {
    emoji: '🏭',
    titulo: 'Menos presión en los rellenos',
    texto:
      'Evita la saturación prematura de los espacios de disposición final en la región centro de Coahuila. Cada tonelada separada es una tonelada que no se entierra.',
  },
  {
    emoji: '⚡',
    titulo: 'Ahorro de energía y agua',
    texto:
      'Fabricar un producto con material reciclado requiere una fracción de los recursos naturales necesarios para hacerlo desde cero.',
  },
  {
    emoji: '💼',
    titulo: 'Economía circular local',
    texto:
      'Al separar correctamente, los centros de acopio procesan materias primas secundarias que alimentan a la industria nacional y generan empleos verdes.',
  },
]

const LINEAL = ['Consumir', 'Desechar', 'Enterrar']
const CIRCULAR = ['Consumir', 'Separar', 'Acopiar', 'Transformar', 'Volver a usar']

export default function Inicio({ onIr }) {
  return (
    <>
      <section className="hero">
        <div className="hero__grano" aria-hidden="true" />
        <div className="wrap hero__inner">
          <span className="kicker kicker--claro">
            Proyecto 3 · Concientización ambiental
          </span>
          <h1 className="hero__titulo">
            El verdadero cambio no es tirar la basura,
            <br />
            <em>es dejar de verla como basura.</em>
          </h1>
          <p className="hero__lede">
            Una guía práctica para entender qué pasa después del contenedor: cómo separar
            tus residuos, a dónde llevarlos en Monclova, Frontera y Castaños, y cuánto
            puedes recuperar de lo que hoy llamas «desecho».
          </p>
          <div className="hero__acciones">
            <button className="btn btn--lima" onClick={() => onIr('juego')}>
              Pon a prueba tu consciencia <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn--fantasma" onClick={() => onIr('guia')}>
              Ver la guía de clasificación
            </button>
          </div>
          <ul className="hero__datos" aria-label="Contenido del sitio">
            <li>
              <strong>5</strong>
              <span>contenedores del Punto Verde</span>
            </li>
            <li>
              <strong>3</strong>
              <span>municipios de la región</span>
            </li>
            <li>
              <strong>19</strong>
              <span>residuos para clasificar en el reto</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap grid-dos">
          <div>
            <span className="kicker">El problema</span>
            <h2 className="titulo-seccion">
              Consumimos, desechamos y apartamos la vista
            </h2>
          </div>
          <div className="prosa">
            <p>
              Durante décadas hemos normalizado un ciclo lineal y destructivo: consumimos,
              generamos desecho y lo depositamos en un contenedor esperando que
              desaparezca de nuestra vista. Sin embargo, en ciudades de rápido crecimiento
              industrial como <strong>Monclova, Frontera y Castaños</strong>, este modelo es
              insostenible.
            </p>
            <p>
              El manejo responsable de los residuos va mucho más allá de cumplir con el
              acto básico de «echar la bolsa al bote». Implica comprender que cada objeto
              que descartamos posee una composición química, un valor energético y un
              potencial de reincorporación a la cadena productiva.
            </p>
            <p>
              Cuando mezclamos orgánicos con materiales valorizables, condenamos recursos
              útiles a terminar en rellenos sanitarios o tiraderos a cielo abierto, donde
              tardan cientos de años en degradarse y generan lixiviados tóxicos y gases de
              efecto invernadero. La gestión ambiental moderna transforma al ciudadano de
              un simple generador de desperdicios en un <strong>gestor de recursos</strong>,
              usando estaciones de separación especializada como los módulos de Punto
              Verde.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion seccion--hueso">
        <div className="wrap">
          <span className="kicker">¿Por qué es vital clasificar desde el origen?</span>
          <h2 className="titulo-seccion">
            Separar en casa es la decisión más barata del sistema
          </h2>
          <div className="pilares">
            {PILARES.map((p, i) => (
              <article className="pilar" key={p.titulo}>
                <span className="pilar__num">0{i + 1}</span>
                <span className="pilar__emoji" aria-hidden="true">
                  {p.emoji}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap">
          <span className="kicker">El cambio de modelo</span>
          <h2 className="titulo-seccion">Del ciclo lineal a la economía circular</h2>
          <div className="ciclos">
            <div className="ciclo ciclo--malo">
              <div className="ciclo__cabecera">
                <span className="etiqueta etiqueta--rojo">Modelo lineal</span>
                <p>Extraer, usar, enterrar. El residuo desaparece de la vista, no del mapa.</p>
              </div>
              <ol className="flujo">
                {LINEAL.map((paso) => (
                  <li key={paso}>{paso}</li>
                ))}
              </ol>
            </div>
            <div className="ciclo ciclo--bueno">
              <div className="ciclo__cabecera">
                <span className="etiqueta etiqueta--verde">Economía circular</span>
                <p>El material regresa a la cadena productiva y vuelve a tener valor.</p>
              </div>
              <ol className="flujo">
                {CIRCULAR.map((paso) => (
                  <li key={paso}>{paso}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion seccion--cta">
        <div className="wrap cta">
          <div>
            <span className="kicker kicker--claro">Siguiente paso</span>
            <h2>Ya sabes por qué separar. Ahora aprende cómo.</h2>
            <p>
              Los cinco contenedores del Punto Verde, las restricciones que hacen que un
              centro de acopio rechace tu material y las reglas de oro antes de ir a
              vender.
            </p>
          </div>
          <div className="cta__botones">
            <button className="btn btn--oscuro" onClick={() => onIr('guia')}>
              Guía de clasificación
            </button>
            <button className="btn btn--linea" onClick={() => onIr('directorio')}>
              Centros de acopio
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
