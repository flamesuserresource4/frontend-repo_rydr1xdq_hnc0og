import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discovery workshop',
    desc: 'We map your current process, systems, and KPIs to identify automation leverage.'
  },
  {
    title: 'Pilot automation',
    desc: 'We implement a high-ROI use case first to validate value in production quickly.'
  },
  {
    title: 'Scale & governance',
    desc: 'We expand coverage, add guardrails, and hand you dashboards that track ROI.'
  },
]

function Process() {
  return (
    <section id="process" className="relative py-20">
      {/* Hero header colors backdrop for this section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(75% 60% at 50% -10%, rgba(124,58,237,0.16) 0%, rgba(37,99,235,0.12) 40%, rgba(255,255,255,0) 70%)' }} />
        <div className="absolute -top-16 -left-24 h-[520px] w-[520px] rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            A proven path from idea to impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70"
          >
            We partner closely with your team and deliver measurable outcomes at each step.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent p-6"
            >
              <div className="text-white/60">Step {i + 1}</div>
              <div className="mt-2 text-lg font-medium text-white">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
