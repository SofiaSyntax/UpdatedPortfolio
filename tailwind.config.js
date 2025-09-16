/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],      // Body text
        heading: ['Inter', 'sans-serif'],    // Headings
        name: ['"Noto Sans"', 'serif'],      // Optional 
      },
      boxShadow: {
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};



