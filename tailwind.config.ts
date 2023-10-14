import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        pop: ["var(--poppins)"],
        stapel: ["var(--font-stapel)"],
      },
      colors: {
        white: "#ffffff",
        primary: "#04764E",
        neutral: "#A3A3A3",
      },
      // container: {
      //   padding: {
      //     DEFAULT: "10px",
      //     sm: "20px",
      //     lg: "32px",
      //     xl: "32px",
      //     "2xl": "32px",
      //   },
      // },
    },
  },
  plugins: [
    function ({addUtilities}: any) {
      const newUtilities = {
        ".font-young-serif": {
          fontFamily: "Young Serif, serif",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
