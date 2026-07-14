import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-dark font-extrabold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-wide">RESOLUTE</span>
                <span className="text-gray-400 text-[10px] tracking-[3px] uppercase font-semibold leading-tight">Logistics</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional truck dispatch services for owner-operators and fleet owners across the United States. 
              We help you find the best loads and maximize your revenue.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaTwitter, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center 
                           text-white hover:bg-white hover:border-white hover:text-dark transition-all duration-300"
                  aria-label={`Social link ${index + 1}`}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-white"></span>
            </h5>
            <ul className="space-y-3 mt-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Prices', path: '/prices' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="text-white text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative">
              Our Services
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-white"></span>
            </h5>
            <ul className="space-y-3 mt-4">
              {[
                'Truck Dispatching',
                'Billing Services',
                'Document Management',
                'Rate Negotiation',
                'Route Planning',
                'Compliance Support',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                    <span className="text-white text-xs">›</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-white"></span>
            </h5>
            <ul className="space-y-4 mt-4">
              <li>
                <a href="tel:+13322285736" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <FaPhoneAlt className="text-white mt-1 flex-shrink-0" size={14} />
                  <span className="text-sm">+1 (332) 228-5736</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@resolute-logistics.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <FaEnvelope className="text-white mt-1 flex-shrink-0" size={14} />
                  <span className="text-sm">info@resolute-logistics.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" size={14} />
                  <span className="text-sm">United States</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Resolute Logistics. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
