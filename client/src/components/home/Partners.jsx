import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const partners = [
  'DAT Freight',
  'Truckstop',
  'Amazon Relay',
  'CH Robinson',
  'XPO Logistics',
  'JB Hunt',
  'Schneider',
  'Werner',
  'Landstar',
  'Coyote',
]

const Partners = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Trusted Partners & Load Boards We Work With
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="bg-gray-100 rounded-xl px-8 py-4 min-w-[180px] text-center
                            hover:bg-primary/10 transition-colors duration-300 border border-gray-200 
                            hover:border-primary/30 cursor-pointer">
                <span className="text-dark font-bold text-sm tracking-wide whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
