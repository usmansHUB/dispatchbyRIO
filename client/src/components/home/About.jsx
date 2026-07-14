import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle } from 'react-icons/fa'

const highlights = [
  'Dedicated dispatch team available 24/7',
  'No forced dispatch — you choose your loads',
  'Transparent pricing with no hidden fees',
  'Personalized service for every driver',
]

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="about" ref={ref}>
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Truck dispatch operations"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-primary text-dark 
                        rounded-2xl p-6 shadow-xl shadow-primary/20"
            >
              <div className="text-4xl font-extrabold">5+</div>
              <div className="text-sm font-semibold">Years of<br />Experience</div>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 
                          rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 
                          rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              About Our Company
            </span>

            <h2 className="section-title text-white mb-6">
              We Are <span className="text-primary">Resolute</span> — Your Trusted Dispatch Partner
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              At Resolute Logistics, we specialize in providing top-tier truck dispatch services 
              for owner-operators and fleet owners across the nation. Our experienced dispatchers 
              work tirelessly to find the best-paying loads, negotiate premium rates, and handle 
              all the paperwork so you can focus on what you do best — driving.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Founded with a mission to empower independent truckers, we have built a reputation 
              for reliability, transparency, and exceptional service. Our team understands the 
              challenges of the trucking industry and provides personalized support to help 
              every driver succeed.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <a href="/about" className="btn-yellow">
              More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
