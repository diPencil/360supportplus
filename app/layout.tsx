import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import ChatWidgetWrapper from '@/components/chat-widget-wrapper'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const montserrat = localFont({
  src: [
    { path: '../fonts/Montserrat-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/Montserrat-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Montserrat-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Montserrat-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/Montserrat-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
})

const nos = localFont({
  src: '../fonts/NOS.otf',
  variable: '--font-nos',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Support Plus - 360° Business Enablement',
  description: 'Empowering Businesses Through Technology & Intelligence - Coming Soon',
  generator: 'Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`font-sans antialiased ${montserrat.variable} ${nos.variable}`}>
        {children}
        <ChatWidgetWrapper />
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable zoom with Ctrl + scroll
              document.addEventListener('wheel', function(e) {
                if (e.ctrlKey) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              // Disable zoom with Ctrl + +/-
              document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
                  e.preventDefault();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
