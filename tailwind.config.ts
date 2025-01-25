import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode based on a CSS class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#162521", // Default color for the primary theme
          light: "#E9D985", // Lighter version for hover or focus
          dark: "#162521", // Darker version
          softLight: "",
        },
        secondary: {
          DEFAULT: "#E9D985", // Default color for secondary theme
          light: "#9EEFE5",
          dark: "#162521",
        },
        background: {
          light: "#E9D985", // Light theme background
          dark: "#EDFAE7", // Dark theme background
          lightOdd: "#FAF7E7", // Light theme background
          lightEven: "#F2DCCB", // Light theme background
        },
        text: {
          light: "#E9D985", // Light theme text color
          dark: "#162521", // Dark theme text color
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #ffe259, #ffa751)",
        "gradient-secondary": "linear-gradient(to right, #FFEFBA, #FFFFFF)",
        "gradient-third": "linear-gradient(to right, #FFFFFF,#FFEFBA)",
        "gradient-highlight":
          "linear-gradient(90deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%)",
      },
      // backgroundImage: {
      //   "gradient-primary":
      //     "linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%)",
      //   "gradient-secondary":
      //     "linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%)",
      //   "gradient-third":
      //     "linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%)",
      // },
    },
  },
  plugins: [],
};
export default config;

// background: hsla(33, 94%, 57%, 1);

// background: linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%);

// background: -moz-linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%);

// background: -webkit-linear-gradient(0deg, hsla(33, 94%, 57%, 1) 0%, hsla(335, 67%, 53%, 1) 100%);

// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F89B29", endColorstr="#D7377B", GradientType=1 );
