/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    extend: {
      colors: {
        black: "#030303",
        grey: "#7A746E",
        cream:"#FFF7F0",
        purple:"#755CDE",
        tangerine:"#F6A560",
        pink:"#F39E9E",
        coral:"#EB7565",
        cyan:"#61C4B7",
        darkpurple:"#552049"
      }
    },
  },
  plugins: [],
}
