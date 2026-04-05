import { useState } from 'react'
import { MapPin, Phone, Mail, Linkedin, ArrowRight, Send, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'

const SERVICES_LIST = [
  'Structural Design',
  'Construction Supervision',
  'Quality Control / QA',
  'Repair & Rehabilitation',
  'Forensic Engineering',
  'Value Engineering',
  'Real Estate Appraisal',
  'Other / Not Sure',
]

function ContactForm() {
  const [ref, inView] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In production this would POST to a backend / email service
    setSubmitted(true)
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-gold-400/10 flex items-center justify-center mb-6">
            <CheckCircle size={32} className="text-gold-500" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Received</h3>
          <p className="text-steel-600 max-w-sm leading-relaxed">
            Thank you for reaching out. A senior engineer from our team will respond within 1–2 business days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white placeholder-steel-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
                Company / Organisation
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white placeholder-steel-400 transition-colors"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white placeholder-steel-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+20 100 000 0000"
                className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white placeholder-steel-400 transition-colors"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
              Service Required <span className="text-gold-500">*</span>
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white transition-colors appearance-none"
            >
              <option value="" disabled>Select a service</option>
              {SERVICES_LIST.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-navy-900 uppercase mb-2">
              Project Description <span className="text-gold-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your project, its current stage, and what you need from us..."
              className="w-full border border-steel-200 focus:border-navy-500 focus:outline-none px-4 py-3 text-sm text-navy-900 bg-white placeholder-steel-400 transition-colors resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
            Send Enquiry <Send size={15} />
          </button>

          <p className="text-xs text-steel-400">
            We respond within 1–2 business days. For urgent matters, call us directly.
          </p>
        </form>
      )}
    </div>
  )
}

function ContactInfo() {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`space-y-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
    >
      <div>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title mb-4">
          Let's Discuss Your Project
        </h2>
        <div className="divider-gold mb-6" />
        <p className="text-steel-600 leading-relaxed">
          We engage with developers, contractors, government authorities, legal firms, and asset owners who need technically credible structural engineering. Describe your project below and we'll respond with a direct, no-obligation proposal.
        </p>
      </div>

      <div className="space-y-5">
        {[
          {
            icon: MapPin,
            label: 'Office',
            primary: 'Cairo, Egypt',
            secondary: 'Serving projects across Egypt',
          },
          {
            icon: Phone,
            label: 'Phone',
            primary: '+20 100 000 0000',
            secondary: 'Sun–Thu, 9:00 AM – 5:00 PM',
            href: 'tel:+201000000000',
          },
          {
            icon: Mail,
            label: 'Email',
            primary: 'info@amc-group.com',
            secondary: 'Response within 1–2 business days',
            href: 'mailto:info@amc-group.com',
          },
          {
            icon: Linkedin,
            label: 'LinkedIn',
            primary: 'AMC Group',
            secondary: 'Follow our updates',
            href: 'https://www.linkedin.com/company/am-c-group/',
            external: true,
          },
        ].map(({ icon: Icon, label, primary, secondary, href, external }) => (
          <div key={label} className="flex items-start gap-4 p-5 bg-steel-50 border-l-2 border-gold-400">
            <div className="w-9 h-9 bg-navy-900 flex items-center justify-center shrink-0 mt-0.5">
              <Icon size={16} className="text-gold-400" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-steel-500 mb-0.5">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                >
                  {primary}
                </a>
              ) : (
                <p className="text-navy-900 font-semibold">{primary}</p>
              )}
              <p className="text-steel-500 text-sm">{secondary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MapSection() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`bg-steel-50 border-t border-steel-200 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
          <div>
            <p className="section-label">Location</p>
            <h2 className="text-2xl font-bold text-navy-900">Cairo, Egypt</h2>
          </div>
          <a
            href="https://maps.google.com/?q=Cairo,Egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Open in Maps <ArrowRight size={14} />
          </a>
        </div>

        {/* Map embed placeholder */}
        <div className="w-full h-72 bg-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <MapPin size={36} className="text-gold-400" />
            <div className="text-center">
              <p className="text-white font-semibold">AMC Group</p>
              <p className="text-steel-400 text-sm">Cairo, Egypt</p>
            </div>
            <a
              href="https://maps.google.com/?q=Cairo,Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-semibold tracking-widest uppercase text-gold-400 hover:text-gold-300 border border-gold-400/30 hover:border-gold-400 px-5 py-2.5 transition-all"
            >
              View on Google Maps
            </a>
          </div>
          {/* Decorative structural lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 300" fill="none">
            <line x1="0" y1="150" x2="800" y2="150" stroke="white" strokeWidth="1" />
            <line x1="400" y1="0" x2="400" y2="300" stroke="white" strokeWidth="1" />
            <circle cx="400" cy="150" r="80" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="150" r="40" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact AMC Group"
        title="Start the Conversation"
        subtitle="Describe your project and a senior engineer will respond directly — no sales team, no intermediaries."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo />
            <div>
              <div className="bg-steel-50 p-8 border border-steel-200">
                <h3 className="font-bold text-navy-900 text-lg mb-1">Send Us a Project Enquiry</h3>
                <p className="text-steel-500 text-sm mb-7">
                  Fields marked with <span className="text-gold-500">*</span> are required.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  )
}
