/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  
    theme: {
      marope: ["Manrope", "sans-serif"],
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Add Manrope font
      },
     },
    },
  
    plugins: [],
  };