import { Link } from 'react-router-dom'
import {
  ArrowRight, Target, Eye, Compass,
  Shield, Award, TrendingUp, Users,
  CheckCircle, Layers, HardHat
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'

// ── Overview ───────────────────────────────────────────────────────────────
function Overview() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text */}
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title mb-5">
              An Engineering Practice Built on Technical Accountability
            </h2>
            <div className="divider-gold mb-7" />
            <div className="space-y-4 text-steel-600 leading-relaxed">
              <p>
                AMC Group is a Cairo-based civil engineering consultancy delivering structural engineering services across the full project lifecycle. Our practice was founded on a single principle: that engineering decisions must be made by engineers — not delegated, not approximated.
              </p>
              <p>
                We work directly with developers, contractors, government authorities, legal teams, and property investors who require technically defensible, precisely executed engineering solutions.
              </p>
              <p>
                From the structural design of new construction to the forensic assessment of distressed structures, every engagement is staffed and led by licensed senior engineers with direct accountability for deliverables.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="btn-outline">
                Work With Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="bg-navy-900 p-10 relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-400" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-400" />
              <div className="space-y-6">
                {[
                  { n: '15+', l: 'Years of Active Practice' },
                  { n: '200+', l: 'Completed Projects' },
                  { n: '50+', l: 'Long-Term Client Relationships' },
                  { n: '7', l: 'Engineering Service Lines' },
                ].map(({ n, l }) => (
                  <div key={l} className="flex items-center gap-5 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <span className="text-4xl font-black text-gold-400 w-24 shrink-0">{n}</span>
                    <span className="text-white/70 text-sm leading-snug">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Offset accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold-400/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mission & Vision ────────────────────────────────────────────────────────
function MissionVision() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label text-center">Purpose & Direction</p>
          <h2 className="section-title text-center max-w-2xl mx-auto mb-14">
            What Drives Us Forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-steel-200">
          {[
            {
              icon: Target,
              label: 'Mission',
              title: 'Deliver Engineering That Earns Trust',
              body: 'To provide civil engineering consulting services of the highest technical standard — ensuring that every structure we design, supervise, or assess is safe, durable, and precisely engineered for its intended purpose.',
            },
            {
              icon: Eye,
              label: 'Vision',
              title: 'Egypt\'s Reference Structural Consultancy',
              body: 'To be recognized as the leading structural engineering consultancy in Egypt — defined not by scale, but by the technical integrity, repeatability, and independent authority of our engineering output.',
            },
            {
              icon: Compass,
              label: 'Approach',
              title: 'Engineer-Led. Evidence-Based.',
              body: 'No assumptions without data. No recommendations without analysis. We engage every project with the same rigor — whether it\'s a residential retrofit or a large-scale infrastructure assessment.',
            },
          ].map(({ icon: Icon, label, title, body }) => (
            <div key={label} className="bg-white p-10 relative group hover:bg-navy-900 transition-colors duration-300">
              <div className="absolute top-0 left-10 w-12 h-0.5 bg-gold-400" />
              <Icon size={28} className="text-gold-500 group-hover:text-gold-400 mb-6 transition-colors" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 group-hover:text-gold-400 mb-3 block transition-colors">
                {label}
              </span>
              <h3 className="text-navy-900 group-hover:text-white font-bold text-xl mb-4 leading-snug transition-colors">
                {title}
              </h3>
              <p className="text-steel-600 group-hover:text-steel-300 text-sm leading-relaxed transition-colors">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Core Values ────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Shield,
    title: 'Technical Integrity',
    desc: 'Engineering decisions are only as good as the data behind them. We never present assumptions as conclusions.',
  },
  {
    icon: Award,
    title: 'Precision in Execution',
    desc: 'From calculations to site supervision — accuracy is non-negotiable. Detail discipline is the standard, not the exception.',
  },
  {
    icon: TrendingUp,
    title: 'Efficiency Through Analysis',
    desc: 'We optimize structures for cost, material, and performance simultaneously — value engineering isn\'t a service, it\'s a mindset.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'Long-term relationships built through consistent delivery. Our best clients come back — and bring others with them.',
  },
  {
    icon: CheckCircle,
    title: 'Independent Authority',
    desc: 'Our forensic and QC/QA assessments are independent, defensible, and designed to stand scrutiny in any context.',
  },
  {
    icon: Layers,
    title: 'Lifecycle Commitment',
    desc: 'We engage at concept stage and stay through handover. Disjointed involvement is a structural risk we don\'t accept.',
  },
]

function CoreValues() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title max-w-xl">
            Engineering Values. Not Corporate Slogans.
          </h2>
          <div className="divider-gold mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <ValueCard key={title} icon={Icon} title={title} desc={desc} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueCard({ icon: Icon, title, desc, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`flex gap-5 p-6 border border-steel-100 hover:border-gold-400/30 hover:shadow-md transition-all duration-300 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 bg-navy-900 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={18} className="text-gold-400" />
      </div>
      <div>
        <h4 className="font-bold text-navy-900 mb-2">{title}</h4>
        <p className="text-sm text-steel-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

// ── Team Section ────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: 'Dr. [Name]',
    title: 'Founder & Principal Structural Engineer',
    spec: 'RC & Steel Frame Design · Seismic Engineering',
    exp: '20+ years',
  },
  {
    name: 'Eng. [Name]',
    title: 'Senior Structural Engineer',
    spec: 'Foundation Design · Geotechnical Integration',
    exp: '15+ years',
  },
  {
    name: 'Eng. [Name]',
    title: 'Construction Supervision Lead',
    spec: 'Site QA/QC · Specification Compliance',
    exp: '12+ years',
  },
  {
    name: 'Eng. [Name]',
    title: 'Forensic & Rehabilitation Specialist',
    spec: 'Failure Analysis · Expert Reporting',
    exp: '18+ years',
  },
]

function TeamSection() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label text-gold-400">The Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Senior Engineers. Direct Engagement.
          </h2>
          <div className="divider-gold mt-5" />
          <p className="text-steel-300 mt-6 max-w-2xl">
            Our team is structured so that every client has direct access to the senior engineer responsible for their project. No layers, no juniors as the sole point of contact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 100} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            Work With Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-navy-800/60 hover:bg-navy-800 p-8 transition-all duration-300 transition-opacity duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Avatar placeholder */}
      <div className="w-16 h-16 bg-navy-700 border border-white/10 flex items-center justify-center mb-6">
        <HardHat size={24} className="text-gold-400" />
      </div>
      <h4 className="text-white font-bold mb-1">{member.name}</h4>
      <p className="text-gold-400 text-xs font-medium mb-3 leading-snug">{member.title}</p>
      <p className="text-steel-400 text-xs leading-relaxed mb-4">{member.spec}</p>
      <span className="inline-block bg-gold-400/10 text-gold-400 text-xs px-3 py-1 font-medium">
        {member.exp} experience
      </span>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <PageHero
        label="About AMC Group"
        title="Engineer-Led. Evidence-Based. Built on Trust."
        subtitle="Cairo's premier structural engineering consultancy — delivering precision from design concept to final handover."
      />
      <Overview />
      <MissionVision />
      <CoreValues />
      <TeamSection />
    </>
  )
}
