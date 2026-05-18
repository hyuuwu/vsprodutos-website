import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          VS Produtos e Serviços
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} VS Produtos e Serviços - Shopping Bela Vista, Salvador/BA. Todos os direitos reservados.
        </p>

        <nav className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/produtos" className="footer__link">Produtos</Link>
          <Link to="/sobre" className="footer__link">Sobre Nós</Link>
        </nav>
      </div>
    </footer>
  )
}
