'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRocket, FaCode, FaPalette, FaMobileAlt, FaSearch, FaShoppingCart, FaStar, FaArrowRight, FaTimes } from 'react-icons/fa'

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

const categories = [
  { name: 'All',            icon: <FaStar />,         bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',   description: 'Everything Tech' },
  { name: 'Web Development',icon: <FaCode />,          bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',   description: 'Code & Frameworks' },
  { name: 'UI/UX Design',   icon: <FaPalette />,       bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',   description: 'Design & Creativity' },
  { name: 'Mobile Apps',    icon: <FaMobileAlt />,     bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', description: 'iOS & Android' },
  { name: 'SEO & Marketing',icon: <FaSearch />,        bg: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80', description: 'Growth Hacking' },
  { name: 'E-commerce',     icon: <FaShoppingCart />,  bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',   description: 'Online Business' },
  { name: 'Tech Trends',    icon: <FaRocket />,        bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', description: 'Future of Tech' },
]

const posts = [
  { id: 'ai-revolution-web-development-2026',  title: 'AI Revolution in Web Development: What Developers Need to Know',    excerpt: 'Explore how artificial intelligence is transforming the way we build websites and web applications in 2026.',                            category: 'Web Development', date: 'Feb 1, 2026',  readTime: '8 min',  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', featured: true },
  { id: 'progressive-web-apps-2026',           title: 'Progressive Web Apps: The Future of Mobile Development',           excerpt: 'Why PWAs are becoming the go-to solution for businesses wanting to reach both web and mobile users.',                               category: 'Mobile Apps',    date: 'Jan 28, 2026', readTime: '10 min', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', featured: false },
  { id: 'serverless-architecture-guide',        title: 'Serverless Architecture: Building Scalable Apps Without Servers',  excerpt: 'Learn how serverless computing is changing the game for startups and enterprises alike.',                                          category: 'Web Development', date: 'Jan 25, 2026', readTime: '12 min', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', featured: false },
  { id: 'minimalist-design-trends-2026',        title: 'Minimalist Design Trends Dominating 2026',                        excerpt: 'Discover why less is more in modern UI/UX design and how to implement it effectively.',                                             category: 'UI/UX Design',   date: 'Jan 22, 2026', readTime: '7 min',  image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', featured: false },
  { id: 'voice-search-optimization-2026',       title: 'Voice Search Optimisation: The Next SEO Frontier',               excerpt: 'How to optimise your website for voice assistants and conversational search queries.',                                            category: 'SEO & Marketing', date: 'Jan 20, 2026', readTime: '9 min',  image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80', featured: false },
  { id: 'headless-commerce-revolution',         title: 'Headless Commerce: Why Major Brands Are Making the Switch',      excerpt: 'Understanding the headless commerce architecture and its benefits for modern e-commerce.',                                          category: 'E-commerce',     date: 'Jan 18, 2026', readTime: '11 min', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80', featured: false },
  { id: 'web3-blockchain-development',          title: 'Web3 & Blockchain: Building Decentralized Applications',         excerpt: 'A practical guide to developing dApps and integrating blockchain technology into your projects.',                                   category: 'Tech Trends',    date: 'Jan 15, 2026', readTime: '15 min', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', featured: false },
  { id: 'flutter-vs-react-native-2026',         title: 'Flutter vs React Native: The Ultimate 2026 Comparison',         excerpt: 'Which cross-platform framework should you choose for your next mobile app project?',                                               category: 'Mobile Apps',    date: 'Jan 12, 2026', readTime: '10 min', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80', featured: false },
  { id: 'neuomorphism-glassmorphism-design',    title: 'Neuomorphism vs Glassmorphism: Modern Design Showdown',         excerpt: 'Comparing the latest design trends and when to use each style for maximum impact.',                                                category: 'UI/UX Design',   date: 'Jan 10, 2026', readTime: '8 min',  image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80', featured: false },
  { id: 'micro-frontend-architecture',          title: 'Micro-Frontend Architecture: Scaling Large Applications',        excerpt: 'How to break down monolithic frontends into manageable, independent pieces.',                                                    category: 'Web Development', date: 'Jan 8, 2026',  readTime: '13 min', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', featured: false },
  { id: 'ai-powered-personalization',           title: 'AI-Powered Personalisation in E-commerce',                      excerpt: 'Using machine learning to create personalised shopping experiences that convert.',                                                category: 'E-commerce',     date: 'Jan 5, 2026',  readTime: '9 min',  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', featured: false },
  { id: 'google-core-web-vitals-2026',          title: 'Mastering Google Core Web Vitals in 2026',                      excerpt: "Essential strategies to improve your website's performance and SEO rankings.",                                                   category: 'SEO & Marketing', date: 'Jan 3, 2026',  readTime: '11 min', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', featured: false },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory)

  const featuredPost = posts.find(p => p.featured)
  const selectedCategoryData = categories.find(c => c.name === selectedCategory)

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Dynamic background image with deep dark overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${selectedCategoryData?.bg})` }}
          />
          {/* Deep purple overlay — same darkness as the rest of the site */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(140deg, rgba(5,3,13,0.95) 0%, rgba(12,7,32,0.92) 50%, rgba(5,3,13,0.97) 100%)' }} />
          {/* Subtle grid */}
          <div className="absolute inset-0" style={{
            opacity: 0.02,
            backgroundImage: `linear-gradient(${C.gold} 1px, transparent 1px), linear-gradient(90deg, ${C.gold} 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        {/* Glows */}
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 600, height: 600, top: -150, left: -100, background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ width: 400, height: 400, bottom: -80, right: -80, background: `radial-gradient(circle, ${C.glowG}, transparent 70%)`, animationDelay: '2s' }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Category pill */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 transition-all duration-500"
              style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
              <span style={{ color: C.gold, fontSize: '0.9rem' }}>{selectedCategoryData?.icon}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                {selectedCategoryData?.description}
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
              Tech{' '}
              <span style={{ color: C.gold }}>Insights</span>
              {' '}Hub
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              {selectedCategory === 'All'
                ? 'Stay ahead with cutting-edge technology articles, tutorials, and industry insights.'
                : `Exploring the world of ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.bg1})` }} />
      </section>

      {/* ══ CATEGORY TILES ══════════════════════════════════════════════════════ */}
      <section className="py-14 relative overflow-hidden" style={{ background: C.bg1 }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
              Browse by Topic
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Explore by <span style={{ color: C.gold }}>Category</span>
            </h2>
          </div>

          {/* Category pills — clean, no coloured gradients */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: isActive ? `linear-gradient(135deg, ${C.gold}, ${C.goldLt})` : 'rgba(255,255,255,0.04)',
                    color: isActive ? C.bg0 : C.txtSec,
                    border: isActive ? '1px solid transparent' : `1px solid ${C.border}`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    letterSpacing: '0.08em',
                  }}
                >
                  <span style={{ fontSize: '0.75rem' }}>{cat.icon}</span>
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Active filter info */}
          {selectedCategory !== 'All' && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
                style={{ background: 'rgba(201,168,76,0.07)', border: `1px solid ${C.border}` }}>
                <span className="text-sm" style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                  Showing{' '}
                  <span style={{ color: C.gold, fontWeight: 600 }}>{filteredPosts.length}</span>{' '}
                  articles in <span style={{ color: C.txtPri, fontWeight: 600 }}>{selectedCategory}</span>
                </span>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="transition-colors duration-200"
                  style={{ color: C.txtDim }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.txtDim)}
                  title="Clear filter"
                >
                  <FaTimes size={10} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ FEATURED ARTICLE ════════════════════════════════════════════════════ */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
          <div className="container-custom relative z-10">
            <div className="relative overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.border}` }}>
              {/* Background image with heavy dark overlay */}
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.image})` }} />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(100deg, rgba(5,3,13,0.96) 0%, rgba(12,7,32,0.90) 55%, rgba(5,3,13,0.70) 100%)' }} />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
                <div className="flex flex-col justify-center">
                  {/* Featured label */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6"
                    style={{ background: 'rgba(201,168,76,0.12)', border: `1px solid ${C.border}` }}>
                    <FaStar size={10} style={{ color: C.gold }} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                      Featured Article
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                    {featuredPost.title}
                  </h2>

                  <p className="mt-4 mb-7 text-base leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-8 text-xs"
                    style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                    <span>{featuredPost.date}</span>
                    <span style={{ color: C.border }}>·</span>
                    <span>{featuredPost.readTime} read</span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03] w-fit"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                      color: C.bg0,
                      boxShadow: `0 8px 32px rgba(201,168,76,0.28)`,
                      letterSpacing: '0.025em',
                    }}>
                    Read Full Article
                    <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Stats */}
                <div className="hidden lg:flex items-end justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    {[{ v: '4.9★', l: 'Reader Rating' }, { v: '50K+', l: 'Views' }].map((s, i) => (
                      <div key={i} className="p-6 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}>
                        <div className="text-3xl font-bold mb-1.5"
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
            </div>
          </div>
        </section>
      )}

      {/* ══ ARTICLES GRID ═══════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg2 }}>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.glowG}, transparent 70%)` }} />

        <div className="container-custom relative z-10">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => {
                  const catData = categories.find(c => c.name === post.category)
                  return (
                    <article
                      key={post.id}
                      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
                      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}` }}
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden flex-shrink-0" style={{ background: C.bg0 }}>
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        {/* Dark overlay on image */}
                        <div className="absolute inset-0"
                          style={{ background: 'rgba(5,3,13,0.35)' }} />

                        {/* Category badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-md"
                          style={{ background: 'rgba(5,3,13,0.75)', backdropFilter: 'blur(8px)', border: `1px solid ${C.border}` }}>
                          <span style={{ color: C.gold, fontSize: '0.65rem' }}>{catData?.icon}</span>
                          <span className="text-xs font-semibold uppercase tracking-wider"
                            style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2 leading-snug"
                          style={{ fontFamily: 'var(--font-display)', color: C.txtPri, letterSpacing: '-0.01em' }}>
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>

                        <p className="text-sm leading-relaxed mb-5 line-clamp-3 flex-1"
                          style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                          {post.excerpt}
                        </p>

                        {/* Meta + Read link */}
                        <div className="flex items-center justify-between pt-4"
                          style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }}>
                          <div className="flex items-center gap-2 text-xs"
                            style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
                            <span>{post.date}</span>
                            <span style={{ opacity: 0.4 }}>·</span>
                            <span>{post.readTime} read</span>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300"
                            style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
                            Read
                            <FaArrowRight size={8} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Load more */}
              <div className="text-center mt-12">
                <button
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(255,255,255,0.04)',
                    color: C.txtSec,
                    border: `1px solid ${C.border}`,
                    letterSpacing: '0.025em',
                  }}>
                  Load More Articles
                  <FaArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform rotate-90" />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'var(--font-display)', color: C.txtPri }}>
                No Articles Found
              </h3>
              <p className="text-sm mb-8"
                style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
                We're working on adding more content to this category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{ fontFamily: 'var(--font-body)', background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`, color: C.bg0, letterSpacing: '0.025em' }}>
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══ NEWSLETTER ══════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: C.bg0 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px top-0"
            style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
          <div className="absolute rounded-full blur-3xl animate-pulse"
            style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${C.glowV}, transparent 70%)` }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'var(--font-body)', color: C.gold }}>
              Weekly Newsletter
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: C.txtPri, fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Stay Ahead of the <span style={{ color: C.gold }}>Curve</span>
            </h2>
            <p className="mt-5 mb-10 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: C.txtSec }}>
              Get weekly insights on the latest tech trends, development tips, and industry news delivered straight to your inbox.
            </p>

            {/* Email form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-lg text-sm outline-none transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${C.border}`,
                  color: C.txtPri,
                }}
                onFocus={e => (e.currentTarget.style.borderColor = C.gold)}
                onBlur={e => (e.currentTarget.style.borderColor = C.border)}
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-300 hover:scale-[1.03]"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
                  color: C.bg0,
                  boxShadow: `0 4px 20px rgba(201,168,76,0.25)`,
                  letterSpacing: '0.04em',
                }}>
                Subscribe Free
              </button>
            </form>

            <p className="mt-4 text-xs"
              style={{ fontFamily: 'var(--font-body)', color: C.txtDim }}>
              Join 10,000+ tech enthusiasts. Unsubscribe anytime.
            </p>
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