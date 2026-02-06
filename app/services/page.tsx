import Link from 'next/link'
import { FaCode, FaShoppingCart, FaMobile, FaSearch, FaRocket, FaTools, FaLaptopCode, FaWordpress } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaCode className="w-12 h-12" />,
      title: 'Custom Web Development',
      description: 'Build powerful, scalable websites with React, Next.js, and modern technologies.',
      features: [
        'Custom design and development',
        'React & Next.js expertise',
        'Fast performance optimization',
        'Clean, maintainable code',
      ],
      price: 'From ₦250,000'
    },
    {
      icon: <FaShoppingCart className="w-12 h-12" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment integration and inventory management.',
      features: [
        'Paystack & Flutterwave integration',
        'Product management system',
        'Shopping cart & checkout',
        'Order tracking & management',
      ],
      price: 'From ₦400,000'
    },
    {
      icon: <FaMobile className="w-12 h-12" />,
      title: 'Mobile-First Design',
      description: 'Responsive websites that work perfectly on all devices and screen sizes.',
      features: [
        'Mobile-first approach',
        'Responsive across all devices',
        'Touch-friendly interfaces',
        'Progressive Web Apps (PWA)',
      ],
      price: 'Included'
    },
    {
      icon: <FaSearch className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Get found on Google with comprehensive SEO services and optimization.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO',
        'Content strategy',
      ],
      price: 'From ₦150,000'
    },
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Grow your business with social media marketing and Google Ads campaigns.',
      features: [
        'Social media management',
        'Google Ads campaigns',
        'Content marketing',
        'Email marketing',
      ],
      price: 'From ₦100,000/mo'
    },
    {
      icon: <FaTools className="w-12 h-12" />,
      title: 'Maintenance & Support',
      description: 'Keep your website secure, updated, and running smoothly with ongoing support.',
      features: [
        'Regular security updates',
        'Content updates',
        'Performance monitoring',
        'Technical support',
      ],
      price: 'From ₦70,000/mo'
    },
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: 'Web Applications',
      description: 'Custom web applications built for your specific business needs and workflows.',
      features: [
        'Custom functionality',
        'Dashboard & admin panels',
        'API integrations',
        'Database design',
      ],
      price: 'Custom Quote'
    },
    {
      icon: <FaWordpress className="w-12 h-12" />,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes and plugins.',
      features: [
        'Custom theme development',
        'Plugin customization',
        'WooCommerce setup',
        'WordPress optimization',
      ],
      price: 'From ₦200,000'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-display mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive web development services to help your business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2 text-gray-700">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-4">{service.price}</div>
                  <Link
                    href="/contact"
                    className="block text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="heading-lg font-display mt-4 mb-6">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and requirements.' },
              { step: '02', title: 'Design', description: 'Create beautiful, user-friendly designs tailored to your brand.' },
              { step: '03', title: 'Development', description: 'Build your website using modern technologies and best practices.' },
              { step: '04', title: 'Launch & Support', description: 'Deploy your website and provide ongoing maintenance.' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-display mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your project.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}