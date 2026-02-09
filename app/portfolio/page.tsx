// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { FaArrowRight, FaExternalLinkAlt, FaStar, FaAward, FaRocket } from 'react-icons/fa'

// export default function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState('All')

//   const projects = [
//     {
//       title: 'TechStart Corporate Hub',
//       category: 'Web Development',
//       client: 'TechStart Lagos',
//       description: 'Modern corporate website with CMS integration, dynamic content management, and advanced SEO optimization.',
//       tags: ['Next.js', 'React', 'CMS', 'SEO'],
//       gradient: 'from-blue-500 to-cyan-500',
//       metrics: { conversion: '+250%', speed: '95/100', traffic: '+180%' },
//       year: '2024'
//     },
//     {
//       title: 'Fashion Hub E-Store',
//       category: 'E-commerce',
//       client: 'Fashion Hub Nigeria',
//       description: 'Full-featured online store with Paystack integration, comprehensive inventory system, and real-time analytics.',
//       tags: ['E-commerce', 'Paystack', 'React', 'Analytics'],
//       gradient: 'from-pink-500 to-rose-500',
//       metrics: { revenue: '+300%', orders: '1000+', rating: '4.9/5' },
//       year: '2024'
//     },
//     {
//       title: 'PropFinder Platform',
//       category: 'Web Application',
//       client: 'Abuja Real Estate',
//       description: 'Property listing platform with advanced search, intelligent filters, interactive maps, and user dashboard.',
//       tags: ['Next.js', 'TypeScript', 'Maps API', 'Database'],
//       gradient: 'from-green-500 to-emerald-500',
//       metrics: { listings: '5000+', users: '2500+', searches: '50K/mo' },
//       year: '2024'
//     },
//     {
//       title: 'Taste of Lagos',
//       category: 'Web Development',
//       client: 'Lagos Restaurant Group',
//       description: 'Beautiful restaurant website with online ordering, table reservation system, and menu management.',
//       tags: ['React', 'SEO', 'Mobile-First', 'Booking'],
//       gradient: 'from-orange-500 to-amber-500',
//       metrics: { bookings: '+400%', orders: '500/mo', rating: '5/5' },
//       year: '2023'
//     },
//     {
//       title: 'HealthCare Connect',
//       category: 'Web Application',
//       client: 'Medical Center PH',
//       description: 'Patient management system with appointment booking, medical records, telemedicine integration.',
//       tags: ['Next.js', 'Dashboard', 'Security', 'HIPAA'],
//       gradient: 'from-teal-500 to-cyan-500',
//       metrics: { patients: '3000+', appointments: '10K+', satisfaction: '98%' },
//       year: '2024'
//     },
//     {
//       title: 'EduLearn Academy',
//       category: 'E-learning',
//       client: 'EduLearn Nigeria',
//       description: 'Online learning platform with course management, video streaming, student progress tracking.',
//       tags: ['React', 'Video', 'Dashboard', 'Payments'],
//       gradient: 'from-indigo-500 to-purple-500',
//       metrics: { students: '8000+', courses: '150+', completion: '85%' },
//       year: '2023'
//     },
//     {
//       title: 'Metro Fashion Store',
//       category: 'E-commerce',
//       client: 'Metro Fashion Ltd',
//       description: 'Stylish online fashion store with size guides, AR try-on, and multiple payment integrations.',
//       tags: ['E-commerce', 'Flutterwave', 'AR', 'Mobile'],
//       gradient: 'from-purple-500 to-pink-500',
//       metrics: { sales: '₦50M+', products: '2000+', retention: '75%' },
//       year: '2024'
//     },
//     {
//       title: 'BizMetrics Pro',
//       category: 'Web Application',
//       client: 'Nigerian SMEs',
//       description: 'Analytics dashboard with real-time data visualization, reporting tools, and business intelligence.',
//       tags: ['React', 'Charts', 'Analytics', 'API'],
//       gradient: 'from-yellow-500 to-orange-500',
//       metrics: { companies: '500+', reports: '100K+', accuracy: '99%' },
//       year: '2023'
//     },
//     {
//       title: 'Wanderlust Travels',
//       category: 'Web Development',
//       client: 'Wanderlust Agency',
//       description: 'Travel booking website with destination guides, package management, and payment gateway.',
//       tags: ['Next.js', 'Booking', 'SEO', 'Mobile'],
//       gradient: 'from-sky-500 to-blue-500',
//       metrics: { bookings: '5000+', destinations: '100+', revenue: '+250%' },
//       year: '2024'
//     },
//   ]

//   const categories = ['All', 'Web Development', 'E-commerce', 'Web Application', 'E-learning']

