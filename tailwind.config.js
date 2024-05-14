/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pry': '#008080',
        'sec': '#FFCADA ',
        'sec1': '#7A5C58 ',
      }
    },
  },
  plugins: [],
}