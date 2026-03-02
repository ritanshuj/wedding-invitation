/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'lv-maroon': '#510404',
        'lv-gold': '#BA8B4D',
        'lv-cream': '#FFFDF8',
        'lv-text': '#510404'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        body: ['"Montserrat"', 'sans-serif']
      }
    }
  },
  plugins: []
}