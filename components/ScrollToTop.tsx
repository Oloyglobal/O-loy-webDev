'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
    const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
        setIsVisible(true)
    } else {
        setIsVisible(false)
    }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
    window.removeEventListener('scroll', toggleVisibility)
    }
}, [])

const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
}

return (
    <>
    {isVisible && (
        <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 group"
        aria-label="Scroll to top"
        >
        <div className="relative ">
            <div className="relative bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50">
            <FaArrowUp className="w-5 h-5" />
            </div>

            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Back to top
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-gray-900"></div>
            </div>
        </div>
        </button>
    )}
    </>
)
}