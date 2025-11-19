import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      {/* Hero header colors backdrop for this section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 60% at 50% -10%, rgba(124,58,237,0.16) 0%, rgba(37,99,235,0.12) 40%, rgba(255,255,255,0) 70%)' }} />
        <div className="absolute -bottom-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(124,58,237,0.25),transparent)]" />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-2xl sm:text-3xl font-semibold text-white"
          >
            Ready to remove manual work from your roadmap?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative mt-2 text-white/70 max-w-2xl"
          >
            Tell us your top 2-3 pain points and we’ll send back a tailored automation proposal within 48 hours.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative mt-6 grid gap-3 sm:grid-cols-6"
          >
            <input type="text" placeholder="Work email" className="sm:col-span-3 rounded-lg bg-white/10 text-white placeholder-white/50 px-4 py-3 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-white/30" />
            <input type="text" placeholder="Top pain point" className="sm:col-span-3 rounded-lg bg-white/10 text-white placeholder-white/50 px-4 py-3 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-white/30" />
            <button className="sm:col-span-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:bg-white/90 transition">
              Get my proposal
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default CTA
