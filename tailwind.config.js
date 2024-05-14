/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pry': '#F7C79D',
        'sec': '#5B7B7A ',
      }
    },
  },
  plugins: [],
}