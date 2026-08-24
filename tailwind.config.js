/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          850: '#221F1E',
          900: '#1C1917',
          950: '#141211',
        },
        editorial: {
          cobalt: '#2563EB',
          'cobalt-soft': '#EFF6FF',
          terracotta: '#C2410C',
          'terracotta-soft': '#FFF0E8',
          forest: '#15803D',
          'forest-soft': '#EBF7EE',
          amber: '#D97706',
          'amber-soft': '#FEF3C7',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Manrope"', '"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
