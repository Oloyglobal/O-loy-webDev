'use client'

import Link from 'next/link'
import { FaCode, FaShoppingCart, FaMobile, FaSearch, FaRocket, FaTools } from 'react-icons/fa'
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


// Background Swiper Component - FIXED VERSION
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
            index === currentSlide ? 'opacity-80' : 'opacity-0'
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
      
      {/* Lighter overlay so video is more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/80"></div>
      
      <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
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
    <div ref={ref} className="text-center transform hover:scale-110 transition-transform duration-300">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
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
      className={`text-center p-6 bg-gray-50 rounded-xl transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95'
      } hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-primary/5 hover:to-purple-600/5`}
    >
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Swiper Background */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <HeroSwiper />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Nigeria's Top-Rated Web Developer</span>
              </div>

              <h1 className="heading-xl font-display">
                We Build Websites That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Grow Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Professional web development for businesses in Lagos, Abuja, and across Nigeria. 
                Fast, SEO-optimized websites that convert visitors into customers.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8">
                <AnimatedStatCard end={50} label="Happy Clients" suffix="+" />
                <AnimatedStatCard end={100} label="Projects Delivered" suffix="+" />
                <AnimatedStatCard end={5} label="Years Experience" suffix="+" />
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    24/7
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Support</div>
                </div>
              </div>
            </div>

            {/* Code Window Visual */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">buildWebsite</span> = () =&gt; &#123;</div>
                  <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-green-400">&quot;exceptional results&quot;</span>;</div>
                  <div>&#125;</div>
                  <div className="mt-4"><span className="text-blue-400">deploySuccess</span>();</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="heading-lg font-display mt-4 mb-6">Services That Drive Results</h2>
            <p className="text-gray-600 text-lg">
              From custom websites to e-commerce solutions, we help businesses succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="w-8 h-8" />,
                title: 'Web Development',
                description: 'Custom websites built with React and Next.js for optimal performance.'
              },
              {
                icon: <FaShoppingCart className="w-8 h-8" />,
                title: 'E-commerce Solutions',
                description: 'Online stores with Paystack and Flutterwave payment integration.'
              },
              {
                icon: <FaMobile className="w-8 h-8" />,
                title: 'Mobile Development',
                description: 'Responsive designs that work perfectly on all devices.'
              },
              {
                icon: <FaSearch className="w-8 h-8" />,
                title: 'SEO Services',
                description: 'Rank higher on Google and drive organic traffic to your business.'
              },
              {
                icon: <FaRocket className="w-8 h-8" />,
                title: 'Digital Marketing',
                description: 'Social media marketing and Google Ads that grow your business.'
              },
              {
                icon: <FaTools className="w-8 h-8" />,
                title: 'Maintenance & Support',
                description: 'Ongoing support to keep your website secure and updated.'
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="heading-lg font-display mt-4 mb-6">
                We&apos;re Different From Other Developers
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We don&apos;t just build websites. We build digital assets that generate leads, sales, 
                and growth for your business.
              </p>

              <div className="space-y-4">
                {[
                  'Modern tech stack (React, Next.js) for fast websites',
                  'SEO-optimized from day one to rank on Google',
                  'Mobile-first design for all users',
                  'Paystack and Flutterwave payment integration',
                  'Ongoing support and maintenance',
                  'Affordable pricing for businesses',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="inline-block mt-8 btn-primary">
                Discover Our Story
              </Link>
            </div>

            {/* Animated Stats Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <AnimatedFeatureCard value="100%" label="Project Completion" delay={0} />
                  <AnimatedFeatureCard value="48hrs" label="Response Time" delay={200} />
                  <AnimatedFeatureCard value="300%" label="Avg. Traffic Increase" delay={400} />
                  <AnimatedFeatureCard value="24/7" label="Support Available" delay={600} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="heading-lg font-display mt-4 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Adebayo Johnson',
                role: 'CEO, TechStart Lagos',
                content: 'ProWeb delivered an exceptional website that increased our leads by 300%. Highly recommended!',
                avatar: 'AJ'
              },
              {
                name: 'Chioma Okafor',
                role: 'Owner, Fashion Hub',
                content: 'Our e-commerce store is beautiful and easy to manage. Sales have doubled since launch.',
                avatar: 'CO'
              },
              {
                name: 'Ibrahim Musa',
                role: 'Director, Abuja Consulting',
                content: 'Professional team, great communication, and they delivered on time. Will work with them again.',
                avatar: 'IM'
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-display mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your project. No obligations, just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:+2348100098339" className="btn-secondary">
              Call: 08100098339
            </a>
          </div>
        </div>
      </section>
    </>
  )
}