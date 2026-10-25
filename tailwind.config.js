/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Escala inspirada na imagem em gradiente de azul
        ocean: {
          50: '#E6F8FF',
          100: '#B3EDFF',
          200: '#80DFFF',
          300: '#4DCFFF',
          400: '#00C0FF', // Ciano / Ponto de luz (superior direito)
          500: '#00A3FF', // Azul vibrante
          DEFAULT: '#0077FF', // Azul Cerúleo principal (tom médio)
          600: '#0077FF',
          700: '#004CE6', // Azul Royal
          800: '#002BB8', // Azul Escuro (base inferior)
          900: '#001254', // Azul Profundo
        },
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
