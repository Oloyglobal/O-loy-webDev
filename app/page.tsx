'use client'

import Link from 'next/link'
import { FaCode, FaShoppingCart, FaMobile, FaSearch, FaRocket, FaTools, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
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

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !isVisible) setIsVisible(true) }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => { if (ref.current) io.unobserve(ref.current) }
  }, [])
  useEffect(() => {
    if (!isVisible) return
    let start: number, frame: number
    const tick = (ts: number) => {
      if (!start) start = ts
      const pct = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(end * pct))
      if (pct < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, end, duration])
  return { count, ref }
}

// ─── HERO SWIPER ─────────────────────────────────────────────────────────────
// Three carefully chosen Unsplash photos:
//   Slide 1 — Dark moody coding workspace, multiple screens, deep shadows
//   Slide 2 — Abstract glowing circuit / data visualization, cold deep blue
//   Slide 3 — Hands on keyboard close-up, dramatic side lighting, editorial
function HeroSwiper() {
  const [cur, setCur] = useState(0)
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false])

  const slides = [
    {
      // Dark multi-monitor developer workspace — deep purple/blue ambient glow
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=85&fit=crop&crop=center',
      alt: 'Professional developer workspace with multiple monitors and deep ambient lighting',
      // Ken-Burns pan: slowly zoom to center
      pan: 'kenburns-center',
    },
    {
      // Glowing server rack / data infrastructure — cold blue, industrial precision
      url: 'https://images.unsplash.com/photo-155849449-ef010cbdcc31?w=1920&q=85&fit=crop&crop=center',
      alt: 'Modern data server infrastructure with blue ambient lighting',
      pan: 'kenburns-up',
    },
    {
      // Aerial overhead shot of programmer with code on screen — editorial, calm
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=85&fit=crop&crop=center',
      alt: 'Developer working on code — editorial overhead perspective',
      pan: 'kenburns-down',
    },
  ]

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const markLoaded = (i: number) => {
    setLoaded(prev => { const n = [...prev]; n[i] = true; return n })
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ transition: 'opacity 1.6s cubic-bezier(0.4,0,0.2,1)', opacity: i === cur ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.url}
            alt={s.alt}
            onLoad={() => markLoaded(i)}
            className={`w-full h-full object-cover ${loaded[i] ? `hero-img ${s.pan}` : ''}`}
            style={{ willChange: 'transform' }}
          />
        </div>
      ))}

      {/* ── Layered overlays — keep bg very dark for text legibility ── */}
      {/* Base dark veil */}
      <div className="absolute inset-0" style={{ background: 'rgba(5,3,13,0.72)' }} />
      {/* Directional gradient — left side darker for text column */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(8,3,22,0.88) 0%, rgba(8,3,22,0.55) 55%, rgba(8,3,22,0.35) 100%)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to top, rgba(5,3,13,0.85), transparent)' }} />

      {/* Architectural grid — very subtle */}
      <div className="absolute inset-0" style={{
        opacity: 0.022,
        backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }} />

      {/* Ambient purple glow — top left */}
      <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ width: 700, height: 700, top: -200, left: -200, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
      {/* Ambient gold glow — bottom center */}
      <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ width: 400, height: 400, bottom: -80, left: '40%', background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '3s' }} />

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: 1,
              borderRadius: 1,
              transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
              width: i === cur ? 52 : 20,
              background: i === cur
                ? `linear-gradient(90deg, ${C.gold}, ${C.goldLt})`
                : 'rgba(255,255,255,0.22)',
            }}
          />
        ))}
      </div>

      {/* ── Slide number indicator (top right) ── */}
      <div className="absolute top-8 right-8 z-10 flex items-center gap-2"
        style={{ fontFamily: 'var(--font-body)' }}>
        <span style={{ color: C.gold, fontSize: '0.9rem', fontWeight: 600 }}>0{cur + 1}</span>
        <span style={{ color: C.txtDim, fontSize: '0.7rem' }}>/ 0{slides.length}</span>
      </div>
    </div>
  )
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(end)
  return (
    <div ref={ref} className="text-center cursor-default group">
      <div className="text-4xl md:text-5xl font-bold mb-1.5 group-hover:scale-105 transition-transform duration-300"
        style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] font-medium"
        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
        {label}
      </div>
    </div>
  )
}

