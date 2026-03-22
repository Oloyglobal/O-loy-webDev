'use client'
import Link from 'next/link'
import { FaCode, FaShoppingCart, FaMobile, FaSearch, FaRocket, FaTools, FaLaptopCode, FaWordpress, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

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

const services = [
  {
    icon: <FaCode />,
    title: 'Custom Web Development',
    description: 'Build powerful, scalable websites with React, Next.js, and modern technologies.',
    features: ['Custom design and development', 'React & Next.js expertise', 'Fast performance optimisation', 'Clean, maintainable code'],
    price: 'From ₦250,000',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with secure payment integration and inventory management.',
    features: ['Paystack & Flutterwave integration', 'Product management system', 'Shopping cart & checkout', 'Order tracking & management'],
    price: 'From ₦400,000',
  },
  {
    icon: <FaMobile />,
    title: 'Mobile-First Design',
    description: 'Responsive websites that work perfectly on all devices and screen sizes.',
    features: ['Mobile-first approach', 'Responsive across all devices', 'Touch-friendly interfaces', 'Progressive Web Apps (PWA)'],
    price: 'Included',
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimisation',
    description: 'Get found on Google with comprehensive SEO services and optimisation.',
    features: ['Keyword research', 'On-page optimisation', 'Technical SEO', 'Content strategy'],
    price: 'From ₦150,000',
  },
  {
    icon: <FaRocket />,
    title: 'Digital Marketing',
    description: 'Grow your business with social media marketing and Google Ads campaigns.',
    features: ['Social media management', 'Google Ads campaigns', 'Content marketing', 'Email marketing'],
    price: 'From ₦100,000/mo',
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Support',
    description: 'Keep your website secure, updated, and running smoothly with ongoing support.',
    features: ['Regular security updates', 'Content updates', 'Performance monitoring', 'Technical support'],
    price: 'From ₦70,000/mo',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Applications',
    description: 'Custom web applications built for your specific business needs and workflows.',
    features: ['Custom functionality', 'Dashboard & admin panels', 'API integrations', 'Database design'],
    price: 'Custom Quote',
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress Development',
    description: 'Professional WordPress websites with custom themes and plugins.',
    features: ['Custom theme development', 'Plugin customisation', 'WooCommerce setup', 'WordPress optimisation'],
    price: 'From ₦200,000',
  },
]

const steps = [
  { step: '01', title: 'Discovery',        description: 'We learn about your business, goals, and requirements.' },
  { step: '02', title: 'Design',           description: 'Create beautiful, user-friendly designs tailored to your brand.' },
  { step: '03', title: 'Development',      description: 'Build your website using modern technologies and best practices.' },
  { step: '04', title: 'Launch & Support', description: 'Deploy your website and provide ongoing maintenance.' },
]

export default function Services() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: C.bg1 }}>
        {/* Ambient glows */}
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 600, height: 600, top: -180, right: -100, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 400, height: 400, bottom: -100, left: -80, background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '2s' }} />

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
              What We Offer
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              color: C.txtPri,
              fontSize: 'clamp(2.8rem,6vw,5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}>
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Comprehensive web development services to help your business succeed online.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.bg0})` }} />
      </section>

      {/* ══ SERVICES GRID ═══════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-7 rounded-xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${C.border}` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(88,28,220,0.04) 100%)' }} />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{ background: 'rgba(201,168,76,0.10)', border: `1px solid ${C.border}`, fontSize: '1.25rem' }}>
                    <span style={{ color: C.gold }}>{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        <FaCheckCircle size={9} style={{ color: C.gold, flexShrink: 0, marginTop: 3 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="pt-5 mt-auto" style={{ borderTop: `1px solid ${C.border}` }}>
                    <p className="text-xl font-bold mb-4"
                      style={{ fontFamily: 'var(--font-display)', color: C.gold, letterSpacing: '-0.02em' }}>
                      {service.price}
                    </p>
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        fontFamily: 'var(--font-body)',
                        background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                        color: C.bg0,
                        letterSpacing: '0.06em',
                      }}
                    >
                      Get Started
                      <FaArrowRight size={9} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg3 }}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
              Our Process
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, ${C.ltxPri}20, ${C.ltxPri}30, ${C.ltxPri}20, transparent)` }} />

            {steps.map((s, i) => (
              <div key={i} className="text-center group">
                {/* Step number circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 relative transition-all duration-300 group-hover:scale-105"
                  style={{ background: C.ltxPri, border: `2px solid rgba(201,168,76,0.25)` }}>
                  <span className="font-bold text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: C.gold, letterSpacing: '0.05em' }}>
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
                  {s.description}
                </p>
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
            style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Ready to Begin?
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08 }}>
              Ready to Get Started?
            </h2>
            <p className="mt-5 mb-10 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Contact us today for a free consultation and quote for your project.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.04]"
              style={{
                fontFamily: 'var(--font-body)',
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                color: C.bg0,
                boxShadow: `0 8px 40px rgba(201,168,76,0.28)`,
                letterSpacing: '0.025em',
              }}
            >
              Get Free Quote
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
      `}</style>
    </>
  )
}