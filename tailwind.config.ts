import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f4ef",
        ink: "#1a1612",
        "ink-light": "#6b6259",
        "ink-faint": "#c8bfb4",
        rule: "#d4cdc5",
        accent: "#2a4a2e",
        "accent-warm": "#7a3f28",
      },
      fontFamily: {
        fell: ["IM Fell English", "serif"],
        mincho: ["Shippori Mincho", "serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;