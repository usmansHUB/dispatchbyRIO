import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Prices', path: '/prices' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center 
                          group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-300">
              <span className="text-dark font-extrabold text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-wide">
                RESOLUTE
              </span>
              <span className="text-gray-400 text-[10px] tracking-[3px] uppercase font-semibold leading-tight">
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-gray-300 ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-semibold uppercase tracking-wider py-2 
                        transition-all duration-300 hover:text-white hover:pl-2 ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
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
