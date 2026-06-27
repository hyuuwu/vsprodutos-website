import useReveal from '../hooks/useReveal'
import './Sobre.css'

const STORE_IMG = '/images/store.jpg'
// const MALL_IMG = '/images/mall.jpg' NAO VAI SER MAIS USADA POIS GOOGLE MAPS :P

const VALUES = [
  {
    icon: 'price_check',
    title: 'Custo-Benefício',
    description: 'Soluções tecnológicas com o equilíbrio perfeito entre qualidade e preço justo, garantindo o melhor retorno para nossos clientes desde 2008.',
  },
  {
    icon: 'inventory_2',
    title: 'Tudo em Um Só Lugar',
    description: 'Produtos e serviços integrados em um único ponto. De acessórios para celular a conserto de relógios, você resolve tudo aqui.',
  },
  {
    icon: 'engineering',
    title: 'Atendimento Especializado',
    description: 'Equipe técnica experiente para assistência, manutenção e reparos rápidos em diversos tipos de dispositivos e acessórios.',
  },
]

const SERVICES = [
  {
    icon: 'phone_android',
    title: 'Assistência Técnica',
    description: 'Conserto e manutenção de notebooks, desktops, celulares e tablets.',
  },
  {
    icon: 'key',
    title: 'Serviços de Chaveiro',
    description: 'Cópia de chaves e troca de pilhas de controles e chaves automotivas.',
  },
  {
    icon: 'watch',
    title: 'Serviços em Relógios',
    description: 'Polimento, revisão geral e troca de pilhas.',
  },
  {
    icon: 'visibility',
    title: 'Serviços em Óculos',
    description: 'Ajustes e reparos em geral, como troca de parafusos e molas.',
  },
  {
    icon: 'diamond',
    title: 'Jóias e Semijóias',
    description: 'Soldas, polimento e reparos diversos em jóias e semijóias.',
  },
]

export default function Sobre() {
  const containerRef = useReveal()

  return (
    <div className="page-enter" ref={containerRef}>
      {/* Hero */}
      <section className="sobre-hero section-padding">
        <div className="container">
          <div className="sobre-hero__grid reveal">
            <div className="sobre-hero__content">
              <h1 className="text-display-lg sobre-hero__title">
                Nossa História
              </h1>
              <div className="sobre-hero__divider" />
              <p className="text-body-lg sobre-hero__desc">
                A <strong>VS Produtos e Serviços</strong> é uma loja tradicional que atua no mercado
                desde <strong>2008</strong>. Funcionamos como um centro integrado de soluções, combinando a
                venda de uma enorme variedade de produtos com múltiplos serviços de manutenção e
                assistência de forma rápida e prática — <em>tudo em um só lugar</em>.
              </p>
              <p className="text-body-lg sobre-hero__desc" style={{ marginTop: '16px' }}>
                Também conhecida como <strong>VS Produtos</strong> ou simplesmente <strong>VS</strong>, nossa loja
                é referência em tecnologia e soluções de ponta no Shopping Bela Vista, Salvador - BA.
              </p>
            </div>
            <div className="sobre-hero__image-wrapper">
              <img
                src={"https://lh3.googleusercontent.com/gps-cs-s/APNQkAGYTrJQDlTgLFT1ZZ2hbaG8eTB-Of6s64yZmXHA6IL_tgw5i-vD3PKVL6UCcncIs0GKafEuMWBxmSLbMU0_FhxTpjNXUfvtw7xkoOHCeqjJD93Vn8kIhWclNCh06mstC3yjCRGB"}
                alt="Interior da loja VS Produtos e Serviços"
                className="sobre-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="valores section-padding">
        <div className="container">
          <div className="valores__header reveal">
            <h2 className="text-headline-md">Nossos Pilares</h2>
            <p className="text-body-md valores__subtitle">
              O compromisso com a excelência técnica e comercial guia todas as nossas operações desde 2008.
            </p>
          </div>
          <div className="valores__grid">
            {VALUES.map((val, i) => (
              <div key={i} className="value-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="value-card__icon">
                  <span className="material-symbols-outlined">{val.icon}</span>
                </div>
                <h3 className="text-headline-sm value-card__title">{val.title}</h3>
                <p className="text-body-md value-card__desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="servicos section-padding">
        <div className="container">
          <div className="servicos__header reveal">
            <span className="servicos__tag">Nosso Diferencial</span>
            <h2 className="text-headline-md">Serviços Oferecidos</h2>
            <p className="text-body-md servicos__subtitle">
              O grande diferencial da VS é a ampla gama de serviços de assistência técnica e reparos rápidos.
            </p>
          </div>
          <div className="servicos__grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card__icon">
                  <span className="material-symbols-outlined">{svc.icon}</span>
                </div>
                <div className="service-card__content">
                  <h3 className="text-headline-sm service-card__title">{svc.title}</h3>
                  <p className="text-body-md service-card__desc">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location & Contact Card */}
      <section className="sobre-location section-padding">
        <div className="container">
          <div className="sobre-location__card reveal">
            <div className="sobre-location__content">
              <div className="sobre-location__badge">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
                Visite Nossa Loja
              </div>
              <h2 className="text-headline-md sobre-location__title">Localização e Contato</h2>
              <p className="text-body-lg sobre-location__desc">
                Estamos localizados estrategicamente próximos ao SAC do Shopping Bela Vista,
                facilitando o acesso para todos os clientes.
              </p>

              <div className="sobre-location__details">
                <div className="sobre-location__detail">
                  <span className="material-symbols-outlined sobre-location__detail-icon">storefront</span>
                  <div>
                    <p className="text-label-bold sobre-location__detail-label">Shopping Bela Vista</p>
                    <p className="text-body-md sobre-location__detail-value">1º Piso · Próximo ao SAC</p>
                  </div>
                </div>

                <div className="sobre-location__detail">
                  <span className="material-symbols-outlined sobre-location__detail-icon">chat</span>
                  <div>
                    <p className="text-label-bold sobre-location__detail-label">WhatsApp / Telefone</p>
                    <a href="https://wa.me/5571983689018" target="_blank" rel="noopener noreferrer" className="sobre-location__contact-link">
                      (71) 98368-9018
                    </a>
                  </div>
                </div>

                <div className="sobre-location__detail">
                  <span className="material-symbols-outlined sobre-location__detail-icon">photo_camera</span>
                  <div>
                    <p className="text-label-bold sobre-location__detail-label">Instagram</p>
                    <a href="https://instagram.com/vsprodutos" target="_blank" rel="noopener noreferrer" className="sobre-location__contact-link">
                      @vsprodutos
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5571983689018"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary sobre-location__cta"
              >
                <span className="material-symbols-outlined">chat</span>
                Fale Conosco via WhatsApp
              </a>
            </div>
            <div className="sobre-location__map-wrapper">
              <iframe
                title="VS Produtos e Serviços - Shopping Bela Vista"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0100181137564!2d-38.4744676!3d-12.971210600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3dc08ee8af%3A0x22f74f5845460619!2sVS%20Produtos%20e%20Servi%C3%A7os%20-%20Shopping%20Bela%20Vista!5e0!3m2!1sen!2sbr!4v1779137809424!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
