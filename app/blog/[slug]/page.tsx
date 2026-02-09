// 'use client'

// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { FaClock, FaUser, FaCalendar, FaArrowLeft, FaTag } from 'react-icons/fa'

// export default function BlogPost() {
//   const params = useParams()
//   const slug = params?.slug as string

//   // Blog post data (in real app, fetch from API/database)
//   const blogPosts: any = {
//     'top-10-web-designers-nigeria-2026': {
//       title: 'Top 10 Best Web Designers in Nigeria 2026',
//       category: 'Rankings',
//       date: 'January 20, 2026',
//       readTime: '12 min read',
//       author: "O'LOY GLOBAL Team",
//       excerpt: 'Discover the leading web design companies ranked by portfolio quality, client reviews, and expertise.',
//       content: `
//         <h2>Introduction</h2>
//         <p>Nigeria's digital economy is booming, and having a professional website is no longer optional for businesses that want to succeed. Whether you're a startup in Lagos, an established company in Abuja, or a growing business anywhere in Nigeria, choosing the right web designer can make or break your online presence.</p>
        
//         <h2>How We Ranked</h2>
//         <p>Our ranking methodology considers multiple factors including:</p>
//         <ul>
//           <li>Portfolio quality and diversity</li>
//           <li>Client reviews and testimonials</li>
//           <li>Pricing and value for money</li>
//           <li>Technical expertise and innovation</li>
//           <li>Customer service and support</li>
//         </ul>

//         <h2>The Top 10 Rankings</h2>
//         <h3>1. O'LOY GLOBAL Web Development</h3>
//         <p>Leading the pack with exceptional modern designs, cutting-edge technology, and outstanding client satisfaction. Specializes in React, Next.js, and custom web applications.</p>

//         <h3>2. ProWeb Nigeria</h3>
//         <p>A close second with a strong portfolio of e-commerce and corporate websites. Known for their SEO expertise and digital marketing integration.</p>

//         <h3>3. TechCraft Solutions</h3>
//         <p>Excellent at delivering complex web applications and enterprise solutions. Strong technical team with expertise in full-stack development.</p>

//         <h2>How to Choose</h2>
//         <p>When selecting a web designer, consider:</p>
//         <ul>
//           <li>Your budget and timeline</li>
//           <li>The designer's portfolio and style</li>
//           <li>Technical expertise in your industry</li>
//           <li>Post-launch support and maintenance</li>
//         </ul>

//         <h2>Pricing Guide</h2>
//         <p>Web design costs in Nigeria typically range from:</p>
//         <ul>
//           <li>Basic websites: ₦200,000 - ₦400,000</li>
//           <li>Business websites: ₦400,000 - ₦1,000,000</li>
//           <li>E-commerce: ₦800,000 - ₦2,500,000</li>
//           <li>Enterprise solutions: ₦2,500,000+</li>
//         </ul>

//         <h2>Conclusion</h2>
//         <p>Choosing the right web designer is crucial for your business success. Take time to review portfolios, read client reviews, and discuss your specific needs before making a decision.</p>
//       `
//     },
//     'complete-seo-guide-nigerian-businesses': {
//       title: 'Complete Guide to SEO for Nigerian Businesses',
//       category: 'SEO',
//       date: 'January 15, 2026',
//       readTime: '15 min read',
//       author: "O'LOY GLOBAL Team",
//       excerpt: 'Master search engine optimization with our comprehensive guide tailored for the Nigerian market.',
//       content: `
//         <h2>Why SEO Matters for Nigerian Businesses</h2>
//         <p>In Nigeria's competitive digital landscape, SEO is essential for visibility and growth...</p>
        
//         <h2>Keyword Research for Nigerian Market</h2>
//         <p>Understanding local search behavior is crucial...</p>
        
//         <h2>On-Page SEO Best Practices</h2>
//         <p>Optimize your website structure and content...</p>
//       `
//     }
//   }

//   const post = blogPosts[slug] || blogPosts['top-10-web-designers-nigeria-2026']

//   return (
//     <>
//       {/* Breadcrumb Navigation */}
//       <div className="bg-gray-100 border-b">
//         <div className="container-custom py-4">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
//             <span>/</span>
//             <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
//             <span>/</span>
//             <span className="text-gray-900 font-medium">{post.title}</span>
//           </div>
//         </div>
//       </div>

//       {/* Article Header */}
//       <article className="bg-white">
//         <div className="container-custom py-12">
//           <div className="max-w-4xl mx-auto">
//             {/* Category Badge */}
//             <div className="flex items-center gap-3 mb-6">
//               <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold uppercase">
//                 {post.category}
//               </span>
//               <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold uppercase">
//                 2026 Updated
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
//               {post.title}
//             </h1>

//             {/* Excerpt */}
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               {post.excerpt}
//             </p>

//             {/* Meta Info */}
//             <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b-2 border-gray-200">
//               <div className="flex items-center gap-2">
//                 <FaCalendar className="text-amber-600" />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaUser className="text-amber-600" />
//                 <span>{post.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaClock className="text-amber-600" />
//                 <span>{post.readTime}</span>
//               </div>
//             </div>

