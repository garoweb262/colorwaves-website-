/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        heading: [
          'var(--font-maven-pro)',
          'Maven Pro',
          'var(--font-inter)',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        display: [
          'var(--font-maven-pro)',
          'Maven Pro',
          'var(--font-inter)',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
      },
    },
  },
}
