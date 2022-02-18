module.exports = {
  content: [
    './_includes/components/*.njk',
    './_includes/layouts/*.njk', ,
    './_includes/assets/svg/*.svg'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f3f5fc',
          '100': '#e8ecfa',
          '200': '#c5cef2',
          '300': '#a1b1eb',
          '400': '#5b77db',
          '500': '#153ccc',
          '600': '#1336b8',
          '700': '#102d99',
          '800': '#0d247a',
          '900': '#0a1d64'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}