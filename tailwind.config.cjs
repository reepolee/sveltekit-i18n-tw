// const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');

const config = {
  daisyui: {
    themes: [

      {
        light: {

          "primary": "#cf00ff",

          "secondary": "#007200",

          "accent": "#00aaff",

          "neutral": "#1a1513",

          "base-100": "#fff9e6",

          "info": "#00a0f3",

          "success": "#7dd000",

          "warning": "#ffa200",

          "error": "#ff7793",
        },
      },

      "dark"],
  },
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      width: {
        '5ch': '5ch',
        '10ch': '10ch',
        '12ch': '12ch',
        '15ch': '15ch',
        '17ch': '17ch',
        '20ch': '20ch',
        '25ch': '25ch',
        '30ch': '30ch',
        '40ch': '40ch',
        '50ch': '50ch',
        '60ch': '60ch',
        date: '18ch',
      },
      fontFamily: {
        sans: ['Segoe UI', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
      },

      colors: {
        reepolee: {
          50: '#FFE0E0',
          100: '#FFBDBD',
          200: '#FF7A7A',
          300: '#FF3838',
          400: '#F50000',
          500: '#B40000',
          600: '#8F0000',
          700: '#6B0000',
          800: '#470000',
          900: '#240000',
        },
      },
    },
  },

  plugins: [
    typography,
    daisyui
  ],
};

module.exports = config;
