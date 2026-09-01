import useReveal from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 bg-ink text-cream min-h-[550px] flex items-center justify-center"
    >
      {/* Importação do stylesheet da Devicon */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* ================= ÍCONES DEV ESPELHADOS EM REDOR ================= */}

      {/* --- CIMA --- */}
      <div className="absolute top-6 left-1/4 hidden md:flex flex-col items-center opacity-30 animate-float-slow pointer-events-none z-0">
        <i className="devicon-typescript-plain text-3xl text-cream"></i>
        <i className="devicon-typescript-plain text-3xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center opacity-25 animate-float-slower pointer-events-none z-0">
        <i className="devicon-javascript-plain text-4xl text-cream"></i>
        <i className="devicon-javascript-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute top-6 right-1/4 hidden md:flex flex-col items-center opacity-30 animate-float-slow pointer-events-none z-0">
        <i className="devicon-react-original text-3xl text-cream"></i>
        <i className="devicon-react-original text-3xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      {/* --- ESQUERDA --- */}
      <div className="absolute left-6 top-20 hidden lg:flex flex-col items-center opacity-35 animate-float-slower pointer-events-none z-0">
        <i className="devicon-vscode-plain text-4xl text-cream"></i>
        <i className="devicon-vscode-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center opacity-30 animate-float-slow pointer-events-none z-0">
        <i className="devicon-nodejs-plain text-4xl text-cream"></i>
        <i className="devicon-nodejs-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute left-10 bottom-12 hidden md:flex flex-col items-center opacity-25 animate-float-slower pointer-events-none z-0">
        <i className="devicon-tailwindcss-original text-4xl text-cream"></i>
        <i className="devicon-tailwindcss-original text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      {/* --- DIREITA --- */}
      <div className="absolute right-6 top-20 hidden lg:flex flex-col items-center opacity-35 animate-float-slow pointer-events-none z-0">
        <i className="devicon-nextjs-plain text-4xl text-cream"></i>
        <i className="devicon-nextjs-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center opacity-30 animate-float-slower pointer-events-none z-0">
        <i className="devicon-html5-plain text-4xl text-cream"></i>
        <i className="devicon-html5-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute right-10 bottom-12 hidden md:flex flex-col items-center opacity-25 animate-float-slow pointer-events-none z-0">
        <i className="devicon-css3-plain text-4xl text-cream"></i>
        <i className="devicon-css3-plain text-4xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      {/* --- BAIXO --- */}
      <div className="absolute bottom-4 left-1/3 hidden lg:flex flex-col items-center opacity-25 animate-float-slower pointer-events-none z-0">
        <i className="devicon-git-plain text-3xl text-cream"></i>
        <i className="devicon-git-plain text-3xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      <div className="absolute bottom-4 right-1/3 hidden lg:flex flex-col items-center opacity-25 animate-float-slow pointer-events-none z-0">
        <i className="devicon-github-original text-3xl text-cream"></i>
        <i className="devicon-github-original text-3xl text-cream -scale-y-100 opacity-20 blur-[1px] mt-0.5"></i>
      </div>

      {/* ================= CONTEÚDO PRINCIPAL ================= */}

      <div ref={ref} className="reveal max-w-4xl mx-auto px-6 text-center z-10 relative">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-cream/60 mb-5 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
          <i className="devicon-code-plain text-yellow-400"></i>
          <span>Desenvolvimento Web & Performance</span>
        </div>
        
        {/* H1 no tamanho intermédio ideal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05]">
          Ajudamos voce a mostrar ao mundo
           o que o seu <br className="hidden md:block" /> negocio faz
        </h1>
        
        <p className="mt-5 text-cream/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Criamos plataformas digitais e websites de alta performance para transformar a tua presença online e impulsionar resultados reais.
        </p>

        {/* Botões CTA */}
        <div className="mt-7 flex flex-wrap gap-3.5 justify-center">
          <a
            href="#contacto"
            className="bg-yellow-400 text-ink font-semibold px-6 py-3.5 rounded-pod-sm text-[15px] hover:-translate-y-0.5 transition-transform"
          >
            Iniciar Projeto →
          </a>
          <a
            href="#projetos"
            className="border-[1.5px] border-cream/40 text-cream font-semibold px-6 py-3.5 rounded-pod-sm text-[15px] hover:bg-cream hover:text-ink hover:-translate-y-0.5 transition-all"
          >
            Ver Projetos
          </a>
        </div>
      </div>
    </section>
  )
}
