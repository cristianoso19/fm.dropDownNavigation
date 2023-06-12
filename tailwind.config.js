/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '0.90rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '8xl': '5.6rem',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
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
      'transparant': 'hsl(0, 0%, 100%)',
      'almostWhite': 'hsl(0, 0%, 91%)',
      'mediumGray': 'hsl(0, 0%, 41%)',
      'AlmostBlack': 'hsl(0, 0%, 8%)',
    },
  },
  plugins: [],
};

