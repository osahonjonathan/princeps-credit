/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#FEE9DF',
        secondary:'#E5E5E5',
        tertiary: '#FCFBFB',
        other: '#000000'
      },
      fontSize: {
        'xxs': '.40rem'
      }
      
      
    },
  },
  plugins: [],
}
