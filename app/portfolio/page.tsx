import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Modern corporate website with CMS integration and dynamic content management system.',
      tags: ['Next.js', 'React', 'CMS', 'SEO'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-commerce Store',
      category: 'E-commerce',
      description: 'Full-featured online store with Paystack integration and comprehensive inventory system.',
      tags: ['E-commerce', 'Paystack', 'React', 'API'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Application',
      description: 'Property listing platform with advanced search, filters, and user dashboard.',
      tags: ['Next.js', 'TypeScript', 'Database', 'Maps'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Development',
      description: 'Beautiful restaurant website with online ordering and reservation system.',
      tags: ['React', 'SEO', 'Mobile-First', 'Integration'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Patient management system with appointment booking and medical records.',
      tags: ['Next.js', 'Dashboard', 'Security', 'API'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Educational Platform',
      category: 'E-learning',
      description: 'Online learning platform with course management and student progress tracking.',
      tags: ['React', 'Video', 'Dashboard', 'Payment'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Fashion E-commerce',
      category: 'E-commerce',
      description: 'Stylish online fashion store with size guides and multiple payment options.',
      tags: ['E-commerce', 'Flutterwave', 'Mobile', 'SEO'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Business Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard with real-time data visualization and reporting tools.',
      tags: ['React', 'Charts', 'Analytics', 'API'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Travel Agency Site',
      category: 'Web Development',
      description: 'Travel booking website with destination guides and package management.',
      tags: ['Next.js', 'Booking', 'SEO', 'Mobile'],
      color: 'from-sky-500 to-blue-500'
    },
  ]

  const categories = ['All', 'Web Development', 'E-commerce', 'Web Application', 'E-learning']

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-display mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300">
              Check out some of our recent work and see how we've helped businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
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

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                  <div className="text-6xl">🚀</div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
                5+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg font-display mb-6">Want to See Your Project Here?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get started with a free consultation today.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
