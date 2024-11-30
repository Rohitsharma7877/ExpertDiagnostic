/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: '#603c86',  // Add your custom color here
      },
    },
  },
  plugins: [],
}