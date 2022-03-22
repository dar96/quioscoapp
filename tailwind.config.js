const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    screens: {
      'xs': '392px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

