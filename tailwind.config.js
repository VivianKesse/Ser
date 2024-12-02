/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5d3462",
        beige: "#fcf3df",
        white: "#fafafa",
        coral: "#e05840",
        lilac: "#ad8fb0",
        black: "#000000",
        yellow: "#e0e89b",
        blue: "#65bdba",
      },

      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
    },

      backgroundImage: {
        'texture': "url('/src/assets/texture.png')",
      }

    },
  },
  plugins: [],
}