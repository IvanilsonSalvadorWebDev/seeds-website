/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        seed: {
          orange: '#FF8A00',
          orangeDark: '#E36F00',
          orangeSoft: '#FFE3BF',
        },
        ink: {
          DEFAULT: '#171310',
          soft: '#4A423B',
        },
        cream: '#FFF8EF',
        paper: '#FFFFFF',
        sprout: {
          DEFAULT: '#3E8E56',
          soft: '#DCEFDE',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        pod: '44px 44px 44px 8px',
        'pod-alt': '44px 8px 44px 44px',
        'pod-sm': '24px 24px 24px 6px',
      },
      keyframes: {
        grow: {
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite 1s',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
