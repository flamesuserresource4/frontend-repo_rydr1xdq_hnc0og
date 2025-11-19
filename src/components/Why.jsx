import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Workflow, LineChart, Headphones, Cog } from 'lucide-react'

const points = [
  { icon: Zap, title: 'Speed to value', desc: 'Launch a production pilot in under two weeks with measurable outcomes.' },
  { icon: Workflow, title: 'End-to-end automation', desc: 'From capture to action — we orchestrate across your full toolchain.' },
  { icon: ShieldCheck, title: 'Enterprise-grade safety', desc: 'Granular permissions, audit trails, and policy controls by default.' },
  { icon: LineChart, title: 'ROI-first approach', desc: 'Dashboards that track time saved, cost avoided, and quality uplift.' },
  { icon: Headphones, title: 'Dedicated experts', desc: 'A success engineer embedded with your team for smooth rollout.' },
  { icon: Cog, title: 'Tailored to your stack', desc: 'We integrate with your CRMs, ERPs, spreadsheets, and internal APIs.' },
]

function Why() {
  return (
    <section id="why" className="relative py-20">
      {/* Hero header colors backdrop for this section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(72% 60% at 50% -8%, rgba(124,58,237,0.17) 0%, rgba(37,99,235,0.12) 42%, rgba(255,255,255,0) 70%)' }} />
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
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
            Why choose Flames Automation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70"
          >
            We pair AI agents with robust governance to deliver dependable, compounding results.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent p-6 hover:from-purple-500/15 hover:via-blue-500/15 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/15 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why
