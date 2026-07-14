import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaTruck, FaFileInvoiceDollar, FaRoute, FaShieldAlt, 
  FaHandshake, FaChartLine 
} from 'react-icons/fa'

const services = [
  {
    icon: FaTruck,
    title: 'Truck Dispatching',
    description: 'Expert dispatchers find the best-paying loads for your truck type. We handle negotiations and booking so you can focus on driving.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Billing & Invoicing',
    description: 'Complete billing management including invoice generation, payment tracking, and accounts receivable to ensure timely payments.',
  },
  {
    icon: FaRoute,
    title: 'Route Planning',
    description: 'Optimized route planning to minimize deadhead miles, reduce fuel costs, and maximize your time on the road earning revenue.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety & Compliance',
    description: 'Stay compliant with DOT regulations, FMCSA requirements, and maintain your safety rating with our expert compliance support.',
  },
  {
    icon: FaHandshake,
    title: 'Rate Negotiation',
    description: 'Our experienced team negotiates the highest possible rates with brokers and shippers, ensuring maximum profitability for every load.',
  },
  {
    icon: FaChartLine,
    title: 'Business Growth',
    description: 'Strategic support to help you scale your trucking business with data-driven insights, market analysis, and fleet optimization.',
  },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden" id="services">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10" ref={ref}>
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
              What We Offer
            </span>
            <h2 className="section-title text-dark mb-4">
              Our <span className="text-gray-500">Dispatch</span> Services
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto">
              Comprehensive truck dispatch solutions designed to keep your wheels turning 
              and your revenue growing. We handle everything so you can focus on the road.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 
                        hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 
                        transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-dark/5 rounded-xl flex items-center justify-center mb-6
                              group-hover:bg-white transition-colors duration-500">
                  <service.icon className="text-dark text-2xl group-hover:text-dark transition-colors duration-500" />
                </div>

                {/* Title */}
                <h4 className="text-dark font-bold text-xl mb-3 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-white text-sm font-semibold 
                              opacity-0 group-hover:opacity-100 transition-all duration-500 
                              translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <span className="text-xs">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
