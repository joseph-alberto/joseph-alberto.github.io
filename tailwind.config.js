/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "384px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
        }
      }
    },
  },
  plugins: [],
}
