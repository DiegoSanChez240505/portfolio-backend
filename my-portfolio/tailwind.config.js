/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/styles/**/*.{css,scss,sass}",
      "./src/components/**/*.{js,ts,jsx,tsx}",

      // Añade aquí las rutas a todos tus archivos HTML y archivos JavaScript/JSX/TSX
    ],
    safelist: ['text-white'],
    theme: {
      extend: {},
    },
    plugins: [],
  }