import { useInView } from '../hooks/useInView'

export default function PageHero({ label, title, subtitle, bg = 'bg-navy-900' }) {
  const [ref, inView] = useInView()

  return (
    <section className={`${bg} pt-32 pb-20 relative overflow-hidden`}>
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950/30 to-transparent" />
      {/* Gold accent bar */}
      <div className="absolute left-0 top-32 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-400/20 to-transparent ml-8 hidden lg:block" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {label && <p className="section-label text-gold-400">{label}</p>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-steel-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
