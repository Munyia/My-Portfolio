/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pry': '#121D31',
        'sec': '#724F53',
        'sec1': '#D9C7BA',
      }
    },
  },
  plugins: [],
}