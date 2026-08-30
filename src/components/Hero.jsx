export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 bg-yellow-50 min-h-[600px] flex items-center"
    >
      <div className="grain absolute inset-0 z-10 pointer-events-none" />

      {/* Floating seed pods */}
      <div className="absolute -left-6 top-28 w-16 h-20 bg-orange-100 rounded-pod animate-float-slow hidden md:block z-20" />
      <div className="absolute right-10 top-20 w-10 h-14 bg-white/20 rounded-pod-alt animate-float-slower hidden md:block z-20" />
      <div className="absolute right-1/4 bottom-10 w-8 h-10 bg-orange-100 rounded-pod-alt animate-float-slow hidden lg:block z-20" />

      {/* Imagem espelhada a cobrir todo o lado direito do Hero */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1635397990741-81cb230b154b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Programador a desenvolver uma interface web moderna"
          className="w-full h-full object-cover -scale-x-100"
        />
        {/* Overlay para suavizar a transição com o texto no mobile e desktop */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-seed-orange-200 via-seed-orange-200/60 to-transparent" />
      </div>

      {/* Conteúdo de Texto */}
      <div className="relative max-w-6xl mx-auto px-6 w-full z-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-ink/70 mb-5">
            Desenvolvimento Web & Performance
          </p>
          <h1 className="font-display font-semibold text-ink leading-[0.98] text-5xl sm:text-6xl md:text-7xl">
            Transformamos a
            <span className="block">sua presença web</span>
            <span className="block">em resultados reais.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink/80 max-w-lg leading-relaxed">
            Desenvolvemos plataformas e websites de alta performance, desenhados para captar a atenção do seu público, gerar conversões e impulsionar o seu negócio.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="bg-yellow-500 text-cream hover:bg-seed-orangeDark hover:-translate-y-0.5 transition-all font-semibold px-7 py-4 rounded-pod-sm text-[15px]"
            >
              Iniciar Projeto →
            </a>
            <a
              href="#projetos"
              className="border-[1.5px] border-orange-200 text-ink hover:bg-orange-100 hover:text-orange-500 hover:-translate-y-0.5 transition-all font-semibold px-7 py-4 rounded-pod-sm text-[15px]"
            >
              Explorar Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
