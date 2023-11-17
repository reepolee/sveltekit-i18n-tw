const forms = require('@tailwindcss/forms');
const config = {
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
        desktop: 'var(--color-desktop)',
        paper: 'var(--color-paper)',
        input: 'var(--color-input)',
        ink: 'var(--color-ink)',
        error: 'var(--color-error)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        'alert-500': 'var(--color-alert)',
        'alert-700': 'color-mix(in srgb,var(--color-alert),#000 15%)',
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
    forms({
      strategy: 'base', // only generate global styles
    }),
  ],
};

module.exports = config;
