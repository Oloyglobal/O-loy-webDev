// 'use client'

// import { useState } from 'react'
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     budget: '',
//     message: ''
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
//   const [errors, setErrors] = useState<{[key: string]: string}>({})

//   // Validate form
//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {}

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required'
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = 'Name must be at least 2 characters'
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address'
//     }

//     if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid phone number'
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service'
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required'
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters'
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     // Validate form
//     if (!validateForm()) {
//       return
//     }

//     setIsSubmitting(true)
//     setSubmitStatus('idle')

//     try {
//       // Replace these with your EmailJS credentials
//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: 'service_qchahny',      // Replace with your EmailJS Service ID
//           template_id: 'template_l2fk8du',    // Replace with your EmailJS Template ID
//           user_id: 'cAByZJ1noQrh1ctIk',         // Replace with your EmailJS Public Key
//           template_params: {
//             from_name: formData.name,
//             from_email: formData.email,
//             phone: formData.phone || 'Not provided',
//             service: formData.service,
//             budget: formData.budget || 'Not specified',
//             message: formData.message,
//             to_email: 'your-email@example.com', // Your email address
//           }
//         })
//       })

//       if (response.ok) {
//         setSubmitStatus('success')
//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           service: '',
//           budget: '',
//           message: ''
//         })
//         setErrors({})
//       } else {
//         setSubmitStatus('error')
//       }
//     } catch (error) {
//       console.error('Error sending email:', error)
//       setSubmitStatus('error')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value
//     })
//     // Clear error for this field
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       })
//     }
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
//           <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>

//         <div className="container-custom relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-block bg-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-amber-500/30">
//               <span className="text-amber-400 font-bold uppercase tracking-wider text-sm">Contact Us</span>
//             </div>
//             <h1 className="heading-xl font-display mb-6">Get In Touch</h1>
//             <p className="text-xl text-gray-300">
//               Ready to start your project? Get a free consultation and quote today.
//             </p>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Contact Info */}
//             <div className="lg:col-span-1 space-y-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
//                 <p className="text-gray-600 mb-8">
//                   Fill out the form and our team will get back to you within 24 hours.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
//                     <FaPhone />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
//                     <p className="text-gray-600">+234 8069336270</p>
//                     <p className="text-gray-600">+234 8145987036</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
//                     <p className="text-gray-600">oloyedeolaniyi223@gmail.com</p>
//                     <p className="text-gray-600">support@oloyglobal.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1 text-gray-900">Location</h3>
//                     <p className="text-gray-600">Lagos, Nigeria</p>
//                     <p className="text-gray-600">Abuja, Nigeria</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
//                     <FaClock />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1 text-gray-900">Business Hours</h3>
//                     <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
//                     <p className="text-gray-600">Sat: 10AM - 4PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-amber-500">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                
//                 {/* Success Message */}
//                 {submitStatus === 'success' && (
//                   <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start gap-3">
//                     <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
//                     <div>
//                       <h3 className="font-bold text-green-800 mb-1">Message Sent Successfully!</h3>
//                       <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Error Message */}
//                 {submitStatus === 'error' && (
//                   <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start gap-3">
//                     <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
//                     <div>
//                       <h3 className="font-bold text-red-800 mb-1">Oops! Something went wrong</h3>
//                       <p className="text-red-700 text-sm">Please try again or contact us directly via email.</p>
//                     </div>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold mb-2 text-gray-900">Full Name *</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
//                           errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
//                         }`}
//                         placeholder="John Doe"
//                       />
//                       {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold mb-2 text-gray-900">Email Address *</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
//                           errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
//                         }`}
//                         placeholder="john@example.com"
//                       />
//                       {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
//                           errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
//                         }`}
//                         placeholder="+234 800 000 0000"
//                       />
//                       {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold mb-2 text-gray-900">Service *</label>
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
//                           errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
//                         }`}
//                       >
//                         <option value="">Select a service</option>
//                         <option value="web-development">Web Development</option>
//                         <option value="ecommerce">E-commerce</option>
//                         <option value="mobile">Mobile Development</option>
//                         <option value="seo">SEO Services</option>
//                         <option value="marketing">Digital Marketing</option>
//                         <option value="maintenance">Maintenance & Support</option>
//                       </select>
//                       {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold mb-2 text-gray-900">Budget Range</label>
//                     <select
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
//                     >
//                       <option value="">Select budget range</option>
//                       <option value="under-250k">Under ₦250,000</option>
//                       <option value="250k-500k">₦250,000 - ₦500,000</option>
//                       <option value="500k-1m">₦500,000 - ₦1,000,000</option>
//                       <option value="1m-2m">₦1,000,000 - ₦2,000,000</option>
//                       <option value="over-2m">Over ₦2,000,000</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold mb-2 text-gray-900">Project Details *</label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={6}
//                       className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
//                         errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
//                       }`}
//                       placeholder="Tell us about your project, goals, and requirements..."
//                     ></textarea>
//                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 text-lg ${
//                       isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center gap-2">
//                         <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       'Send Message'
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="heading-lg font-display mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600">Common questions about our services and process</p>
//           </div>

