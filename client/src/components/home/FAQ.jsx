import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'What is a truck dispatch service?',
    answer: 'A truck dispatch service acts as your dedicated partner in finding and securing freight loads. Our dispatchers search load boards, negotiate rates with brokers and shippers, handle paperwork, and manage your schedule — all so you can focus on driving and earning.',
  },
  {
    question: 'How much do you charge for dispatch services?',
    answer: 'Our pricing is transparent and based on a percentage of gross revenue — typically between 3-5% depending on your plan. There are no hidden fees, no upfront costs, and no long-term contracts. You only pay when you earn.',
  },
  {
    question: 'What types of trucks do you dispatch?',
    answer: 'We dispatch all types of commercial vehicles including dry vans, reefers (refrigerated trailers), flatbeds, step decks, power only, box trucks, hotshots, and more. Whatever your equipment type, we have the expertise to find the best loads for you.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No! We believe in earning your business every day. Our agreements are flexible with no long-term commitments. You can cancel anytime with just a 2-week notice. We\'re confident in our service quality to keep you happy.',
  },
  {
    question: 'How do you find loads for my truck?',
    answer: 'Our dispatchers use multiple load boards (DAT, Truckstop, direct broker relationships, and proprietary databases) to find the highest-paying loads that match your equipment, preferred lanes, and schedule. We handle all negotiations to get you the best rates.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We dispatch loads across all 48 contiguous states in the United States. Whether you prefer regional routes or long-haul cross-country loads, we can accommodate your preferences and find loads in your desired lanes.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'You can get started within 24-48 hours! Simply fill out our contact form or give us a call. We\'ll gather your information, set up your account, and have you dispatched on your first load in no time.',
  },
  {
    question: 'Do you handle billing and invoicing?',
    answer: 'Yes! Our Professional and Fleet plans include complete billing and invoicing services. We handle invoice generation, submission to brokers, payment tracking, and collections — ensuring you get paid on time, every time.',
  },
]

const AccordionItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-primary/30 bg-dark-light/50' : 'border-white/10 hover:border-white/20'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
      >
        <span className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${
          isOpen ? 'text-primary' : 'text-white group-hover:text-primary'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
                       transition-all duration-300 ${
          isOpen ? 'bg-primary text-dark rotate-0' : 'bg-white/10 text-white'
        }`}>
          {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="faq" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 
                          rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              FAQ
            </span>
            <h2 className="section-title text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="section-subtitle text-gray-400 mx-auto">
              Got questions? We've got answers. Find everything you need to know about our dispatch services.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