//   const filteredProjects = activeFilter === 'All' 
//     ? projects 
//     : projects.filter(p => p.category === activeFilter)

//   return (
//     <>
//       {/* Hero Section - Premium Design */}
//       <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute w-96 h-96 bg-orange-500 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
//           <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>

//         {/* Animated grid overlay */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}></div>
        
//         <div className="container-custom relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-orange-500/30 mb-8">
//               <FaAward className="text-orange-400" />
//               <span className="text-sm font-semibold tracking-wide">100+ Successful Projects</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
//               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Award-Winning</span> Work
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
//               Real projects. Real results. See how we've transformed businesses across Nigeria with cutting-edge web solutions.
//             </p>

//             {/* Stats Quick View */}
//             <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
//               <div>
//                 <div className="text-4xl font-black text-orange-400 mb-2">100+</div>
//                 <div className="text-sm text-gray-300">Projects</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-black text-orange-400 mb-2">50+</div>
//                 <div className="text-sm text-gray-300">Clients</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-black text-orange-400 mb-2">98%</div>
//                 <div className="text-sm text-gray-300">Success Rate</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section - Modern Pills */}
//       <section className="sticky top-0 z-40 py-6 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
//         <div className="container-custom">
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
//                   activeFilter === category
//                     ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30 scale-105'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
          
//           {/* Results Count */}
//           <div className="text-center mt-4">
//             <span className="text-sm text-gray-600">
//               Showing <strong className="text-orange-600">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid - Advanced Cards */}
//       <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Project Image/Gradient */}
//                 <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <div className="text-white text-center space-y-3">
//                       <FaExternalLinkAlt className="w-12 h-12 mx-auto" />
//                       <div className="text-sm font-semibold">View Case Study</div>
//                     </div>
//                   </div>
                  
//                   {/* Project Icon */}
//                   <div className="text-white text-7xl group-hover:scale-125 transition-transform duration-500">
//                     🚀
//                   </div>

//                   {/* Year Badge */}
//                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
//                     {project.year}
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="p-6">
//                   {/* Category & Client */}
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-sm text-orange-600 font-bold uppercase tracking-wide">
//                       {project.category}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       {project.client}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
//                     {project.title}
//                   </h3>
                  
//                   {/* Description */}
//                   <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>

//                   {/* Metrics - Key Results */}
//                   <div className="grid grid-cols-3 gap-2 mb-4 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
//                     {Object.entries(project.metrics).map(([key, value], idx) => (
//                       <div key={idx} className="text-center">
//                         <div className="text-lg font-black text-orange-600">{value}</div>
//                         <div className="text-xs text-gray-600 capitalize">{key}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-5">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-orange-100 hover:text-orange-700 transition-colors"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* CTA Button */}
//                   <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
//                     <span>View Full Case Study</span>
//                     <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Premium Design */}
//       <section className="section-padding bg-white relative overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

//         <div className="container-custom relative z-10">
//           {/* Section Header */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
//               <FaStar className="text-orange-600" />
//               <span className="text-orange-700 font-bold uppercase tracking-wider text-sm">Our Track Record</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
//               Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Speak Volumes</span>
//             </h2>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { value: '100+', label: 'Projects Completed', icon: '🎯', color: 'from-orange-500 to-amber-600' },
//               { value: '50+', label: 'Happy Clients', icon: '😊', color: 'from-orange-500 to-amber-600' },
//               { value: '98%', label: 'Client Satisfaction', icon: '⭐', color: 'from-orange-500 to-amber-600' },
//               { value: '5+', label: 'Years Experience', icon: '🏆', color: 'from-orange-500 to-amber-600' },
//             ].map((stat, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
//                   {stat.icon}
//                 </div>
//                 <div className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3`}>
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Stats Row */}
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               { value: '₦500M+', label: 'Revenue Generated for Clients', icon: '💰' },
//               { value: '24/7', label: 'Support & Maintenance', icon: '🛠️' },
//               { value: '300%', label: 'Average Growth Rate', icon: '📈' },
//             ].map((stat, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="text-4xl mb-3">{stat.icon}</div>
//                 <div className="text-3xl font-black text-orange-600 mb-2">{stat.value}</div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries We Serve */}
//       <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
//               Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Dominate</span>
//             </h2>
//             <p className="text-xl text-gray-600">
//               Our expertise spans across multiple sectors, delivering tailored solutions for every industry.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {[
//               { name: 'E-commerce', icon: '🛒', count: '25+' },
//               { name: 'Healthcare', icon: '🏥', count: '15+' },
//               { name: 'Education', icon: '📚', count: '20+' },
//               { name: 'Real Estate', icon: '🏘️', count: '18+' },
//               { name: 'Hospitality', icon: '🍽️', count: '12+' },
//               { name: 'Finance', icon: '💳', count: '10+' },
//               { name: 'Travel', icon: '✈️', count: '8+' },
//               { name: 'Fashion', icon: '👗', count: '15+' },
//               { name: 'Technology', icon: '💻', count: '30+' },
//               { name: 'NGO/NPO', icon: '🤝', count: '12+' },
//             ].map((industry, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
//               >
//                 <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
//                   {industry.icon}
//                 </div>
//                 <div className="font-bold text-gray-900 mb-1">{industry.name}</div>
//                 <div className="text-sm text-orange-600 font-semibold">{industry.count} projects</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="section-padding bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute w-96 h-96 bg-orange-500 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
//           <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>
        
