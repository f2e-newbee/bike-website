module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        lg: "1440px",
        md: "768px",
        sm: "480px",
      },
      colors: {
        beige: "#FFF9F8",
        green: "#26BABA",
        primary: "#1A659E",
        "text-light": "#505758",
        text: "#3B494B",
        "text-dark": "#1D3A3F",
        pink: "#F699B3",
        orange: "#F1884E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
