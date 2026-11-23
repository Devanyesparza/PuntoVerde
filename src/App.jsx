import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Guia from './pages/Guia.jsx'
import Directorio from './pages/Directorio.jsx'
import Juego from './pages/Juego.jsx'

export const TABS = [
  { id: 'inicio', label: 'Inicio', corto: 'Inicio', sub: 'Más allá del contenedor' },
  { id: 'guia', label: 'Guía de clasificación', corto: 'Guía', sub: 'El modelo del Punto Verde' },
  { id: 'directorio', label: 'Centros de acopio', corto: 'Acopio', sub: 'Dale valor a tus residuos' },
  { id: 'juego', label: 'EcoReto', corto: 'EcoReto', sub: 'Juega y clasifica' },
]

function leerHash() {
  const id = window.location.hash.replace('#', '')
  return TABS.some((t) => t.id === id) ? id : 'inicio'
}

export default function App() {
  const [tab, setTab] = useState(leerHash)

  useEffect(() => {
    const onHash = () => setTab(leerHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const ir = (id) => {
    if (window.location.hash.replace('#', '') !== id) {
      window.location.hash = id
    }
    setTab(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header tab={tab} onTab={ir} />
      <main id="contenido">
        {tab === 'inicio' && <Inicio onIr={ir} />}
        {tab === 'guia' && <Guia onIr={ir} />}
        {tab === 'directorio' && <Directorio onIr={ir} />}
        {tab === 'juego' && <Juego onIr={ir} />}
      </main>
      <Footer onIr={ir} />
    </div>
  )
}
