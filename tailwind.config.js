/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'madhubani-maroon': '#580C1F',
        'madhubani-gold': '#FFD700',
        'madhubani-red': '#D32F2F',
        'madhubani-yellow': '#F9A825',
        'madhubani-teal': '#00695C',
        'madhubani-orange': '#EF6C00',
        'madhubani-paper': '#FFFDE7',
        'madhubani-indigo': '#283593'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive']
      },
      animation: {
        'slow-spin': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
}