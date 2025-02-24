import { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scan-lines": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(-1px, -1px)" },
          "60%": { transform: "translate(1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
            filter: "brightness(1)",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
            filter: "brightness(0.8)",
          },
        },
        neonPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff",
          },
          "50%": {
            textShadow:
              "0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #0ff, 0 0 73px #0ff, 0 0 80px #0ff, 0 0 94px #0ff, 0 0 140px #0ff",
          },
        },
      },
      animation: {
        "scan-lines": "scan-lines 8s linear infinite",
        glitch: "glitch 4s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        "scroll-left": "scroll-left 20s linear infinite",
        flicker: "flicker 3s linear infinite",
        neonPulse: "neonPulse 2.5s ease-in-out infinite",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "grid-white":
          "linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
