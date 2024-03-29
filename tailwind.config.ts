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
    },
    colors: {
      primary: "#FF705D",
      secondary: "#231E2E",
      bgApp: "#fdfaf6",
      lightText: "#FFFFFF",
      darkText: "#231E2E",
      bgCard: "#f8fafc",
      borderCard: "#f4f4f5",
      textLightCard: "#6b7280",
      bgNavMenu: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
