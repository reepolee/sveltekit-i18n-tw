/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};

module.exports = config;
