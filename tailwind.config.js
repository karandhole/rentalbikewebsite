/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#ffc727",
        dark:"#ffffff"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' }, // Start outside of the viewport on the right
          '100%': { transform: 'translateX(0)' },  // End in the original position
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
    },
    animation: {
      slideInFromRight: 'slideInFromRight 3s ease-out',
      
      rotateY: 'rotateY 3s ease-out',
        // Define a custom animation named "rotateX" with a duration of 1 second and an ease-out timing function
        // Apply the keyframes over 1 second with an easing function
    },
  },
},
  plugins: [],
}

