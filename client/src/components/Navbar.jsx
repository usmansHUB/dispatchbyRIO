import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import { FaPhoneAlt, FaShieldAlt, FaUserTie, FaBoxes } from 'react-icons/fa'
import logoImg from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4 lg:py-5">
          <Link to="/" className="flex items-center group">
            <img 
              src={logoImg} 
              alt="DispatchByRIO Logo" 
              className="h-12 md:h-14 w-auto object-contain drop-shadow-lg" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 flex items-center gap-1 cursor-pointer outline-none text-gray-400"
              >
                Services
                <HiChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu Wrapper (Bridges the hover gap) */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[450px] z-50 transition-all duration-300 origin-top ${
                  servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
                }`}
              >
                {/* The actual styled menu card */}
                <div className="bg-dark-light/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/services/insurance" 
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item"
                    >
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 flex-shrink-0 mt-0.5">
                        <FaShieldAlt size={20} />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-sm group-hover/item:text-primary transition-colors">Insurance Type & Coverage</span>
                          <span className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full animate-pulse">Secure</span>
                        </div>
                        <div className="text-gray-300 font-semibold text-xs mt-0.5">Cargo, Physical Damage & Auto Liability</div>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                          We verify and manage certificates for Cargo ($250k+), Physical Damage, and Auto Liability ($1M+) ensuring absolute freight protection and carrier compliance.
                        </p>
                      </div>
                    </Link>

                    <Link 
                      to="/services/consulting" 
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item"
                    >
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 flex-shrink-0 mt-0.5">
                        <FaUserTie size={20} />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-sm group-hover/item:text-primary transition-colors">Fleet Consultation Specialist</span>
                          <span className="bg-green-500/10 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">1-on-1 Support</span>
                        </div>
                        <div className="text-gray-300 font-semibold text-xs mt-0.5">Fleet Scaling, Equipment Strategy & Profitability</div>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                          Get dedicated consultations on equipment selection, route profitability, driver recruitment, and building long-term direct-shipper relations.
                        </p>
                      </div>
                    </Link>

                    <Link 
                      to="/services/logistics" 
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item"
                    >
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 flex-shrink-0 mt-0.5">
                        <FaBoxes size={20} />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-sm group-hover/item:text-primary transition-colors">Advanced Logistics Operations</span>
                          <span className="bg-blue-500/10 text-blue-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">Full Service</span>
                        </div>
                        <div className="text-gray-300 font-semibold text-xs mt-0.5">Rate Confirmations, Factoring & Invoicing Setup</div>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                          Full-service logistics support: broker packet setup, load booking, rate confirmations, factoring submission, and optimized route planning.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 ${
                location.pathname === '/about' ? 'text-white' : 'text-gray-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/prices"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 ${
                location.pathname === '/prices' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Prices
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 ${
                location.pathname === '/contact' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13322285736"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
            >
              <FaPhoneAlt className="text-white text-sm" />
              <span className="text-sm font-semibold">+1 (332) 228-5736</span>
            </a>
            <Link to="/contact" className="btn-yellow text-sm">
              Start Dispatching
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-lg 
                    border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          <Link
            to="/"
            className={`text-base font-semibold uppercase tracking-wider py-2 transition-all duration-300 hover:text-white hover:pl-2 ${
              location.pathname === '/' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-base font-semibold uppercase tracking-wider py-2 text-gray-400 hover:text-white transition-all duration-300 outline-none"
            >
              Services
              <HiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`flex flex-col pl-4 gap-3 border-l border-white/10 transition-all duration-300 overflow-hidden ${
              mobileServicesOpen ? 'max-h-60 mt-2 pb-2' : 'max-h-0'
            }`}>
              <Link 
                to="/services/insurance"
                className="text-sm font-medium text-gray-400 hover:text-white py-1 transition-colors"
              >
                Insurance Type
              </Link>
              <Link 
                to="/services/consulting"
                className="text-sm font-medium text-gray-400 hover:text-white py-1 transition-colors"
              >
                Consultation Specialist
              </Link>
              <Link 
                to="/services/logistics"
                className="text-sm font-medium text-gray-400 hover:text-white py-1 transition-colors"
              >
                Logistics Things
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className={`text-base font-semibold uppercase tracking-wider py-2 transition-all duration-300 hover:text-white hover:pl-2 ${
              location.pathname === '/about' ? 'text-white' : 'text-gray-400'
            }`}
          >
            About
          </Link>
          <Link
            to="/prices"
            className={`text-base font-semibold uppercase tracking-wider py-2 transition-all duration-300 hover:text-white hover:pl-2 ${
              location.pathname === '/prices' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Prices
          </Link>
          <Link
            to="/contact"
            className={`text-base font-semibold uppercase tracking-wider py-2 transition-all duration-300 hover:text-white hover:pl-2 ${
              location.pathname === '/contact' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Contact
          </Link>

          <div className="border-t border-white/10 pt-4 mt-2">
            <a
              href="tel:+13322285736"
              className="flex items-center gap-2 text-white hover:text-gray-300 mb-4"
            >
              <FaPhoneAlt className="text-white" />
              <span className="font-semibold">+1 (332) 228-5736</span>
            </a>
            <Link to="/contact" className="btn-yellow w-full text-center">
              Start Dispatching
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
