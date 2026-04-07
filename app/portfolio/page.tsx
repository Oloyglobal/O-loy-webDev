'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight, FaExternalLinkAlt, FaAward, FaRocket } from 'react-icons/fa'

// ─── Design tokens — identical to the rest of the site ───────────────────────
const C = {
  bg0:    '#05030D',
  bg1:    '#0C0720',
  bg2:    '#110A2A',
  bg3:    '#F7F4F0',
  txtPri: '#EAE6F0',
  txtSec: '#9E96B0',
  txtDim: '#5C5470',
  ltxPri: '#1C1228',
  ltxSec: '#6B5F7A',
  gold:   '#C9A84C',
  goldLt: '#E8D5A3',
  border: 'rgba(201,168,76,0.15)',
  glowV:  'rgba(88,28,220,0.14)',
  glowG:  'rgba(201,168,76,0.10)',
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Our Official Website',
      category: 'Web Development',
      client: "O'LOY GLOBAL",
      description: "The official website for O'LOY GLOBAL — showcasing services, portfolio, and brand identity with a modern, high-performance stack.",
      tags: ['Next.js', 'React', 'Tailwind'],
      image: '/projects/OloyGlobalcopy.png',
      link: 'https://o-loy-web-dev.vercel.app/',
      metrics: { conversion: '+250%', speed: '95/100', traffic: '+180%' },
      year: '2025',
    },
    {
      title: 'Consulting Firm Website',
      category: 'Web Development',
      client: 'Run Alpha',
      description: 'Full-featured consulting platform with service showcase, client portal, and lead generation optimisation.',
      tags: ['E-commerce', 'Paystack', 'React'],
      image: '/projects/alphaa.png',
      link: 'https://www.runalpha.co/',
      metrics: { revenue: '+300%', orders: '1000+', rating: '4.9/5' },
      year: '2024',
    },
    {
      title: 'Technology Company Website',
      category: 'Web Development',
      client: 'Classic Info',
      description: 'A dynamic learning environment for individuals advancing skills in technology — courses in coding, cybersecurity, AI, and IT.',
      tags: ['Next.js', 'React'],
      image: '/projects/pexels-minan1398-853168.jpg',
      link: 'https://classicinfo.vercel.app',
      metrics: { revenue: '+300%', orders: '1000+', rating: '4.9/5' },
      year: '2025',
    },
    {
      title: 'Stitches Company Website',
      category: 'E-commerce',
      client: 'Tomi Stitches',
      description: 'Vibrant e-commerce platform showcasing artistry and craftsmanship — portfolio, seamless checkout, and blog for Tomi Stitches.',
      tags: ['Next.js', 'React'],
      image: '/projects/Stitches_-_Polo_Park.webp',
      link: 'https://tomistitches.vercel.app/',
      metrics: { revenue: '+270%', orders: '1020+', rating: '4.9/5' },
      year: '2025',
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      client: 'GText Real Estate',
      description: 'A dynamic real estate platform highlighting premium developments, investment opportunities, and the trusted GText brand.',
      tags: ['Next.js', 'React'],
      image: '/projects/unnamed.webp',
      link: 'https://gtext-kappa.vercel.app/',
      metrics: { revenue: '+270%', orders: '1020+', rating: '4.9/5' },
      year: '2025',
    },
    {
      title: 'Social Media Growth Platform',
      category: 'Web Development',
      client: 'Cociani',
      description: 'A high-converting social media growth platform offering Instagram, Twitter, and TikTok engagement services with fast delivery and real-time tracking.',
      tags: ['Next.js', 'React'],
      image: '/projects/social-media-growth.webp',
      link: 'https://the-cociani.com/',
      metrics: { revenue: '+320%', orders: '5K+', rating: '4.8/5' },
      year: '2025',
    }
  ]

  const categories = ['All', 'Web Development', 'E-commerce', 'Web Application', 'E-learning']
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: C.bg1 }}>
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 700, height: 700, top: -200, left: -150, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 500, height: 500, bottom: -100, right: -80, background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '2s' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.02,
          backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
              <FaAward size={12} style={{ color: C.gold }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                100+ Successful Projects
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              color: C.txtPri,
              fontSize: 'clamp(2.8rem,6vw,5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}>
              Our{' '}
              <span style={{ color: C.gold }}>Award&#8209;Winning</span>
              {' '}Work
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Real projects. Real results. See how we've transformed businesses across Nigeria with cutting-edge web solutions.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 max-w-sm mx-auto pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[{ v: '100+', l: 'Projects' }, { v: '50+', l: 'Clients' }, { v: '98%', l: 'Success Rate' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>
                    {s.v}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.bg2})` }} />
      </section>

      {/* ══ FILTER BAR ══════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 py-4"
        style={{
          background: 'rgba(10,5,26,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${C.border}`,
        }}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: activeFilter === cat
                    ? `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`
                    : 'rgba(255,255,255,0.04)',
                  color: activeFilter === cat ? C.bg0 : C.txtSec,
                  border: activeFilter === cat ? '1px solid transparent' : `1px solid ${C.border}`,
                  letterSpacing: '0.08em',
                  transform: activeFilter === cat ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center mt-3 text-xs"
            style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
            Showing{' '}
            <span style={{ color: C.gold, fontWeight: 600 }}>{filteredProjects.length}</span>{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </div>

      {/* ══ PROJECTS GRID ═══════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg2 }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}
              >
                {/* Image */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-56 overflow-hidden flex-shrink-0"
                  style={{ background: C.bg0 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(5,3,13,0.78)', backdropFilter: 'blur(4px)' }}>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                        style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})` }}>
                        <FaExternalLinkAlt size={13} style={{ color: C.bg0 }} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Visit Live Site
                      </p>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{ fontFamily: 'var(--font-body)', background: 'rgba(5,3,13,0.75)', backdropFilter: 'blur(8px)', color: C.gold, border: `1px solid ${C.border}` }}>
                    {project.year}
                  </div>
                </a>

                {/* Details */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em]"
                      style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                      {project.category}
                    </span>
                    <span className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5 line-clamp-3 flex-1"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-4 rounded-xl"
                    style={{ background: 'rgba(201,168,76,0.05)', border: `1px solid ${C.border}` }}>
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base font-bold"
                          style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.01em' }}>
                          {value}
                        </div>
                        <div className="text-xs capitalize mt-0.5"
                          style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, ti) => (
                      <span key={ti}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{ fontFamily: 'var(--font-body)', background: 'rgba(201,168,76,0.07)', color: C.txtSec, border: `1px solid ${C.border}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                      color: C.bg0,
                      letterSpacing: '0.06em',
                    }}
                  >
                    Visit Live Site
                    <FaArrowRight size={9} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px top-0"
            style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
          <div className="absolute rounded-full blur-3xl animate-pulse"
            style={{ width: 700, height: 700, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
              <FaRocket size={11} style={{ color: C.gold }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                Ready to Join Our Success Stories?
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08 }}>
              Want to See Your{' '}
              <span style={{ color: C.gold }}>Project Here?</span>
            </h2>

            <p className="mt-5 mb-12 text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Let's create something extraordinary together. Get started with a free consultation and custom quote today.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.04]"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                  color: C.bg0,
                  boxShadow: `0 8px 40px rgba(201,168,76,0.28)`,
                  letterSpacing: '0.025em',
                }}>
                Start Your Project
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/services"
                className="inline-flex items-center px-10 py-5 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.04]"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'rgba(255,255,255,0.04)',
                  color: C.txtPri,
                  border: '1px solid rgba(255,255,255,0.12)',
                  letterSpacing: '0.025em',
                }}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fonts ── */}
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