/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Build/*.html"],
  theme: {
    extend: {
        screens:{
            'widecreen' : {'raw' : '(min -aspect - ratio : 3/2)'},
            'tallscreen' : {'raw' : '(min -aspect - ratio : 13/20 )'},
        },
        keyframes: {
            'open-menu':{
                '0%' : {transform: 'scaleY(0)'},
                '80%' : {transform: 'scaleY(0)'},
                '100%' : {transform: 'scaleY(0)'},
            },
        },
        animation: {
            'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
    },
  },
  plugins: [],
}

