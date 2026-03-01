/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'madhubani-red': '#800000',
        'madhubani-mustard': '#EBB035',
        'madhubani-teal': '#008080',
        'madhubani-cream': '#FFFDD0',
        'madhubani-orange': '#FF6B35',
        'madhubani-indigo': '#2E4C6D'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        handwritten: ['"Dancing Script"', 'cursive']
      }
    },
  },
  plugins: [],
}