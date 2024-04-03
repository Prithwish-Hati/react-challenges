/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#f28482',
        'my-yellow': '#ffca3a',
        'my-green': '#8ac926',
        'my-blue': '#a2d2ff',
        'my-purple': '#6a4c93',
      },
      boxShadow: {
        'mini': '2px 2px 5px 0 rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

