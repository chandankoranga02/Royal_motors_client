import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        obsidian: {
          950: "#030407",
          900: "#080a0f",
          850: "#0d1017",
          800: "#131822",
          700: "#1e2433",
        },
        slate: {
          deep: "#0a0d14",
          carbon: "#151921",
          graphite: "#232936",
        },
        silver: {
          light: "#f3f4f6",
          metallic: "#cbd5e1",
          chrome: "#94a3b8",
          dark: "#64748b",
        },
        electric: {
          cyan: "#00f0ff",
          blue: "#0066ff",
          indigo: "#4f46e5",
          amber: "#f59e0b",
          crimson: "#ff1e56",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.12) 0%, rgba(3, 4, 7, 0) 70%)",
        "metallic-sheen": "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 100%)",
        "carbon-mesh": "radial-gradient(#1e2433 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.35)",
        "glow-cyan-lg": "0 0 50px -10px rgba(0, 240, 255, 0.45)",
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.35)",
        "card-luxury": "0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
