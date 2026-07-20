import useReveal from '../hooks/useReveal'
import './Produtos.css'

const CATEGORIES = [
  {
    icon: 'smartphone',
    title: 'Capas e Películas',
    description: 'Proteção premium para todos os modelos de smartphones.',
    image: 'https://images.unsplash.com/photo-1625102217544-a096a17018f7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: 'cable',
    title: 'Cabos e Carregadores',
    description: 'Cabos de alta velocidade, carregadores turbo e adaptadores universais.',
    image: 'https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: 'watch',
    title: 'Relogios e Smartwatches',
    description: 'Relógios e Smartwatches de alta qualidade para todos os estilos.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: 'jewelry',
    title: 'Joias',
    description: 'Joias e semijoias com design elegante e acabamento impecável.',
    image: 'https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: 'speaker',
    title: 'Caixas de Som',
    description: 'Som potente e portátil para qualquer ambiente.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1sfzvg6s5tf2e.cloudfront.net%2FCustom%2FContent%2FProducts%2F48%2F91%2F4891_caixa-de-som-bomber-bass_z1_638064394007363501.jpg&f=1&nofb=1&ipt=248d2411c4de85b0091fc377f3327487c047f8c03b6eef6e424b24f284bf6249',
  },
  {
    icon: 'usb',
    title: 'Pendrives e Armazenamento',
    description: 'Armazenamento rápido e seguro em diversos tamanhos.',
    image: 'https://images.tcdn.com.br/img/img_prod/1380318/noticia_400840119690cd19035d53.png',
  },
]

export default function Produtos() {
  const containerRef = useReveal()

  return (
    <div className="page-enter" ref={containerRef}>
      {/* Hero */}
      <section className="produtos-hero">
        <div className="container">
          <div className="produtos-hero__inner">
            <h1 className="text-display-lg produtos-hero__title">Nosso Catálogo</h1>
            <p className="text-body-lg produtos-hero__subtitle">
              Explore nossa seleção completa de produtos tecnológicos com o melhor custo-benefício.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="produtos-grid section-padding">
        <div className="container">
          <div className="produtos-grid__header reveal">
            <h2 className="text-headline-md">Categorias de Produtos</h2>
            <p className="text-body-md produtos-grid__subtitle">
              Navegue pelas nossas categorias e encontre exatamente o que você precisa.
            </p>
          </div>
          <div className="produtos-grid__items">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="product-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="product-card__image-wrapper">
                  <img src={cat.image} alt={cat.title} className="product-card__image" />
                  <div className="product-card__overlay">
                    <span className="material-symbols-outlined product-card__overlay-icon">{cat.icon}</span>
                  </div>
                </div>
                <div className="product-card__content">
                  <div className="product-card__icon-badge">
                    <span className="material-symbols-outlined">{cat.icon}</span>
                  </div>
                  <h3 className="text-headline-sm product-card__title">{cat.title}</h3>
                  <p className="text-body-md product-card__desc">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="produtos-cta section-padding reveal">
        <div className="container">
          <div className="produtos-cta__inner">
            <h2 className="text-headline-md produtos-cta__title">Não encontrou o que procura?</h2>
            <p className="text-body-lg produtos-cta__desc">
              Entre em contato conosco pelo WhatsApp e faça sua encomenda.
              Trabalhamos com diversas marcas e modelos.
            </p>
            <a
              href="https://wa.me/5571983689018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp produtos-cta__btn"
            >
              <span className="material-symbols-outlined">chat</span>
              Fale Conosco via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
