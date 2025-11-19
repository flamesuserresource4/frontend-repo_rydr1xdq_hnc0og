import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Solutions' },
    { href: '#process', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
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
