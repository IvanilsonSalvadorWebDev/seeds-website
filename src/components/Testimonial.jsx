import useReveal from '../hooks/useReveal'

export default function Testimonial() {
  const ref = useReveal()

  return (
    <section className="py-24 md:py-28 bg-yellow-500">
      <div ref={ref} className="reveal max-w-3xl mx-auto px-6 text-center">
        <svg className="mx-auto mb-8" width="40" height="32" viewBox="0 0 40 32" fill="none">
          <path
            d="M0 32V19.6C0 8.4 6.4 1.2 17.6 0l2 5.2C13.2 6.8 9.2 10.8 8.8 16.4H17.6V32H0ZM22.4 32V19.6C22.4 8.4 28.8 1.2 40 0L42 5.2C35.6 6.8 31.6 10.8 31.2 16.4H40V32H22.4Z"
            fill="#171310"
            opacity="0.55"
          />
        </svg>
        <p className="font-display text-2xl md:text-3xl font-medium leading-snug text-ink">
          A seeds entendeu o nosso negócio antes de desenhar o primeiro ecrã. Em três meses, o
          site passou a ser o nosso principal canal de vendas.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=80&auto=format&fit=crop"
            alt="Retrato de Marta Alves"
            className="w-14 h-14 rounded-full object-cover border-2 border-ink/10 shadow-md"
          />
          <div className="text-left">
            <p className="font-semibold text-ink/80">Ivanilson Salvador</p>
            <p className="text-sm text-ink/60">Fundador, Raiz Café</p>
          </div>
        </div>
      </div>
    </section>
  )
}