// ─── FEATURE TILE ─────────────────────────────────────────────────────────────
function FeatureTile({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setVis(true), delay) }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => { if (ref.current) io.unobserve(ref.current) }
  }, [delay])
  return (
    <div ref={ref}
      className={`text-center p-8 rounded-xl transition-all duration-700 group ${vis ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:scale-105`}
      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}>
      <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform"
        style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-[0.2em]"
        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
        {label}
      </div>
    </div>
  )
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300"
      style={{ background: 'rgba(201,168,76,0.07)', border: `1px solid ${C.border}` }}>
      <span style={{ color: C.gold }}>{icon}</span>
      <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>{text}</span>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroSwiper />
        <div className="container-custom relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-9 animate-fade-in">
              {/* Status pill */}
              <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full"
                style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  🇳🇬 Nigeria's #1 Web Development Agency
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                color: C.txtPri,
                fontSize: 'clamp(2.8rem,6vw,5rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
              }}>
                Transform Your Business<br />
                With{' '}
                <span style={{ color: C.gold }}>Award&#8209;Winning</span>
                <br />Websites
              </h1>

              {/* Sub */}
              <p className="text-lg leading-relaxed max-w-xl font-light"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                We don't just code websites. We engineer digital experiences that{' '}
                <span className="font-semibold" style={{ color: C.txtPri }}>
                  convert visitors into customers
                </span>{' '}
                and drive measurable business growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge icon={<FaCheckCircle size={12} />} text="100% Client Satisfaction" />
                <Badge icon={<FaStar size={12} />} text="5-Star Rated" />
                <Badge icon={<FaRocket size={12} />} text="Fast Delivery" />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact"
                  className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldLt} 100%)`,
                    color: C.bg0,
                    boxShadow: `0 8px 32px rgba(201,168,76,0.28)`,
                    letterSpacing: '0.025em',
                  }}>
                  <span>Get Free Consultation</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(255,255,255,0.05)',
                    color: C.txtPri,
                    border: '1px solid rgba(255,255,255,0.14)',
                    letterSpacing: '0.025em',
                  }}>
                  View Portfolio
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <StatCard end={50} label="Happy Clients" suffix="+" />
                <StatCard end={100} label="Projects Done" suffix="+" />
                <StatCard end={5} label="Years Experience" suffix="+" />
                <div className="text-center cursor-default">
                  <div className="text-4xl md:text-5xl font-bold mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>24/7</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-medium"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>Support</div>
                </div>
              </div>
            </div>

            {/* Code window */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-3xl"
                  style={{ background: `radial-gradient(ellipse, ${C.glowV}, transparent 70%)` }} />
                <div className="relative rounded-2xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  style={{ background: 'rgba(10,5,26,0.85)', backdropFilter: 'blur(24px)', border: `1px solid ${C.border}` }}>
                  <div className="flex items-center justify-between mb-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
                    </div>
                    <span className="text-xs font-mono" style={{ color: C.txtDim }}>index.ts</span>
                  </div>
                  <div className="space-y-3 text-sm font-mono">
                    {[
                      <><span style={{color:C.gold}}>const</span> <span style={{color:'#a78bfa'}}>solution</span> <span style={{color:C.txtDim}}>=</span> <span style={{color:'#86efac'}}>"O'LOY GLOBAL"</span><span style={{color:C.txtDim}}>;</span></>,
                      <span style={{color:C.txtDim}}>// Building excellence since 2019</span>,
                      <><span style={{color:C.gold}}>function</span> <span style={{color:'#a78bfa'}}>buildWebsite</span><span style={{color:C.txtDim}}>()</span> <span style={{color:C.txtDim}}>{'{'}</span></>,
                      <><span style={{marginLeft:24,display:'inline-block'}}><span style={{color:C.gold}}>return</span> <span style={{color:'#86efac'}}>"exceptional results"</span><span style={{color:C.txtDim}}>;</span></span></>,
                      <span style={{color:C.txtDim}}>{'}'}</span>,
                      <><span style={{color:'#a78bfa'}}>deploySuccess</span><span style={{color:C.txtDim}}>{'();'}</span></>,
                    ].map((line, i) => (
                      <div key={i} className="flex space-x-4">
                        <span style={{ color: C.txtDim, minWidth: 16 }} className="select-none">{i + 1}</span>
                        <div>{line}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between text-xs"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-body)' }}>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                      <span className="font-semibold" style={{ color: '#22c55e' }}>Build Successful</span>
                    </div>
                    <span style={{ color: C.txtDim }}>TypeScript · React · Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>Our Services</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Everything You Need To Dominate Online
            </h2>
            <p className="mt-5 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              From custom websites to powerful e-commerce solutions, we deliver results that matter to your bottom line.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <FaCode />, title: 'Custom Web Development', description: 'Lightning-fast websites built with React, Next.js, and modern technologies. Optimised for speed, SEO, and conversions.', features: ['React & Next.js', 'SEO Optimised', 'Mobile First'] },
              { icon: <FaShoppingCart />, title: 'E-commerce Solutions', description: 'Complete online stores with Paystack & Flutterwave integration. Inventory management, secure checkout, and analytics.', features: ['Payment Gateway', 'Inventory System', 'Analytics'] },
              { icon: <FaMobile />, title: 'Progressive Web Apps', description: 'App-like experiences that work on any device. Push notifications, offline mode, and lightning-fast performance.', features: ['Cross-Platform', 'Offline Mode', 'Push Alerts'] },
              { icon: <FaSearch />, title: 'SEO & Performance', description: 'Rank #1 on Google with technical SEO, keyword optimisation, and Core Web Vitals perfection.', features: ['Google Rankings', 'Speed Optimisation', 'Technical SEO'] },
              { icon: <FaRocket />, title: 'Digital Marketing', description: 'Drive traffic and sales with Google Ads, Facebook Ads, and social media marketing campaigns.', features: ['Google Ads', 'Social Media', 'Lead Generation'] },
              { icon: <FaTools />, title: 'Support & Maintenance', description: '24/7 monitoring, security updates, backups, and ongoing optimisation to keep your site running perfectly.', features: ['24/7 Monitoring', 'Security Updates', 'Backups'] },
            ].map((s, i) => (
              <div key={i}
                className="group relative p-7 rounded-xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${C.border}` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(88,28,220,0.04) 100%)' }} />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{ background: 'rgba(201,168,76,0.10)', border: `1px solid ${C.border}` }}>
                    <span style={{ color: C.gold }}>{s.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>{s.description}</p>
                  <div className="space-y-1.5 mb-6">
                    {s.features.map((f, fi) => (
                      <div key={fi} className="flex items-center space-x-2 text-xs">
                        <FaCheckCircle size={9} style={{ color: C.gold, flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/services"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:space-x-2.5"
                    style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                    <span>Learn More</span>
                    <FaArrowRight size={9} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{ fontFamily: 'var(--font-body)', background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`, color: C.bg0, boxShadow: `0 8px 32px rgba(201,168,76,0.22)`, letterSpacing: '0.025em' }}>
              <span>View All Services</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg3 }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold"
                style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>Why Choose Us</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                We're Not Like<br />Other Web Developers
              </h2>
              <p className="text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
                While others just build websites, we engineer{' '}
                <span className="font-semibold" style={{ color: C.ltxPri }}>digital assets that generate revenue</span>.
                Every pixel, every line of code, every design decision is made to drive business growth.
              </p>
              <div className="space-y-1">
                {[
                  { title: 'Modern Tech Stack', description: 'React, Next.js, TypeScript — not outdated WordPress themes' },
                  { title: 'SEO-First Approach', description: 'Built to rank on Google from day one, not as an afterthought' },
                  { title: 'Mobile-First Design', description: 'Perfect on every device — 70% of traffic is mobile' },
                  { title: 'Nigerian Payment Integration', description: 'Paystack & Flutterwave — accept payments in naira instantly' },
                  { title: 'Real Results', description: 'Average 300% increase in leads within 90 days' },
                  { title: 'True Partnership', description: 'Ongoing support, not "build it and ghost you"' },
                ].map((item, i) => (
                  <div key={i}
                    className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 cursor-default"
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(28,18,40,0.05)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: C.ltxPri }}>
                      <FaCheckCircle size={9} style={{ color: C.gold }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: C.ltxPri }}>{item.title}</p>
                      <p className="text-sm"
                        style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{ fontFamily: 'var(--font-body)', background: C.ltxPri, color: C.gold, letterSpacing: '0.025em' }}>
                <span>Discover Our Story</span>
                <FaArrowRight size={12} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl transform rotate-2 scale-105 blur-sm"
                style={{ background: 'linear-gradient(135deg, rgba(28,18,40,0.12), rgba(201,168,76,0.06))', border: '1px solid rgba(28,18,40,0.1)' }} />
              <div className="relative p-10 rounded-2xl shadow-2xl" style={{ background: C.bg2 }}>
                <div className="grid grid-cols-2 gap-4">
                  <FeatureTile value="100%" label="Success Rate" delay={0} />
                  <FeatureTile value="48hrs" label="Response Time" delay={150} />
                  <FeatureTile value="300%" label="Avg. Growth" delay={300} />
                  <FeatureTile value="24/7" label="Support" delay={450} />
                </div>
                <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-center justify-center space-x-1.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={13} style={{ color: C.gold }} />)}
                  </div>
                  <p className="text-center mt-3 text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    5-Star Rated by 50+ Nigerian Businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg1 }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(88,28,220,0.10), transparent)' }} />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>Client Success Stories</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Real Results From Real Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Adebayo Johnson', role: 'CEO, TechStart Lagos', content: "O'LOY GLOBAL didn't just build us a website — they built us a lead generation machine. We went from 10 leads per month to over 300. The ROI is incredible.", avatar: 'AJ', result: '+300% Leads' },
              { name: 'Chioma Okafor', role: 'Founder, Fashion Hub Nigeria', content: 'Our e-commerce store is absolutely beautiful and so easy to manage. Sales doubled in the first month. The Paystack integration works flawlessly.', avatar: 'CO', result: '2× Sales' },
              { name: 'Ibrahim Musa', role: 'Director, Abuja Consulting', content: 'Professional, responsive, and they delivered ahead of schedule. The SEO work has us ranking #1 for our main keywords. Highly recommended.', avatar: 'IM', result: '#1 Google Rank' },
            ].map((t, i) => (
              <div key={i}
                className="p-8 rounded-xl transition-all duration-500 hover:-translate-y-1.5 group"
                style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${C.border}` }}>
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, si) => <FaStar key={si} size={11} style={{ color: C.gold }} />)}
                </div>
                <p className="leading-relaxed mb-7 italic"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtSec, fontSize: '1.05rem' }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full mb-7"
                  style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
                  <FaRocket size={9} style={{ color: C.gold }} />
                  <span className="text-xs font-semibold uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body)', color: C.gold }}>{t.result}</span>
                </div>
                <div className="flex items-center space-x-3 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(201,168,76,0.15)', color: C.gold, border: `1px solid ${C.border}`, fontFamily: 'var(--font-body)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtPri }}>{t.name}</p>
                    <p className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px top-0"
            style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
          <div className="absolute rounded-full blur-3xl animate-pulse"
            style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-6"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>Ready to Begin?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08 }}>
              Ready To 10X<br />Your Business?
            </h2>
            <p className="mt-6 mb-12 text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Get a free consultation and custom quote. No pressure, no obligations — just honest advice on how to dominate your market online.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-14">
              <Link href="/contact"
                className="group inline-flex items-center space-x-3 px-10 py-5 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.03]"
                style={{ fontFamily: 'var(--font-body)', background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`, color: C.bg0, boxShadow: `0 8px 40px rgba(201,168,76,0.28)`, letterSpacing: '0.025em' }}>
                <span>Get Free Quote Now</span>
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+2348100098339"
                className="inline-flex items-center px-10 py-5 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.03]"
                style={{ fontFamily: 'var(--font-body)', background: 'rgba(255,255,255,0.04)', color: C.txtPri, border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '0.025em' }}>
                📞 Call: 08100098339
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[{ v: '48hrs', l: 'Response Time' }, { v: '₦0', l: 'Consultation Fee' }, { v: '100%', l: 'Satisfaction Guarantee' }].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold mb-1.5"
                    style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.025em' }}>{item.v}</p>
                  <p className="text-xs uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body:    'DM Sans', system-ui, sans-serif;
        }

        /* ── Ken Burns animations for hero slides ── */
        @keyframes kenburns-center {
          from { transform: scale(1.08) translate(0, 0); }
          to   { transform: scale(1.0)  translate(0, 0); }
        }
        @keyframes kenburns-up {
          from { transform: scale(1.10) translateY(2%); }
          to   { transform: scale(1.02) translateY(-1%); }
        }
        @keyframes kenburns-down {
          from { transform: scale(1.10) translateY(-2%); }
          to   { transform: scale(1.02) translateY(1%); }
        }

        .hero-img { animation-duration: 7s; animation-fill-mode: both; animation-timing-function: ease-out; }
        .kenburns-center { animation-name: kenburns-center; }
        .kenburns-up     { animation-name: kenburns-up; }
        .kenburns-down   { animation-name: kenburns-down; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }
      `}</style>
    </>
  )
}