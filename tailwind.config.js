/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "arxa-fon": "url('../src/assets/images/asagi-arxa-fon.jpg')"
      }
    },
  },
  plugins: [],
}
