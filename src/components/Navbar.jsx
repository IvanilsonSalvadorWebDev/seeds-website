const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-3 mt-3 md:mx-6 md:mt-4 backdrop-blur-md bg-ink border border-black/5 rounded-pod-sm shadow-sm">
        <nav className="flex items-center justify-between px-5 py-3 md:px-7 md:py-4">
          <a href="#top" className="font-display text-2xl md:text-[26px] font-semibold tracking-tight text-yellow-500 p-2 ">
            seeds
          </a>

          <div className="hidden md:flex items-center gap-8 font-medium text-[15px] text-rock-100 ">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-yellow-500 text-white  transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="bg-yellow-500 text-white hover:bg-yellow-600 hover:-translate-y-0.5 transition-all text-sm md:text-[15px] font-semibold px-4 py-2.5 md:px-5 md:py-3 rounded-pod-sm"
          >
            Pedir orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
