// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <>
//       {/* Top Bar - Contact Info */}
//       <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 border-b border-amber-500/20">
//         <div className="container-custom">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center gap-6">
//               <a href="tel:+2348100098339" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
//                 <FaPhone className="text-amber-400" />
//                 <span>+234 8069336270</span>
//               </a>
//               <a href="mailto:info@oloyglobal.com" className="hover:text-amber-400 transition-colors hidden md:block">
//                 info@oloyglobal.com
//               </a>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-amber-400">●</span>
//               <span className="hidden md:block">Professional Web Solutions</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav
//         className={`sticky top-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? 'bg-white shadow-xl border-b-4 border-amber-500'
//             : 'bg-gray-900/95 backdrop-blur-xl'
//         }`}
//       >
//         <div className="container-custom">
//           <div className="flex items-center justify-between h-24">
//             {/* Logo Section */}
//             <Link href="/" className="flex items-center gap-4 group">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
//                 <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-lg border-2 border-amber-500">
//                   <Image
//                     src="https://res.cloudinary.com/dlb3doese/image/upload/v1769919134/O_loy_Global_mnus1q.png"
//                     alt="O'LOY GLOBAL"
//                     width={50}
//                     height={50}
//                     className="h-12 w-auto"
//                     priority
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <span className={`font-display font-black text-2xl tracking-tight transition-colors ${
//                   isScrolled ? 'text-gray-900' : 'text-white'
//                 }`}>
//                   O,LOY GLOBAL
//                 </span>
//                 <span className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase">
//                   Web Development
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link, index) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`relative px-5 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
//                     isScrolled ? 'text-gray-700' : 'text-gray-300'
//                   }`}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {link.name}
//                   <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300`}></span>
//                   <span className={`absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300`}></span>
//                 </Link>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="hidden lg:flex items-center gap-4">
//               <Link
//                 href="/contact"
//                 className="relative px-8 py-3 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 rounded-none clip-path-polygon shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1"
//                 style={{
//                   backgroundSize: '200% 100%',
//                   clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
//                 }}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
//                   style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
//                 ></div>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center ${
//                 isScrolled ? 'text-gray-900' : 'text-white'
//               }`}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <div className="relative w-6 h-5 flex flex-col justify-between">
//                 <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
//                   isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
//                 }`}></span>
//                 <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
//                   isMobileMenuOpen ? 'opacity-0' : ''
//                 }`}></span>
//                 <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
//                   isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
//                 }`}></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu - Full Screen Overlay */}
//       <div
//         className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-40 lg:hidden transition-all duration-500 ${
//           isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center min-h-screen p-8">
//           <div className="space-y-6 text-center">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`block text-3xl font-bold text-white hover:text-amber-400 transition-all duration-300 transform ${
//                   isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//                 }`}
//                 style={{ 
//                   transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' 
//                 }}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className={`inline-block mt-8 px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg uppercase tracking-wider shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform ${
//                 isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//               style={{ 
//                 transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms',
//                 clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
//               }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }




'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaPhone } from 'react-icons/fa'

