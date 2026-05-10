import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers',  label: 'Careers' },
  { to: '/contact',  label: 'Contact' },
]

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3 group shrink-0">
      <img src="/logo.svg" alt="AMC Group" className="h-10 w-10 rounded-lg object-contain" />
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-base tracking-wider">AMC Group</span>
        <span className="text-gold-400/70 text-[10px] tracking-widest uppercase font-medium">
          Structural Engineering Firm
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      {/* ── Main bar — always solid ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900 shadow-md shadow-navy-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide px-4 py-2 transition-colors duration-200 ${
                      isActive ? 'text-gold-400' : 'text-white/75 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen modal ────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden flex flex-col bg-navy-950 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/5 shrink-0">
          <Logo onClick={() => setOpen(false)} />
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links — centered, large */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-bold tracking-wide transition-colors duration-150 ${
                  isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-6 border-t border-white/5 shrink-0">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-sm tracking-widest uppercase px-6 py-4 transition-colors duration-200"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
