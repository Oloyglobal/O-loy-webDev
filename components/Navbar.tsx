'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 border-b border-amber-500/20">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+2348100098339" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaPhone className="text-amber-400" />
                <span>+234 8069336270</span>
              </a>
              <a href="mailto:info@oloyglobal.com" className="hover:text-amber-400 transition-colors hidden md:block">
                info@oloyglobal.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-amber-400">●</span>
              <span className="hidden md:block">Professional Web Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-xl border-b-4 border-amber-500'
            : 'bg-gray-900/95 backdrop-blur-xl'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-lg border-2 border-amber-500">
                  <Image
                    src="https://res.cloudinary.com/dlb3doese/image/upload/v1769919134/O_loy_Global_mnus1q.png"
                    alt="O'LOY GLOBAL"
                    width={50}
                    height={50}
                    className="h-12 w-auto"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-black text-2xl tracking-tight transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  O,LOY GLOBAL
                </span>
                <span className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase">
                  Web Development
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-gray-700' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300`}></span>
                  <span className={`absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300`}></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative px-8 py-3 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 rounded-none clip-path-polygon shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1"
                style={{
                  backgroundSize: '200% 100%',
                  clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                ></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="space-y-6 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-3xl font-bold text-white hover:text-amber-400 transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`inline-block mt-8 px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg uppercase tracking-wider shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms',
                clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}