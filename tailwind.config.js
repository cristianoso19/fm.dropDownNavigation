/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      backgroundImage: {
        'hero-mobile': "url('../images/image-hero-mobile.png')",
        'hero-dektop': "url('../images/image-hero-desktop.png')",
      },
   },
    colors: {
      'almostWhite': 'hsl(0, 0%, 91%)',
      'mediumGray': 'hsl(0, 0%, 41%)',
      'AlmostBlack': 'hsl(0, 0%, 8%)',
    },
  },
  plugins: [],
};

