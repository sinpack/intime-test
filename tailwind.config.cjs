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
      },
    },
  },
  plugins: [],
};
