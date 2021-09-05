const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundColor: {
        body: "#F6F6F6"
      },
      colors: {
        body: "#000000",
        primary: "#E9204F",
        secondary: "#1B1B1B"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: theme("backgroundColor.body"),
          fontFamily: theme("fontFamily.body"),
          color: theme("colors.body")
        }
      });
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
