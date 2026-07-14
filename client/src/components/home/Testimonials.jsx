import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'James Rodriguez',
    role: 'Owner-Operator, Dry Van',
    text: 'DispatchByRIO has been a game-changer for my business. Their dispatchers consistently find loads that pay well above average. My revenue has increased by over 30% since I started working with them.',
    rating: 5,
    initials: 'JR',
  },
  {
    name: 'Michael Thompson',
    role: 'Fleet Owner, 12 Trucks',
    text: 'Managing a fleet is challenging, but DispatchByRIO makes it so much easier. Their dedicated account manager keeps all my trucks loaded and their reporting tools give me full visibility into my operations.',
    rating: 5,
    initials: 'MT',
  },
  {
    name: 'Sarah Williams',
    role: 'Owner-Operator, Reefer',
    text: 'The 24/7 support is what sets them apart. I\'ve had situations where I needed help at 2 AM and they were right there for me. Their rate negotiation skills are incredible — they always get me top dollar.',
    rating: 5,
    initials: 'SW',
  },
  {
    name: 'David Chen',
    role: 'Owner-Operator, Flatbed',
    text: 'I switched to DispatchByRIO from another dispatch company and the difference was immediate. Better loads, higher rates, and a team that actually cares about my success. Highly recommended!',
    rating: 5,
    initials: 'DC',
  },
]

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container-custom text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                          rounded-full px-4 py-1.5 text-sm font-semibold text-white mb-4">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Testimonials
            </span>
            <h2 className="section-title text-white mb-4">
              What Our <span className="text-gray-400">Clients</span> Say
            </h2>
            <p className="section-subtitle text-gray-400 mx-auto">
              Don't just take our word for it — hear from the drivers who trust us with their business
            </p>
          </motion.div>
        </div>

        {/* Marquee Ticker */}
        <div className="relative overflow-hidden w-full py-4">
          {/* Gradient Masks for smooth fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 w-max cursor-grab">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[350px] md:w-[400px] flex-shrink-0 bg-dark-light/50 backdrop-blur-sm 
                           border border-white/10 rounded-2xl p-6 md:p-8 whitespace-normal select-none
                           hover:border-white/30 transition-colors duration-300"
              >
                <FaQuoteLeft className="text-white text-2xl mb-4 opacity-30" />
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic min-h-[90px]">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-dark font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-white text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
