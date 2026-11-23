import { TABS } from '../App.jsx'

export default function Header({ tab, onTab }) {
  return (
    <header className="header">
      <div className="header__inner">
        <button className="marca" onClick={() => onTab('inicio')} aria-label="Ir al inicio">
          <span className="marca__icono" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
              <path
                d="M16 28c0-8 3-14 10-18 1 9-3 15-10 18Z"
                fill="currentColor"
                opacity=".95"
              />
              <path
                d="M16 28C9 25 5 19 6 10c7 4 10 10 10 18Z"
                fill="currentColor"
                opacity=".55"
              />
              <path d="M16 29V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="marca__texto">
            <strong>Punto Verde</strong>
            <small>Aprendiendo a separar mis residuos</small>
          </span>
        </button>

        <nav className="nav" aria-label="Secciones del sitio">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`nav__item ${tab === t.id ? 'is-active' : ''}`}
              onClick={() => onTab(t.id)}
              aria-current={tab === t.id ? 'page' : undefined}
            >
              <span className="nav__largo">{t.label}</span>
              <span className="nav__corto">{t.corto}</span>
            </button>
          ))}
        </nav>

        <button className="btn btn--lima header__cta" onClick={() => onTab('juego')}>
          Jugar EcoReto
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </header>
  )
}
