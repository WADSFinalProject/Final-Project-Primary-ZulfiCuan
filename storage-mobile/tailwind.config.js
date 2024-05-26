/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        hnthin: ["HelveticaNeueThin", "sans-serif"],
        hnultralight: ["HelveticaNeueUltraLight", "sans-serif"],
        hnlight: ["HelveticaNeueLight", "sans-serif"],
        hnroman: ["HelveticaNeueRoman", "sans-serif"],
        hnmedium: ["HelveticaNeueMedium", "sans-serif"],
        hnbold: ["HelveticaNeueBold", "sans-serif"],
        hnheavy: ["HelveticaNeueHeavy", "sans-serif"],
        hnblack: ["HelveticaNeueBlack", "sans-serif"],
        mmbold: ["MuseoModerno-Bold", "sans-serif"]
      },

      colors: {
        primary: {
          DEFAULT: "#bdd8b0",
          100: "#3c9284",
        },
        secondary: {
          DEFAULT: "#04315b",
        },
        offwhite: {
          DEFAULT: "#faf9f6",
        }
      },
    },
  },
  plugins: [],
}

