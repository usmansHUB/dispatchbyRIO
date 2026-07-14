import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/75" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-white mb-6">
              Ready To <span className="text-primary">Maximize</span> Your Trucking Revenue?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Join hundreds of satisfied owner-operators and fleet owners who trust Resolute Logistics 
              to keep their trucks loaded with top-paying freight. Get started today — no contracts, 
              no hidden fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-yellow text-base px-10 py-4">
                Start Dispatching
                <FaArrowRight className="text-sm" />
              </Link>
              <a
                href="tel:+13322285736"
                className="btn-outline-white text-base px-10 py-4"
              >
                <FaPhoneAlt className="text-sm" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h4 className="text-white font-bold text-xl mb-2">Get a Free Quote</h4>
              <p className="text-gray-400 text-sm mb-6">Fill in your details and we'll get back to you within the hour.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                             placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                             placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                             placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-500 text-sm
                             focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Truck Type</option>
                    <option value="dry-van">Dry Van</option>
                    <option value="reefer">Reefer</option>
                    <option value="flatbed">Flatbed</option>
                    <option value="step-deck">Step Deck</option>
                    <option value="power-only">Power Only</option>
                  </select>
                </div>
                <textarea
                  placeholder="Tell us about your fleet..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                           placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <button type="submit" className="btn-yellow w-full py-4">
                  Get Free Quote
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