//           <div className="max-w-3xl mx-auto space-y-4">
//             {[
//               {
//                 q: 'How much does a website cost?',
//                 a: 'Website costs vary based on complexity. Basic websites start from ₦250,000, e-commerce from ₦400,000. Contact us for a custom quote.'
//               },
//               {
//                 q: 'How long does it take to build a website?',
//                 a: 'Timeline depends on project scope. Simple websites take 2-3 weeks, business sites 4-6 weeks, and e-commerce 6-10 weeks.'
//               },
//               {
//                 q: 'Do you provide website maintenance?',
//                 a: 'Yes! We offer maintenance packages from ₦70,000/month including updates, security, and support.'
//               },
//               {
//                 q: 'Will my website be mobile responsive?',
//                 a: 'Absolutely! All our websites are mobile-first and work perfectly on all devices.'
//               },
//             ].map((faq, index) => (
//               <details key={index} className="group bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
//                 <summary className="font-semibold text-lg text-gray-900 flex items-center justify-between">
//                   {faq.q}
//                   <svg className="w-5 h-5 text-amber-600 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </summary>
//                 <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }





'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Validate form
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace these with your EmailJS credentials
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_qchahny',      // Replace with your EmailJS Service ID
          template_id: 'template_l2fk8du',    // Replace with your EmailJS Template ID
          user_id: 'cAByZJ1noQrh1ctIk',         // Replace with your EmailJS Public Key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'Not provided',
            service: formData.service,
            budget: formData.budget || 'Not specified',
            message: formData.message,
            to_email: 'your-email@example.com', // Your email address
          }
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-amber-500/30">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-sm">Contact Us</span>
            </div>
            <h1 className="heading-xl font-display mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Ready to start your project? Get a free consultation and quote today.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">+234 8069336270</p>
                    <p className="text-gray-600">+234 8145987036</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">oloyedeolaniyi223@gmail.com</p>
                    <p className="text-gray-600">support@oloyglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                    <p className="text-gray-600">Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
                    <p className="text-gray-600">Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-amber-500">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-green-800 mb-1">Message Sent Successfully!</h3>
                      <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-red-800 mb-1">Oops! Something went wrong</h3>
                      <p className="text-red-700 text-sm">Please try again or contact us directly via email.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                        placeholder="+234 800 000 0000"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Service *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="seo">SEO Services</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="maintenance">Maintenance & Support</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-250k">Under ₦250,000</option>
                      <option value="250k-500k">₦250,000 - ₦500,000</option>
                      <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                      <option value="1m-2m">₦1,000,000 - ₦2,000,000</option>
                      <option value="over-2m">Over ₦2,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-500'
                      }`}
                      placeholder="Tell us about your project, goals, and requirements..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 text-lg ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our services and process</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How much does a website cost?',
                a: 'Website costs vary based on complexity. Basic websites start from ₦250,000, e-commerce from ₦400,000. Contact us for a custom quote.'
              },
              {
                q: 'How long does it take to build a website?',
                a: 'Timeline depends on project scope. Simple websites take 2-3 weeks, business sites 4-6 weeks, and e-commerce 6-10 weeks.'
              },
              {
                q: 'Do you provide website maintenance?',
                a: 'Yes! We offer maintenance packages from ₦70,000/month including updates, security, and support.'
              },
              {
                q: 'Will my website be mobile responsive?',
                a: 'Absolutely! All our websites are mobile-first and work perfectly on all devices.'
              },
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-amber-600 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}









