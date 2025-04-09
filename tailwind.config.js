/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./public/**/*.{html,js}"],
  safelist: ['hidden'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#475AFF',
          dark: '#3848cc',
        },
        secondary: {
          DEFAULT: '#D660FF',
        },
        dark: {
          DEFAULT: '#001D37',
        },
        text: {
          primary: '#000000',
          secondary: '#626262',
          light: '#A2A2A2',
          lighter: '#9F9F9F',
        }
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
