import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9gm1qXvoEotsF1JvNVnYmLKnLh3DrkBdVT_nPuigjftfgXcJ7ND-lzEfHTHcUqgf0X5up_RR5bFDByGokgqIY6DfnKDmAKxFkAHmIccDNy96jhYMZ4zV0xJnhGBDp7jOhIJXv0ZUhY9KVCf8dfuAI8Igk5X8Y4wmPzP8JEjsPE420e_uIG43OL9LNFLZ6t7bWjuniB0p2wAieu2AYtEL5CtWve0tSAtoh2wbphDn0PAZUXLThkrvttL5OFbX-aHX-If5LHFdNDWwG'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/produtos', label: 'Produtos' },
  { path: '/sobre', label: 'Sobre Nós' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <img src={LOGO_URL} alt="VS Produtos e Serviços Logo" className="header__logo" />
          <span className="header__title">VS Produtos e Serviços</span>
        </Link>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href="https://wa.me/5571983689018"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp header__whatsapp"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
            WhatsApp
          </a>
        </div>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-overlay ${menuOpen ? 'header__mobile-overlay--open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/5571983689018"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp header__mobile-whatsapp"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
          Fale Conosco via WhatsApp
        </a>
      </div>
    </header>
  )
}
