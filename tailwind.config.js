/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Build/*.html"],
  theme: {
    extend: {
        screens:{
            'widecreen' : {'raw' : '(min -aspect - ratio : 3/2)'},
            'tallscreen' : {'raw' : '(min -aspect - ratio : 3/2)'},
        }
    },
  },
  plugins: [],
}

