/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#ff595e',
        'my-yellow': '#ffca3a',
        'my-green': '#8ac926',
        'my-blue': '#1982c4',
        'my-purple': '#6a4c93',
      },
      boxShadow: {
        'mini': '2px 2px 5px 0 rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

