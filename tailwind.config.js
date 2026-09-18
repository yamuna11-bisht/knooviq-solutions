/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#070E1E',
          850: '#0B1528',
          800: '#0F1D38',
          700: '#1E293B',
        },
        knooviq: {
          navy: '#070E1E',
          darkNavy: '#030712',
          cerulean: '#00A3E0',
          cyan: '#00F0FF',
          blue: '#0077B6',
          electric: '#00D2FF',
          sky: '#38BDF8',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          lightBg: '#F8FAFC',
          lightSurface: '#F1F5F9',
          cardDark: '#0B1528',
          cardLight: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 210, 255, 0.18), transparent 70%)',
        'aurora': 'radial-gradient(ellipse at top, rgba(0, 163, 224, 0.25), rgba(99, 102, 241, 0.15), transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'marquee': 'marquee 30s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
