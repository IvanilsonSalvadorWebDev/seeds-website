const items = ['e-commerce', 'landing pages', 'web apps', 'branding digital', 'SEO técnico']

function Track({ ariaHidden = false }) {
  return (
    <span className="flex items-center gap-16" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-16">
          <span>{item}</span>
          <span>·</span>
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <section className="border-y border-black/5 bg-cream py-6 overflow-hidden">
      <div className="flex w-max gap-16 animate-marquee font-display text-2xl md:text-3xl text-ink/25 font-medium whitespace-nowrap">
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  )
}
