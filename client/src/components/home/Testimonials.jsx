import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'James Rodriguez',
    role: 'Owner-Operator, Dry Van',
    text: 'Resolute Logistics has been a game-changer for my business. Their dispatchers consistently find loads that pay well above average. My revenue has increased by over 30% since I started working with them.',
    rating: 5,
    initials: 'JR',
  },
  {
    name: 'Michael Thompson',
    role: 'Fleet Owner, 12 Trucks',
    text: 'Managing a fleet is challenging, but Resolute makes it so much easier. Their dedicated account manager keeps all my trucks loaded and their reporting tools give me full visibility into my operations.',
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
    text: 'I switched to Resolute from another dispatch company and the difference was immediate. Better loads, higher rates, and a team that actually cares about my success. Highly recommended!',
    rating: 5,
    initials: 'DC',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-light/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
              >
                <FaQuoteLeft className="text-white text-3xl mb-6 opacity-30" />
                
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <span className="text-dark font-bold text-lg">{testimonials[current].initials}</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-base">{testimonials[current].name}</h5>
                      <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <FaStar key={i} className="text-white text-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center 
                         text-white hover:bg-white hover:border-white hover:text-dark transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center 
                         text-white hover:bg-white hover:border-white hover:text-dark transition-all duration-300"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
