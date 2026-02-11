/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cave-white': '#FFFFFF',
        'cave-white-grey': '#F5F5F7',
        'cave-beige': '#F2E8DF',
        'cave-neutral': '#EADEDA',
        'cave-grey': '#A1A1A6',
        'cave-dark': '#1D1D1F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

