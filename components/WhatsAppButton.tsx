// 'use client'

// import { FaWhatsapp } from 'react-icons/fa'

// export default function WhatsAppButton() {
//   const phoneNumber = '2348145987036' // Replace with your actual WhatsApp number
//   const message = 'Hello! I would like to discuss a project with you.'

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 group"
//       aria-label="Chat on WhatsApp"
//     >
//       <div className="relative">
//         <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
//         <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50">
//           <FaWhatsapp className="w-8 h-8" />
//         </div>

//         <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//           Chat with us on WhatsApp
//           <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
//         </div>
//       </div>
//     </a>
//   )
// }




// 'use client'

// import { FaWhatsapp } from 'react-icons/fa'

// export default function WhatsAppButton() {
//   const phoneNumber = '2348145987036' // Replace with your actual WhatsApp number
//   const message = 'Hello! I would like to discuss a project with you.'

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 group"
//       aria-label="Chat on WhatsApp"
//     >
//       <div className="relative">
//         <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
//         <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50">
//           <FaWhatsapp className="w-8 h-8" />
//         </div>

//         <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//           Chat with us on WhatsApp
//           <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
//         </div>
//       </div>
//     </a>
//   )
// }




'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const phoneNumber = '2348100098339'
  const message = 'Hello! I would like to discuss a project with you.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  if (!mounted) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50">
          <FaWhatsapp className="w-8 h-8" />
        </div>

        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  )
}