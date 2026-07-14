import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                        rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">#1 Truck Dispatch Company</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Truck Dispatch
              <br />
              <span className="text-gray-300">Services</span> That
              <br />
              Drive Your Success
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Professional freight dispatching for owner-operators and fleet owners. 
              We negotiate the best rates and keep your trucks loaded and moving.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-yellow text-base px-10 py-4">
                Start Dispatching
                <FaArrowRight className="text-sm" />
              </Link>
              <Link to="/about" className="btn-outline-white text-base px-10 py-4">
                <FaPlay className="text-xs" />
                Learn More
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 md:gap-12">
              {[
                { value: '500+', label: 'Trucks Dispatched' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-dark-light/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                            shadow-2xl shadow-black/40 max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-dark font-extrabold text-lg">R</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Quick Dispatch</h4>
                    <p className="text-gray-400 text-sm">Get started in minutes</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'Dry Van', rate: '$2.85/mi' },
                    { label: 'Reefer', rate: '$3.15/mi' },
                    { label: 'Flatbed', rate: '$3.45/mi' },
                    { label: 'Step Deck', rate: '$3.25/mi' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <span className="text-white font-bold text-sm">{item.rate}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-yellow w-full text-center text-sm">
                  Get Free Quote
                </Link>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white text-dark font-bold text-sm 
                          px-4 py-2 rounded-full shadow-lg shadow-white/20"
              >
                5% Fee Only
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}

export default Hero
