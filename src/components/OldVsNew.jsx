import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

function Bullet({ good, children }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${good ? 'bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-400/30' : 'bg-red-400/20 text-red-300 ring-1 ring-red-400/30'}`}>
        {good ? <Check size={14} /> : <X size={14} />}
      </span>
      <span className="text-white/80">{children}</span>
    </li>
  )
}

function OldVsNew() {
  return (
    <section id="ways" className="relative py-20">
      {/* Hero header colors backdrop for this section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 60% at 50% -6%, rgba(124,58,237,0.16) 0%, rgba(37,99,235,0.12) 40%, rgba(255,255,255,0) 70%)' }} />
        <div className="absolute bottom-[-12%] left-[-10%] h-[520px] w-[520px] rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          The traditional way vs. the AI-powered way
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/70 max-w-2xl"
        >
          See how teams reduce manual work and deliver faster with an AI workforce.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-900 p-6"
          >
            <div className="text-white/60">Traditional</div>
            <ul className="mt-4 space-y-2">
              <Bullet good={false}>Manual data entry between tools</Bullet>
              <Bullet good={false}>Slow handoffs and gaps in coverage</Bullet>
              <Bullet good={false}>Expensive to scale staffing</Bullet>
              <Bullet good={false}>Limited visibility into ROI</Bullet>
            </ul>
          </motion.div>

          {/* New */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent p-6"
          >
            <div className="text-white/60">AI-powered with Flames</div>
            <ul className="mt-4 space-y-2">
              <Bullet good>Automated workflows across your stack</Bullet>
              <Bullet good>24/7 agents for voice, chat, and back office</Bullet>
              <Bullet good>Scales elastically with demand</Bullet>
              <Bullet good>Dashboards tie automation to outcomes</Bullet>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OldVsNew
