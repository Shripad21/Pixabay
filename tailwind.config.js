/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-font': ['Varela Round', 'sans-serif']
      },
    },
  },
  plugins: [],
}

