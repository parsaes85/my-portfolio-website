/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        Hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        lightBg: '#2b2a2f',
        darkBg: '#27262b',
        darkYellow: '#eb7e2b',
        yellow: '#f98107',
      },
      screens: {
        xs: '387px',
      }
    },
  },
  plugins: [],
}
