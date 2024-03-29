/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#3a86ff',
      },
      boxShadow: {
        'mini': '2px 2px 5px 0 rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

