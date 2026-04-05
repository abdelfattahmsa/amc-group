import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown,
  Layers, HardHat, ClipboardCheck, Wrench,
  Search, TrendingUp, Building2,
  Shield, Award, Clock, Users, CheckCircle
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import SectionWrapper from '../components/SectionWrapper'

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900/40" />

      {/* Geometric accent — engineering blueprint feel */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-800/30 to-transparent" />
        {/* Structural grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 600 800" fill="none">
          <line x1="100" y1="0" x2="100" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="500" y1="0" x2="500" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="600" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="600" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="500" x2="600" y2="500" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="600" y2="600" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="700" x2="600" y2="700" stroke="white" strokeWidth="0.5" />
          <rect x="150" y="250" width="300" height="300" stroke="#d4a017" strokeWidth="1" fill="none" opacity="0.3" />
          <rect x="175" y="275" width="250" height="250" stroke="#d4a017" strokeWidth="0.5" fill="none" opacity="0.2" />
          <line x1="150" y1="400" x2="450" y2="400" stroke="#d4a017" strokeWidth="1" opacity="0.4" />
          <line x1="300" y1="250" x2="300" y2="550" stroke="#d4a017" strokeWidth="1" opacity="0.4" />
          <circle cx="300" cy="400" r="8" fill="#d4a017" opacity="0.5" />
          <circle cx="150" cy="250" r="4" fill="white" opacity="0.5" />
          <circle cx="450" cy="250" r="4" fill="white" opacity="0.5" />
          <circle cx="150" cy="550" r="4" fill="white" opacity="0.5" />
          <circle cx="450" cy="550" r="4" fill="white" opacity="0.5" />
        </svg>
      </div>

      {/* Gold vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-8 bg-gold-400" />
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Civil Engineering Consultants — Cairo, Egypt
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-up">
            Engineering
            <span className="block text-gold-400">Structures That</span>
            <span className="block">Last Generations.</span>
          </h1>

          <p className="text-steel-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up animation-delay-200">
            From structural design to forensic assessment — AMC Group delivers precision civil engineering across every phase of your project lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Our Projects
            </Link>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10 animate-fade-up animation-delay-400">
            {[
              { value: '15+', label: 'Years of Experience' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '7',   label: 'Core Disciplines' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-gold-400">{value}</div>
                <div className="text-white/50 text-xs tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}

// ── Services Overview ──────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Layers,
    title: 'Structural Design',
    desc: 'Steel, concrete, masonry, and timber structures engineered for performance, safety, and longevity.',
    color: 'bg-navy-800',
  },
  {
    icon: HardHat,
    title: 'Construction Supervision',
    desc: 'On-site technical oversight ensuring execution aligns precisely with design specifications.',
    color: 'bg-navy-800',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control / QA',
    desc: 'Rigorous QC/QA frameworks that maintain code compliance and eliminate costly defects.',
    color: 'bg-navy-800',
  },
  {
    icon: Wrench,
    title: 'Repair & Rehabilitation',
    desc: 'Structural assessment and remediation for aging, damaged, or non-compliant structures.',
    color: 'bg-navy-800',
  },
  {
    icon: Search,
    title: 'Forensic Engineering',
    desc: 'Root-cause analysis of structural failures. Independent, evidence-based reporting.',
    color: 'bg-navy-800',
  },
  {
    icon: TrendingUp,
    title: 'Value Engineering',
    desc: 'Cost optimization without compromise — extracting maximum value from every structural solution.',
    color: 'bg-navy-800',
  },
  {
    icon: Building2,
    title: 'Real Estate Appraisal',
    desc: 'Technically grounded property valuations for investment, compliance, and transaction purposes.',
    color: 'bg-navy-800',
  },
]

function ServicesSection() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="section-title max-w-xl">
              Full-Spectrum Civil Engineering Services
            </h2>
            <Link to="/services" className="btn-outline shrink-0">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="divider-gold mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-steel-100">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <ServiceCard key={title} icon={Icon} title={title} desc={desc} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, desc, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white p-7 group hover:bg-navy-900 transition-all duration-300 cursor-pointer transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 bg-gold-400/10 group-hover:bg-gold-400/20 flex items-center justify-center mb-5 transition-colors">
        <Icon size={20} className="text-gold-500 group-hover:text-gold-400" />
      </div>
      <h3 className="text-navy-900 group-hover:text-white font-bold text-base mb-2.5 transition-colors">{title}</h3>
      <p className="text-steel-600 group-hover:text-steel-300 text-sm leading-relaxed transition-colors">{desc}</p>
      <div className="mt-5 flex items-center gap-2 text-gold-500 group-hover:text-gold-400 text-xs font-semibold tracking-wide uppercase transition-colors">
        Learn More <ArrowRight size={12} />
      </div>
    </div>
  )
}

// ── Why Choose Us ─────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: 'Technical Precision',
    desc: 'Every calculation, drawing, and specification is reviewed to the highest engineering standards.',
  },
  {
    icon: Award,
    title: 'Licensed & Experienced',
    desc: 'Our team comprises licensed structural engineers with decades of combined field experience.',
  },
  {
    icon: Clock,
    title: 'Full Project Lifecycle',
    desc: 'We engage from concept design through final handover — no gaps, no handoff surprises.',
  },
  {
    icon: Users,
    title: 'Client-Centered Approach',
    desc: 'Direct access to senior engineers throughout your project. No account managers, no noise.',
  },
]

function WhyChooseUs() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <p className="section-label">Why AMC Group</p>
            <h2 className="section-title mb-5">
              Engineering Credibility You Can Build On
            </h2>
            <div className="divider-gold mb-6" />
            <p className="section-subtitle mb-8">
              We don't broker consultancy. Every engagement is led by senior structural engineers with direct accountability for technical output. Our clients include developers, contractors, government bodies, and legal firms requiring expert structural testimony.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map(({ icon: Icon, title, desc }, i) => (
              <DiffCard key={title} icon={Icon} title={title} desc={desc} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DiffCard({ icon: Icon, title, desc, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white p-6 border-l-2 border-gold-400 shadow-sm transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon size={22} className="text-gold-500 mb-4" />
      <h4 className="font-bold text-navy-900 mb-2">{title}</h4>
      <p className="text-sm text-steel-600 leading-relaxed">{desc}</p>
    </div>
  )
}

// ── Featured Projects ─────────────────────────────────────────────────────
const FEATURED_PROJECTS = [
  {
    id: 1,
    tag: 'Structural Design',
    title: 'Mixed-Use Tower — New Cairo',
    desc: 'Structural design and supervision for a 24-story reinforced concrete tower with basement levels.',
    scope: 'RC Frame Design · Foundation Engineering · Shop Drawing Review',
  },
  {
    id: 2,
    tag: 'Rehabilitation',
    title: 'Heritage Building Retrofit — Downtown Cairo',
    desc: 'Seismic retrofit and structural rehabilitation of a 1930s load-bearing masonry structure.',
    scope: 'Condition Assessment · Retrofit Design · Construction Supervision',
  },
  {
    id: 3,
    tag: 'Forensic Engineering',
    title: 'Industrial Facility Failure Analysis',
    desc: 'Post-incident forensic investigation of a steel mezzanine collapse with legal documentation.',
    scope: 'Failure Analysis · Expert Testimony · Remediation Plan',
  },
]

function FeaturedProjects() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label text-gold-400">Selected Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight">
              Projects That Define Our Standard
            </h2>
            <Link to="/projects" className="btn-secondary shrink-0">
              Full Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="divider-gold mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-navy-800/50 hover:bg-navy-800 p-8 group transition-all duration-300 transition-opacity duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image placeholder */}
      <div className="w-full h-44 bg-navy-700 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 size={40} className="text-navy-500 group-hover:text-navy-400 transition-colors" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors" />
      </div>

      <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
        {project.tag}
      </span>
      <h3 className="text-white font-bold text-lg mb-3 leading-snug">{project.title}</h3>
      <p className="text-steel-400 text-sm leading-relaxed mb-5">{project.desc}</p>
      <p className="text-steel-500 text-xs leading-relaxed border-t border-white/5 pt-4">{project.scope}</p>
    </div>
  )
}

// ── Stats / Trust Section ─────────────────────────────────────────────────
const STATS = [
  { value: '15+', label: 'Years in Practice', icon: Clock },
  { value: '200+', label: 'Projects Completed', icon: CheckCircle },
  { value: '50+', label: 'Repeat Clients', icon: Users },
  { value: '7', label: 'Engineering Disciplines', icon: Layers },
]

function StatsSection() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-white border-t border-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center group">
              <Icon size={20} className="text-gold-400 mx-auto mb-4" />
              <div className="text-4xl lg:text-5xl font-black text-navy-900 mb-2">{value}</div>
              <div className="text-steel-500 text-sm tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Final CTA ─────────────────────────────────────────────────────────────
function FinalCTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-400/30" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-label text-gold-400 text-center">Start Your Project</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Build with Confidence?
        </h2>
        <p className="text-steel-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Speak directly with a senior structural engineer. No consultants, no intermediaries — just precise, accountable engineering advice.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Request a Consultation <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <StatsSection />
      <FinalCTA />
    </>
  )
}
