/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.custom-input': {
          '@apply appearance-none border border-gray-300 focus:outline-none': {},
          '&::-webkit-calendar-picker-indicator': {
            display: 'none',
          },
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none', // Hide the spinner buttons on number inputs
            margin: '0',
          },
          '&::-moz-inner-spin-button, &::-moz-outer-spin-button': {
            appearance: 'none', // Ensure compatibility with Firefox
            margin: '0',
          },
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '5px',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 5px grey',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          background: '#2A4459',
          borderRadius: '10px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
