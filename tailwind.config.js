/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#0a0b0b',
        myGray2: '#1a1b1d',
        myGray3:'#101010',
        logoColor: '#002d3d',
        logo2: '#fff4e6',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        ptserif: [  "Roboto Condensed", "sans-serif"],
        sedan:["Sedan SC", "serif"],

      },
    },
  },
  plugins: [require('daisyui'),],
};
