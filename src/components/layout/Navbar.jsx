import { Menu } from 'lucide-react'

import kncLogo from '../../assets/icons/knc-logo.svg'
import { profile } from '../../data/profile.js'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="inline-flex items-center gap-3 text-slate-900"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white/90 p-2 shadow-sm shadow-sky-200/50">
            <img
              src={kncLogo}
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-display text-lg tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-sky-100 transition hover:border-sky-300 hover:text-sky-700"
        >
          <Menu className="h-4 w-4 md:hidden" />
          Let&apos;s Talk
        </a>
      </div>
    </header>
  )
}

export default Navbar
