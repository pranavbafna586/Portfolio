/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#00cfff',
        Secondary: '#020024',
        tertiary: '#150add',
        light: '#BDBDBD',
        dark: '#000036',
      }
    },
  },
  plugins: [],
}

