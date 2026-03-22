'use client'

import Link from 'next/link'
import { FaAward, FaUsers, FaChartLine, FaHeadset, FaRocket, FaLightbulb, FaHandshake, FaShieldAlt, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

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

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !isVisible) setIsVisible(true) },
      { threshold: 0.5 }
    )
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

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ icon, end, suffix = '', label }: { icon: React.ReactNode; end: number; suffix?: string; label: string }) {
  const { count, ref } = useCounter(end)
  return (
    <div ref={ref}
      className="group relative p-8 rounded-xl text-center transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(88,28,220,0.04))' }} />
      <div className="relative z-10">
        <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
          style={{ color: C.gold, fontSize: '2rem' }}>
          {icon}
        </div>
        <div className="text-4xl font-bold mb-1.5"
          style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>
          {count}{suffix}
        </div>
        <div className="text-xs uppercase tracking-[0.2em] font-medium"
          style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
          {label}
        </div>
      </div>
    </div>
  )
}

// ─── Timeline item ────────────────────────────────────────────────────────────
function TimelineItem({ year, title, description, isLeft }: {
  year: string; title: string; description: string; isLeft: boolean
}) {
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.3 }
    )
    if (ref.current) io.observe(ref.current)
    return () => { if (ref.current) io.unobserve(ref.current) }
  }, [])

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700`}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateX(0)' : `translateX(${isLeft ? '-32px' : '32px'})`,
      }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ fontFamily: 'var(--font-body)', background: 'rgba(201,168,76,0.12)', color: C.gold, border: `1px solid ${C.border}` }}>
          {year}
        </div>
        <h3 className="text-xl font-semibold mb-2"
          style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
          {description}
        </p>
      </div>

      {/* Dot */}
      <div className="flex-shrink-0 z-10 w-3.5 h-3.5 rounded-full"
        style={{ background: C.gold, boxShadow: `0 0 12px rgba(201,168,76,0.5)`, border: `3px solid rgba(201,168,76,0.25)` }} />

      <div className="flex-1" />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: C.bg1 }}>
        {/* Glows */}
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 600, height: 600, top: -200, right: -100, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 500, height: 500, bottom: -150, left: -100, background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '2s' }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.02,
          backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Our Story
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              color: C.txtPri,
              fontSize: 'clamp(2.8rem,6vw,5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}>
              About{' '}
              <span style={{ color: C.gold }}>O'LOY GLOBAL</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Transforming visions into digital reality. We're passionate about building exceptional
              web solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.bg0})` }} />
      </section>

      {/* ══ STATS ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard icon={<FaAward />}      end={50}  suffix="+" label="Awards Won"   />
            <StatCard icon={<FaUsers />}      end={100} suffix="+" label="Happy Clients" />
            <StatCard icon={<FaChartLine />}  end={300} suffix="%" label="Avg. Growth"   />
            <StatCard icon={<FaHeadset />}    end={24}  suffix="/7" label="Support"       />
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg1 }}>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Our Journey
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Building Excellence Since Day One
            </h2>
            <p className="mt-4 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              From a small startup to a leading web development agency — here's our story.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Centre line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: `linear-gradient(to bottom, transparent, ${C.gold}40, ${C.gold}60, ${C.gold}40, transparent)` }} />

            <div className="space-y-14">
              {[
                { year: '2019', title: 'The Beginning',   description: 'Started with a vision to help businesses establish their digital presence through innovative web solutions.', isLeft: true },
                { year: '2020', title: 'Expansion',       description: 'Expanded our team and services, delivering 50+ successful projects across Nigeria.',                           isLeft: false },
                { year: '2021', title: 'Innovation',      description: 'Introduced cutting-edge technologies like React and Next.js to deliver faster, better websites.',              isLeft: true },
                { year: '2022', title: 'Recognition',     description: 'Received multiple awards for outstanding web design and client satisfaction.',                                 isLeft: false },
                { year: '2023–Present', title: 'Leading The Way', description: 'Now serving 100+ clients with 24/7 support and world-class web solutions.',                          isLeft: true },
              ].map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="group relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1"
              style={{ background: C.bg2, border: `1px solid ${C.border}` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05), transparent)' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                  style={{ background: 'rgba(201,168,76,0.12)', border: `1px solid ${C.border}` }}>
                  🎯
                </div>
                <h3 className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.02em' }}>
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  To empower businesses with cutting-edge web solutions that drive growth, enhance
                  online presence, and deliver measurable results. We're committed to turning your
                  digital dreams into reality through innovation, expertise, and dedication.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{ background: C.bg2, border: `1px solid ${C.border}` }}>
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(201,168,76,0.08), transparent)' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                  style={{ background: 'rgba(201,168,76,0.12)', border: `1px solid ${C.border}` }}>
                  🚀
                </div>
                <h3 className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.02em' }}>
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  To become Nigeria's most trusted web development partner, known for delivering
                  exceptional digital experiences that transform businesses. We envision a future
                  where every business thrives online with our innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ═════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg3 }}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
              Core Values
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              What Drives Us Forward
            </h2>
            <p className="mt-4 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
              Our values shape everything we do and guide us in delivering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <FaShieldAlt />, title: 'Quality First',    description: 'We never compromise on quality. Every project is built to the highest standards with meticulous attention to detail.' },
              { icon: <FaRocket />,    title: 'Client Success',   description: 'Your success is our success. We measure our work by the real results it delivers for your business.' },
              { icon: <FaLightbulb />, title: 'Innovation',       description: 'We stay ahead of the curve, using the latest technologies and best practices to deliver cutting-edge solutions.' },
              { icon: <FaHandshake />, title: 'Transparency',     description: 'Clear communication, honest timelines, and upfront pricing. No surprises, just great results.' },
              { icon: <FaChartLine />, title: 'Reliability',      description: 'We deliver on time, every time. You can count on us to meet deadlines and exceed expectations.' },
              { icon: <FaHeadset />,   title: 'Support',          description: "Our relationship doesn't end at launch. We provide ongoing support to keep your website running smoothly." },
            ].map((value, i) => (
              <div key={i}
                className="group p-7 rounded-xl transition-all duration-500 hover:-translate-y-1.5 cursor-default"
                style={{ background: 'rgba(28,18,40,0.04)', border: '1px solid rgba(28,18,40,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(28,18,40,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(28,18,40,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(28,18,40,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(28,18,40,0.08)'
                }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: C.ltxPri }}>
                  <span style={{ color: C.gold }}>{value.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, letterSpacing: '-0.01em' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM CULTURE ════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg1 }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(88,28,220,0.10), transparent)' }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Our Culture
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Join Our Journey
            </h2>
            <p className="mt-5 mb-12 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              We're a team of passionate developers, designers, and strategists dedicated to creating
              digital experiences that matter. Every project we take on is an opportunity to make a difference.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-4">
              {[
                { emoji: '💡', label: 'Creative Thinking' },
                { emoji: '🤝', label: 'Collaboration' },
                { emoji: '🎯', label: 'Results Driven' },
              ].map((item, i) => (
                <div key={i}
                  className="p-7 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <div className="font-semibold text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px top-0"
            style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
          <div className="absolute rounded-full blur-3xl animate-pulse"
            style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Let's Work Together
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08 }}>
              Ready to Work With Us?
            </h2>
            <p className="mt-5 mb-10 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Let's discuss your project and how we can help your business grow online.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.04]"
              style={{
                fontFamily: 'var(--font-body)',
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                color: C.bg0,
                boxShadow: `0 8px 40px rgba(201,168,76,0.28)`,
                letterSpacing: '0.025em',
              }}>
              <span>Get Started Today</span>
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.9s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </>
  )
}