/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signture: ["Great Vibes"],
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    }
  },
  plugins: [],
}

