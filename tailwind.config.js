/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // USE THEME TO CUSTOMIZE ALL STYLINGS
  //BE CAREFUL WHEN CUSTOMIZING
  theme: {
    // CUSTOMIZE THE COLORS, THIS WILL OVERIDE ALL COLOR-100 200...
    // colors: {
    //   blue: "#1fb6ff",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    // CUSTOMIZE THE FONTFAMILY
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    //CUSTOMIZE THE BORDER COLOR RED TO GREEN
    // borderColor: {
    //   red: "#13ce66",
    // },
    //CUSTOMIZE THE THE SPACING AND BORDERRADIUS
    // extend: {
    //   spacing: {
    //     128: "32rem",
    //     144: "36rem",
    //   },
    //   borderRadius: {
    //     "4xl": "2rem",
    //   },
    // },
    // CUSTOMIZE THE BREAKPOINTS
    // screens: {
    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        //CUSTOMIZE KEYFRAME AS AN ANIMATION
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        //CREATE KEYFRAME
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
