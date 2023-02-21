/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "arxa-fon": "url('../src/assets/images/asagi-arxa-fon.jpg')"
      },
      keyframes: {
        bir: {
          '0%, 50%': { transform: 'translatey(14px)' },
          '100%': { transform: 'translatey(-50px)' },
        },
      },
      animation: {
        bir: 'bir 1.5s infinite',
      },

      keyframes:  {
        iki: {
          '0%, 50%': { transform: 'translatey(-14px)' },
          '100%': { transform: 'translatey(-50px)' },
        },
      },
      animation: {
        iki: 'iki 1.5s  infinite',
      }
    }
  },
  plugins: [],
}
