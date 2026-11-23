export default function Footer({ onIr }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__bloque">
          <div className="footer__marca">Punto Verde · Región Centro de Coahuila</div>
          <p>
            Proyecto de concientización ambiental y clasificación de residuos para
            Monclova, Ciudad Frontera y Castaños. Contenido educativo: las direcciones y
            precios de los centros de acopio son de referencia y deben confirmarse antes
            de acudir.
          </p>
        </div>
        <div className="footer__bloque footer__bloque--links">
          <div className="footer__titulo">Explora</div>
          <button onClick={() => onIr('inicio')}>Más allá del contenedor</button>
          <button onClick={() => onIr('guia')}>Guía del Punto Verde</button>
          <button onClick={() => onIr('directorio')}>Directorio de acopio</button>
          <button onClick={() => onIr('juego')}>EcoReto de clasificación</button>
        </div>
      </div>
      <div className="footer__base">
        <span>Hecho para aprender, separar y volver a usar.</span>
        <span>♻️ Reduce · Reutiliza · Recicla</span>
      </div>
    </footer>
  )
}
