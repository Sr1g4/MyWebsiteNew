/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1fb6ff', // A vibrant, modern blue
        'dark-blue': '#005f73',   // A darker shade for contrast
        'light-blue': '#e0f9ff'   // A light blue for backgrounds or highlights
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Using 'Inter' font for a modern look
        'mono': ['Roboto Mono', 'monospace'] // 'Roboto Mono' for any monospaced needs
      },
      spacing: {
        '128': '32rem', // Custom large spacing for layout design
        '144': '36rem'
      },
      borderRadius: {
        'xl': '1rem' // Larger border radius for rounded corners
      }
    },
  },
  plugins: [],
}
