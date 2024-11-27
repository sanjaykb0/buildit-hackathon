import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'times': ['Times New Roman', 'serif']
      },
    }
  },

  plugins: [forms]
};
