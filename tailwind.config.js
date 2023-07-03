const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
    },
    colors: {
      green1: {
        400: "rgba(74, 222, 128)",
        300: "rgb(134, 239 ,172)"
      },
      blue: {
        500: "rgb(59 130 246)"
      },
      backgroundWork: '#0E1115',
      bannerColor: "rgba(130,224,249,1)",
      white: "rgba(255, 255, 255)",
      primary: "#202225",
      secondary: "#5865f2",
      black: "#1E1E1E",
      gray: colors.trueGray,
      gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5', 
      },
      green: '#93C572',
    },
    extend: {
      animate: {
        'bounce': 'bounce',
      },
      backgroundImage: {
        'header': "url('/src/gallery/Rectangle 9.png')"
      },
      flex: {
        '1/3': '1 1 33%',
        '1/2': '1 1 50%',
        '1/4': '1 1 25%',
        '2/3': '1 1 67%',
        '3/4': '1 1 75%',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        design: '1440px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}