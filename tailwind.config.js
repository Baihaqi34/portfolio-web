/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#010629',
        'nav': 'rgba(255, 255, 255, 0.5);',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // set Poppins as default font
      },
    },
  },
  plugins: [],
}
