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
        neon: {
          blue: "#00D4FF",
          cyan: "#00F5FF",
          glow: "#0080FF",
        },
        dark: {
          900: "#020408",
          800: "#050C14",
          700: "#081420",
          600: "#0A1A28",
          500: "#0D2035",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "monospace"],
        body: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-share-tech)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 20px #00D4FF" },
          to: { boxShadow: "0 0 10px #00D4FF, 0 0 30px #00D4FF, 0 0 60px #00D4FF" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
