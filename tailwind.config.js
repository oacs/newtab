/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      colors: {
        tokyonight: {
          100: "#c8d3f5",
          // 200: "#86e1fc",
          200: "#ffc777",
          300: "#ff966c",
          400: "#ff757f",
          500: "#fca7ea",
          600: "#c3e88d",
          700: "#c099ff",
          800: "#AFD7FC",
          bg: "#303030",
          900: "#262626", // bg
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
