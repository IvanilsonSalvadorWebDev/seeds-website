import useReveal from '../hooks/useReveal'

const services = [
  {
    title: 'Sites institucionais',
    desc: 'Sites rápidos, responsivos e fáceis de gerir, construídos para representar a identidade da tua marca com precisão.',
    shape: 'rounded-pod',
    iconBg: 'bg-seed-orangeSoft',
    iconColor: '#E36F00',
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16" />
        <path d="M9 21V9" />
      </>
    ),
  },
  {
    title: 'Lojas online',
    desc: 'E-commerce pensado para converter — checkout simplificado, pagamentos locais e gestão de catálogo sem complicações.',
    shape: 'rounded-pod-alt',
    iconBg: 'bg-sprout-soft',
    iconColor: '#3E8E56',
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </>
    ),
  },
  {
    title: 'Plataformas & web apps',
    desc: 'Sistemas à medida — dashboards, portais de clientes e ferramentas internas construídas com tecnologia moderna e escalável.',
    shape: 'rounded-pod-alt',
    iconBg: 'bg-seed-orangeSoft',
    iconColor: '#E36F00',
    icon: (
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    title: 'Otimização & crescimento',
    desc: 'SEO técnico, performance e testes contínuos para transformar cada visita em mais uma oportunidade de negócio.',
    shape: 'rounded-pod',
    iconBg: 'bg-sprout-soft',
    iconColor: '#3E8E56',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
]

function ServiceCard({ service }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${service.shape} bg-paper p-8 md:p-10 border border-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      <div
        className={`w-12 h-12 rounded-pod-sm flex items-center justify-center mb-6 ${service.iconBg}`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={service.iconColor}
          strokeWidth="2"
          strokeLinecap="round"
        >
          {service.icon}
        </svg>
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-ink-soft leading-relaxed">{service.desc}</p>
    </div>
  )
}

export default function Services() {
  const headingRef = useReveal()

  return (
    <section id="servicos" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 mb-4">
            O que fazemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Tudo o que o teu negócio precisa para crescer online.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
