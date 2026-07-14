import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaDollarSign, FaClock, FaHeadset, FaChartBar, 
  FaShieldAlt, FaTruckMoving 
} from 'react-icons/fa'

const features = [
  {
    icon: FaDollarSign,
    title: 'Best Rates Guaranteed',
    description: 'Our dispatchers negotiate the highest paying loads, ensuring you earn maximum revenue on every mile.',
  },
  {
    icon: FaClock,
    title: 'No Downtime',
    description: 'We plan loads back-to-back to minimize deadhead miles and keep your truck profitable around the clock.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Dispatch Support',
    description: 'Round-the-clock support team available whenever you need assistance on the road or off.',
  },
  {
    icon: FaChartBar,
    title: 'Detailed Reporting',
    description: 'Access comprehensive reports on your earnings, miles, and performance to track your business growth.',
  },
  {
    icon: FaShieldAlt,
    title: 'Full Compliance',
    description: 'We handle all paperwork, permits, and regulatory compliance so you never have to worry about violations.',
  },
  {
    icon: FaTruckMoving,
    title: 'All Truck Types',
    description: 'We dispatch all equipment types — dry van, reefer, flatbed, step deck, power only, and more.',
  },
]

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-gray-100 py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dark via-dark/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-dark/5 text-dark 
                          rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 bg-dark rounded-full" />
              Why Choose Us
            </span>
            <h2 className="section-title text-dark mb-4">
              Why Truckers <span className="text-gray-500">Choose</span> Resolute
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto">
              We go above and beyond to deliver results that matter to your bottom line
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 
                            shadow-md group-hover:bg-dark group-hover:shadow-lg group-hover:shadow-black/20 
                            transition-all duration-300">
                <feature.icon className="text-dark text-xl group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h5 className="text-dark font-bold text-lg mb-2">{feature.title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
