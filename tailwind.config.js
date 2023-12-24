/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-red': '#ff1742',
        'title-yellow': '#ea9c28',
        'header-red': '#c41740'
      }
    },
  },
  plugins: [],
}

