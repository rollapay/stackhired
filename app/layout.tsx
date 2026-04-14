import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
}

export const metadata: Metadata = {
  title: {
    default: 'Stack Hired — Where Tech Talent Meets Opportunity',
    template: '%s | Stack Hired',
  },
  description:
    'AI-powered recruitment platform connecting tech talent with top companies. Video profiles, GitHub integration, Slack communication, and intelligent matching.',
  keywords: [
    'tech jobs',
    'software engineer jobs',
    'developer jobs',
    'AI recruitment',
    'remote jobs',
    'GitHub jobs',
    'tech hiring',
  ],
  openGraph: {
    title: 'Stack Hired — Where Tech Talent Meets Opportunity',
    description:
      'AI-powered recruitment platform built for the way tech teams work today.',
    type: 'website',
    siteName: 'Stack Hired',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D0D0D' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
