/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'wedding-gold': '#D4AF37',
        'wedding-saffron': '#FF9933',
        'wedding-peach': '#FFCCB6',
        'wedding-mint': '#E0F2F1',
        'wedding-lavender': '#E6E6FA',
        'wedding-maroon': '#800000',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        handwriting: ['"Great Vibes"', 'cursive'],
        body: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'petal-fall': 'petalFall 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        petalFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(110vh) translateX(100px) rotate(360deg)', opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