// ─── Same design tokens as homepage ──────────────────────────────────────────
const C = {
  bg0:    '#05030D',
  bg1:    '#0C0720',
  bg2:    '#110A2A',
  txtPri: '#EAE6F0',
  txtSec: '#9E96B0',
  txtDim: '#5C5470',
  gold:   '#C9A84C',
  goldLt: '#E8D5A3',
  border: 'rgba(201,168,76,0.15)',
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home',      href: '/' },
    { name: 'About',     href: '/about' },
    { name: 'Services',  href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog',      href: '/blog' },
    { name: 'Contact',   href: '/contact' },
  ]

  return (
    <>
      {/* ── Top bar ──────────────────────────────────────────────────────────── */}
      <div style={{ background: C.bg0, borderBottom: `1px solid ${C.border}` }}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-xs">
            {/* Left — contact */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+2348069336270"
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ color: C.txtSec, fontFamily: 'var(--font-body)' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}
              >
                <FaPhone size={10} style={{ color: C.gold }} />
                <span>+234 8069336270</span>
              </a>
              <a
                href="mailto:info@oloyglobal.com"
                className="hidden md:block transition-colors duration-200"
                style={{ color: C.txtSec, fontFamily: 'var(--font-body)' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}
              >
                info@oloyglobal.com
              </a>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
              <span className="hidden md:block uppercase tracking-[0.2em] font-medium"
                style={{ color: C.txtDim, fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}>
                Professional Web Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav ─────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled
            ? `rgba(10,5,26,0.97)`
            : `rgba(8,3,20,0.92)`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? `1px solid ${C.border}` : '1px solid transparent',
          boxShadow: isScrolled ? `0 8px 40px rgba(0,0,0,0.5)` : 'none',
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex-shrink-0">
                {/* Gold glow behind logo */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-md"
                  style={{ background: `radial-gradient(circle, rgba(201,168,76,0.4), transparent)` }} />
                <div className="relative p-1.5 rounded-lg"
                  style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
                  <Image
                    src="https://res.cloudinary.com/dlb3doese/image/upload/v1769919134/O_loy_Global_mnus1q.png"
                    alt="O'LOY GLOBAL"
                    width={44}
                    height={44}
                    className="h-11 w-auto"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col leading-none gap-1">
                <span className="font-bold tracking-tight transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
                  O'LOY GLOBAL
                </span>
                <span className="font-semibold uppercase"
                  style={{ fontFamily: 'var(--font-body)', color: C.gold, fontSize: '0.6rem', letterSpacing: '0.3em' }}>
                  Web Development
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-xs font-semibold uppercase transition-all duration-300 group"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: C.txtSec,
                    letterSpacing: '0.15em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}
                >
                  {link.name}
                  {/* Underline slide-in */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 group-hover:w-full"
                    style={{ width: 0, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.04]"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldLt} 100%)`,
                  color: C.bg0,
                  boxShadow: `0 4px 20px rgba(201,168,76,0.25)`,
                  letterSpacing: '0.08em',
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative z-50 flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-px transition-all duration-300"
                style={{
                  background: C.txtSec,
                  transform: isMobileMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                }} />
              <span className="block w-4 h-px transition-all duration-300"
                style={{
                  background: C.gold,
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: isMobileMenuOpen ? 'scaleX(0)' : 'none',
                }} />
              <span className="block w-6 h-px transition-all duration-300"
                style={{
                  background: C.txtSec,
                  transform: isMobileMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ───────────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          background: `linear-gradient(140deg, ${C.bg2} 0%, ${C.bg1} 60%, ${C.bg0} 100%)`,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(88,28,220,0.12), transparent)' }} />

        <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
          {/* Nav links */}
          <div className="space-y-2 text-center w-full max-w-xs">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 font-bold transition-all duration-500"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: C.txtPri,
                  fontSize: '2rem',
                  letterSpacing: '-0.02em',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: isMobileMenuOpen ? `${index * 70}ms` : '0ms',
                  borderBottom: `1px solid rgba(201,168,76,0.08)`,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtPri)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="mt-10 px-12 py-4 rounded-lg font-semibold uppercase text-sm transition-all duration-500"
            style={{
              fontFamily: 'var(--font-body)',
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
              color: C.bg0,
              letterSpacing: '0.1em',
              boxShadow: `0 8px 32px rgba(201,168,76,0.28)`,
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 70}ms` : '0ms',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>

          {/* Bottom contact info */}
          <div className="mt-10 flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionDelay: isMobileMenuOpen ? `${(navLinks.length + 1) * 70}ms` : '0ms',
            }}>
            <a href="tel:+2348069336270"
              className="flex items-center gap-2 text-sm"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              <FaPhone size={10} style={{ color: C.gold }} />
              +234 8069336270
            </a>
            <a href="mailto:info@oloyglobal.com"
              className="text-xs"
              style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
              info@oloyglobal.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Font injection (matches homepage) ────────────────────────────────── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body:    'DM Sans', system-ui, sans-serif;
        }
      `}</style>
    </>
  )
}