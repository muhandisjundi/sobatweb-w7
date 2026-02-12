/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f', // Dark Navy Blue
        secondary: '#f8f9fa', // Off-white
        // Accent removed or set to a blue shade if needed, but sticking to requested "Blue/White only"
        accent: '#1e3a8a', // vibrant blue instead of gold for highlights if absolutely needed
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      // Removed borderRadius extensions to encourage default sharp or 0
    },
  },
  plugins: [],
}