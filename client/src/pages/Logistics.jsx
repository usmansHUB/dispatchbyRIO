import { motion } from 'framer-motion'
import { FaBoxes, FaCheckCircle, FaFileInvoiceDollar, FaRoute, FaNetworkWired, FaTools, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Logistics = () => {
  const operations = [
    {
      icon: FaNetworkWired,
      title: 'Carrier-Broker Onboarding Packets',
      description: 'We handle the complete setup process with new brokers. W9, authority letter, insurance certs, and profile packets are processed via RMIS, MyCarrierPackets, Highway, and direct portals in under 15 minutes.',
      detail: 'Instant compliance setup keeps your drivers loading without idle time.'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Detention & Accessorial Audits',
      description: 'Did the receiver hold your driver at the loading dock past 2 hours? We audit rate confirmations and request detention pay, layovers, truck-ordered-not-used (TONU), and lumper fee approvals immediately.',
      detail: 'We fight for every dollar of accessorial pay your truck deserves.'
    },
    {
      icon: FaRoute,
      title: 'Factoring Submission & Billing',
      description: 'Get paid immediately upon delivery. We scan rate confirmations and signed Clean Bills of Lading (BOLs), package them with broker invoices, and upload them directly to your factoring company within hours.',
      detail: 'Factoring uploads are processed same-day to maintain cash flows.'
    },
    {
      icon: FaTools,
      title: 'Smart Route Planning & GPS Tools',
      description: 'Commercial routing is highly restrictive. We verify bridge height limits, hazardous material routes, weight restrictions, and optimize fuel stops using specialized dispatch mapping software.',
      detail: 'Maximizing driver Hours of Service (HOS) limits on optimized lanes.'
    },
    {
      icon: FaBoxes,
      title: 'Broker Communication & ETA Trackers',
      description: 'We manage all broker check calls, updates, and load status coordinates. We submit ETA tracking details to prevent compliance check call deductions.',
      detail: 'Handling all back-office logistics communication.'
    }
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')` }}
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
              Advanced Operations Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Streamline Your Fleet <br />
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Logistics Back-Office</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Ditch the office paperwork. We handle broker setup packets, detention claims, invoices, factoring submissions, and optimized routing so you can focus entirely on driving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="py-16 bg-dark-light/50 border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Logistics Operations We Run</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our back-office dispatch team is equipped with modern logistics software tools to expedite billing, registrations, and setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((item, index) => (
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

      {/* Logistics Pipeline */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operations Pipeline Workflow</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              How we coordinate each load from matching on load boards to factoring submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Load Search & Bid', desc: 'We search DAT, Truckstop, and private broker contracts to match your truck parameters and negotiate rates.' },
              { num: '02', title: 'Carrier Setup', desc: 'We upload your credentials and execute broker packets via Highway/RMIS in minutes.' },
              { num: '03', title: 'Ratecon Signoff', desc: 'We inspect rate confirm terms (detention details, dates, weights) and present signature sign-off.' },
              { num: '04', title: 'Transit Monitor', desc: 'We coordinate driver ETA, check calls, layovers, and tracking parameters during transit.' },
              { num: '05', title: 'Factoring Upload', desc: 'Upon clean BOL delivery, we compile documents and invoice your factoring provider same-day.' }
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light border border-white/5 p-6 rounded-2xl relative"
              >
                <div className="text-4xl font-black text-primary/20 mb-4">{step.num}</div>
                <h4 className="text-base font-bold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Simplify Your Dispatch Office</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Let us run your W9 registries, factoring, accessorial pay recovery, and tracking coordinates. Build your business today.
          </p>
          <Link to="/contact" className="btn-yellow text-base px-10 py-4">
            Connect Operations
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Logistics
