import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: 'Top 10 Web Design Trends in 2026',
      excerpt: 'Discover the latest web design trends that are shaping the digital landscape this year.',
      category: 'Design',
      date: 'Jan 20, 2026',
      readTime: '5 min read',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Complete Guide to SEO for Nigerian Businesses',
      excerpt: 'Master search engine optimization with our comprehensive guide tailored for Nigerian market.',
      category: 'SEO',
      date: 'Jan 15, 2026',
      readTime: '8 min read',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'How Much Does a Website Cost in Nigeria?',
      excerpt: 'Understanding website development costs and pricing factors in the Nigerian market.',
      category: 'Business',
      date: 'Jan 10, 2026',
      readTime: '6 min read',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Why Your Business Needs a Website in 2026',
      excerpt: 'Explore the critical reasons why every business needs a professional online presence.',
      category: 'Business',
      date: 'Jan 5, 2026',
      readTime: '4 min read',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'E-commerce Success: Payment Integration Guide',
      excerpt: 'Learn how to integrate Paystack and Flutterwave for seamless online payments.',
      category: 'E-commerce',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Mobile-First Design: Best Practices 2026',
      excerpt: 'Essential mobile-first design strategies for better user experience and SEO.',
      category: 'Design',
      date: 'Dec 20, 2025',
      readTime: '5 min read',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Next.js vs React: Which Should You Choose?',
      excerpt: 'Compare Next.js and React to make the best choice for your web project.',
      category: 'Development',
      date: 'Dec 15, 2025',
      readTime: '6 min read',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Website Speed Optimization Tips',
      excerpt: 'Boost your website performance with these proven optimization techniques.',
      category: 'Development',
      date: 'Dec 10, 2025',
      readTime: '8 min read',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Social Media Marketing for Nigerian Businesses',
      excerpt: 'Effective social media strategies to grow your business presence online.',
      category: 'Marketing',
      date: 'Dec 5, 2025',
      readTime: '7 min read',
      color: 'from-sky-500 to-blue-500'
    },
  ]

  const categories = ['All', 'Design', 'Development', 'SEO', 'Business', 'E-commerce', 'Marketing']

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-display mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300">
              Latest insights, tips, and news about web development, design, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-all hover:bg-primary hover:text-white border border-gray-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl overflow-hidden text-white mb-12">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="text-white/80 font-semibold mb-2">Featured Post</span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  The Ultimate Guide to Building a Successful Website in 2026
                </h2>
                <p className="text-white/90 mb-6">
                  Everything you need to know about creating a website that drives results for your business.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm">Jan 25, 2026</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">10 min read</span>
                </div>
                <Link
                  href="/blog/ultimate-guide"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-fit"
                >
                  Read Article
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center text-8xl">
                📚
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Post Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center text-white text-5xl`}>
                  📝
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-primary font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${index}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${index}`}
                      className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md font-display mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest web development tips, trends, and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-display mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Contact us for a free consultation.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}
