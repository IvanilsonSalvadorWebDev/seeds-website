import useReveal from '../hooks/useReveal'

const stats = [
  { value: '120+', label: 'projetos entregues em vários setores' },
  { value: '2.4x', label: 'aumento médio em taxa de conversão' },
  { value: '98%', label: 'de clientes que voltam a trabalhar connosco' },
]

export default function Stats() {
  const ref = useReveal()

  return (
    <section className="py-16 md:py-20 bg-paper">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            {/* Alterado de text-seed-orangeDark para text-yellow-600 */}
            <p className="font-display text-4xl md:text-5xl font-semibold text-yellow-600">
              {stat.value}
            </p>
            <p className="mt-2 text-ink-soft text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

