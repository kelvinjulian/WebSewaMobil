import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "alpina-grey": "#828FA1",
        "alpina-light-grey": "#A3B0C2",
        "alpina-blue": "#362EED",
        "alpina-orange": "#FF9A3D",
        "alpina-gren": "#07B704",
        "alpina-black": "#060521",
      },
    },
  },
  plugins: [],
} satisfies Config;
