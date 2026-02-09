

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import InstallPWA from '@/components/InstallPWA'

export const metadata: Metadata = {
  title: "O'LOY GLOBAL - Web Development Agency | Nigeria",
  description: "Professional web development services in Nigeria. We build custom websites, e-commerce solutions, and mobile apps.",
  manifest: '/manifest.json',
  themeColor: '#f97316',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "O'LOY GLOBAL",
  },
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-152x152.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating Buttons */}
        <WhatsAppButton />
        <ScrollToTop />
        <InstallPWA />
        
        {/* Register Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registered:', registration.scope);
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed:', err);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

// import type { Metadata } from 'next'
// import './globals.css'
// import { Inter, Poppins } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsAppButton'
// import InstallPWA from '@/components/InstallPWA'
// import ScrollToTop from '@/components/ScrollToTop'



// export const metadata: Metadata = {
//   title: "O'LOY GLOBAL - Web Development Agency | Nigeria",
//   description: "Professional web development services in Nigeria. We build custom websites, e-commerce solutions, and mobile apps that drive business growth.",
//   keywords: "web development nigeria, website design lagos, e-commerce development, mobile app development, seo services nigeria",
//   authors: [{ name: "O'LOY GLOBAL" }],
  
//   // PWA Configuration
//   manifest: '/manifest.json',
//   themeColor: '#f97316',
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: 'default',
//     title: "O'LOY GLOBAL",
//   },
  
//   // Open Graph
//   openGraph: {
//     type: 'website',
//     locale: 'en_NG',
//     url: 'https://oloyglobal.com',
//     title: "O'LOY GLOBAL - Web Development Agency",
//     description: "Nigeria's leading web development agency building high-performance websites.",
//     siteName: "O'LOY GLOBAL",
//   },
  
//   // Twitter Card
//   twitter: {
//     card: 'summary_large_image',
//     title: "O'LOY GLOBAL - Web Development Agency",
//     description: "Professional web development services in Nigeria",
//     creator: '@Olaniyi223',
//   },
  
//   // Icons
//   icons: {
//     icon: [
//       { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
//       { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
//       { url: '/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
//     ],
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* PWA Meta Tags */}
//         <meta name="application-name" content="O'LOY GLOBAL" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//         <meta name="apple-mobile-web-app-title" content="O'LOY GLOBAL" />
//         <meta name="format-detection" content="telephone=no" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="msapplication-config" content="/browserconfig.xml" />
//         <meta name="msapplication-TileColor" content="#f97316" />
//         <meta name="msapplication-tap-highlight" content="no" />
        
//         {/* Apple Touch Icons */}
//         <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        
//         {/* Service Worker Registration */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               if ('serviceWorker' in navigator) {
//                 window.addEventListener('load', function() {
//                   navigator.serviceWorker.register('/service-worker.js').then(
//                     function(registration) {
//                       console.log('Service Worker registered successfully:', registration.scope);
//                     },
//                     function(err) {
//                       console.log('Service Worker registration failed:', err);
//                     }
//                   );
//                 });
//               }
//             `,
//           }}
//         />
//       </head>
//       <body className="antialiased">
//         <Navbar />
//         {children}
//         <Footer />
//         <WhatsAppButton />
//         <ScrollToTop />
//         <InstallPWA />
//       </body>
//     </html>
//   )
// }
