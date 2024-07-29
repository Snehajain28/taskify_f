/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px -40px 60px 5px rgb(40, 37, 203)',
        '4xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

      },
      screens:{
        'xs':"425px",
      }
    },
  },
  plugins: [],
}