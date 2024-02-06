/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,tsx}", "./components/**/*.{html,js,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
    },
    extend: {
      colors: {},
      fontFamily: {
        playfairDisplay: ["PlayfairDisplay"],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [],
};
