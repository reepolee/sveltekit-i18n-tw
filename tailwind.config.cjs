/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["bg-white", "text-gray-900", "dark:bg-gray-900", "dark:text-gray-50"],
  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};

module.exports = config;
