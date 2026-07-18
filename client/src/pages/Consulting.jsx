import { motion } from 'framer-motion'
import { FaUserTie, FaCheckCircle, FaBriefcase, FaChartBar, FaUserCheck, FaCogs, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Consulting = () => {
  const consultingAreas = [
    {
      icon: FaCogs,
      title: 'Equipment Selector Strategy',
      description: 'Which trailer type yields the highest returns in today’s volatile market? We analyze Dry Van, Reefer, Flatbed, Step Deck, and Power-Only options to align with your business goals.',
      detail: 'Tailoring setup choices based on regional logistics density and equipment accessibility.'
    },
    {
      icon: FaChartBar,
      title: 'Operating Cost Calculations (CPM vs RPM)',
      description: 'Knowing your Cost Per Mile (CPM) is vital. We calculate driver pay, fuel, maintenance, plates, permits, and compare it with the broker’s Rate Per Mile (RPM) to maintain healthy margins.',
      detail: 'Strategic cost-accounting toolkits to analyze profit thresholds before dispatch approvals.'
    },
    {
      icon: FaBriefcase,
      title: 'Direct Shipper RFP bidding',
      description: 'Ready to transition away from the broker spot market? We help prepare bidding documents, analyze logistics RFP tenders, and build contracts for direct shipper lanes.',
      detail: 'Assisting in contract negotiations and volume allocation guarantees.'
    },
    {
      icon: FaUserCheck,
      title: 'Driver Recruitment & Training',
      description: 'Attracting and keeping quality commercial drivers is a major hurdle. We advise on driver compensation matrices, log safety compliance, ELD monitoring, and retention strategies.',
      detail: 'Safety training schedules and performance appraisal guidance.'
    },
    {
      icon: FaCheckCircle,
      title: 'FMCSA Safety Audits & Compliance',
      description: 'Preparing your new entrant safety audit or looking to reduce your CSA scores? We audit your files (DQ files, logbooks, maintenance logs) to ensure complete FMCSA/DOT readiness.',
      desc2: 'Reviewing drug and alcohol clearinghouse checks and HOS limits.'
    }
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')` }}
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
              1-on-1 Business Strategy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Scale Your Fleet with <br />
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Expert Consultation</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Unlock strategic guidance for owner-operators and growing fleet owners. We assist with cost optimization, contract acquisition, equipment choices, and compliance audits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consulting Grid */}
      <section className="py-16 bg-dark-light/50 border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Consulting Portfolios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our experts provide custom analysis reports and blueprints to streamline your trucking company operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  {item.detail && (
                    <div className="text-xs font-semibold text-primary flex items-center gap-1">
                      <FaChevronRight size={10} /> {item.detail}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collaborative Blueprint</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We take a structured approach to analyzing your business data and building an actionable operational roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Operational Audit', desc: 'We audit your historical loads, lanes, operating costs, and current insurance/authority status.' },
              { step: '02', title: 'Strategy Session', desc: '1-on-1 strategy call with our logistics consultant to define target equipment types, RPM, and lanes.' },
              { step: '03', title: 'Blueprint Customization', desc: 'We customize a lane setup guide and outline compliance/recruitment needs.' },
              { step: '04', title: 'Ongoing Advisory', desc: 'Regular check-ins on fuel savings, route adjustments, and driver logging compliance metrics.' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark border border-white/5 p-6 rounded-2xl"
              >
                <div className="text-3xl font-black text-primary/45 mb-4">{step.step}</div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-light/50 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Request A Fleet Strategy Call</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Speak to a trucking dispatch and compliance specialist today. Let us help you calculate operating margins and build a growth roadmap.
          </p>
          <Link to="/contact" className="btn-yellow text-base px-10 py-4">
            Book Consulting Call
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Consulting
