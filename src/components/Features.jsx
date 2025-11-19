import { motion } from 'framer-motion'
import { Workflow, MessagesSquare, Zap, ShieldCheck, Database, LineChart } from 'lucide-react'

const featureItems = [
  {
    icon: Workflow,
    title: 'Process automation',
    desc: 'Orchestrate multi-step workflows across tools with human-in-the-loop where it matters.'
  },
  {
    icon: MessagesSquare,
    title: 'AI voice & chat agents',
    desc: 'Inbound and outbound agents that qualify leads, resolve tickets, and book appointments.'
  },
  { icon: Database, title: 'System integrations', desc: 'Connect CRMs, ERPs, spreadsheets, and internal APIs with robust data sync.' },
  { icon: ShieldCheck, title: 'Governance & safety', desc: 'Granular permissions, audit trails, and policy controls built-in.' },
  { icon: LineChart, title: 'Measurable ROI', desc: 'Dashboards that track time saved, cost avoided, and quality improvements.' },
  { icon: Zap, title: 'Fast implementation', desc: 'From discovery to live automations in under two weeks on average.' },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            Built for operations that value precision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70"
          >
            We deploy proven automations tailored to your processes, then continuously optimize with data.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition"
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

export default Features
