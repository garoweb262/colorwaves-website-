import { NextResponse } from 'next/server'

export default function manifest() {
  return NextResponse.json({
    name: 'ColorWaves - Technology Solutions & Digital Innovation',
    short_name: 'ColorWaves',
    description: 'Leading technology solutions provider specializing in web development, mobile apps, software consulting, and digital transformation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  })
}
