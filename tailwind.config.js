export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        secondary: '#144272',
        accent: '#2C74B3',
      },
      height: {
        '120': '30rem', // 480px - 5x the original 24 (96px)
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}