import { useState } from 'react'
import { Building2, ArrowRight, MapPin, Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

const FILTERS = ['All', 'Structural Design', 'Supervision', 'QC/QA', 'Rehabilitation', 'Forensic', 'Appraisal']

const PROJECTS = [
  {
    id: 1,
    category: 'Structural Design',
    title: 'Mixed-Use Tower — New Cairo',
    location: 'New Cairo, Egypt',
    year: '2023',
    scope: 'RC Frame Design · Foundation Engineering · Shop Drawing Review',
    description:
      'Structural design and construction supervision for a 24-story reinforced concrete tower comprising residential units, retail podium, and three basement levels. Foundation system optimized for differential settlement control on variable-bearing soils.',
    tags: ['RC Frame', '24 Stories', 'Basement Foundation'],
  },
  {
    id: 2,
    category: 'Rehabilitation',
    title: 'Heritage Building Retrofit — Downtown Cairo',
    location: 'Downtown Cairo, Egypt',
    year: '2022',
    scope: 'Condition Assessment · Seismic Retrofit · Supervision',
    description:
      'Seismic retrofit and structural rehabilitation of a 1930s load-bearing masonry building in the historic downtown district. Structural intervention preserved the architectural character while upgrading seismic performance to current code.',
    tags: ['Masonry', 'Heritage', 'Seismic Retrofit'],
  },
  {
    id: 3,
    category: 'Forensic',
    title: 'Industrial Mezzanine Failure Analysis',
    location: 'Greater Cairo Industrial Zone',
    year: '2023',
    scope: 'Failure Investigation · Expert Report · Legal Testimony',
    description:
      'Post-incident forensic investigation of a steel mezzanine partial collapse in an industrial warehouse. Root cause identified as cumulative connection fatigue exacerbated by unauthorized loading modification. Expert report prepared for legal proceedings.',
    tags: ['Steel', 'Forensic', 'Expert Witness'],
  },
  {
    id: 4,
    category: 'Structural Design',
    title: 'Logistics Hub — 10th of Ramadan City',
    location: '10th of Ramadan, Egypt',
    year: '2021',
    scope: 'Steel Structure Design · Column-Free Layout · QC Plan',
    description:
      'Design of a 12,000 m² long-span steel portal frame warehouse with crane beam integration and mezzanine office. Column-free internal spans achieved through optimized truss geometry and moment frame connections.',
    tags: ['Steel Portal Frame', 'Industrial', '12,000m²'],
  },
  {
    id: 5,
    category: 'QC/QA',
    title: 'Residential Compound — 6th of October City',
    location: '6th of October, Egypt',
    year: '2022',
    scope: 'ITP Development · Third-Party Inspection · QC Reporting',
    description:
      'Independent QC/QA consultancy for a 400-unit residential compound across 7 buildings. Developed project Inspection and Test Plans, coordinated concrete sampling and testing program, and maintained full NCR register through handover.',
    tags: ['QC/QA', '400 Units', 'Residential'],
  },
  {
    id: 6,
    category: 'Supervision',
    title: 'Commercial Tower — Sheikh Zayed',
    location: 'Sheikh Zayed City, Egypt',
    year: '2020',
    scope: 'Full Structural Supervision · Stage Approval Sign-offs',
    description:
      'Structural supervision for a 15-story mixed-use commercial building. Provided continuous licensed engineer presence through substructure, superstructure, and cladding integration stages. Zero structural NCRs at final inspection.',
    tags: ['15 Stories', 'Commercial', 'Supervision'],
  },
  {
    id: 7,
    category: 'Appraisal',
    title: 'Pre-Acquisition Structural Appraisal — Industrial Asset',
    location: 'Cairo Industrial Zone',
    year: '2023',
    scope: 'Structural Condition Survey · Remaining Life Assessment',
    description:
      'Structural due diligence appraisal for a private equity firm acquiring a 1980s industrial facility. Assessment covered corrosion damage to structural steel, RC slab deflection measurements, and quantified rehabilitation cost estimates for pricing adjustment in transaction.',
    tags: ['Due Diligence', 'Industrial', 'Appraisal'],
  },
  {
    id: 8,
    category: 'Rehabilitation',
    title: 'Parking Structure Repair — Heliopolis',
    location: 'Heliopolis, Cairo',
    year: '2021',
    scope: 'Post-Tension Repair · Slab Rehabilitation Design',
    description:
      'Assessment and rehabilitation design for a 5-level post-tensioned concrete parking structure exhibiting progressive delamination and tendon corrosion. Repair strategy developed to extend service life by 25+ years without operational closure.',
    tags: ['Post-Tension', 'Parking Structure', 'PT Repair'],
  },
  {
    id: 9,
    category: 'Structural Design',
    title: 'Data Centre — New Administrative Capital',
    location: 'New Administrative Capital, Egypt',
    year: '2024',
    scope: 'Vibration Analysis · Raised Floor Framing · Seismic Design',
    description:
      'Structural design for a Tier III data centre facility including vibration-sensitive raised floor framing system, seismic detailing for equipment-mounting critical loads, and blast-hardened external envelope panels.',
    tags: ['Data Centre', 'Vibration Control', 'Seismic'],
  },
]

function FilterBar({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {FILTERS.map(f => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
            active === f
              ? 'bg-navy-900 text-white'
              : 'bg-white border border-steel-200 text-steel-600 hover:border-navy-300 hover:text-navy-900'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white border border-steel-100 hover:border-gold-400/30 hover:shadow-lg group transition-all duration-300 duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image placeholder */}
      <div className="w-full h-52 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 size={44} className="text-navy-700 group-hover:text-navy-600 transition-colors" />
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold-400 text-navy-900 text-xs font-bold px-3 py-1 tracking-wide uppercase">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-4 text-xs text-steel-500 mb-3">
          <span className="flex items-center gap-1.5">
            <MapPin size={11} />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={11} />
            {project.year}
          </span>
        </div>

        <h3 className="font-bold text-navy-900 text-lg leading-snug mb-3 group-hover:text-navy-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-steel-600 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Scope */}
        <p className="text-xs text-steel-500 bg-steel-50 px-3 py-2 mb-4 leading-relaxed border-l-2 border-gold-400">
          {project.scope}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(t => (
            <span key={t} className="text-xs bg-navy-900/5 text-navy-700 px-2.5 py-1 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectsCTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-steel-50 border-t border-steel-200">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="section-label text-center">Start a Project</p>
        <h2 className="section-title text-center mb-5">
          Your Project Could Be Next
        </h2>
        <p className="section-subtitle mb-8 max-w-xl mx-auto text-center">
          Whether it's a new structural design, a complex rehabilitation, or a forensic investigation — let's scope it together.
        </p>
        <Link to="/contact" className="btn-primary">
          Discuss Your Project <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects Built on Technical Precision"
        subtitle="A selected portfolio of structural engineering engagements across Egypt — spanning design, supervision, rehabilitation, and forensic investigation."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar active={activeFilter} setActive={setActiveFilter} />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 60} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-steel-400">
              <Building2 size={40} className="mx-auto mb-4 opacity-30" />
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <ProjectsCTA />
    </>
  )
}
