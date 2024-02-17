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
      colors: {
        'dark-brown': '#1F1A19',
        'medium-brown': '#593C23',
        'khaki': '#BCAD8A',
        'satin-linen': '#E4DFCE',
        'medium-gray': '#8C807C',
        'light-gray': '#C3BBB4',
        'mahogany': '#731F17',
        'burnt-sepia': '#BC5A2E',
        'light-sepia': '#BF843B',
        'yellow-orange': '#BFA004',
        'dark-green': '#565902',
        'olive-green': '#888C03',
        'bright-green': '#869252',
        'yellow-green': '#D2D904',

      },
      fontFamily: {
        playfairDisplay: ["PlayfairDisplay"],
        oswald: ["Oswald"],
        lora: ["Lora"],
        raleway: ["Raleway"],
        montserrat: ["Montserrat"],
        cinzel: ["Cinzel"]
      },
    },
  },
  plugins: [],
};
