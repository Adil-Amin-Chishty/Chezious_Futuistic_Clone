/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'space-blue': '#0B3D91',
          'neon-purple': '#9D4EDD',
          'cosmic-pink': '#FF61D2',
          'star-yellow': '#FFD700',
          'void-black': '#0A0A0A',
          'nebula-blue': '#4CC9F0',
          'galaxy-purple': '#7209B7',
          'primary': '#4CC9F0',
          'primary-dark': '#3DB8DF',
          'secondary': '#7209B7',
          'accent': '#FF61D2',
        },
        fontFamily: {
          'space': ['Orbitron', 'sans-serif'],
          'sans': ['Poppins', 'sans-serif'],
          'display': ['Montserrat', 'sans-serif'],
        },
        backgroundImage: {
          'space-gradient': 'linear-gradient(to bottom, #0A0A0A, #0B3D91)',
          'nebula': 'radial-gradient(circle at center, #7209B7, #0A0A0A)',
          'space-bg': 'radial-gradient(circle at center, rgba(75, 201, 240, 0.1) 0%, rgba(10, 10, 10, 0.8) 100%), linear-gradient(45deg, rgba(157, 78, 221, 0.1) 0%, rgba(10, 10, 10, 0.9) 100%)',
        },
        boxShadow: {
          'neon': '0 0 10px #4CC9F0, 0 0 20px #4CC9F0',
          'glow': '0 0 15px rgba(157, 78, 221, 0.5)',
        },
        borderRadius: {
          '2xl': '1rem',
          '3xl': '1.5rem',
        },
      },
    },
    plugins: [],
}