//         <div className="container-custom text-center relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-orange-500/30 mb-8">
//               <FaRocket className="text-orange-400" />
//               <span className="text-sm font-semibold tracking-wide">Ready to Join Our Success Stories?</span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
//               Want to See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Project Here?</span>
//             </h2>
            
//             <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
//               Let's create something extraordinary together. Get started with a free consultation and custom quote today.
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-6">
//               <Link 
//                 href="/contact" 
//                 className="group px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300"
//               >
//                 <span className="flex items-center space-x-3">
//                   <span>Start Your Project</span>
//                   <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
//                 </span>
//               </Link>
              
//               <Link 
//                 href="/services" 
//                 className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-black text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white hover:scale-110 transition-all duration-300"
//               >
//                 View Our Services
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
//               <div className="text-center">
//                 <div className="text-4xl font-black text-orange-400 mb-2">Free</div>
//                 <div className="text-gray-300">Consultation & Quote</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-black text-orange-400 mb-2">48hrs</div>
//                 <div className="text-gray-300">Response Time</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
//                 <div className="text-gray-300">Satisfaction Guaranteed</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }



'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaArrowRight, FaExternalLinkAlt, FaStar, FaAward, FaRocket } from 'react-icons/fa'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'TechStart Corporate Hub',
      category: 'Web Development',
      client: 'TechStart Lagos',
      description: 'Modern corporate website with CMS integration, dynamic content management, and advanced SEO optimization.',
      tags: ['Next.js', 'React', 'CMS', 'SEO'],
      gradient: 'from-blue-500 to-cyan-500',
      metrics: { conversion: '+250%', speed: '95/100', traffic: '+180%' },
      year: '2024'
    },
    {
      title: 'Fashion Hub E-Store',
      category: 'E-commerce',
      client: 'Fashion Hub Nigeria',
      description: 'Full-featured online store with Paystack integration, comprehensive inventory system, and real-time analytics.',
      tags: ['E-commerce', 'Paystack', 'React', 'Analytics'],
      gradient: 'from-pink-500 to-rose-500',
      metrics: { revenue: '+300%', orders: '1000+', rating: '4.9/5' },
      year: '2024'
    },
    {
      title: 'PropFinder Platform',
      category: 'Web Application',
      client: 'Abuja Real Estate',
      description: 'Property listing platform with advanced search, intelligent filters, interactive maps, and user dashboard.',
      tags: ['Next.js', 'TypeScript', 'Maps API', 'Database'],
      gradient: 'from-green-500 to-emerald-500',
      metrics: { listings: '5000+', users: '2500+', searches: '50K/mo' },
      year: '2024'
    },
    {
      title: 'Taste of Lagos',
      category: 'Web Development',
      client: 'Lagos Restaurant Group',
      description: 'Beautiful restaurant website with online ordering, table reservation system, and menu management.',
      tags: ['React', 'SEO', 'Mobile-First', 'Booking'],
      gradient: 'from-orange-500 to-amber-500',
      metrics: { bookings: '+400%', orders: '500/mo', rating: '5/5' },
      year: '2023'
    },
    {
      title: 'HealthCare Connect',
      category: 'Web Application',
      client: 'Medical Center PH',
      description: 'Patient management system with appointment booking, medical records, telemedicine integration.',
      tags: ['Next.js', 'Dashboard', 'Security', 'HIPAA'],
      gradient: 'from-teal-500 to-cyan-500',
      metrics: { patients: '3000+', appointments: '10K+', satisfaction: '98%' },
      year: '2024'
    },
    {
      title: 'EduLearn Academy',
      category: 'E-learning',
      client: 'EduLearn Nigeria',
      description: 'Online learning platform with course management, video streaming, student progress tracking.',
      tags: ['React', 'Video', 'Dashboard', 'Payments'],
      gradient: 'from-indigo-500 to-purple-500',
      metrics: { students: '8000+', courses: '150+', completion: '85%' },
      year: '2023'
    },
    {
      title: 'Metro Fashion Store',
      category: 'E-commerce',
      client: 'Metro Fashion Ltd',
      description: 'Stylish online fashion store with size guides, AR try-on, and multiple payment integrations.',
      tags: ['E-commerce', 'Flutterwave', 'AR', 'Mobile'],
      gradient: 'from-purple-500 to-pink-500',
      metrics: { sales: '₦50M+', products: '2000+', retention: '75%' },
      year: '2024'
    },
    {
      title: 'BizMetrics Pro',
      category: 'Web Application',
      client: 'Nigerian SMEs',
      description: 'Analytics dashboard with real-time data visualization, reporting tools, and business intelligence.',
      tags: ['React', 'Charts', 'Analytics', 'API'],
      gradient: 'from-yellow-500 to-orange-500',
      metrics: { companies: '500+', reports: '100K+', accuracy: '99%' },
      year: '2023'
    },
    {
      title: 'Wanderlust Travels',
      category: 'Web Development',
      client: 'Wanderlust Agency',
      description: 'Travel booking website with destination guides, package management, and payment gateway.',
      tags: ['Next.js', 'Booking', 'SEO', 'Mobile'],
      gradient: 'from-sky-500 to-blue-500',
      metrics: { bookings: '5000+', destinations: '100+', revenue: '+250%' },
      year: '2024'
    },
  ]

  const categories = ['All', 'Web Development', 'E-commerce', 'Web Application', 'E-learning']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-orange-500/30 mb-8">
              <FaAward className="text-orange-400" />
              <span className="text-sm font-semibold tracking-wide">100+ Successful Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Award-Winning</span> Work
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Real projects. Real results. See how we've transformed businesses across Nigeria with cutting-edge web solutions.
            </p>

            {/* Stats Quick View */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">100+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - Modern Pills */}
      <section className="sticky top-0 z-40 py-6 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Results Count */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Showing <strong className="text-orange-600">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Advanced Cards */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Gradient */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center space-y-3">
                      <FaExternalLinkAlt className="w-12 h-12 mx-auto" />
                      <div className="text-sm font-semibold">View Case Study</div>
                    </div>
                  </div>
                  
                  {/* Project Icon */}
                  <div className="text-white text-7xl group-hover:scale-125 transition-transform duration-500">
                    🚀
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                    {project.year}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Category & Client */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-orange-600 font-bold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {project.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics - Key Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-black text-orange-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-orange-100 hover:text-orange-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                    <span>View Full Case Study</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Design */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <FaStar className="text-orange-600" />
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm">Our Track Record</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Speak Volumes</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Projects Completed', icon: '🎯', color: 'from-orange-500 to-amber-600' },
              { value: '50+', label: 'Happy Clients', icon: '😊', color: 'from-orange-500 to-amber-600' },
              { value: '98%', label: 'Client Satisfaction', icon: '⭐', color: 'from-orange-500 to-amber-600' },
              { value: '5+', label: 'Years Experience', icon: '🏆', color: 'from-orange-500 to-amber-600' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { value: '₦500M+', label: 'Revenue Generated for Clients', icon: '💰' },
              { value: '24/7', label: 'Support & Maintenance', icon: '🛠️' },
              { value: '300%', label: 'Average Growth Rate', icon: '📈' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Dominate</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our expertise spans across multiple sectors, delivering tailored solutions for every industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'E-commerce', icon: '🛒', count: '25+' },
              { name: 'Healthcare', icon: '🏥', count: '15+' },
              { name: 'Education', icon: '📚', count: '20+' },
              { name: 'Real Estate', icon: '🏘️', count: '18+' },
              { name: 'Hospitality', icon: '🍽️', count: '12+' },
              { name: 'Finance', icon: '💳', count: '10+' },
              { name: 'Travel', icon: '✈️', count: '8+' },
              { name: 'Fashion', icon: '👗', count: '15+' },
              { name: 'Technology', icon: '💻', count: '30+' },
              { name: 'NGO/NPO', icon: '🤝', count: '12+' },
            ].map((industry, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="font-bold text-gray-900 mb-1">{industry.name}</div>
                <div className="text-sm text-orange-600 font-semibold">{industry.count} projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-orange-500/30 mb-8">
              <FaRocket className="text-orange-400" />
              <span className="text-sm font-semibold tracking-wide">Ready to Join Our Success Stories?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Want to See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Project Here?</span>
            </h2>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Let's create something extraordinary together. Get started with a free consultation and custom quote today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/contact" 
                className="group px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <span>Start Your Project</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="/services" 
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-black text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white hover:scale-110 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">Free</div>
                <div className="text-gray-300">Consultation & Quote</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">48hrs</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}