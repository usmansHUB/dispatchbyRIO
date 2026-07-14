import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaCheck, FaStar, FaArrowRight } from 'react-icons/fa'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for new owner-operators just getting started',
    percentage: '5',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Dedicated Dispatcher',
      'Load Board Access',
      'Rate Negotiation',
      'Basic Paperwork Handling',
      'Email Support',
      'Weekly Performance Reports',
    ],
    notIncluded: [
      'Billing & Invoicing',
      '24/7 Phone Support',
      'Compliance Management',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Most popular — best value for serious drivers',
    percentage: '4',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Everything in Starter, plus:',
      'Priority Load Matching',
      '24/7 Phone & Chat Support',
      'Complete Billing & Invoicing',
      'Compliance Management',
      'Daily Performance Reports',
      'Route Optimization',
      'Fuel Card Program Access',
      'Document Management',
      'Detention & Layover Claims',
    ],
    notIncluded: [],
    popular: true,
  },
  {
    name: 'Fleet',
    description: 'Custom solution for fleet owners with 5+ trucks',
    percentage: '3',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Everything in Professional, plus:',
      'Dedicated Account Manager',
      'Fleet Management Dashboard',
      'Custom Analytics & Reporting',
      'Insurance Assistance',
      'Business Growth Consulting',
      'Multi-Truck Coordination',
      'Volume-Based Discounts',
      'Priority Lane Access',
      'Driver Recruitment Support',
    ],
    notIncluded: [],
    popular: false,
  },
]

const comparisonFeatures = [
  { feature: 'Dedicated Dispatcher', starter: true, professional: true, fleet: true },
  { feature: 'Rate Negotiation', starter: true, professional: true, fleet: true },
  { feature: 'Load Board Access', starter: true, professional: true, fleet: true },
  { feature: 'Paperwork Handling', starter: 'Basic', professional: 'Full', fleet: 'Full' },
  { feature: 'Billing & Invoicing', starter: false, professional: true, fleet: true },
  { feature: '24/7 Support', starter: false, professional: true, fleet: true },
  { feature: 'Compliance Management', starter: false, professional: true, fleet: true },
  { feature: 'Route Optimization', starter: false, professional: true, fleet: true },
  { feature: 'Fuel Card Program', starter: false, professional: true, fleet: true },
  { feature: 'Dedicated Account Manager', starter: false, professional: false, fleet: true },
  { feature: 'Fleet Dashboard', starter: false, professional: false, fleet: true },
  { feature: 'Custom Reporting', starter: false, professional: false, fleet: true },
  { feature: 'Business Consulting', starter: false, professional: false, fleet: true },
]

const Pricing = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [plansRef, plansInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [compareRef, compareInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 
                          rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Our Prices
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              No hidden fees, no long-term contracts. Pay only a small percentage of your 
              gross revenue and keep the rest. It's that simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white py-20 lg:py-28" ref={plansRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 
                          hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? 'bg-dark text-white shadow-xl shadow-black/20 lg:scale-105 border-2 border-primary'
                    : 'bg-white text-dark border border-gray-200 hover:shadow-black/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-dark text-center 
                                py-2 text-sm font-bold flex items-center justify-center gap-1">
                    <FaStar className="text-xs" />
                    Most Popular
                    <FaStar className="text-xs" />
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <h4 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.name}
                  </h4>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-end gap-1">
                      <span className={`text-5xl font-extrabold ${plan.popular ? 'text-primary' : 'text-dark'}`}>
                        {plan.percentage}
                      </span>
                      <span className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-primary' : 'text-dark'}`}>
                        {plan.suffix}
                      </span>
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                        }`}>
                          <FaCheck className="text-primary text-[10px]" />
                        </div>
                        <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="space-y-3 mb-6 opacity-50">
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 
                                        bg-gray-200">
                            <span className="text-gray-400 text-[10px]">✕</span>
                          </div>
                          <span className="text-gray-400 text-sm line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3.5 rounded-full font-bold text-sm 
                              transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-primary text-dark hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30'
                        : 'bg-dark text-primary hover:bg-primary hover:text-dark'
                    }`}
                  >
                    Get Started
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-100 py-20 lg:py-28" ref={compareRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={compareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-dark mb-4">
              Compare <span className="text-primary">Plans</span>
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto">
              See a detailed side-by-side comparison of what each plan includes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={compareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left py-4 px-6 font-bold text-sm">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-sm">Starter</th>
                    <th className="text-center py-4 px-4 font-bold text-sm">
                      <span className="text-primary">Professional</span>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-sm">Fleet</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={item.feature} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
                      <td className="py-3.5 px-6 text-dark text-sm font-medium">{item.feature}</td>
                      {['starter', 'professional', 'fleet'].map((plan) => (
                        <td key={plan} className="py-3.5 px-4 text-center">
                          {item[plan] === true ? (
                            <FaCheck className="text-primary mx-auto" />
                          ) : item[plan] === false ? (
                            <span className="text-gray-300 text-lg">—</span>
                          ) : (
                            <span className="text-dark text-sm font-medium">{item[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </>
  )
}

export default Pricing
