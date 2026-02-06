'use client'

import Link from 'next/link'
import { FaCode, FaShoppingCart, FaMobile, FaSearch, FaRocket, FaTools, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

// Counter Hook
function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      setCount(Math.floor(start + (end - start) * percentage))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration, start])

  return { count, ref }
}

// Background Swiper Component
function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      type: 'video',
      url: 'https://res.cloudinary.com/dlb3doese/video/upload/v1747152113/3163534-uhd_3840_2160_30fps_a7hlvd.mp4',
      alt: 'Web Development'
    },
    {
      type: 'video',
      url: 'https://res.cloudinary.com/dlb3doese/video/upload/v1748011669/5240980-uhd_3840_2160_30fps_bjnzle.mp4',
      alt: 'Modern Development'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80',
      alt: 'Tech Solutions'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              key={`video-${currentSlide}`}
              src={slide.url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-orange-900/80"></div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Glowing orbs */}
      <div className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl top-1/2 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-3xl -bottom-32 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-orange-500 to-amber-400 w-12' 
                : 'bg-white/30 w-8 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Animated Stat Card
function AnimatedStatCard({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(end)
  
  return (
    <div ref={ref} className="text-center group cursor-default">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-amber-300 to-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-300 font-medium">{label}</div>
    </div>
  )
}

// Animated Feature Card
function AnimatedFeatureCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`text-center p-8 bg-white rounded-2xl transform transition-all duration-700 border border-gray-100 ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95'
      } hover:scale-105 hover:shadow-2xl hover:border-orange-200 group`}
    >
      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{label}</div>
    </div>
  )
}

