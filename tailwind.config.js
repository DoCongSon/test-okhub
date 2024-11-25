/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      quicksand: 'Quicksand, sans-serif',
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      colors: {
        'Neutral/N50': '#F9F9F9',
      },
    },
  },
  plugins: [],
}
