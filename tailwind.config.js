/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      newFont: "Space Grotesk",
    },
    extend: {
      backgroundImage: {
        bg: "url('assets/bg.webp')",
        bgStats: "url('assets/statsbg.svg')",
      },
      width: {
        halfWidth: "50vw",
        bbc: "500px",
      },
      height: {
        bigOne: "500px",
      },
      colors: {
        goodGray: "#18181A",
        goodGreen: "#6FFA4E",
        goodRed: "#FE5031",
      },
    },
  },
  plugins: [],
};
