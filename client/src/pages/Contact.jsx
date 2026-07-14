import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import axios from 'axios'

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: 'Call Us',
    details: ['+1 (332) 228-5736'],
    link: 'tel:+13322285736',
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: ['info@resolute-logistics.com'],
    link: 'mailto:info@resolute-logistics.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    details: ['United States'],
    link: null,
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: ['24/7 Dispatch Support'],
    link: null,
  },
]

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    truckType: '',
    fleetSize: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: 'Your message has been sent successfully! We will get back to you shortly.' })
      setFormData({ name: '', email: '', phone: '', company: '', truckType: '', fleetSize: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')`,
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Let's Get Your Trucks <span className="text-primary">Moving</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Ready to start dispatching? Fill out the form below or give us a call. 
              We'll have you set up and loaded within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-16 relative -mt-10 z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary text-xl" />
                </div>
                <h5 className="text-dark font-bold text-base mb-2">{info.title}</h5>
                {info.details.map((detail) => (
                  info.link ? (
                    <a
                      key={detail}
                      href={info.link}
                      className="text-gray-500 text-sm hover:text-primary transition-colors block"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={detail} className="text-gray-500 text-sm">{detail}</p>
                  )
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-gray-100 py-20 lg:py-28" ref={formRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-dark mb-3">
                Start <span className="text-primary">Dispatching</span> Today
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Fill out the form and our team will reach out to you within the hour.
              </p>

              {status.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {status.type === 'success' && <FaCheckCircle className="text-green-500 flex-shrink-0" />}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company LLC"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Truck Type</label>
                    <select
                      name="truckType"
                      value={formData.truckType}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Truck Type</option>
                      <option value="dry-van">Dry Van</option>
                      <option value="reefer">Reefer</option>
                      <option value="flatbed">Flatbed</option>
                      <option value="step-deck">Step Deck</option>
                      <option value="power-only">Power Only</option>
                      <option value="box-truck">Box Truck</option>
                      <option value="hotshot">Hotshot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Fleet Size</label>
                    <select
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                               focus:border-primary focus:ring-2 focus:ring-primary/20 
                               focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Fleet Size</option>
                      <option value="1">1 Truck (Owner-Operator)</option>
                      <option value="2-5">2-5 Trucks</option>
                      <option value="6-10">6-10 Trucks</option>
                      <option value="11-25">11-25 Trucks</option>
                      <option value="25+">25+ Trucks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-dark text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your trucking operation and what you're looking for..."
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-dark text-sm
                             placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 
                             focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-yellow w-full sm:w-auto py-4 px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-dark rounded-2xl p-8 lg:p-10 mb-8">
                <h3 className="text-white font-bold text-2xl mb-4">
                  Why Choose <span className="text-primary">Resolute</span>?
                </h3>
                <div className="space-y-4">
                  {[
                    'Get dispatched within 24 hours of signing up',
                    'No long-term contracts or hidden fees',
                    'Experienced dispatchers with 5+ years in trucking',
                    'We only earn when you earn — aligned incentives',
                    'Average rate increase of 15-25% for our drivers',
                    '24/7 dispatch and support coverage',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <FaCheckCircle className="text-primary flex-shrink-0 text-sm" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-center">
                <h4 className="text-dark font-bold text-xl mb-2">Need Immediate Help?</h4>
                <p className="text-dark/70 text-sm mb-4">Our dispatch team is available 24/7</p>
                <a
                  href="tel:+13322285736"
                  className="inline-flex items-center gap-2 bg-dark text-primary font-bold 
                           py-3 px-8 rounded-full hover:bg-dark-light transition-all duration-300"
                >
                  <FaPhoneAlt className="text-sm" />
                  +1 (332) 228-5736
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
