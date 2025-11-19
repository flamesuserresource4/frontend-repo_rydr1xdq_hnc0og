import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#why', label: 'Why us' },
    { href: '#features', label: 'Solutions' },
    { href: '#ways', label: 'Old vs New' },
    { href: '#process', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Hero-color gradient backdrop blending under the nav */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(60%_55%_at_50%_0%, rgba(124,58,237,0.28) 0%, rgba(37,99,235,0.16) 38%, rgba(255,255,255,0) 70%)' }} />
        <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[conic-gradient(from_180deg_at_50%_50%,#7c3aed22_0deg,#2563eb18_120deg,#f59e0b14_240deg,#7c3aed22_360deg)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur supports-[backdrop-filter]:bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="text-white font-semibold tracking-tight text-lg">
              <span className="sr-only">Flames Automation</span>
              Flames.AI Automation
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#get-started" className="ml-2 inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:bg-white/90 transition">
                Get started
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-4">
              <div className="flex flex-col gap-2 pt-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                    {l.label}
                  </a>
                ))}
                <a href="#get-started" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow-sm">
                  Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
