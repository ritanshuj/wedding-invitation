/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          maroon: "#800000",
          gold: "#D4AF37",
          saffron: "#FF9933",
          cream: "#FFFDD0",
          deep: "#4A0404"
        }
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
