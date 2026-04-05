import { Link } from 'react-router-dom'
import {
  ArrowRight, Layers, HardHat, ClipboardCheck,
  Wrench, Search, TrendingUp, Building2,
  CheckCircle
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    id: 'structural-design',
    icon: Layers,
    title: 'Structural Design',
    tagline: 'Engineered for Load. Optimized for Life.',
    description:
      'We design structural systems in reinforced concrete, structural steel, masonry, and timber — from low-rise residential to complex multi-story commercial and industrial facilities. Our designs prioritize safety, material efficiency, and long-term structural performance.',
    value:
      'You receive a structurally sound, code-compliant design that minimizes material cost without compromising safety or serviceability — backed by full engineering calculations and drawing packages.',
    deliverables: [
      'Structural Analysis & Calculations',
      'Foundation Design',
      'Structural Drawings & Details',
      'Bill of Quantities (Structural)',
      'Code Compliance Documentation',
      'Shop Drawing Review',
    ],
    materials: ['Reinforced Concrete', 'Structural Steel', 'Masonry', 'Timber'],
  },
  {
    id: 'supervision',
    icon: HardHat,
    title: 'Construction Supervision',
    tagline: 'Design Intent, Enforced on Site.',
    description:
      'Construction is where engineering decisions become physical reality — and where deviations can have serious consequences. Our supervision service provides licensed structural engineers on-site to enforce compliance with structural drawings, specifications, and material standards throughout the construction process.',
    value:
      'Prevent costly rework and structural defects by catching non-conformances at the point of construction — not after the fact. Our supervision is a technical safeguard, not a bureaucratic process.',
    deliverables: [
      'Site Visit Reports',
      'Non-Conformance Notices',
      'Concrete Pour Approvals',
      'Steel Erection Sign-Offs',
      'Material Acceptance Certifications',
      'Final Structural Completion Report',
    ],
    materials: null,
  },
  {
    id: 'qcqa',
    icon: ClipboardCheck,
    title: 'Quality Control / QA',
    tagline: 'Standards Are Non-Negotiable.',
    description:
      'Our QC/QA service provides independent quality assurance for construction projects, material procurement, and subcontractor performance. We develop project-specific QC plans, conduct field inspections, coordinate material testing, and maintain documentation that satisfies regulatory and client requirements.',
    value:
      'Reduce structural risk and regulatory exposure. A rigorous QC/QA program protects developers, contractors, and asset owners from defect liability and compliance failure.',
    deliverables: [
      'QC Plan Development',
      'Inspection & Test Plans (ITP)',
      'Material Testing Coordination',
      'Third-Party Inspection Reports',
      'NCR (Non-Conformance Report) Tracking',
      'Project Quality Dossier',
    ],
    materials: null,
  },
  {
    id: 'repair-rehabilitation',
    icon: Wrench,
    title: 'Structural Repair & Rehabilitation',
    tagline: 'Extend Service Life. Restore Structural Integrity.',
    description:
      'Aging infrastructure, design deficiencies, environmental deterioration, and misuse can all compromise structural performance over time. We provide comprehensive assessment and rehabilitation design for buildings, bridges, and civil structures — restoring load capacity, code compliance, and serviceable life.',
    value:
      'Rehabilitation is frequently more economical than replacement. Our assessments are technically defensible and our repair designs are engineered — not generic patch solutions.',
    deliverables: [
      'Structural Condition Survey Report',
      'Materials Testing & Analysis',
      'Residual Capacity Assessment',
      'Rehabilitation Design & Drawings',
      'Repair Specification',
      'Construction Supervision (Repair Works)',
    ],
    materials: null,
  },
  {
    id: 'forensic',
    icon: Search,
    title: 'Forensic Structural Engineering',
    tagline: 'Root Cause. Expert Opinion. Defensible Evidence.',
    description:
      'When structures fail — or are alleged to have failed — the cause must be established with technical rigour. AMC Group conducts independent forensic investigations into structural distress, collapse, and performance failures. Our reports are prepared to the evidentiary standard required in legal, arbitration, and insurance proceedings.',
    value:
      'An independent, technically rigorous forensic report is the foundation of any structural dispute. Our investigations are conducted without bias and documented to withstand cross-examination.',
    deliverables: [
      'Site Investigation & Documentation',
      'Material Sampling & Laboratory Testing',
      'Structural Analysis & Failure Modelling',
      'Expert Forensic Report',
      'Expert Witness Testimony',
      'Remediation Recommendations',
    ],
    materials: null,
  },
  {
    id: 'value-engineering',
    icon: TrendingUp,
    title: 'Value Engineering',
    tagline: 'Optimized Performance. Reduced Cost.',
    description:
      'Value engineering is the systematic analysis of structural systems to identify opportunities for cost reduction without compromising safety, performance, or quality. We review structural designs at concept, schematic, and detailed design stages — identifying over-designed elements, proposing efficient alternatives, and quantifying the financial impact of each option.',
    value:
      'Structural over-design is expensive. Value engineering typically achieves 8–15% savings on structural cost — the equivalent of significant budget recovery before construction begins.',
    deliverables: [
      'Value Engineering Study Report',
      'Alternative Structural System Proposals',
      'Cost-Benefit Analysis',
      'Revised Structural Calculations',
      'Updated Drawing Package (if applicable)',
      'Risk Assessment of Alternatives',
    ],
    materials: null,
  },
  {
    id: 'real-estate-appraisal',
    icon: Building2,
    title: 'Real Estate Appraisal',
    tagline: 'Technically Grounded. Financially Relevant.',
    description:
      'Our structural engineering perspective provides a technical foundation for real estate valuations that conventional appraisers cannot offer. We assess structural condition, remaining service life, rehabilitation cost exposure, and compliance status — factors that directly impact asset value but are frequently ignored in standard appraisals.',
    value:
      'For investors, banks, and legal counsel, a structurally-informed appraisal provides a more accurate basis for transaction pricing, financing decisions, and legal proceedings.',
    deliverables: [
      'Structural Condition Assessment',
      'Remaining Service Life Estimate',
      'Rehabilitation Cost Estimate',
      'Compliance Gap Report',
      'Asset Valuation Addendum (Technical)',
      'Due Diligence Report',
    ],
    materials: null,
  },
]

