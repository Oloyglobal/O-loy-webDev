'use client'

import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight, FaArrowUp } from 'react-icons/fa'

// ─── Same design tokens as the rest of the site ──────────────────────────────
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
  glowV:  'rgba(88,28,220,0.10)',
  glowG:  'rgba(201,168,76,0.08)',
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const quickLinks = [
    { name: 'About Us',   href: '/about' },
    { name: 'Services',   href: '/services' },
    { name: 'Portfolio',  href: '/portfolio' },
    { name: 'Blog',       href: '/blog' },
    { name: 'Contact',    href: '/contact' },
  ]

  const services = [
    'Web Development',
    'E-commerce Solutions',
    'Mobile Development',
    'SEO Optimisation',
    'Digital Marketing',
  ]

  const socials = [
    { icon: <FaFacebook size={14} />,  href: '#',                                                     label: 'Facebook' },
    { icon: <FaTwitter size={14} />,   href: 'https://x.com/Olaniyi223',                              label: 'Twitter' },
    { icon: <FaLinkedin size={14} />,  href: 'https://www.linkedin.com/in/oloyede-olaniyi-098509371/', label: 'LinkedIn' },
    { icon: <FaInstagram size={14} />, href: '#',                                                     label: 'Instagram' },
  ]

  return (
    <footer className="relative overflow-hidden" style={{ background: C.bg0, color: C.txtPri }}>

      {/* ── Ambient glows ── */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />

      {/* ── Top gold hairline ── */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${C.gold}60, transparent)` }} />

      {/* ── Main content ──────────────────────────────────────────────────────── */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* ── Col 1: Brand + social ── */}
          <div className="space-y-5">
            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(201,168,76,0.12)', border: `1px solid ${C.border}` }}>
                <span className="font-black text-base" style={{ fontFamily: 'var(--font-display)', color: C.gold }}>O</span>
              </div>
              <span className="font-bold" style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                O'LOY GLOBAL
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Nigeria's leading web development agency building high-performance digital experiences that convert visitors into customers.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,168,76,0.15)'
                    e.currentTarget.style.borderColor = C.gold
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = C.border
                  }}
                >
                  <span style={{ color: C.txtDim, transition: 'color 0.2s' }}
                    className="group-hover:text-[#C9A84C] transition-colors duration-200">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick links ── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}
                  >
                    <FaArrowRight
                      size={8}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
                      style={{ color: C.gold }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm transition-colors duration-200 cursor-default"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={12} style={{ color: C.gold, marginTop: 3, flexShrink: 0 }} />
                <span className="text-sm" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  Lagos &amp; Abuja, Nigeria
                </span>
              </li>
              <li>
                <a
                  href="tel:+2348069336270"
                  className="flex items-start gap-3 group transition-colors duration-200"
                  onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <FaPhone size={11} style={{ color: C.gold, marginTop: 3, flexShrink: 0 }} />
                  <span className="text-sm" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    +234 806 933 6270
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:oloyedeolaniyi223@gmail.com"
                  className="flex items-start gap-3 group transition-colors duration-200"
                  onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <FaEnvelope size={11} style={{ color: C.gold, marginTop: 3, flexShrink: 0 }} />
                  <span className="text-sm break-all" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    oloyedeolaniyi223@gmail.com
                  </span>
                </a>
              </li>
            </ul>

            {/* Availability badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
              <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-body)', color: '#4ade80' }}>
                Available for Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="relative z-10" style={{ borderTop: '1px solid rgba(201,168,76,0.10)' }}>
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-xs text-center md:text-left"
              style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
              © {currentYear}{' '}
              <span className="font-semibold" style={{ color: C.gold }}>O'LOY GLOBAL</span>
              . All rights reserved.
            </p>

            {/* Legal + scroll top */}
            <div className="flex items-center gap-5 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              <Link href="#"
                style={{ color: C.txtDim }}
                onMouseEnter={e => (e.currentTarget.style.color = C.txtSec)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}>
                Privacy
              </Link>
              <span style={{ color: C.txtDim, opacity: 0.3 }}>·</span>
              <Link href="#"
                style={{ color: C.txtDim }}
                onMouseEnter={e => (e.currentTarget.style.color = C.txtSec)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}>
                Terms
              </Link>
              <span style={{ color: C.txtDim, opacity: 0.3 }}>·</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 transition-colors duration-200 group"
                style={{ color: C.txtDim }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}>
                <span>Top</span>
                <FaArrowUp size={9} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div className="h-px relative z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} />

      {/* ── Scroll to top FAB ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
          color: C.bg0,
          boxShadow: `0 4px 20px rgba(201,168,76,0.35)`,
        }}
      >
        <FaArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>

      {/* ── Font vars (in case footer renders standalone) ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body:    'DM Sans', system-ui, sans-serif;
        }
      `}</style>
    </footer>
  )
}