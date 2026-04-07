

// import type { Metadata } from 'next'
// import './globals.css'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsAppButton'
// import ScrollToTop from '@/components/ScrollToTop'
// import InstallPWA from '@/components/InstallPWA'

// export const metadata: Metadata = {
//   title: "O'LOY GLOBAL - Web Development Agency | Nigeria",
//   description: "Professional web development services in Nigeria. We build custom websites, e-commerce solutions, and mobile apps.",
//   manifest: '/manifest.json',
//   themeColor: '#f97316',
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: 'default',
//     title: "O'LOY GLOBAL",
//   },
//   icons: {
//     icon: '/icons/icon-192x192.png',
//     apple: '/icons/icon-152x152.png',
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
//         <link rel="manifest" href="/manifest.json" />
//         <meta name="theme-color" content="#f97316" />
//         <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
//       </head>
//       <body className="antialiased">
//         <Navbar />
//         {children}
//         <Footer />
        
//         {/* Floating Buttons */}
//         <WhatsAppButton />
//         <ScrollToTop />
//         <InstallPWA />
        
//         {/* Register Service Worker */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               if ('serviceWorker' in navigator) {
//                 window.addEventListener('load', function() {
//                   navigator.serviceWorker.register('/service-worker.js')
//                     .then(function(registration) {
//                       console.log('ServiceWorker registered:', registration.scope);
//                     })
//                     .catch(function(err) {
//                       console.log('ServiceWorker registration failed:', err);
//                     });
//                 });
//               }
//             `,
//           }}
//         />
//       </body>
//     </html>
//   )
// }

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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "O'LOY GLOBAL",
  },
  icons: {
    icon: '/icon/icon-192x192.png',    // ✅ fixed
    apple: '/icon/icon-152x152.png',   // ✅ fixed
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
        <link rel="apple-touch-icon" href="/icon/icon-152x152.png" /> {/* ✅ fixed */}
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