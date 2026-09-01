import useReveal from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-24 md:pb-28 bg-ink text-cream min-h-[600px] flex items-center"
    >
      <div ref={ref} className="reveal max-w-4xl mx-auto px-6 text-center z-10">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-cream/60 mb-6">
          Desenvolvimento Web & Performance
        </p>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.02]">
          Vamos plantar a próxima
          <br className="hidden md:block" /> grande ideia do teu negócio?
        </h1>
        
        <p className="mt-6 text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Criamos plataformas digitais e websites de alta performance para transformar a tua presença online e impulsionar resultados reais.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-yellow-400 text-ink font-semibold px-8 py-4 rounded-pod-sm text-[15px] hover:-translate-y-0.5 transition-transform"
          >
            Iniciar Projeto →
          </a>
          <a
            href="#projetos"
            className="border-[1.5px] border-cream/40 text-cream font-semibold px-8 py-4 rounded-pod-sm text-[15px] hover:bg-cream hover:text-ink hover:-translate-y-0.5 transition-all"
          >
            Ver Projetos
          </a>
        </div>
      </div>
    </section>
  )
}
