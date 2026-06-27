import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#0A0A0F',
          1: '#12121A',
          2: '#1C1C26',
          3: '#252533',
        },
        ink: {
          0: '#E4E4E7',
          1: '#A1A1AA',
          2: '#71717A',
          3: '#52525B',
        },
        accent: {
          DEFAULT: '#00D9FF',
          dim: 'rgba(0, 217, 255, 0.5)',
          glow: 'rgba(0, 217, 255, 0.15)',
        },
        line: 'rgba(255, 255, 255, 0.08)',
        lineStrong: 'rgba(255, 255, 255, 0.16)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-monospace', 'monospace'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'blink': 'blink 1.2s steps(2, start) infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.6)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0, 217, 255, 0)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.12), transparent 50%)',
      },
      backgroundSize: {
        'grid-size': '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
