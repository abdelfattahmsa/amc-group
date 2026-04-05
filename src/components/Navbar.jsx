import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers',  label: 'Careers' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const navBg = scrolled
    ? 'bg-navy-900/97 backdrop-blur-md shadow-lg shadow-navy-950/30'
    : isHome
      ? 'bg-transparent'
      : 'bg-navy-900'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gold-400 flex items-center justify-center">
              <span className="text-navy-900 font-black text-xs tracking-wider leading-none">AMC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-wider">AMC Group</span>
              <span className="text-gold-400/70 text-[10px] tracking-widest uppercase font-medium">Engineering Consultants</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-navy-900 border-t border-white/5 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-6 pt-4 gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link px-4 py-3 border-b border-white/5 ${
                  isActive ? 'text-gold-400' : 'text-white/70'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-4 text-center bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-xs tracking-widest uppercase px-5 py-3 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
