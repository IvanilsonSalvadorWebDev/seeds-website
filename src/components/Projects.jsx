import useReveal from '../hooks/useReveal'

const projects = [
  {
    name: 'Barbearia Pente e Lamina',
    category: 'E-commerce',
    desc: 'Loja online e sistema de encomendas para uma torrefação artesanal.',
    // Nova imagem correspondente ao café (image_pSiz0a.png)
    img: 'https://unsplash.com',
    alt: 'Torrefação de café artesanal, projeto Raiz Café',
    // Gradiente atualizado de laranja para amarelo
    overlay: 'linear-gradient(0deg, rgba(23,19,16,0.75), rgba(234,179,8,0.22))',
    nameColor: 'text-white',
    shape: 'rounded-pod',
  },
  {
    name: 'Vento Sul',
    category: 'Site institucional',
    desc: 'Presença digital para uma consultora de arquitetura e engenharia.',
    // Nova imagem correspondente à arquitetura moderna (image_SwNl8e.png)
    img: 'https://unsplash.com',
    alt: 'Estúdio de arquitetura e engenharia, projeto Vento Sul',
    overlay: 'linear-gradient(0deg, rgba(23,19,16,0.75), rgba(62,142,86,0.30))',
    nameColor: 'text-white',
    shape: 'rounded-pod-alt',
  },
  {
    name: 'Nexa Pay',
    category: 'Plataforma web',
    desc: 'Dashboard financeiro para gestão de pagamentos empresariais.',
    // Nova imagem correspondente ao computador com dashboard (image_Q-koGv.png)
    img: 'https://unsplash.com',
    alt: 'Dashboard financeiro, projeto Nexa Pay',
    // Gradiente atualizado de laranja para amarelo
    overlay: 'linear-gradient(0deg, rgba(23,19,16,0.82), rgba(234,179,8,0.20))',
    nameColor: 'text-yellow-500', // Modificado de text-seed-orange para amarelo legível
    shape: 'rounded-pod',
  },
]

function ProjectCard({ project }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${project.shape} overflow-hidden border border-black/5 bg-paper transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      <div className="h-44 relative overflow-hidden">
        <img src={project.img} alt={project.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: project.overlay }} />
        <span className={`absolute bottom-4 left-5 font-display text-2xl font-semibold ${project.nameColor}`}>
          {project.name}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-mono uppercase tracking-wide text-ink/40 mb-2">
          {project.category}
        </p>
        <p className="text-ink-soft text-sm leading-relaxed">{project.desc}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const headingRef = useReveal()

  return (
    <section id="projetos" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 mb-4">
              Projetos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Alguns negócios que já crescemos.
            </h2>
          </div>
          {/* Classes de borda e hover alteradas de laranja para tons amarelos */}
          <a
            href="#contacto"
            className="border-[1.5px] border-yellow-200 text-ink hover:bg-yellow-400 hover:text-ink hover:-translate-y-0.5 transition-all font-semibold px-6 py-3 rounded-pod-sm text-sm"
          >
            Iniciar o teu projeto
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

