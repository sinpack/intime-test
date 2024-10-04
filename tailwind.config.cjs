/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#049C84',
        'primary-red': '#F23F4C',
        'secondary-green': '#0A796A',
        'background-green': '#07564B',
        'primary-purple': '#6A56A6',
        'primary-grey': '#54595F',
        'secondary-grey': '#43464C',
        'footer-text-grey': '#7D7F83',
      },
      filter: {
        white:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7445%) hue-rotate(139deg) brightness(111%) contrast(112%)',
      },
    },
  },
  plugins: [],
};
