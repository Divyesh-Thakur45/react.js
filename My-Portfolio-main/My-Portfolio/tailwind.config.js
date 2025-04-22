/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        boxShadowLightMode: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        boxShadowDarkMode: "5px 5px 16px rgba(015,015,015,0.4), -5px -5px 10px rgba(070,070,070,0.4)",
      },
      animation: {
        spinSetting: "spinSetting 2s linear infinite"
      },
      keyframes: {
        spinSetting: {
          "from": {
            "transform": "rotate(0deg)"
          },
          "to" : {
            "transform": "rotate(360deg)"
          }
        }
      },
      fontFamily:{
        Montserratt: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
};
