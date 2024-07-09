const themeSwapper = require('tailwindcss-theme-swapper');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {
              primary: '#f00',
            },
            backgroundColor: {
              primary: '#fff',
            },
          },
        },
        {
          name: 'dark',
          selectors: ['.dark'],
          theme: {
            colors: {
              primary: '#fff',
            },
            backgroundColor: {
              primary: '#000',
            },
          },
        },
        {
          name: 'matrix',
          selectors: ['.matrix'],
          theme: {
            colors: {
              primary: '#0f0',
            },
          },
        },
      ],
    }),
  ],
};
