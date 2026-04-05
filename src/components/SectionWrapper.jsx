import { useInView } from '../hooks/useInView'

export default function SectionWrapper({ children, className = '', id }) {
  const [ref, inView] = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}