function ServiceBlock({ service, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0
  const Icon = service.icon

  return (
    <section
      id={service.id}
      ref={ref}
      className={`py-20 transition-all duration-700 ${
        isEven ? 'bg-white' : 'bg-steel-50'
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 bg-navy-900 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-gold-400" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-500">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">{service.title}</h2>
            <p className="text-gold-600 font-semibold italic mb-5">{service.tagline}</p>
            <div className="w-10 h-0.5 bg-gold-400 mb-7" />
            <p className="text-steel-600 leading-relaxed text-base max-w-2xl">{service.description}</p>
          </div>

          {/* Materials badge (only for structural design) */}
          {service.materials && (
            <div className="lg:w-1/3">
              <div className="bg-navy-900 p-6">
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Structural Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map(m => (
                    <span key={m} className="bg-navy-800 text-white text-xs px-3 py-1.5 font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Value + Deliverables grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Value to Client */}
          <div className="bg-navy-900 p-8">
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Value to Client
            </p>
            <p className="text-steel-300 leading-relaxed text-sm">{service.value}</p>
          </div>

          {/* Key Deliverables */}
          <div className="border border-steel-200 p-8">
            <p className="text-navy-900 text-xs font-semibold tracking-widest uppercase mb-5">
              Key Deliverables
            </p>
            <ul className="space-y-2.5">
              {service.deliverables.map(d => (
                <li key={d} className="flex items-center gap-3 text-sm text-steel-700">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-label text-gold-400 text-center">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Which Service Do You Need?
        </h2>
        <p className="text-steel-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Tell us about your project. We'll identify the right engineering scope and provide a direct, no-obligation technical proposal.
        </p>
        <Link to="/contact" className="btn-primary">
          Request a Technical Proposal <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

// Quick nav anchors
function ServicesNav() {
  const [ref, inView] = useInView()

  return (
    <section className={`bg-white border-b border-steel-100 sticky top-16 lg:top-20 z-40 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0">
          {SERVICES.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 text-xs font-medium text-steel-600 hover:text-navy-900 hover:bg-steel-50 px-4 py-4 transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-gold-400"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Precision Engineering Across Every Discipline"
        subtitle="Seven integrated service lines — each staffed by licensed engineers, each delivering technically defensible output."
      />
      <ServicesNav />
      {SERVICES.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
      <ServicesCTA />
    </>
  )
}
