/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};


