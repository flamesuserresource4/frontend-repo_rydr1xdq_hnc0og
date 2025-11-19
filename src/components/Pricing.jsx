import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Pilot',
    price: 'From $4,000',
    points: [
      '1 core workflow automated',
      'Up to 3 integrations',
      'Dedicated success engineer',
      '2-week implementation',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    points: [
      'Multiple workflows automated',
      'Advanced governance & SSO',
      'Custom integrations & APIs',
      'Quarterly ROI reviews',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            Simple plans that scale with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70"
          >
            Start with a pilot to prove value, then expand coverage as your ROI grows.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-white/60">{t.name}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:bg-white/90 transition">
                Talk to an expert
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
