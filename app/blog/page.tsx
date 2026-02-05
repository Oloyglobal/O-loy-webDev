'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRocket, FaCode, FaPalette, FaMobileAlt, FaSearch, FaShoppingCart, FaBullhorn, FaStar } from 'react-icons/fa'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Category data with icons and backgrounds
  const categories = [
    { 
      name: 'All', 
      icon: <FaStar />, 
      color: 'from-purple-600 to-pink-600',
      bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      description: 'Everything Tech'
    },
    { 
      name: 'Web Development', 
      icon: <FaCode />, 
      color: 'from-blue-600 to-cyan-600',
      bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      description: 'Code & Frameworks'
    },
    { 
      name: 'UI/UX Design', 
      icon: <FaPalette />, 
      color: 'from-pink-600 to-rose-600',
      bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      description: 'Design & Creativity'
    },
    { 
      name: 'Mobile Apps', 
      icon: <FaMobileAlt />, 
      color: 'from-green-600 to-emerald-600',
      bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      description: 'iOS & Android'
    },
    { 
      name: 'SEO & Marketing', 
      icon: <FaSearch />, 
      color: 'from-orange-600 to-amber-600',
      bg: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
      description: 'Growth Hacking'
    },
    { 
      name: 'E-commerce', 
      icon: <FaShoppingCart />, 
      color: 'from-indigo-600 to-purple-600',
      bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      description: 'Online Business'
    },
    { 
      name: 'Tech Trends', 
      icon: <FaRocket />, 
      color: 'from-teal-600 to-cyan-600',
      bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      description: 'Future of Tech'
    },
  ]

  const posts = [
    {
      id: 'ai-revolution-web-development-2026',
      title: 'AI Revolution in Web Development: What Developers Need to Know',
      excerpt: 'Explore how artificial intelligence is transforming the way we build websites and web applications in 2026.',
      category: 'Web Development',
      date: 'Feb 1, 2026',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: true
    },
    {
      id: 'progressive-web-apps-2026',
      title: 'Progressive Web Apps: The Future of Mobile Development',
      excerpt: 'Why PWAs are becoming the go-to solution for businesses wanting to reach both web and mobile users.',
      category: 'Mobile Apps',
      date: 'Jan 28, 2026',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'serverless-architecture-guide',
      title: 'Serverless Architecture: Building Scalable Apps Without Servers',
      excerpt: 'Learn how serverless computing is changing the game for startups and enterprises alike.',
      category: 'Web Development',
      date: 'Jan 25, 2026',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'minimalist-design-trends-2026',
      title: 'Minimalist Design Trends Dominating 2026',
      excerpt: 'Discover why less is more in modern UI/UX design and how to implement it effectively.',
      category: 'UI/UX Design',
      date: 'Jan 22, 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'voice-search-optimization-2026',
      title: 'Voice Search Optimization: The Next SEO Frontier',
      excerpt: 'How to optimize your website for voice assistants and conversational search queries.',
      category: 'SEO & Marketing',
      date: 'Jan 20, 2026',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'headless-commerce-revolution',
      title: 'Headless Commerce: Why Major Brands Are Making the Switch',
      excerpt: 'Understanding the headless commerce architecture and its benefits for modern e-commerce.',
      category: 'E-commerce',
      date: 'Jan 18, 2026',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'web3-blockchain-development',
      title: 'Web3 & Blockchain: Building Decentralized Applications',
      excerpt: 'A practical guide to developing dApps and integrating blockchain technology into your projects.',
      category: 'Tech Trends',
      date: 'Jan 15, 2026',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'flutter-vs-react-native-2026',
      title: 'Flutter vs React Native: The Ultimate 2026 Comparison',
      excerpt: 'Which cross-platform framework should you choose for your next mobile app project?',
      category: 'Mobile Apps',
      date: 'Jan 12, 2026',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'neuomorphism-glassmorphism-design',
      title: 'Neuomorphism vs Glassmorphism: Modern Design Showdown',
      excerpt: 'Comparing the latest design trends and when to use each style for maximum impact.',
      category: 'UI/UX Design',
      date: 'Jan 10, 2026',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'micro-frontend-architecture',
      title: 'Micro-Frontend Architecture: Scaling Large Applications',
      excerpt: 'How to break down monolithic frontends into manageable, independent pieces.',
      category: 'Web Development',
      date: 'Jan 8, 2026',
      readTime: '13 min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'ai-powered-personalization',
      title: 'AI-Powered Personalization in E-commerce',
      excerpt: 'Using machine learning to create personalized shopping experiences that convert.',
      category: 'E-commerce',
      date: 'Jan 5, 2026',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
    {
      id: 'google-core-web-vitals-2026',
      title: 'Mastering Google Core Web Vitals in 2026',
      excerpt: 'Essential strategies to improve your website\'s performance and SEO rankings.',
      category: 'SEO & Marketing',
      date: 'Jan 3, 2026',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      author: "O'LOY Tech Team",
      featured: false
    },
  ]

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const featuredPost = posts.find(p => p.featured)
  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory)

  return (
    <>
      {/* Hero Section with Dynamic Background */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url(${selectedCategoryData?.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
              <div className="text-2xl">{selectedCategoryData?.icon}</div>
              <span className="text-white font-bold uppercase tracking-wider text-sm">
                {selectedCategoryData?.description}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Insights</span> Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              {selectedCategory === 'All' 
                ? 'Stay ahead with cutting-edge technology articles, tutorials, and industry insights.'
                : `Exploring the world of ${selectedCategory}`
              }
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Interactive Category Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative overflow-hidden rounded-2xl aspect-square transition-all duration-500 ${
                  selectedCategory === category.name
                    ? 'scale-105 shadow-2xl ring-4 ring-amber-500'
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.bg})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-95 transition-opacity`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div className="font-bold text-sm text-center leading-tight">
                    {category.name}
                  </div>
                  
                  {selectedCategory === category.name && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Filter Info */}
          {selectedCategory !== 'All' && (
            <div className="mt-6 text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full border-2 border-amber-200">
                <span className="text-gray-700">
                  Showing <span className="font-bold text-amber-700">{filteredPosts.length}</span> articles in
                </span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  {selectedCategory}
                </span>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="ml-2 text-gray-500 hover:text-red-600 transition-colors"
                  title="Clear filter"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Article - Only show when "All" selected */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16">
                <div className="flex flex-col justify-center text-white">
                  <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <FaStar className="text-yellow-300" />
                    FEATURED ARTICLE
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-300">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 w-fit group"
                  >
                    Read Full Article
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="hidden lg:flex items-end justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl font-black text-amber-400 mb-2">4.9★</div>
                      <div className="text-white text-sm">Reader Rating</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl font-black text-amber-400 mb-2">50K+</div>
                      <div className="text-white text-sm">Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => {
                  const categoryData = categories.find(cat => cat.name === post.category)
                  return (
                    <article
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${categoryData?.color} opacity-30 group-hover:opacity-20 transition-opacity`}></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`flex items-center gap-2 bg-gradient-to-r ${categoryData?.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                            <div className="text-lg">{categoryData?.icon}</div>
                            <span>{post.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-tight">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime} read</span>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-amber-600 font-bold group-hover:gap-2 inline-flex items-center gap-1 transition-all"
                          >
                            Read
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                  Load More Tech Articles
                  <svg className="w-6 h-6 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Articles Found</h3>
              <p className="text-gray-600 mb-8 text-lg">We're working on adding more content to this category!</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Stay Ahead of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Curve</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get weekly insights on the latest tech trends, development tips, and industry news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">Join 10,000+ tech enthusiasts. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  )
}