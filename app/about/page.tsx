'use client'

import Link from 'next/link'
import { FaAward, FaUsers, FaChartLine, FaHeadset, FaRocket, FaLightbulb, FaHandshake, FaShieldAlt } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

// Counter Animation Hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
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
      
      setCount(Math.floor(end * percentage))

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
  }, [isVisible, end, duration])

  return { count, ref }
}

// Animated Stat Card
function AnimatedStatCard({ icon, end, suffix = '', label }: { icon: React.ReactNode; end: number; suffix?: string; label: string }) {
  const { count, ref } = useCounter(end)
  
  return (
    <div ref={ref} className="group relative bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-5xl text-amber-600 mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div className="text-4xl font-black text-gray-900 mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-600 font-semibold">{label}</div>
      </div>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full"></div>
    </div>
  )
}

// Timeline Item Component
function TimelineItem({ year, title, description, isLeft }: { year: string; title: string; description: string; isLeft: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
  }, [])

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
      }`}
    >
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
          {year}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-amber-200 flex-shrink-0 z-10"></div>
      
      <div className="flex-1"></div>
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-amber-500/30">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h1 className="heading-xl font-display mb-6 animate-fade-in">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">O'LOY GLOBAL</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforming visions into digital reality. We're passionate about building exceptional 
              web solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedStatCard icon={<FaAward />} end={50} suffix="+" label="Awards Won" />
            <AnimatedStatCard icon={<FaUsers />} end={100} suffix="+" label="Happy Clients" />
            <AnimatedStatCard icon={<FaChartLine />} end={300} suffix="%" label="Avg. Growth" />
            <AnimatedStatCard icon={<FaHeadset />} end={24} suffix="/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="heading-lg font-display mt-4 mb-6">Building Excellence Since Day One</h2>
            <p className="text-gray-600 text-lg">
              From a small startup to a leading web development agency, here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200"></div>
            
            <div className="space-y-12">
              <TimelineItem
                year="2019"
                title="The Beginning"
                description="Started with a vision to help businesses establish their digital presence through innovative web solutions."
                isLeft={true}
              />
              <TimelineItem
                year="2020"
                title="Expansion"
                description="Expanded our team and services, delivering 50+ successful projects across Nigeria."
                isLeft={false}
              />
              <TimelineItem
                year="2021"
                title="Innovation"
                description="Introduced cutting-edge technologies like React and Next.js to deliver faster, better websites."
                isLeft={true}
              />
              <TimelineItem
                year="2022"
                title="Recognition"
                description="Received multiple awards for outstanding web design and client satisfaction."
                isLeft={false}
              />
              <TimelineItem
                year="2023-Present"
                title="Leading The Way"
                description="Now serving 100+ clients with 24/7 support and world-class web solutions."
                isLeft={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                  🎯
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses with cutting-edge web solutions that drive growth, enhance 
                  online presence, and deliver measurable results. We're committed to turning your 
                  digital dreams into reality through innovation, expertise, and dedication.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-2xl text-white">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become Nigeria's most trusted web development partner, known for delivering 
                  exceptional digital experiences that transform businesses. We envision a future 
                  where every business thrives online with our innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Icons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Core Values</span>
            <h2 className="heading-lg font-display mt-4 mb-6">What Drives Us Forward</h2>
            <p className="text-gray-600 text-lg">
              Our values shape everything we do and guide us in delivering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: 'Quality First',
                description: 'We never compromise on quality. Every project is built to the highest standards with meticulous attention to detail.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <FaRocket />,
                title: 'Client Success',
                description: 'Your success is our success. We measure our work by the real results it delivers for your business.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <FaLightbulb />,
                title: 'Innovation',
                description: 'We stay ahead of the curve, using the latest technologies and best practices to deliver cutting-edge solutions.',
                color: 'from-amber-500 to-amber-600'
              },
              {
                icon: <FaHandshake />,
                title: 'Transparency',
                description: 'Clear communication, honest timelines, and upfront pricing. No surprises, just great results.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <FaChartLine />,
                title: 'Reliability',
                description: 'We deliver on time, every time. You can count on us to meet deadlines and exceed expectations.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: <FaHeadset />,
                title: 'Support',
                description: 'Our relationship doesn\'t end at launch. We provide ongoing support to keep your website running smoothly.',
                color: 'from-teal-500 to-teal-600'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg font-display mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We're a team of passionate developers, designers, and strategists dedicated to creating 
              digital experiences that matter. Every project we take on is an opportunity to make a difference.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { emoji: '💡', label: 'Creative Thinking' },
                { emoji: '🤝', label: 'Collaboration' },
                { emoji: '🎯', label: 'Results Driven' },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <div className="font-bold text-lg">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"></div>
            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="heading-lg font-display mb-6 text-white">Ready to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how we can help your business grow online.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-amber-600 px-12 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}