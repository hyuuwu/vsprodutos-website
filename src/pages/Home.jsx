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

const WEEKLY_PROMOS = [
  { title: 'Capinhas Premium', discount: 'até 30% OFF', detail: 'Modelos para iPhone, Samsung e Xiaomi.' },
  { title: 'Fones Bluetooth', discount: '2ª unidade com 40% OFF', detail: 'Ideal para treino, trabalho e lazer.' },
  { title: 'Carregadores Turbo', discount: 'combo especial', detail: 'Leve 1 cabo + 1 carregador com preço reduzido.' },
]

const BEST_SELLERS = [
  'Películas 3D com aplicação rápida',
  'Smartwatch com monitor cardíaco',
  'Caixa de som portátil resistente à água',
  'Kit teclado + mouse ergonômico',
]

const STATS = [
  { value: '8+', label: 'anos no mercado local' },
  { value: '12 mil+', label: 'clientes atendidos' },
  { value: '200+', label: 'itens em catálogo' },
  { value: '40+', label: 'marcas parceiras' },
]

const TESTIMONIALS = [
  {
    name: 'Camila R.',
    text: 'Atendimento rápido, preços honestos e produto excelente. Comprei fone e carregador no mesmo dia.',
    rate: '5.0',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    name: 'Rafael S.',
    text: 'Precisava de acessórios para notebook e fui super bem orientado. Loja organizada e com muita opção.',
    rate: '4.9',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'Juliana M.',
    text: 'Comprei relógio e semijoias para presente. Qualidade ótima e entrega da encomenda no prazo.',
    rate: '5.0',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1511330098458-20531b7b6fcb?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1527443224154-c4f0617f9d5f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800',
]

const SHORT_VIDEOS = [
  { title: 'Teste de áudio em caixa Bluetooth', url: 'https://www.youtube.com/embed/6v2L2UGZJAM' },
  { title: 'Carregador turbo em ação', url: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { title: 'Detalhes de acabamento em semijoias', url: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
]

const FAQ_ITEMS = [
  {
    q: 'Vocês fazem troca de produto?',
    a: 'Sim. Realizamos trocas conforme prazo legal e condições de conservação do item.',
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Aceitamos cartão, PIX e dinheiro, com opções de parcelamento em itens selecionados.',
  },
  {
    q: 'Vocês trabalham com encomendas?',
    a: 'Sim. Se não tiver o modelo no momento, reservamos e encomendamos para você.',
  },
  {
    q: 'Há garantia para os acessórios?',
    a: 'Sim. Os produtos possuem garantia conforme fabricante e política da loja.',
  },
]

const SOCIAL_POSTS = [
  { network: 'Instagram', handle: '@vsprodutos', text: 'Novas capinhas premium já disponíveis na loja.' },
  { network: 'TikTok', handle: '@vsprodutos', text: 'Review rápido: smartwatch com ótimo custo-benefício.' },
  { network: 'Instagram', handle: '@vsprodutos', text: 'Kit gamer em promoção por tempo limitado.' },
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
              <a href="https://wa.me/5571983689018" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Chamar no WhatsApp
              </a>
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

      <section className="offer-strip reveal">
        <div className="container offer-strip__inner">
          <div>
            <p className="text-label-bold offer-strip__tag">Oferta por tempo limitado</p>
            <h2 className="text-headline-sm">Semana turbo de descontos — somente até domingo</h2>
          </div>
          <a href="https://wa.me/5571983689018" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Reservar Produto
          </a>
        </div>
      </section>

      <section className="promos section-padding">
        <div className="container">
          <div className="promos__header reveal">
            <h2 className="text-headline-md">Promoções da Semana</h2>
            <p className="text-body-md promos__subtitle">Ofertas especiais para quem quer economizar sem perder qualidade.</p>
          </div>
          <div className="promos__grid">
            {WEEKLY_PROMOS.map((promo, i) => (
              <article key={promo.title} className="promo-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-label-bold promo-card__badge">{promo.discount}</p>
                <h3 className="text-headline-sm">{promo.title}</h3>
                <p className="text-body-md promo-card__detail">{promo.detail}</p>
                <a href="https://wa.me/5571983689018" target="_blank" rel="noopener noreferrer" className="btn-outline promo-card__cta">
                  Garantir oferta
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="best-sellers section-padding">
        <div className="container">
          <div className="best-sellers__header reveal">
            <h2 className="text-headline-md">Mais Vendidos</h2>
          </div>
          <ul className="best-sellers__list">
            {BEST_SELLERS.map((item, i) => (
              <li key={item} className="best-sellers__item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="text-body-lg">{item}</span>
              </li>
            ))}
          </ul>
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

      <section className="stats section-padding">
        <div className="container stats__grid">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stats__card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="text-headline-md stats__value">{stat.value}</p>
              <p className="text-body-md stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials section-padding">
        <div className="container">
          <div className="testimonials__header reveal">
            <h2 className="text-headline-md">O que nossos clientes dizem</h2>
          </div>
          <div className="testimonials__grid">
            {TESTIMONIALS.map((item, i) => (
              <article key={item.name} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="testimonial-card__top">
                  <img src={item.avatar} alt={item.name} className="testimonial-card__avatar" />
                  <div>
                    <p className="text-body-lg testimonial-card__name">{item.name}</p>
                    <p className="text-label-bold testimonial-card__rate">
                      <span className="material-symbols-outlined filled">star</span>{item.rate}
                    </p>
                  </div>
                </div>
                <p className="text-body-md testimonial-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section-padding">
        <div className="container">
          <div className="gallery__header reveal">
            <h2 className="text-headline-md">Galeria da Loja e Produtos</h2>
          </div>
          <div className="gallery__grid">
            {GALLERY.map((img, i) => (
              <div key={img} className="gallery__item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <img src={img} alt={`Galeria VS Produtos ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="short-videos section-padding">
        <div className="container">
          <div className="short-videos__header reveal">
            <h2 className="text-headline-md">Vídeos Curtos de Produtos</h2>
          </div>
          <div className="short-videos__grid">
            {SHORT_VIDEOS.map((video, i) => (
              <article key={video.title} className="video-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="video-card__media">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-body-md video-card__title">{video.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section-padding">
        <div className="container">
          <div className="faq__header reveal">
            <h2 className="text-headline-md">Perguntas Frequentes</h2>
          </div>
          <div className="faq__list">
            {FAQ_ITEMS.map((item, i) => (
              <details key={item.q} className="faq__item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <summary className="text-body-lg">{item.q}</summary>
                <p className="text-body-md">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="social-proof section-padding">
        <div className="container">
          <div className="social-proof__header reveal">
            <h2 className="text-headline-md">Acompanhe a VS nas Redes</h2>
          </div>
          <div className="social-proof__grid">
            {SOCIAL_POSTS.map((post, i) => (
              <article key={`${post.network}-${i}`} className="social-proof__post reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <p className="text-label-bold social-proof__network">{post.network}</p>
                <p className="text-body-md social-proof__handle">{post.handle}</p>
                <p className="text-body-md social-proof__text">{post.text}</p>
              </article>
            ))}
          </div>
          <div className="social-proof__actions reveal">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">Ver Instagram</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">Ver TikTok</a>
          </div>
        </div>
      </section>

      <section className="cta-strip section-padding reveal">
        <div className="container cta-strip__inner">
          <h2 className="text-headline-md">Pronto para escolher seu próximo produto?</h2>
          <div className="cta-strip__actions">
            <a href="https://wa.me/5571983689018" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Chamar no WhatsApp</a>
            <Link to="/produtos" className="btn-primary">Ver Catálogo</Link>
            <a href="https://wa.me/5571983689018?text=Olá!%20Quero%20reservar%20um%20produto." target="_blank" rel="noopener noreferrer" className="btn-outline">Reservar Produto</a>
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
