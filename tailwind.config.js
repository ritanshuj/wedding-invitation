/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000',
          dark: '#5C0A0A',
          deep: '#400000'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4CF67',
          dark: '#B8860B'
        },
        saffron: '#FF9933',
        cream: '#FFFDD0'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif']
      }
    },
  },
  plugins: [],
}