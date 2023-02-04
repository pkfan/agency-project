/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.{html,js}", "./index.html", "./about.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1180px",
      xl: "1280px",
      xxl: "1536px",
    },
    debugScreens: {
      position: ["bottom", "left"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",
        ternary: "var(--ternary)",
        dark: "var(--dark)",
        light: "var(--light)",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