//             {/* Table of Contents */}
//             <div className="my-12 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
//               <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                 <FaTag className="text-amber-600" />
//                 Table of Contents
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="#introduction" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
//                     Introduction
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#how-we-ranked" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
//                     How We Ranked
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#rankings" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
//                     The Top 10 Rankings
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#how-to-choose" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
//                     How to Choose
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#pricing" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
//                     Pricing Guide
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Article Content */}
//             <div 
//               className="prose prose-lg max-w-none
//                 prose-headings:font-bold prose-headings:text-gray-900
//                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
//                 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
//                 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
//                 prose-ul:my-6 prose-li:text-gray-700
//                 prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-amber-700
//                 prose-strong:text-gray-900 prose-strong:font-bold"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Share & Back */}
//             <div className="mt-16 pt-8 border-t-2 border-gray-200">
//               <div className="flex items-center justify-between">
//                 <Link
//                   href="/blog"
//                   className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all"
//                 >
//                   <FaArrowLeft />
//                   Back to Blog
//                 </Link>
                
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-600 font-semibold">Share:</span>
//                   <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//                     Facebook
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
//                     Twitter
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Related Posts */}
//             <div className="mt-16">
//               <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
//               <div className="grid md:grid-cols-3 gap-6">
//                 {[
//                   { title: 'Website Cost in Nigeria', category: 'Business', slug: 'website-cost-nigeria-2026' },
//                   { title: 'Mobile-First Design Guide', category: 'Design', slug: 'mobile-first-design-2026' },
//                   { title: 'SEO for Nigerian Businesses', category: 'SEO', slug: 'complete-seo-guide-nigerian-businesses' },
//                 ].map((related, index) => (
//                   <Link
//                     key={index}
//                     href={`/blog/${related.slug}`}
//                     className="group bg-gray-50 p-6 rounded-xl hover:bg-amber-50 hover:shadow-lg transition-all duration-300"
//                   >
//                     <span className="text-xs font-bold text-amber-600 uppercase">{related.category}</span>
//                     <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-amber-600 transition-colors">
//                       {related.title}
//                     </h4>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* CTA */}
//       <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Professional Website?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Let O'LOY GLOBAL build your dream website. Get started today!
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//           >
//             Get Free Quote
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }




'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaClock, FaUser, FaCalendar, FaArrowLeft, FaTag } from 'react-icons/fa'

export default function BlogPost() {
  const params = useParams()
  const slug = params?.slug as string

  // Blog post data (in real app, fetch from API/database)
  const blogPosts: any = {
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
        <p>Leading the pack with exceptional modern designs, cutting-edge technology, and outstanding client satisfaction. Specializes in React, Next.js, and custom web applications.</p>

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
          <li>Basic websites: ₦200,000 - ₦400,000</li>
          <li>Business websites: ₦400,000 - ₦1,000,000</li>
          <li>E-commerce: ₦800,000 - ₦2,500,000</li>
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
      excerpt: 'Master search engine optimization with our comprehensive guide tailored for the Nigerian market.',
      content: `
        <h2>Why SEO Matters for Nigerian Businesses</h2>
        <p>In Nigeria's competitive digital landscape, SEO is essential for visibility and growth...</p>
        
        <h2>Keyword Research for Nigerian Market</h2>
        <p>Understanding local search behavior is crucial...</p>
        
        <h2>On-Page SEO Best Practices</h2>
        <p>Optimize your website structure and content...</p>
      `
    }
  }

  const post = blogPosts[slug] || blogPosts['top-10-web-designers-nigeria-2026']

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold uppercase">
                {post.category}
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold uppercase">
                2026 Updated
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b-2 border-gray-200">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-amber-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-amber-600" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-amber-600" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="my-12 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaTag className="text-amber-600" />
                Table of Contents
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#introduction" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#how-we-ranked" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                    How We Ranked
                  </a>
                </li>
                <li>
                  <a href="#rankings" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                    The Top 10 Rankings
                  </a>
                </li>
                <li>
                  <a href="#how-to-choose" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                    How to Choose
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                    Pricing Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-700
                prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-amber-700
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share & Back */}
            <div className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all"
                >
                  <FaArrowLeft />
                  Back to Blog
                </Link>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-semibold">Share:</span>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Website Cost in Nigeria', category: 'Business', slug: 'website-cost-nigeria-2026' },
                  { title: 'Mobile-First Design Guide', category: 'Design', slug: 'mobile-first-design-2026' },
                  { title: 'SEO for Nigerian Businesses', category: 'SEO', slug: 'complete-seo-guide-nigerian-businesses' },
                ].map((related, index) => (
                  <Link
                    key={index}
                    href={`/blog/${related.slug}`}
                    className="group bg-gray-50 p-6 rounded-xl hover:bg-amber-50 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs font-bold text-amber-600 uppercase">{related.category}</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-amber-600 transition-colors">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Professional Website?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let O'LOY GLOBAL build your dream website. Get started today!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}