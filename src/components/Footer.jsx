import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, ArrowUpRight } from 'lucide-react'

const services = [
  'Structural Design',
  'Construction Supervision',
  'Quality Control / QA',
  'Repair & Rehabilitation',
  'Forensic Engineering',
  'Real Estate Appraisal',
]

const company = [
  { label: 'About Us',  to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Careers',   to: '/careers' },
  { label: 'Contact',   to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      {/* Top strip */}
      <div className="bg-gold-400 h-1 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold-400 flex items-center justify-center">
                <span className="text-navy-900 font-black text-xs tracking-wider">AMC</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wider">AMC Group</span>
                <span className="text-gold-400/60 text-[10px] tracking-widest uppercase">Engineering Consultants</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Precision civil engineering consulting based in Cairo, Egypt. From structural design to forensic assessment — excellence at every stage.
            </p>
            <p className="text-gold-400 font-semibold text-sm italic">
              "Crafting Strength, Delivering Excellence."
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-gold-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-gold-400/50 group-hover:bg-gold-400 rounded-full transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-gold-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-gold-400/50 group-hover:bg-gold-400 rounded-full transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm">Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href="tel:+201000000000" className="text-sm hover:text-gold-400 transition-colors">+20 100 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a href="mailto:info@amc-group.com" className="text-sm hover:text-gold-400 transition-colors">info@amc-group.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={15} className="text-gold-400 shrink-0" />
                <a
                  href="https://www.linkedin.com/company/am-c-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold-400 transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} AMC Group. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Civil Engineering Consulting — Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
