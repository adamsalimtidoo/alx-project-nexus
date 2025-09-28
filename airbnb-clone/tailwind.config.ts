import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FF385C",
          "200": "#FC642D"
        },
        accent:"#00A699",
        grey: {
          "100": "#717171",
          "200": "#EBEBEB",
          "300": "#DDDDDD",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open_sans: ["Open San", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
