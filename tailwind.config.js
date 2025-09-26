/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Color Palette from the images
        palette: {
          // Primary colors (Violet as main)
          primary: {
            DEFAULT: '#70369D', // Violet - Main primary color
            50: '#F3E8FF',
            100: '#E9D5FF',
            200: '#D8B4FE',
            300: '#C084FC',
            400: '#A855F7',
            500: '#70369D', // Main violet
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          // Secondary colors
          secondary: {
            DEFAULT: '#4B369D', // Indigo
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#4B369D', // Main indigo
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81',
          },
          // Accent colors
          accent: {
            DEFAULT: '#487DE7', // Blue
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#487DE7', // Main blue
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
          // Success colors
          success: {
            DEFAULT: '#79C214', // Green
            50: '#F0FDF4',
            100: '#DCFCE7',
            200: '#BBF7D0',
            300: '#86EFAC',
            400: '#4ADE80',
            500: '#79C214', // Main green
            600: '#16A34A',
            700: '#15803D',
            800: '#166534',
            900: '#14532D',
          },
          // Warning colors
          warning: {
            DEFAULT: '#F9EA36', // Yellow
            50: '#FEFCE8',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#F9EA36', // Main yellow
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
          },
          // Error colors
          error: {
            DEFAULT: '#E81416', // Red
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#E81416', // Main red
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          // Additional palette colors
          coral: {
            DEFAULT: '#FF6F61',
            50: '#FFF5F5',
            100: '#FED7D7',
            200: '#FEB2B2',
            300: '#FC8181',
            400: '#F56565',
            500: '#FF6F61', // Main coral
            600: '#E53E3E',
            700: '#C53030',
            800: '#9C2626',
            900: '#742A2A',
          },
          gold: {
            DEFAULT: '#FFD700',
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#FFD700', // Main gold
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
          },
          lime: {
            DEFAULT: '#A2D63A',
            50: '#F7FEE7',
            100: '#ECFCCB',
            200: '#D9F99D',
            300: '#BEF264',
            400: '#A3E635',
            500: '#A2D63A', // Main lime
            600: '#65A30D',
            700: '#4D7C0F',
            800: '#365314',
            900: '#1A2E05',
          },
          sky: {
            DEFAULT: '#2E86C1',
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#2E86C1', // Main sky blue
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
        },
        // Legacy support
        primary: '#70369D', // Violet
        secondary: '#4B369D', // Indigo
        accent: '#487DE7', // Blue
        success: '#79C214', // Green
        warning: '#F9EA36', // Yellow
        error: '#E81416', // Red
        
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
