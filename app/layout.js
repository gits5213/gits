import './globals.css'
import 'tachyons'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'GLOBAL I TECH SOLUTIONS IN THE CITY OF NEW YORK - Student Resources',
  description: 'GLOBAL I TECH SOLUTIONS IN THE CITY OF NEW YORK - Code4Kids|WebDevelopment|Full Stack SQA Training',
  keywords: ['QA Training', 'Web Development', 'Software Testing', 'Student Resources', 'New York'],
  authors: [{ name: 'GLOBAL I TECH SOLUTIONS IN THE CITY OF NEW YORK' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00416A',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.fontawesome.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <script defer src="https://use.fontawesome.com/3ed22459d6.js"></script>
        <script data-ad-client="ca-pub-9112023534705295" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </head>
      <body suppressHydrationWarning style={{ 
        margin: 0, 
        padding: 0, 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Header />
        <main style={{ marginTop: 0, paddingTop: 0, flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
