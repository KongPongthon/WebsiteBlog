/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center:true,      
    },
    colors: {
      SaddleBrown :'#8B4513',
      Peru:'#CD853F',
      Sienna:'#A0522D',
      white:'#FFFFFF',
      black:'#000000',
      brown:'#6a4a30',
      softbrown:'#b88456',
      softgrey:'#bdb7b0',
      darkbrown:'#857363',
      perlriver:'#efefef',
      orange400:'#fb923c',
      orange300:'#fdba74',
      yellow400:'#facc15',
      yellow500:'#eab308',  
    },
  },
  plugins: [],
}

