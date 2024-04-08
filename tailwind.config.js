/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      keyframes: {
        shrinkgrow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" }
        }
      }
    },
    colors: {
      primary: "#5669ff",
      secondary: "#eef0ff",
      darkblack: "#120d26",
      lightblack: "#37364a",
      ...colors
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};
