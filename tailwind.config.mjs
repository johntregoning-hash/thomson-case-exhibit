/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Navy blue palette - "Legal Palette" deep midnight blues
        // Forensic Cleanroom / Data Noir aesthetic
        navy: {
          50: '#e8ecf4',
          100: '#c8d4e8',
          200: '#a3b5d1',
          300: '#7a8ba8',
          400: '#5a6b8a',
          500: '#3d4f6f',
          600: '#2a3a5c',
          700: '#1a2744',   // Elevated surfaces, borders
          800: '#0d1526',   // Card backgrounds
          900: '#0a0f1a',   // Deepest background (page bg)
          950: '#060a12',   // Ultra-deep for extreme contrast
        },
        // Gold accents - RESERVED FOR VINDICATION ONLY
        // Strict discipline: overuse dilutes impact
        gold: {
          50: '#fdfbf3',
          100: '#faf5e1',
          200: '#f5ebc4',
          300: '#eddc9c',
          400: '#e5c158',   // Hover states
          500: '#d4af37',   // Primary gold - vindication moments
          600: '#c9a227',
          700: '#a68523',
          800: '#866a1e',
          900: '#6d561a',
          950: '#4a3a10',   // Deep gold for backgrounds
        },
        // Semantic colors
        vindication: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        breach: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        discrepancy: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        causation: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        // Display: Playfair Display for headlines - legal authority
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Serif: IBM Plex Serif for body serif text
        serif: ['IBM Plex Serif', 'Georgia', 'serif'],
        // Sans: Inter for body text - technical precision
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Mono: JetBrains Mono for Finding IDs, data
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['1.75rem', { lineHeight: '1.3' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
        'gold-glow': '0 0 20px rgba(201, 162, 39, 0.3)',
        'vindication-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
