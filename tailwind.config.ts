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
        "hero-bg": "url('/public/images/mask-bg.png')",
      },
      fontFamily: {
        pop: ["var(--poppins)"],
        stapel: ["var(--font-stapel)"],
      },
      colors: {
        white: "#ffffff",
        primary: "#04764E",
        secondary: "#EFCE82",
        neutral: "#A3A3A3",
        darkNeutral: "#737373",
        peach: "#E4B2A6",
      },
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
