import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaCheck, FaStar } from 'react-icons/fa'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for new owner-operators',
    percentage: '5',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Dedicated Dispatcher',
      'Load Board Access',
      'Rate Negotiation',
      'Basic Paperwork',
      'Email Support',
      'Weekly Reports',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Most popular for growing businesses',
    percentage: '4',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Everything in Starter',
      'Priority Load Matching',
      '24/7 Phone Support',
      'Billing & Invoicing',
      'Compliance Management',
      'Daily Reports',
      'Route Optimization',
      'Fuel Card Program',
    ],
    popular: true,
  },
  {
    name: 'Fleet',
    description: 'For fleet owners with 5+ trucks',
    percentage: '3',
    suffix: '%',
    period: 'of Gross Revenue',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Fleet Management Dashboard',
      'Custom Reporting',
      'Insurance Assistance',
      'Business Consulting',
      'Multi-Truck Coordination',
      'Volume Discounts',
    ],
    popular: false,
  },
]

const PricingSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden" id="pricing" ref={ref}>
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
              Pricing Plans
            </span>
            <h2 className="section-title text-dark mb-4">
              Transparent <span className="text-gray-500">Pricing</span> Plans
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your operation 
              and start maximizing your revenue today.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 
                        hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-dark text-white shadow-xl shadow-black/20 scale-105 border-2 border-white'
                  : 'bg-white text-dark border border-gray-200 hover:shadow-black/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-white text-dark text-center 
                              py-2 text-sm font-bold flex items-center justify-center gap-1">
                  <FaStar className="text-xs" />
                  Most Popular
                  <FaStar className="text-xs" />
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name */}
                <h4 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-dark'}`}>
                      {plan.percentage}
                    </span>
                    <span className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                      {plan.suffix}
                    </span>
                  </div>
                  <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-white/10' : 'bg-dark/5'
                      }`}>
                        <FaCheck className={`text-[10px] ${plan.popular ? 'text-white' : 'text-dark'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full text-center py-3.5 rounded-full font-bold text-sm 
                            transition-all duration-300 block ${
                    plan.popular
                      ? 'bg-white text-dark hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20'
                      : 'bg-dark text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
