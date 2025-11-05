import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f8ff",
          100: "#d8eaff",
          200: "#b2d4ff",
          300: "#80b2ff",
          400: "#4d8dff",
          500: "#1f5fff",
          600: "#1748db",
          700: "#1236b7",
          800: "#0d2593",
          900: "#07166f"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "monospace"]
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-fast": "pulse-fast 1.6s ease-in-out infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite"
      },
      keyframes: {
        "pulse-fast": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.4" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "50%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(79, 122, 255, 0.4)",
        "glow-lg": "0 0 120px rgba(31, 95, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
