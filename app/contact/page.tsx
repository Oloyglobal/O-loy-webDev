'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle, FaArrowRight } from 'react-icons/fa'

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

// ─── Reusable styled input classes (inline styles because Tailwind can't toggle dynamically) ──
const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  background: 'rgba(255,255,255,0.04)',
  color: '#EAE6F0',
  fontFamily: 'var(--font-body)',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [focused, setFocused] = useState<string>('')

  const validateForm = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = 'Full name is required (min 2 characters)'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'A valid email address is required'
    if (formData.phone && !/^[\d\s+\-()]+$/.test(formData.phone)) e.phone = 'Please enter a valid phone number'
    if (!formData.service) e.service = 'Please select a service'
    if (!formData.message.trim() || formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  'service_qchahny',
          template_id: 'template_l2fk8du',
          user_id:     'cAByZJ1noQrh1ctIk',
          template_params: {
            from_name:  formData.name,
            from_email: formData.email,
            phone:      formData.phone || 'Not provided',
            service:    formData.service,
            budget:     formData.budget || 'Not specified',
            message:    formData.message,
            to_email:   'your-email@example.com',
          }
        })
      })
      if (res.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = ev.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // Dynamic border for each field
  const fieldBorder = (name: string) => {
    if (errors[name]) return '1px solid rgba(239,68,68,0.6)'
    if (focused === name) return `1px solid ${C.gold}`
    return `1px solid ${C.border}`
  }

  const contactItems = [
    { icon: <FaPhone />,        label: 'Phone',          lines: ['+234 8069336270', '+234 8145987036'] },
    { icon: <FaEnvelope />,     label: 'Email',          lines: ['oloyedeolaniyi223@gmail.com', 'support@oloyglobal.com'] },
    { icon: <FaMapMarkerAlt />, label: 'Location',       lines: ['Lagos, Nigeria', 'Abuja, Nigeria'] },
    { icon: <FaClock />,        label: 'Business Hours', lines: ['Mon – Fri: 9AM – 6PM', 'Sat: 10AM – 4PM'] },
  ]

  const faqs = [
    { q: 'How much does a website cost?',         a: 'Website costs vary based on complexity. Basic websites start from ₦250,000, e-commerce from ₦400,000. Contact us for a custom quote.' },
    { q: 'How long does it take to build a website?', a: 'Timeline depends on project scope. Simple websites take 2–3 weeks, business sites 4–6 weeks, and e-commerce 6–10 weeks.' },
    { q: 'Do you provide website maintenance?',   a: 'Yes! We offer maintenance packages from ₦70,000/month including updates, security, and support.' },
    { q: 'Will my website be mobile responsive?', a: 'Absolutely! All our websites are mobile-first and work perfectly on all devices.' },
  ]

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: C.bg1 }}>
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 600, height: 600, top: -180, left: -100, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 400, height: 400, bottom: -80, right: -80, background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '2s' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.02,
          backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Contact Us
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              color: C.txtPri,
              fontSize: 'clamp(2.8rem,6vw,5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}>
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Ready to start your project? Get a free consultation and quote today.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.bg0})` }} />
      </section>

      {/* ══ CONTACT SECTION ═════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Contact info sidebar ── */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.02em' }}>
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 group"
                    style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(201,168,76,0.12)', border: `1px solid ${C.border}` }}>
                      <span style={{ color: C.gold, fontSize: '0.75rem' }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                        {item.label}
                      </p>
                      {item.lines.map((line, li) => (
                        <p key={li} className="text-sm"
                          style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                <span className="text-xs font-semibold"
                  style={{ fontFamily: 'var(--font-body)', color: '#4ade80' }}>
                  Available for New Projects
                </span>
              </div>
            </div>

            {/* ── Contact form ── */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl" style={{ background: C.bg2, border: `1px solid ${C.border}` }}>
                {/* Gold top accent */}
                <div className="h-px w-full mb-8 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.goldLt}, transparent)` }} />

                <h2 className="text-xl font-semibold mb-7"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.02em' }}>
                  Send Us a Message
                </h2>

                {/* Success */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl flex items-start gap-3"
                    style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.2)' }}>
                    <FaCheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="font-semibold text-sm mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#4ade80' }}>
                        Message Sent Successfully!
                      </p>
                      <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl flex items-start gap-3"
                    style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <FaExclamationCircle size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="font-semibold text-sm mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                        Oops! Something went wrong
                      </p>
                      <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Please try again or contact us directly via email.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Full Name <span style={{ color: C.gold }}>*</span>
                      </label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        placeholder="John Doe"
                        style={{ ...inputBase, border: fieldBorder('name') }}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1.5" style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Email Address <span style={{ color: C.gold }}>*</span>
                      </label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        placeholder="john@example.com"
                        style={{ ...inputBase, border: fieldBorder('email') }}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1.5" style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Phone Number
                      </label>
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused('')}
                        placeholder="+234 800 000 0000"
                        style={{ ...inputBase, border: fieldBorder('phone') }}
                      />
                      {errors.phone && (
                        <p className="text-xs mt-1.5" style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                        Service <span style={{ color: C.gold }}>*</span>
                      </label>
                      <select
                        name="service" value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocused('service')}
                        onBlur={() => setFocused('')}
                        style={{ ...inputBase, border: fieldBorder('service') }}
                      >
                        <option value="" style={{ background: C.bg2 }}>Select a service</option>
                        <option value="web-development" style={{ background: C.bg2 }}>Web Development</option>
                        <option value="ecommerce" style={{ background: C.bg2 }}>E-commerce</option>
                        <option value="mobile" style={{ background: C.bg2 }}>Mobile Development</option>
                        <option value="seo" style={{ background: C.bg2 }}>SEO Services</option>
                        <option value="marketing" style={{ background: C.bg2 }}>Digital Marketing</option>
                        <option value="maintenance" style={{ background: C.bg2 }}>Maintenance & Support</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs mt-1.5" style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                      Budget Range
                    </label>
                    <select
                      name="budget" value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocused('budget')}
                      onBlur={() => setFocused('')}
                      style={{ ...inputBase, border: focused === 'budget' ? `1px solid ${C.gold}` : `1px solid ${C.border}` }}
                    >
                      <option value="" style={{ background: C.bg2 }}>Select budget range</option>
                      <option value="under-250k" style={{ background: C.bg2 }}>Under ₦250,000</option>
                      <option value="250k-500k" style={{ background: C.bg2 }}>₦250,000 – ₦500,000</option>
                      <option value="500k-1m" style={{ background: C.bg2 }}>₦500,000 – ₦1,000,000</option>
                      <option value="1m-2m" style={{ background: C.bg2 }}>₦1,000,000 – ₦2,000,000</option>
                      <option value="over-2m" style={{ background: C.bg2 }}>Over ₦2,000,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                      Project Details <span style={{ color: C.gold }}>*</span>
                    </label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      rows={6}
                      placeholder="Tell us about your project, goals, and requirements..."
                      style={{ ...inputBase, border: fieldBorder('message'), resize: 'none' }}
                    />
                    {errors.message && (
                      <p className="text-xs mt-1.5" style={{ fontFamily: 'var(--font-body)', color: '#ef4444' }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: isSubmitting
                        ? 'rgba(201,168,76,0.4)'
                        : `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                      color: C.bg0,
                      boxShadow: isSubmitting ? 'none' : `0 8px 32px rgba(201,168,76,0.28)`,
                      letterSpacing: '0.04em',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaArrowRight size={11} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg3 }}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
              FAQ
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.ltxPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
              Common questions about our services and process
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(28,18,40,0.05)', border: '1px solid rgba(28,18,40,0.10)' }}
              >
                <summary
                  className="flex items-center justify-between p-5 cursor-pointer select-none"
                  style={{ fontFamily: 'var(--font-body)', color: C.ltxPri, fontWeight: 600, fontSize: '0.9rem', listStyle: 'none' }}>
                  <span>{faq.q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: C.gold }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <div className="h-px mb-4" style={{ background: 'rgba(28,18,40,0.08)' }} />
                  <p className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: C.ltxSec }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
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

        /* Remove default select arrow colour in dark mode */
        select option { background: #110A2A; color: #EAE6F0; }

        /* Remove default details triangle in Safari/Firefox */
        details summary::-webkit-details-marker { display: none; }
        details summary::marker { display: none; }
      `}</style>
    </>
  )
}