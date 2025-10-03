import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ColorWaves - Technology Solutions & Digital Innovation',
  description: 'Leading technology solutions provider specializing in web development, mobile apps, software consulting, and digital transformation services.',
  keywords: [
    'technology solutions',
    'web development',
    'mobile development',
    'software consulting',
    'digital transformation',
    'business technology',
    'custom software',
    'tech innovation',
    'ColorWaves',
    'technology company'
  ],
  authors: [{ name: 'ColorWaves' }],
  creator: 'ColorWaves',
  publisher: 'ColorWaves',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colorwaves.com',
    title: 'ColorWaves - Technology Solutions & Digital Innovation',
    description: 'Leading technology solutions provider specializing in web development, mobile apps, software consulting, and digital transformation services.',
    siteName: 'ColorWaves',
    images: [
      {
        url: 'https://colorwaves.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ColorWaves - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColorWaves - Technology Solutions & Digital Innovation',
    description: 'Leading technology solutions provider specializing in web development, mobile apps, software consulting, and digital transformation services.',
    images: ['https://colorwaves.com/images/og-image.jpg'],
    creator: '@colorwaves',
  },
  alternates: {
    canonical: 'https://colorwaves.com',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
}
