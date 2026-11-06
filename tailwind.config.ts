import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#080a11',
          850: '#0b0e16',
          800: '#10141f',
          700: '#171c2b',
          600: '#232a3d',
        },
        brand: {
          50: '#eefcf6',
          100: '#d5f8e8',
          200: '#aef0d5',
          300: '#77e3bc',
          400: '#3fce9d',
          500: '#18b384',
          600: '#0b9069',
          700: '#0a7357',
          800: '#0a5b47',
          900: '#094b3c',
        },
        accent: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(24,179,132,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        pulseRing: 'pulseRing 3s cubic-bezier(0.2,0.6,0.3,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
