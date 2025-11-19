import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Global soft gradient for the entire page (one continuous background) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.10),transparent)]" />
        <div className="absolute -top-20 -left-20 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-3xl" />
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
