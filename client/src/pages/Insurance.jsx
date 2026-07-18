import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaFileContract, FaTruck, FaMoneyBillWave, FaUserShield, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Insurance = () => {
  const coverages = [
    {
      icon: FaShieldAlt,
      title: 'Auto Liability ($1,000,000)',
      description: 'Mandatory coverage required by the FMCSA for all commercial motor carriers. Covers bodily injury and property damage to third parties in the event of an accident.',
      detail: 'Standard industry requirement for hauling freight for top-tier brokers and shippers.'
    },
    {
      icon: FaFileContract,
      title: 'Cargo Liability ($100,000 - $250,000+)',
      description: 'Covers physical damage to or loss of the freight being hauled. Protects against theft, collision, fire, and load damage.',
      detail: 'We help match your cargo limits with high-value loads and manage reefer breakdown details.'
    },
    {
      icon: FaTruck,
      title: 'Physical Damage',
      description: 'Protects your truck and trailer assets in case of collisions, vandalism, theft, or fire. Ensures your equipment stays covered on and off the road.',
      detail: 'Comprehensive and collision coverages tailored for commercial owner-operator rigs.'
    },
    {
      icon: FaUserShield,
      title: 'General Liability',
      description: 'Protects your company against liability claims for bodily injury and property damage arising out of premises, operations, and products.',
      detail: 'Covers slip-and-fall incidents, wrong deliveries, and loading dock disputes.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Trailer Interchange ($20,000 - $50,000)',
      description: 'Covers damage to trailers that you do not own while in your possession under a trailer interchange agreement.',
      detail: 'Essential for power-only operations where you pull trailers owned by brokers, shippers, or other fleets.'
    },
    {
      icon: FaCheckCircle,
      title: 'Occupational Accident (Occ-Acc)',
      description: 'Provides benefits for medical expenses, accidental death, dismemberment, and disability for owner-operators not covered by traditional workers comp.',
      detail: 'Alternative coverage options to satisfy broker requirements and driver protection.'
    }
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Insurance & Risk Coordination
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Keep Your Fleet <br />
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Fully Protected</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              We specialize in coordinating, verifying, and matching your carrier insurance coverages with high-paying freight requirements. Sleep soundly knowing all safety parameters are met.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-dark-light/50 border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Required Coverages We Manage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We review your certificates with brokers and shippers to ensure quick onboarding and zero delays when booking top-tier loads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="border-t border-white/5 pt-4 text-xs font-semibold text-primary flex items-center gap-1">
                  <FaChevronRight size={10} /> {item.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Strict Certificate Verification Protocol</h2>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'W9 and Authority Check',
                    desc: 'We cross-verify your insurance certificates with FMCSA SAFER registration, checking active authority and SMS safety ratings.'
                  },
                  {
                    step: '02',
                    title: 'Broker Registry Upload',
                    desc: 'We request and submit insurance certificates to brokers directly via Registry, Highway, RMIS, and direct broker channels.'
                  },
                  {
                    step: '03',
                    title: 'Special Hauling Rider Additions',
                    desc: 'For high-value freight, hazmat, or temperature-controlled loads, we coordinate with your agent to ensure required endorsement riders are attached.'
                  }
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="text-primary font-black text-2xl leading-none mt-1">{s.step}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-light border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold mb-4">Minimum Insurance Requirements</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                To access 98% of the loads booked by DispatchByRIO, we strongly advise carriers to maintain the following minimum limits:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span>Auto Liability: <strong>$1,000,000 Combined Single Limit (CSL)</strong></span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span>Cargo Insurance: <strong>$100,000 Minimum</strong> ($250k+ preferred)</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span>Reefer Breakdown Coverage (for Temp-Control)</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span>Unscheduled Trailer Interchange (for Power-Only)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Coordinate Your Coverage with Us</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Let our compliance specialists verify your certificates and unlock access to premium loads. Set up carrier packet today.
          </p>
          <Link to="/contact" className="btn-yellow text-base px-10 py-4">
            Start Setup Process
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Insurance
