import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Unified hero-color background spanning the entire page */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Radial glow echoing the hero header, stretched site-wide */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 55% at 50% 0%, rgba(124,58,237,0.28) 0%, rgba(37,99,235,0.16) 38%, rgba(255,255,255,0) 70%)' }} />
        {/* Subtle conic hue to add premium depth */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[conic-gradient(from_180deg_at_50%_50%,#7c3aed22_0deg,#2563eb18_120deg,#f59e0b14_240deg,#7c3aed22_360deg)]" />
        {/* Large ambient glows to keep edges alive without breaking continuity */}
        <div className="absolute -top-24 -left-24 h-[620px] w-[620px] rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[680px] w-[680px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <footer className="relative py-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-white/50">
          <div>© {new Date().getFullYear()} Flames Automation</div>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-white">Solutions</a>
            <a href="#process" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
