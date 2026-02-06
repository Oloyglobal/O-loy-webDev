'use client'

import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">O</span>
              </div>
              <span className="font-display font-bold text-lg">O'LOY GLOBAL</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Nigeria's leading web development agency building high-performance websites.
            </p>

            {/* Social Media */}
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://x.com/Olaniyi223" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oloyede-olaniyi-098509371/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm inline-flex items-center group"
                  >
                    <FaArrowRight className="w-2 h-2 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-orange-500">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'E-commerce Solutions',
                'Mobile Development',
                'SEO Optimization',
                'Digital Marketing',
              ].map((service, index) => (
                <li key={index} className="text-gray-400 text-sm hover:text-orange-500 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-orange-500">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0 w-4 h-4" />
                <span className="text-gray-400 text-sm">Lagos & Abuja, Nigeria</span>
              </li>
              <li>
                <a href="tel:+2348069336270" className="flex items-start space-x-3 hover:text-orange-500 transition-colors group">
                  <FaPhone className="text-orange-500 mt-1 flex-shrink-0 w-4 h-4" />
                  <span className="text-gray-400 text-sm group-hover:text-orange-500">+234 806 933 6270</span>
                </a>
              </li>
              <li>
                <a href="mailto:oloyedeolaniyi223@gmail.com" className="flex items-start space-x-3 hover:text-orange-500 transition-colors group">
                  <FaEnvelope className="text-orange-500 mt-1 flex-shrink-0 w-4 h-4" />
                  <span className="text-gray-400 text-sm group-hover:text-orange-500 break-all">
                    oloyedeolaniyi223@gmail.com
                  </span>
                </a>
              </li>
            </ul>

            {/* Availability Badge */}
            <div className="mt-4 inline-flex items-center space-x-2 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-semibold">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} <span className="text-orange-500 font-semibold">O'LOY GLOBAL</span>. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                Privacy
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                Terms
              </Link>
              <span className="text-gray-700">•</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-500 hover:text-orange-500 transition-colors flex items-center space-x-1 group"
              >
                <span>Top</span>
                <span className="transform group-hover:-translate-y-0.5 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
    </footer>
  )
}