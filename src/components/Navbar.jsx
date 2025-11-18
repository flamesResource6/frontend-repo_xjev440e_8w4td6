import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Platform', href: '#platform' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg ring-1 ring-white/20" />
            <span className="text-white text-lg font-semibold tracking-tight">Astryx</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.7)] transition-shadow">
              Get Started
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white/90" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto max-w-7xl px-6 md:hidden">
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-4 space-y-2">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="block rounded-xl px-4 py-3 text-white/90 hover:bg-white/5">
                {l.name}
              </a>
            ))}
            <a href="#contact" className="block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-3 text-center font-medium text-slate-900">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
