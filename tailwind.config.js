/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:'title',
        maintext:'maintext',
        text1:'text1',
        text2:'text2'
      },
    },
  },
  plugins: [],
}
