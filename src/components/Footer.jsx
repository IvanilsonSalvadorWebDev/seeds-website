import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contacto', label: 'Contacto' },
]

const serviceLinks = [
  { href: '#servicos', label: 'Sites institucionais' },
  { href: '#servicos', label: 'Lojas online' },
  { href: '#servicos', label: 'Web apps' },
  { href: '#servicos', label: 'SEO & performance' },
]

const socials = [
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#171310" stroke="none" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'X / Twitter',
    fill: true,
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-6.9L4.4 22H1.3l8.1-9.3L1 2h7.3l5 6.3L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z" />
    ),
  },
  {
    label: 'WhatsApp',
    fill: true,
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
    ),
  },
]

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[380px]"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        O teu email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="oteuemail@exemplo.com"
        className="flex-1 px-5 py-4 rounded-pod-sm bg-cream text-ink placeholder:text-ink/40 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
      />
      <button
        type="submit"
        className="font-semibold px-6 py-4 rounded-pod-sm text-sm whitespace-nowrap bg-yellow-400 text-ink hover:brightness-95 transition"
      >
        {submitted ? 'Subscrito ✓' : 'Subscrever'}
      </button>
    </form>
  )
}

export default function Footer() {
  const newsletterRef = useReveal()
  const columnsRef = useReveal()

  return (
    <footer className="bg-ink text-cream/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* newsletter */}
        <div
          ref={newsletterRef}
          className="reveal rounded-pod bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-400 mb-3">
              Newsletter
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream leading-snug">
              Ideias sobre web e crescimento digital, direto na tua caixa de entrada.
            </h3>
            <p className="mt-3 text-sm text-cream/55">
              Sem spam. Enviamos só o que vale a pena ler, uma vez por mês.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* main footer content */}
        <div ref={columnsRef} className="reveal mt-16 grid md:grid-cols-[1.2fr,0.8fr,0.8fr,0.8fr] gap-10">
          <div>
            <span className="font-display text-2xl text-cream">seeds</span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Agência de desenvolvimento web que ajuda negócios a crescer com tecnologia moderna
              e design que converte.
            </p>
            <div className="flex gap-3 mt-6 text-cream ">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 bg-yellow-400"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={social.fill ? '#171310' : 'none'}
                    stroke={social.fill ? undefined : '#171310'}
                    strokeWidth={social.fill ? undefined : '2'}
                    strokeLinecap={social.fill ? undefined : 'round'}
                    strokeLinejoin={social.fill ? undefined : 'round'}
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/40 mb-4">
              Navegar
            </p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-cream transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/40 mb-4">
              Serviços
            </p>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-cream transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/40 mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:ola@seeds.co" className="hover:text-cream transition-colors">
                  info@seeds.co.ao
                </a>
              </li>
              <li>
                <a href="tel:+244937026331" className="hover:text-cream transition-colors">
                  +244 937 026 331
                </a>
              </li>
              <li className="text-cream/50">Luanda, Angola</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} seeds. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              Termos de uso
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

