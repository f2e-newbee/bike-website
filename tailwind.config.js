module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1A659E',
      'secondary': '#F1884E',
      'tertiary': '#26BABA',
      'purple-custom': '#5D5D9B',
      'pink-custom': '#F699B3'
     }),
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
      letterSpacing: {
        widest: ".5em",
      },
      maxWidth: {
        800: '800px'
      },
      minWidth: {
        "3/4": "75%",
        90: "90%",
      },
      minHeight: {
        "3/4": "75%",
      },
      inset: {
        "1/5": "20%",
      },
      gridTemplateRows: {
        // Simple 9 row grid
       '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
