'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaClock, FaUser, FaCalendar, FaArrowLeft, FaTag, FaArrowRight } from 'react-icons/fa'

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

const blogPosts: Record<string, {
  title: string; category: string; date: string; readTime: string;
  author: string; excerpt: string; content: string
}> = {
  'top-10-web-designers-nigeria-2026': {
    title: 'Top 10 Best Web Designers in Nigeria 2026',
    category: 'Rankings',
    date: 'January 20, 2026',
    readTime: '12 min read',
    author: "O'LOY GLOBAL Team",
    excerpt: 'Discover the leading web design companies ranked by portfolio quality, client reviews, and expertise.',
    content: `
      <h2>Introduction</h2>
      <p>Nigeria's digital economy is booming, and having a professional website is no longer optional for businesses that want to succeed. Whether you're a startup in Lagos, an established company in Abuja, or a growing business anywhere in Nigeria, choosing the right web designer can make or break your online presence.</p>
      
      <h2>How We Ranked</h2>
      <p>Our ranking methodology considers multiple factors including:</p>
      <ul>
        <li>Portfolio quality and diversity</li>
        <li>Client reviews and testimonials</li>
        <li>Pricing and value for money</li>
        <li>Technical expertise and innovation</li>
        <li>Customer service and support</li>
      </ul>

      <h2>The Top 10 Rankings</h2>
      <h3>1. O'LOY GLOBAL Web Development</h3>
      <p>Leading the pack with exceptional modern designs, cutting-edge technology, and outstanding client satisfaction. Specialises in React, Next.js, and custom web applications.</p>

      <h3>2. ProWeb Nigeria</h3>
      <p>A close second with a strong portfolio of e-commerce and corporate websites. Known for their SEO expertise and digital marketing integration.</p>

      <h3>3. TechCraft Solutions</h3>
      <p>Excellent at delivering complex web applications and enterprise solutions. Strong technical team with expertise in full-stack development.</p>

      <h2>How to Choose</h2>
      <p>When selecting a web designer, consider:</p>
      <ul>
        <li>Your budget and timeline</li>
        <li>The designer's portfolio and style</li>
        <li>Technical expertise in your industry</li>
        <li>Post-launch support and maintenance</li>
      </ul>

      <h2>Pricing Guide</h2>
      <p>Web design costs in Nigeria typically range from:</p>
      <ul>
        <li>Basic websites: ₦200,000 – ₦400,000</li>
        <li>Business websites: ₦400,000 – ₦1,000,000</li>
        <li>E-commerce: ₦800,000 – ₦2,500,000</li>
        <li>Enterprise solutions: ₦2,500,000+</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choosing the right web designer is crucial for your business success. Take time to review portfolios, read client reviews, and discuss your specific needs before making a decision.</p>
    `
  },
  'complete-seo-guide-nigerian-businesses': {
    title: 'Complete Guide to SEO for Nigerian Businesses',
    category: 'SEO',
    date: 'January 15, 2026',
    readTime: '15 min read',
    author: "O'LOY GLOBAL Team",
    excerpt: 'Master search engine optimisation with our comprehensive guide tailored for the Nigerian market.',
    content: `
      <h2>Why SEO Matters for Nigerian Businesses</h2>
      <p>In Nigeria's competitive digital landscape, SEO is essential for visibility and growth...</p>
      <h2>Keyword Research for Nigerian Market</h2>
      <p>Understanding local search behaviour is crucial...</p>
      <h2>On-Page SEO Best Practices</h2>
      <p>Optimise your website structure and content...</p>
    `
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = params?.slug as string
  const post = blogPosts[slug] || blogPosts['top-10-web-designers-nigeria-2026']

  const relatedPosts = [
    { title: 'Website Cost in Nigeria',      category: 'Business', slug: 'website-cost-nigeria-2026' },
    { title: 'Mobile-First Design Guide',    category: 'Design',   slug: 'mobile-first-design-2026' },
    { title: 'SEO for Nigerian Businesses',  category: 'SEO',      slug: 'complete-seo-guide-nigerian-businesses' },
  ]

  return (
    <>
      {/* ══ BREADCRUMB ══════════════════════════════════════════════════════════ */}
      <div style={{ background: C.bg0, borderBottom: `1px solid ${C.border}` }}>
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-xs flex-wrap"
            style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
            <Link href="/"
              style={{ color: C.txtDim, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}>
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/blog"
              style={{ color: C.txtDim, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}>
              Blog
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: C.txtSec }}>{post.title}</span>
          </div>
        </div>
      </div>

      {/* ══ ARTICLE HEADER ══════════════════════════════════════════════════════ */}
      <article style={{ background: C.bg1 }}>
        {/* Header area with glow */}
        <div className="relative overflow-hidden pt-16 pb-12" style={{ background: C.bg1 }}>
          <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
            style={{ width: 600, height: 600, top: -200, right: -100, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity: 0.02,
            backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Badges */}
              <div className="flex items-center flex-wrap gap-2 mb-7">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)', background: 'rgba(201,168,76,0.12)', color: C.gold, border: `1px solid ${C.border}` }}>
                  {post.category}
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)', background: 'rgba(74,222,128,0.08)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}>
                  2026 Updated
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                color: C.txtPri,
                fontSize: 'clamp(2rem,5vw,3.5rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
              }}>
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-5 text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8"
                style={{ borderTop: `1px solid ${C.border}` }}>
                {[
                  { icon: <FaCalendar size={10} />, text: post.date },
                  { icon: <FaUser size={10} />,     text: post.author },
                  { icon: <FaClock size={10} />,    text: post.readTime },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    <span style={{ color: C.gold }}>{m.icon}</span>
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ ARTICLE BODY ════════════════════════════════════════════════════ */}
        <div style={{ background: C.bg0 }}>
          <div className="container-custom py-16">
            <div className="max-w-3xl mx-auto">

              {/* Table of Contents */}
              <div className="p-7 rounded-xl mb-14"
                style={{ background: C.bg2, border: `1px solid ${C.border}` }}>
                <h3 className="flex items-center gap-2 font-semibold mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                  <FaTag size={12} style={{ color: C.gold }} />
                  Table of Contents
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { href: '#introduction',  label: 'Introduction' },
                    { href: '#how-we-ranked', label: 'How We Ranked' },
                    { href: '#rankings',      label: 'The Top 10 Rankings' },
                    { href: '#how-to-choose', label: 'How to Choose' },
                    { href: '#pricing',       label: 'Pricing Guide' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-xs font-semibold" style={{ color: C.txtDim, minWidth: 20 }}>
                        0{i + 1}
                      </span>
                      <a href={item.href}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: C.txtSec, textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                        onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article content — prose styled via <style> below */}
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Back + Share */}
              <div className="mt-16 pt-8 flex items-center justify-between flex-wrap gap-4"
                style={{ borderTop: `1px solid ${C.border}` }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 group"
                  style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}>
                  <FaArrowLeft size={10} className="group-hover:-translate-x-0.5 transition-transform" />
                  Back to Blog
                </Link>

                <div className="flex items-center gap-5">
                  <span className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                    Share:
                  </span>
                  {['Facebook', 'Twitter', 'LinkedIn'].map(platform => (
                    <a key={platform} href="#"
                      className="text-xs font-semibold transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}>
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
                  style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                  Related Articles
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedPosts.map((r, i) => (
                    <Link
                      key={i}
                      href={`/blog/${r.slug}`}
                      className="group p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                      style={{ background: C.bg2, border: `1px solid ${C.border}` }}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider"
                        style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                        {r.category}
                      </span>
                      <h4 className="mt-2 text-sm font-semibold leading-snug transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-display)', color: C.txtSec }}
                        onMouseEnter={e => (e.currentTarget.style.color = C.txtPri)}
                        onMouseLeave={e => (e.currentTarget.style.color = C.txtSec)}>
                        {r.title}
                      </h4>
                      <div className="mt-3 flex items-center gap-1 text-xs"
                        style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                        Read
                        <FaArrowRight size={8} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Ready to Build?
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Need a Professional Website?
            </h2>
            <p className="mt-5 mb-10 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Let O'LOY GLOBAL build your dream website. Get started with a free consultation today.
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
              }}>
              Get Free Quote
              <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Global styles ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body:    'DM Sans', system-ui, sans-serif;
        }

        /* ── Blog prose styles — applied to dangerouslySetInnerHTML content ── */
        .blog-prose {
          font-family: var(--font-body);
          color: ${C.txtSec};
          line-height: 1.85;
          font-size: 1rem;
        }

        .blog-prose h2 {
          font-family: var(--font-display);
          color: ${C.txtPri};
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid ${C.border};
        }

        .blog-prose h3 {
          font-family: var(--font-display);
          color: ${C.txtPri};
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .blog-prose p {
          color: ${C.txtSec};
          margin-bottom: 1.4rem;
        }

        .blog-prose ul {
          margin: 1.2rem 0 1.4rem 0;
          padding-left: 0;
          list-style: none;
        }

        .blog-prose ul li {
          position: relative;
          padding-left: 1.4rem;
          margin-bottom: 0.6rem;
          color: ${C.txtSec};
          font-size: 0.95rem;
        }

        .blog-prose ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${C.gold};
          opacity: 0.7;
        }

        .blog-prose a {
          color: ${C.gold};
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          transition: border-color 0.2s;
        }

        .blog-prose a:hover {
          border-color: ${C.gold};
        }

        .blog-prose strong {
          color: ${C.txtPri};
          font-weight: 600;
        }

        .blog-prose blockquote {
          margin: 2rem 0;
          padding: 1.25rem 1.5rem;
          border-left: 3px solid ${C.gold};
          background: rgba(201,168,76,0.05);
          border-radius: 0 0.5rem 0.5rem 0;
          font-family: var(--font-display);
          font-style: italic;
          color: ${C.txtSec};
          font-size: 1.1rem;
        }
      `}</style>
    </>
  )
}