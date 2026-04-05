import { Link } from 'react-router-dom'
import {
  ArrowRight, MapPin, Clock, Layers,
  HardHat, Search, BookOpen, Users,
  TrendingUp, Shield, ChevronDown, ChevronUp
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

// ── Culture ───────────────────────────────────────────────────────────────
const CULTURE_POINTS = [
  {
    icon: BookOpen,
    title: 'Engineer-Led Learning',
    desc: 'Every junior engineer is mentored directly by a senior. We don\'t outsource development to HR programs.',
  },
  {
    icon: TrendingUp,
    title: 'Technical Growth Path',
    desc: 'Clear progression from graduate to senior to principal — defined by engineering output, not tenure.',
  },
  {
    icon: Shield,
    title: 'Technical Ownership',
    desc: 'You own your calculations. You sign your drawings. You take responsibility — and get full credit.',
  },
  {
    icon: Users,
    title: 'Small Team, High Impact',
    desc: 'We\'re a focused practice. Every engineer contributes meaningfully from day one.',
  },
]

function Culture() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <p className="section-label">Working at AMC Group</p>
            <h2 className="section-title mb-5">
              A Practice Where Engineers Do Engineering
            </h2>
            <div className="divider-gold mb-7" />
            <div className="space-y-4 text-steel-600 leading-relaxed text-base">
              <p>
                At AMC Group, technical output is the product. We don't value engineers for hours logged or reports filed — we value them for the precision of their calculations, the quality of their judgment, and the reliability of their work under pressure.
              </p>
              <p>
                We're a small practice by design. That means you'll work on multiple project types, gain breadth across disciplines, and have direct access to senior leadership — not because of an open-door policy, but because we sit in the same room.
              </p>
              <p>
                If you want to grow technically, take ownership of your work, and build a reputation on the quality of what you produce — this is where you do it.
              </p>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CULTURE_POINTS.map(({ icon: Icon, title, desc }, i) => (
              <CultureCard key={title} icon={Icon} title={title} desc={desc} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CultureCard({ icon: Icon, title, desc, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-steel-50 p-6 border-t-2 border-gold-400 transition-all duration-700 ${
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

// ── Open Positions ─────────────────────────────────────────────────────────
const POSITIONS = [
  {
    id: 1,
    title: 'Structural Engineer — RC & Steel Design',
    type: 'Full-Time',
    level: 'Mid-Senior Level',
    location: 'Cairo, Egypt',
    icon: Layers,
    summary:
      'Lead structural analysis and design of RC and steel buildings from concept through shop drawing stage. Manage design packages, review calculations, and coordinate with architectural and MEP teams.',
    requirements: [
      'Bachelor\'s degree in Civil Engineering (Structural MSc preferred)',
      '5–10 years of structural design experience',
      'Proficiency in ETABS, SAP2000, and AutoCAD/Revit',
      'Familiarity with Egyptian and international building codes (ECP, AISC, ACI)',
      'Experience with foundation design and geotechnical coordination',
    ],
    responsibilities: [
      'Perform structural analysis for RC and steel building systems',
      'Produce and review structural calculations and drawings',
      'Coordinate with clients, architects, and sub-consultants',
      'Review shop drawings and respond to RFIs',
      'Mentor junior engineers on analysis methodology',
    ],
  },
  {
    id: 2,
    title: 'Site Engineer — Construction Supervision',
    type: 'Full-Time',
    level: 'Junior–Mid Level',
    location: 'Cairo & Project Sites, Egypt',
    icon: HardHat,
    summary:
      'Represent AMC Group on active construction sites. Enforce compliance with structural drawings and specifications, review contractor workmanship, and issue technical reports to the project team.',
    requirements: [
      'Bachelor\'s degree in Civil Engineering',
      '3–7 years of site supervision experience',
      'Strong knowledge of RC construction methods and standards',
      'Ability to read and interpret structural drawings accurately',
      'Excellent written and verbal communication skills',
    ],
    responsibilities: [
      'Conduct daily/weekly site inspections and report findings',
      'Approve concrete pours and steel placement',
      'Issue non-conformance reports (NCRs) and track resolution',
      'Coordinate material testing and acceptance',
      'Maintain site supervision records for project dossier',
    ],
  },
  {
    id: 3,
    title: 'Forensic & Rehabilitation Engineer',
    type: 'Full-Time',
    level: 'Senior Level',
    location: 'Cairo, Egypt',
    icon: Search,
    summary:
      'Lead forensic investigations and structural rehabilitation design assignments. Prepare technical expert reports for legal, insurance, and regulatory proceedings. Interact directly with legal counsel and arbitrators.',
    requirements: [
      'Master\'s degree in Structural Engineering required',
      '10+ years of structural engineering experience',
      'Prior involvement in forensic investigation or litigation support',
      'Strong understanding of failure mechanics and materials behaviour',
      'Ability to prepare and defend expert testimony',
    ],
    responsibilities: [
      'Conduct structural condition assessments and failure investigations',
      'Coordinate materials testing (NDT, coring, chemical analysis)',
      'Prepare independent expert reports to legal evidentiary standards',
      'Provide expert witness testimony in arbitration or court proceedings',
      'Design remediation and rehabilitation schemes for distressed structures',
    ],
  },
]

function PositionCard({ position, delay = 0 }) {
  const [ref, inView] = useInView()
  const [open, setOpen] = useState(false)
  const Icon = position.icon

  return (
    <div
      ref={ref}
      className={`border border-steel-200 hover:border-gold-400/50 transition-all duration-300 bg-white duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-navy-900 flex items-center justify-center shrink-0 mt-0.5">
              <Icon size={18} className="text-gold-400" />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-lg leading-snug mb-2">{position.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="bg-gold-400/10 text-gold-700 px-2.5 py-1 font-semibold">{position.level}</span>
                <span className="flex items-center gap-1 text-steel-500">
                  <Clock size={11} /> {position.type}
                </span>
                <span className="flex items-center gap-1 text-steel-500">
                  <MapPin size={11} /> {position.location}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(o => !o)}
            className="shrink-0 p-2 hover:bg-steel-50 text-steel-400 hover:text-navy-900 transition-colors mt-0.5"
            aria-label={open ? 'Collapse' : 'Expand'}
          >
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        <p className="text-steel-600 text-sm leading-relaxed mt-4">{position.summary}</p>
      </div>

      {/* Expandable details */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="border-t border-steel-100 px-7 pb-7 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-navy-900 mb-4">Requirements</h4>
              <ul className="space-y-2.5">
                {position.requirements.map(r => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-steel-600">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-navy-900 mb-4">Responsibilities</h4>
              <ul className="space-y-2.5">
                {position.responsibilities.map(r => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-steel-600">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 pt-6 border-t border-steel-100">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Apply for This Position <ArrowRight size={15} />
            </Link>
            <p className="text-xs text-steel-400 mt-3">
              Send your CV and a brief cover note to <a href="mailto:careers@amc-group.com" className="underline hover:text-navy-900">careers@amc-group.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function OpenPositions() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">Open Positions</p>
          <h2 className="section-title mb-4">Current Opportunities</h2>
          <div className="divider-gold" />
          <p className="text-steel-600 mt-5 max-w-xl">
            We hire deliberately. Every opening is a genuine need — and every hire is expected to contribute at a high technical level from the start.
          </p>
        </div>

        <div className="space-y-4">
          {POSITIONS.map((position, i) => (
            <PositionCard key={position.id} position={position} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpontaneousCTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-label text-gold-400 text-center">Don't See Your Role?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Exceptional Engineers Are Always Welcome
        </h2>
        <p className="text-steel-300 mb-8 max-w-xl mx-auto leading-relaxed">
          If you're a structural engineer with strong technical credentials and you believe you'd raise the quality of our team — send us your CV. We review every unsolicited application from qualified engineers.
        </p>
        <a
          href="mailto:careers@amc-group.com"
          className="btn-primary"
        >
          Send Your CV <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build Your Engineering Career at AMC Group"
        subtitle="We're looking for structural engineers who take technical precision seriously and want to do meaningful, consequential engineering work."
      />
      <Culture />
      <OpenPositions />
      <SpontaneousCTA />
    </>
  )
}
