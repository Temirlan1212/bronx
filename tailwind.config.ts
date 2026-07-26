import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A6CE39", // фирменный кислотно-зелёный акцент Britva
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#141414",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "rgba(255,255,255,0.6)",
        },
        card: {
          DEFAULT: "#0D0D0D",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        // На сайте-оригинале используется кастомный шрифт AkzidenzGroteskPro-britva.
        // Заменяем на близкий по духу гротеск, доступный через next/font.
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        condensed: ["var(--font-condensed)", "Arial Narrow", "sans-serif"],
      },
      borderRadius: {
        pill: "20px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
