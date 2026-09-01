import useReveal from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section id="contacto" className="py-24 md:py-32 bg-ink text-cream">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.02]">
          Que tal falarmos sobre
          <br className="hidden md:block" /> o teu negócio?
        </h2>
        <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
          Conta-nos o que precisas e a nossa equipa entra em contacto em até 24 horas com uma
          proposta.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          {/* Botão Email (Destaque Principal - Amarelo) */}
          <a
            href="mailto:ola@seeds.co"
            className="bg-yellow-400 text-ink font-semibold px-7 py-3.5 rounded-pod-sm text-[15px] hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2 shadow-sm"
          >
            <i className="devicon-google-plain text-lg"></i>
            <span>ola@seeds.co</span>
          </a>

          {/* Botão WhatsApp (Equivalente em tom Emerald/Verde Escuro Elegante) */}
          <a
            href="https://wa.me/351000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3.5 rounded-pod-sm text-[15px] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <i className="devicon-whatsapp-plain text-xl"></i>
            <span>WhatsApp</span>
          </a>

          {/* Botão Voltar ao topo (Ação Secundária - Outlined) */}
          <a
            href="#top"
            className="border-[1.5px] border-cream/40 text-cream font-semibold px-7 py-3.5 rounded-pod-sm text-[15px] hover:bg-cream hover:text-ink hover:-translate-y-0.5 transition-all"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </section>
  )
}
