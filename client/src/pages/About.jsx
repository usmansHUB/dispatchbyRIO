import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaUsers, FaTruck, FaGlobe, FaAward } from 'react-icons/fa'
import Stats from '../components/home/Stats'
import CTA from '../components/home/CTA'

const values = [
  {
    icon: FaUsers,
    title: 'Driver-First Approach',
    description: 'Every decision we make is centered around the success and well-being of our drivers.',
  },
  {
    icon: FaAward,
    title: 'Excellence',
    description: 'We strive for the highest standards in every load we dispatch and every interaction.',
  },
  {
    icon: FaGlobe,
    title: 'Transparency',
    description: 'Complete honesty in pricing, communication, and business practices — always.',
  },
  {
    icon: FaTruck,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on 24 hours a day, 7 days a week.',
  },
]

const timeline = [
  { year: '2019', title: 'Company Founded', description: 'Started with a vision to empower independent truckers with premium dispatch services.' },
  { year: '2020', title: 'Rapid Growth', description: 'Expanded our team to 20+ dispatchers serving over 100 owner-operators nationwide.' },
  { year: '2021', title: 'Fleet Services Launch', description: 'Introduced dedicated fleet management services for companies with 5+ trucks.' },
  { year: '2022', title: 'Technology Upgrade', description: 'Launched our proprietary dispatch platform with real-time tracking and analytics.' },
  { year: '2023', title: 'Industry Recognition', description: 'Named among the top 10 truck dispatch companies in the United States.' },
  { year: '2024', title: '500+ Trucks', description: 'Reached the milestone of dispatching over 500 trucks daily across 48 states.' },
]

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')`,
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
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                          rounded-full px-4 py-1.5 text-sm font-semibold text-white mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Driving <span className="text-gray-300">Success</span> For Every Trucker
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              We are DispatchByRIO — a team of passionate professionals dedicated to 
              revolutionizing truck dispatch services across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28" ref={storyRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Our team at work"
                  className="rounded-2xl w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-dark text-white rounded-2xl p-6 shadow-xl border border-white/25">
                  <div className="font-extrabold text-4xl">5+</div>
                  <div className="text-gray-300 text-sm font-semibold">Years in<br />Business</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 bg-dark/5 text-dark 
                            rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 bg-dark rounded-full" />
                Our Story
              </span>
              <h2 className="section-title text-dark mb-6">
                Built By Truckers, <span className="text-gray-500">For</span> Truckers
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                DispatchByRIO was founded with a simple mission: to level the playing field 
                for independent owner-operators in the trucking industry. Our founders, with decades 
                of combined experience in logistics and transportation, saw firsthand the challenges 
                drivers face — from finding good-paying loads to managing complex paperwork.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Today, we've grown into one of the most trusted dispatch companies in the nation, 
                serving hundreds of drivers and fleet owners across all 48 contiguous states. Our 
                commitment to transparency, fair pricing, and exceptional service remains at the 
                core of everything we do.
              </p>
              <div className="space-y-3">
                {[
                  'No forced dispatch — you always choose',
                  'Transparent pricing with no hidden fees',
                  'Experienced dispatchers with industry knowledge',
                  'Growing community of successful truckers',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-dark flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-20 lg:py-28" ref={valuesRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-dark/5 text-dark 
                            rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 bg-dark rounded-full" />
                Our Values
              </span>
              <h2 className="section-title text-dark mb-4">
                What <span className="text-gray-500">Drives</span> Us
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl 
                         hover:-translate-y-2 transition-all duration-500 border border-gray-200"
              >
                <div className="w-16 h-16 bg-dark/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="text-dark text-2xl" />
                </div>
                <h4 className="text-dark font-bold text-lg mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Timeline */}
      <section className="bg-dark py-20 lg:py-28" ref={timelineRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                            rounded-full px-4 py-1.5 text-sm font-semibold text-white mb-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Our Journey
              </span>
              <h2 className="section-title text-white mb-4">
                Our <span className="text-gray-300">Growth</span> Story
              </h2>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-6 mb-10 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full 
                              border-4 border-dark z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-white font-extrabold text-lg">{item.year}</span>
                  <h5 className="text-white font-bold text-base mt-1">{item.title}</h5>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}

export default About
