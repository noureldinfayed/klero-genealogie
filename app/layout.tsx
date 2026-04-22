import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import LenisProvider from '@/components/ui/LenisProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Klero Généalogie — Cabinet de généalogie successorale',
    template: '%s | Klero Généalogie',
  },
  description:
    'Klero Généalogie identifie et récupère les héritages non transmis lors des successions, en collaboration avec les notaires. Aucun frais sans résultat.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Klero Généalogie',
    title: 'Klero Généalogie — Cabinet de généalogie successorale',
    description:
      'Nous identifions et récupérons les actifs non transmis lors des successions, en collaboration avec les notaires.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
