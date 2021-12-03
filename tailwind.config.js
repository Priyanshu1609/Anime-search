module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      Kaushan: ["Kaushan Script"],
      Raleway: ['Raleway'],
      Roboto: ['Roboto']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
