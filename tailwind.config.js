module.exports = {
  content: ["./pages/**/*.html", "./templates/**/*.html", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        capriola: ["Capriola", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
