import useReveal from '../hooks/useReveal'

export default function About() {
  const imgRef = useReveal()
  const textRef = useReveal()

  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div ref={imgRef} className="reveal relative order-2 md:order-1">
          <div className="rounded-pod-alt overflow-hidden relative aspect-[4/3] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80&auto=format&fit=crop"
              alt="Equipa da seeds a trabalhar em conjunto num projeto digital"
              className="w-full h-full object-cover"
            />
            {/* Gradiente atualizado de laranja para amarelo suave */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(200deg, rgba(234,179,8,0.18), rgba(23,19,16,0.05))',
              }}
            />
          </div>
          <div className="absolute -right-5 -top-5 md:-right-8 md:-top-8 bg-paper border border-black/5 rounded-pod-sm shadow-lg px-5 py-4 md:px-6 md:py-5">
            <p className="font-display text-2xl md:text-3xl font-semibold text-yellow-600">
              2 anos
            </p>
            <p className="text-xs text-ink-soft mt-1">a fazer negócios crescerem online</p>
          </div>
        </div>

        <div ref={textRef} className="reveal order-1 md:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 mb-4">
            Quem somos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Uma equipa pequena, resultados que não param de crescer.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed text-lg">
            Somos designers e programadores que acreditam que um bom site não é só bonito — tem
            de vender, converter e representar a marca com precisão. Trabalhamos lado a lado com
            cada cliente, do primeiro esboço ao lançamento.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="font-display text-2xl font-semibold text-yellow-600">3+</p>
              <p className="text-sm text-ink-soft mt-1">especialistas em design & código</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-yellow-600">8</p>
              <p className="text-sm text-ink-soft mt-1">setores diferentes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

