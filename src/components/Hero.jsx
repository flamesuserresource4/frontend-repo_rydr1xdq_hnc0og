import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function GradientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7c3aed_0deg,#2563eb_120deg,#f59e0b_240deg,#7c3aed_360deg)] blur-3xl opacity-20" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40">
      <GradientGlow />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          {/* Headline block centered with premium circular glow behind */}
          <div className="relative w-full max-w-4xl text-center">
            {/* Circle behind the heading, echoing the right card glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.35) 0%, rgba(37,99,235,0.18) 45%, rgba(255,255,255,0) 70%)' }} />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Automate your business with an AI workforce
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
            >
              Replace repetitive manual tasks with reliable AI automations. From lead capture to back-office ops, our agents work 24/7, integrate with your stack, and scale on demand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:bg-white/90 transition">
                Get a proposal
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-inset ring-white/20 hover:bg-white/15 transition">
                Explore solutions
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-6 text-white/70 sm:grid-cols-4"
          >
            {[
              ['60%+', 'Less manual work'],
              ['<14 days', 'From idea to automation'],
              ['24/7', 'Always-on agents'],
              ['ROI-first', 'Automations that pay back'],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-xl font-semibold text-white">{stat}</div>
                <div className="text-sm text-white/70">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Spline scene card */}
          <div className="relative mt-12 h-[460px] w-full max-w-5xl sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
