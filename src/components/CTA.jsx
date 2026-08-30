import useReveal from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section id="contacto" className="py-24 md:py-32 bg-ink text-cream">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.02]">
          Vamos plantar a próxima
          <br className="hidden md:block" /> grande ideia do teu negócio?
        </h2>
        <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
          Conta-nos o que precisas e a nossa equipa entra em contacto em até 24 horas com uma
          proposta.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:ola@seeds.co"
            className="bg-yellow-400 text-ink font-semibold px-8 py-4 rounded-pod-sm text-[15px] hover:-translate-y-0.5 transition-transform"
          >
            ola@seeds.co
          </a>
          <a
            href="#top"
            className="border-[1.5px] border-cream/40 text-cream font-semibold px-8 py-4 rounded-pod-sm text-[15px] hover:bg-cream hover:text-ink hover:-translate-y-0.5 transition-all"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </section>
  )
}

