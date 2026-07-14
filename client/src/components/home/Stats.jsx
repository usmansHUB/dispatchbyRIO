import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTruck, FaUsers, FaStar, FaMapMarkedAlt } from 'react-icons/fa'

const stats = [
  { icon: FaTruck, value: 500, suffix: '+', label: 'Trucks Dispatched' },
  { icon: FaUsers, value: 350, suffix: '+', label: 'Happy Clients' },
  { icon: FaStar, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: FaMapMarkedAlt, value: 48, suffix: '', label: 'States Covered' },
]

const CounterNumber = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, target])

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-primary">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center 
                            mx-auto mb-4 border border-primary/20">
                <stat.icon className="text-primary text-2xl" />
              </div>
              <CounterNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
