import Link from 'next/link'
import { FaAward, FaUsers, FaChartLine, FaHeadset } from 'react-icons/fa'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-display mb-6">About ProWeb Developer</h1>
            <p className="text-xl text-gray-300">
              We're passionate about building exceptional websites that help businesses grow and succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="heading-lg font-display mt-4 mb-6">Building Digital Excellence Since 2019</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ProWeb Developer started with a simple mission: to help businesses establish a strong 
                  online presence through exceptional web development and design.
                </p>
                <p>
                  Over the years, we've worked with businesses across Nigeria, from startups to established 
                  companies, delivering websites that not only look great but drive real results.
                </p>
                <p>
                  Our team combines technical expertise with creative design to build websites that are 
                  fast, secure, SEO-optimized, and conversion-focused. We stay up-to-date with the latest 
                  technologies and best practices to ensure our clients always get cutting-edge solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <FaAward />, number: '50+', label: 'Awards Won' },
                { icon: <FaUsers />, number: '100+', label: 'Happy Clients' },
                { icon: <FaChartLine />, number: '300%', label: 'Avg. Growth' },
                { icon: <FaHeadset />, number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/10 to-purple-600/10 p-8 rounded-2xl text-center">
                  <div className="text-4xl text-primary mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="heading-lg font-display mt-4 mb-6">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every project is built to the highest standards with attention to detail.'
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We measure our work by the results it delivers for your business.'
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, using the latest technologies and best practices in web development.'
              },
              {
                title: 'Transparency',
                description: 'Clear communication, honest timelines, and upfront pricing. No surprises, just great results.'
              },
              {
                title: 'Reliability',
                description: 'We deliver on time, every time. You can count on us to meet deadlines and exceed expectations.'
              },
              {
                title: 'Support',
                description: 'Our relationship doesn\'t end at launch. We provide ongoing support to keep your website running smoothly.'
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-display mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help your business grow online.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
