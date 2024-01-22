import type { Config } from "tailwindcss";

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green_300: "#07AC4F",
        green_600: "#09934E",

        gray_100: "#F3F5F6",
        gray_200: "#E3E3E3",
        gray_500: "#737380",
        gray_700: "#4E4E4E",

        yellow_700: "#FF8F0B",

        black_800: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
export default config;