// Trust Badge Component
function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="text-orange-400">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <HeroSwiper />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-orange-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-sm font-semibold tracking-wide">🇳🇬 Nigeria's #1 Web Development Agency</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Transform Your Business With{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 animate-gradient">
                    Award-Winning
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
                </span>
                {' '}Websites
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
                We don't just code websites. We engineer digital experiences that <strong className="text-orange-400 font-bold">convert visitors into customers</strong> and drive measurable business growth.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <TrustBadge icon={<FaCheckCircle />} text="100% Client Satisfaction" />
                <TrustBadge icon={<FaStar />} text="5-Star Rated" />
                <TrustBadge icon={<FaRocket />} text="Fast Delivery" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Free Consultation</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/portfolio" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Link>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
                <AnimatedStatCard end={50} label="Happy Clients" suffix="+" />
                <AnimatedStatCard end={100} label="Projects Done" suffix="+" />
                <AnimatedStatCard end={5} label="Years Experience" suffix="+" />
                <div className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-amber-300 to-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Code Window */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Glow effect behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 blur-3xl rounded-3xl"></div>
                
                {/* Main code window */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                  {/* Window controls */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">index.ts</span>
                  </div>
                  
                  {/* Code content with syntax highlighting */}
                  <div className="font-mono text-sm space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 select-none">1</span>
                      <div>
                        <span className="text-orange-400">const</span>{' '}
                        <span className="text-blue-400">solution</span>{' '}
                        <span className="text-gray-400">=</span>{' '}
                        <span className="text-yellow-400">"O'LOY GLOBAL"</span>
                        <span className="text-gray-400">;</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 select-none">2</span>
                      <div className="text-gray-600">// Building excellence</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 select-none">3</span>
                      <div>
                        <span className="text-orange-400">function</span>{' '}
                        <span className="text-green-400">buildWebsite</span>
                        <span className="text-gray-400">() {'{'}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 ml-6">
                      <span className="text-gray-600 select-none">4</span>
                      <div>
                        <span className="text-orange-400">return</span>{' '}
                        <span className="text-yellow-400">"exceptional results"</span>
                        <span className="text-gray-400">;</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 select-none">5</span>
                      <div><span className="text-gray-400">{'}'}</span></div>
                    </div>
                    <div className="flex items-start space-x-3 pt-2">
                      <span className="text-gray-600 select-none">6</span>
                      <div>
                        <span className="text-blue-400">deploySuccess</span>
                        <span className="text-gray-400">();</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold">Build Successful</span>
                    </div>
                    <span className="text-gray-500">TypeScript • React • Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Dominate Online</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From custom websites to powerful e-commerce solutions, we deliver results that matter to your bottom line.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="w-10 h-10" />,
                title: 'Custom Web Development',
                description: 'Lightning-fast websites built with React, Next.js, and modern technologies. Optimized for speed, SEO, and conversions.',
                features: ['React & Next.js', 'SEO Optimized', 'Mobile First']
              },
              {
                icon: <FaShoppingCart className="w-10 h-10" />,
                title: 'E-commerce Solutions',
                description: 'Complete online stores with Paystack & Flutterwave integration. Inventory management, secure checkout, and analytics.',
                features: ['Payment Gateway', 'Inventory System', 'Analytics']
              },
              {
                icon: <FaMobile className="w-10 h-10" />,
                title: 'Progressive Web Apps',
                description: 'App-like experiences that work on any device. Push notifications, offline mode, and lightning-fast performance.',
                features: ['Cross-Platform', 'Offline Mode', 'Push Alerts']
              },
              {
                icon: <FaSearch className="w-10 h-10" />,
                title: 'SEO & Performance',
                description: 'Rank #1 on Google with technical SEO, keyword optimization, and Core Web Vitals perfection.',
                features: ['Google Rankings', 'Speed Optimization', 'Technical SEO']
              },
              {
                icon: <FaRocket className="w-10 h-10" />,
                title: 'Digital Marketing',
                description: 'Drive traffic and sales with Google Ads, Facebook Ads, and social media marketing campaigns.',
                features: ['Google Ads', 'Social Media', 'Lead Generation']
              },
              {
                icon: <FaTools className="w-10 h-10" />,
                title: 'Support & Maintenance',
                description: '24/7 monitoring, security updates, backups, and ongoing optimization to keep your site running perfectly.',
                features: ['24/7 Monitoring', 'Security Updates', 'Backups']
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden hover:-translate-y-2"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <FaCheckCircle className="text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Link */}
                  <Link 
                    href="/services" 
                    className="inline-flex items-center space-x-2 text-orange-600 font-bold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/services" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>View All Services</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Split Layout */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                <FaStar className="text-orange-600" />
                <span className="text-orange-700 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                We're Not Like Other Web Developers
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                While others just build websites, we engineer <strong className="text-orange-600">digital assets that generate revenue</strong>. Every pixel, every line of code, every design decision is made to drive business growth.
              </p>

              {/* Key Differentiators */}
              <div className="space-y-4">
                {[
                  {
                    title: 'Modern Tech Stack',
                    description: 'React, Next.js, TypeScript - not outdated WordPress themes'
                  },
                  {
                    title: 'SEO-First Approach',
                    description: 'Built to rank on Google from day one, not as an afterthought'
                  },
                  {
                    title: 'Mobile-First Design',
                    description: 'Perfect on every device - 70% of traffic is mobile'
                  },
                  {
                    title: 'Nigerian Payment Integration',
                    description: 'Paystack & Flutterwave - accept payments in naira instantly'
                  },
                  {
                    title: 'Real Results',
                    description: 'Average 300% increase in leads within 90 days'
                  },
                  {
                    title: 'True Partnership',
                    description: 'Ongoing support, not "build it and ghost you"'
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Discover Our Story</span>
                <FaArrowRight />
              </Link>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl transform rotate-6 scale-105"></div>
              
              {/* Main card */}
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-8">
                  <AnimatedFeatureCard value="100%" label="Success Rate" delay={0} />
                  <AnimatedFeatureCard value="48hrs" label="Response Time" delay={200} />
                  <AnimatedFeatureCard value="300%" label="Avg. Growth" delay={400} />
                  <AnimatedFeatureCard value="24/7" label="Support" delay={600} />
                </div>
                
                {/* Bottom accent */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <FaStar className="w-5 h-5" />
                    <FaStar className="w-5 h-5" />
                    <FaStar className="w-5 h-5" />
                    <FaStar className="w-5 h-5" />
                    <FaStar className="w-5 h-5" />
                  </div>
                  <p className="text-center text-gray-600 mt-3 font-semibold">
                    5-Star Rated by 50+ Nigerian Businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Cards */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <FaStar className="text-orange-600" />
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Real Results From <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Real Businesses</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Adebayo Johnson',
                role: 'CEO',
                company: 'TechStart Lagos',
                content: 'O\'LOY GLOBAL didn\'t just build us a website - they built us a lead generation machine. We went from 10 leads per month to over 300. The ROI is incredible.',
                avatar: 'AJ',
                rating: 5,
                result: '+300% Leads'
              },
              {
                name: 'Chioma Okafor',
                role: 'Founder',
                company: 'Fashion Hub Nigeria',
                content: 'Our e-commerce store is absolutely beautiful and so easy to manage. Sales doubled in the first month. The Paystack integration works flawlessly.',
                avatar: 'CO',
                rating: 5,
                result: '2x Sales'
              },
              {
                name: 'Ibrahim Musa',
                role: 'Director',
                company: 'Abuja Consulting',
                content: 'Professional, responsive, and they delivered ahead of schedule. The SEO work has us ranking #1 for our main keywords. Highly recommended!',
                avatar: 'IM',
                rating: 5,
                result: '#1 Google Rank'
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2 group"
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-orange-500" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Result Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full mb-6">
                  <FaRocket className="text-orange-600" />
                  <span className="text-orange-700 font-bold text-sm">{testimonial.result}</span>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Bold & Compelling */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-orange-500 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Ready To <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">10X Your Business?</span>
            </h2>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Get a free consultation and custom quote. No pressure, no obligations - just honest advice on how to dominate your market online.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link 
                href="/contact" 
                className="group px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <span>Get Free Quote Now</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <a 
                href="tel:+2348100098339" 
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-black text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white hover:scale-110 transition-all duration-300"
              >
                📞 Call: 08100098339
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">48hrs</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">₦0</div>
                <div className="text-gray-300">Consultation Fee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  )
}