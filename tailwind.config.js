/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-maroon': '#3D0101',
        'madhubani-mustard': '#EBB035',
        'madhubani-teal': '#008080',
        'madhubani-orange': '#D35400',
        'madhubani-cream': '#FFFDF0',
        'madhubani-indigo': '#1B2631'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive']
      }
    },
  },
  plugins: [],
}