'use client'

import { useState, useEffect } from 'react'
import { FaTimes, FaMobileAlt, FaDownload } from 'react-icons/fa'

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (typeof window !== 'undefined') {
      // Check for standalone mode (desktop)
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true)
        return
      }

      // Check for iOS standalone mode
      const nav = window.navigator as any
      if (nav.standalone) {
        setIsInstalled(true)
        return
      }

      // Listen for install prompt
      const handler = (e: any) => {
        console.log('Install prompt available')
        e.preventDefault()
        setDeferredPrompt(e)
        
        // Show banner after 3 seconds
        setTimeout(() => {
          setShowBanner(true)
        }, 3000)
      }

      window.addEventListener('beforeinstallprompt', handler)

      return () => {
        window.removeEventListener('beforeinstallprompt', handler)
      }
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Show manual install instructions
      const message = `To install this app:\n\n📱 iPhone/iPad:\n1. Tap Share button (□↑)\n2. Scroll down and tap "Add to Home Screen"\n\n📱 Android Chrome:\n1. Tap menu (⋮)\n2. Tap "Add to Home screen"\n\n💻 Desktop Chrome:\nLook for install icon (⊕) in address bar`
      alert(message)
      return
    }

    try {
      await deferredPrompt.prompt()
      const choiceResult = await deferredPrompt.userChoice
      
      console.log(`Install outcome: ${choiceResult.outcome}`)
      
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true)
      }
      
      setDeferredPrompt(null)
      setShowBanner(false)
    } catch (error) {
      console.error('Install error:', error)
    }
  }

  const handleDismiss = () => {
    setShowBanner(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('pwa-dismissed', new Date().toISOString())
    }
  }

  if (isInstalled) return null

  return (
    <>
      {/* Floating Install Button */}
      <button
        onClick={handleInstallClick}
        className="fixed bottom-24 left-6 z-50 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Install App"
        title="Install App"
      >
        <FaDownload className="w-6 h-6" />
      </button>

      {/* Install Banner */}
      {showBanner && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-5 rounded-2xl shadow-2xl border-2 border-orange-400 animate-slide-up">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <FaTimes className="w-3 h-3" />
            </button>

            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <FaMobileAlt className="w-6 h-6" />
            </div>

            <h3 className="font-bold text-lg mb-2">Install O&apos;LOY GLOBAL</h3>
            <p className="text-sm text-white/90 mb-4">
              Get quick access and faster loading!
            </p>

            <div className="flex space-x-3">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-white text-orange-600 px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Install Now
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-3 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  )
}



// 'use client'

// import { useState, useEffect } from 'react'
// import { FaTimes, FaMobileAlt, FaDownload } from 'react-icons/fa'

// export default function InstallPWA() {
//   const [mounted, setMounted] = useState(false)
//   const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
//   const [showBanner, setShowBanner] = useState(false)
//   const [isInstalled, setIsInstalled] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     // Check if already installed
//     if (window.matchMedia('(display-mode: standalone)').matches) {
//       setIsInstalled(true)
//       return
//     }

//     // Check for iOS standalone mode
//     const nav = window.navigator as any
//     if (nav.standalone) {
//       setIsInstalled(true)
//       return
//     }

//     // Listen for install prompt
//     const handler = (e: any) => {
//       console.log('Install prompt available')
//       e.preventDefault()
//       setDeferredPrompt(e)
      
//       // Show banner after 3 seconds
//       setTimeout(() => {
//         setShowBanner(true)
//       }, 3000)
//     }

//     window.addEventListener('beforeinstallprompt', handler)

//     return () => {
//       window.removeEventListener('beforeinstallprompt', handler)
//     }
//   }, [])

//   const handleInstallClick = async () => {
//     if (!deferredPrompt) {
//       const message = `To install this app:\n\n📱 iPhone/iPad:\n1. Tap Share button (□↑)\n2. Scroll and tap "Add to Home Screen"\n\n📱 Android Chrome:\n1. Tap menu (⋮)\n2. Tap "Add to Home screen"\n\n💻 Desktop Chrome:\nLook for install icon (⊕) in address bar`
//       alert(message)
//       return
//     }

//     try {
//       await deferredPrompt.prompt()
//       const choiceResult = await deferredPrompt.userChoice
      
//       if (choiceResult.outcome === 'accepted') {
//         setIsInstalled(true)
//       }
      
//       setDeferredPrompt(null)
//       setShowBanner(false)
//     } catch (error) {
//       console.error('Install error:', error)
//     }
//   }

//   const handleDismiss = () => {
//     setShowBanner(false)
//     localStorage.setItem('pwa-dismissed', new Date().toISOString())
//   }

//   if (!mounted || isInstalled) return null

//   return (
//     <>
//       {/* Floating Install Button */}
//       <button
//         onClick={handleInstallClick}
//         className="fixed bottom-24 left-6 z-50 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
//         aria-label="Install App"
//         title="Install App"
//       >
//         <FaDownload className="w-6 h-6" />
//       </button>

//       {/* Install Banner */}
//       {showBanner && (
//         <div className="fixed bottom-24 right-6 z-50 max-w-sm">
//           <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-5 rounded-2xl shadow-2xl border-2 border-orange-400 animate-slide-up">
//             <button
//               onClick={handleDismiss}
//               className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <FaTimes className="w-3 h-3" />
//             </button>

//             <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
//               <FaMobileAlt className="w-6 h-6" />
//             </div>

//             <h3 className="font-bold text-lg mb-2">Install O&apos;LOY GLOBAL</h3>
//             <p className="text-sm text-white/90 mb-4">
//               Get quick access and faster loading!
//             </p>

//             <div className="flex space-x-3">
//               <button
//                 onClick={handleInstallClick}
//                 className="flex-1 bg-white text-orange-600 px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
//               >
//                 Install Now
//               </button>
//               <button
//                 onClick={handleDismiss}
//                 className="px-4 py-3 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm"
//               >
//                 Later
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes slide-up {
//           from {
//             transform: translateY(100px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-slide-up {
//           animation: slide-up 0.5s ease-out;
//         }
//       `}</style>
//     </>
//   )
// }