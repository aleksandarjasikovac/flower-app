module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        display: ["Cormorant"],
      },

      colors: {
        primary: "#ECBCB3",
        secondary: "#949EA0",
      },
      backgroundImage: {
        hero: "url('/assets/pl-hero.png')",
      },
      height: {
        500: "500px",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
