import useReveal from '../hooks/useReveal'

const steps = [
  {
    step: '01 · Raiz',
    title: 'Descoberta',
    desc: 'Mergulhamos no teu negócio, objetivos e público para definir a estratégia certa.',
  },
  {
    step: '02 · Germinar',
    title: 'Design',
    desc: 'Criamos uma identidade visual e protótipos alinhados com a tua marca e com quem a vai usar.',
  },
  {
    step: '03 · Crescer',
    title: 'Desenvolvimento',
    desc: 'Construímos com tecnologia moderna, testando performance e usabilidade em cada etapa.',
  },
  {
    step: '04 · Florescer',
    title: 'Lançamento',
    desc: 'Publicamos, acompanhamos os resultados e ajudamos o projeto a continuar a crescer.',
  },
]

function Step({ item }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal">
      <span className="font-mono text-sm text-yellow-400">{item.step}</span>
      <h3 className="font-display text-xl font-semibold mt-3 mb-2">{item.title}</h3>
      <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function Process() {
  const headingRef = useReveal()

  return (
    <section id="processo" className="py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/50 mb-4">
            Como trabalhamos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Da semente à colheita, em quatro fases.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((item) => (
            <Step key={item.step} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

