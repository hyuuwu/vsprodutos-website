import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import './Home.css'

const HERO_BG = 'https://images.unsplash.com/photo-1550009158-9effb619a712?auto=format&fit=crop&q=80&w=1920'
const ABOUT_IMG = 'https://i.ibb.co/VcLJpxh0/1000023059.jpg'

const HIGHLIGHTS = [
  {
    icon: 'smartphone',
    title: 'Acessórios para Celular',
    description: 'Capas, películas, cabos de alta velocidade e carregadores portáteis de última geração.',
  },
  {
    icon: 'computer',
    title: 'Informática',
    description: 'Mouses precisos, teclados ergonômicos, pendrives e componentes para otimizar seu setup.',
  },
  {
    icon: 'headphones',
    title: 'Áudio e Som',
    description: 'Fones de ouvido Bluetooth, caixas de som portáteis e headsets profissionais com cancelamento de ruído.',
  },
  {
    icon: 'jewelry',
    title: 'Joias, Semijoias e Relógios',
    description: 'Peças elegantes e duráveis, com acabamento impecável para todas as ocasiões.',
  },
]

const FEATURES = [
  'Ampla variedade de acessórios para todas as marcas.',
  'Periféricos de informática para alta performance.',
  'Atendimento técnico especializado.',
]

export default function Home() {
  const containerRef = useReveal()

  return (
    <div className="page-enter" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero__content container">
          <div className="hero__text">
            <h1 className="text-headline-lg hero__title">
              Tecnologia e Acessórios no Coração do Shopping Bela Vista
            </h1>
            <p className="text-body-lg hero__subtitle">
              Soluções de alta performance em informática, áudio e acessórios para celular. 
              Encontre a precisão e qualidade que seu dia a dia exige.
            </p>
            <div className="hero__cta">
              <Link to="/produtos" className="btn-primary">
                Explorar Produtos
              </Link>
              <a href="#localizacao" className="btn-outline">
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="about-preview__grid reveal">
            <div className="about-preview__content">
              <span className="about-preview__tag">Sobre Nós</span>
              <h2 className="text-headline-md about-preview__title">
                Qualidade e Custo-Benefício em um Só Lugar
              </h2>
              <p className="text-body-md about-preview__description">
                A VS Produtos e Serviços é especializada em fornecer uma diversidade de produtos 
                tecnológicos com um excelente custo-benefício. Nossa missão é conectar você às 
                melhores soluções em acessórios para mobile e periféricos de informática, garantindo 
                durabilidade e eficiência.
              </p>
              <ul className="about-preview__features">
                {FEATURES.map((feature, i) => (
                  <li key={i} className="about-preview__feature">
                    <span className="material-symbols-outlined filled about-preview__feature-icon">
                      arrow_right_alt
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-preview__image-wrapper">
              <img 
                src={ABOUT_IMG} 
                alt="Equipamentos de informática premium" 
                className="about-preview__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="highlights section-padding">
        <div className="container">
          <div className="highlights__header reveal">
            <h2 className="text-headline-md">Nossos Destaques</h2>
            <p className="text-body-md highlights__subtitle">
              Conheça nossas principais categorias de produtos, selecionadas para oferecer o melhor desempenho.
            </p>
          </div>
          <div className="highlights__grid">
            {HIGHLIGHTS.map((item, i) => (
              <div key={i} className="highlight-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="highlight-card__icon">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-headline-sm highlight-card__title">{item.title}</h3>
                <p className="text-body-md highlight-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="location section-padding" id="localizacao">
        <div className="container">
          <div className="location__grid reveal">
            <div className="location__map">
              <iframe
                title="VS Produtos e Serviços - Shopping Bela Vista"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8394961076814!2d-38.4615!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShopping%20Bela%20Vista!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location__info">
              <h2 className="text-headline-md location__title">Venha nos Visitar</h2>

              <div className="location__block">
                <h3 className="text-headline-sm location__block-title">Endereço</h3>
                <div className="location__detail">
                  <span className="material-symbols-outlined location__detail-icon">location_on</span>
                  <p className="text-body-lg">
                    Shopping Bela Vista<br />
                    Alameda Euvaldo Luz, 92<br />
                    Horto Bela Vista, Salvador - BA<br />
                    <strong className="location__floor">1º Piso (Loja 71A)</strong>
                  </p>
                </div>
              </div>

              <div className="location__block">
                <h3 className="text-headline-sm location__block-title">Horário de Funcionamento</h3>
                <ul className="location__hours">
                  <li className="location__hour">
                    <span className="material-symbols-outlined location__detail-icon">schedule</span>
                    <span className="text-body-lg">Seg a Sáb: 09h às 22h</span>
                  </li>
                  <li className="location__hour">
                    <span className="material-symbols-outlined location__detail-icon">event</span>
                    <span className="text-body-lg">Dom e Feriados: 12h às 21h</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5571983689018"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary location__cta"
              >
                <span className="material-symbols-outlined">chat</span>
                Fale Conosco via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
