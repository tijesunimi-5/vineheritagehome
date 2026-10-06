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
        vhh: {
          green: {
            50: "#F2F9F6",
            100: "#E3F1EC",
            200: "#C4E3D8",
            300: "#9CCFC0",
            400: "#6FB3A1",
            500: "#439680",
            600: "#226E57",
            700: "#1A5342",
            800: "#133D30", // Deep Vine Green
            900: "#0D2B21",
            950: "#071C15",
          },
          red: {
            50: "#FDF2F2",
            100: "#FCE4E4",
            500: "#C83E3D",
            600: "#B83232", // Controlled Warm Red Accent
            700: "#8C2424",
            900: "#4D1212",
          },
          cream: "#FAF7F2",
          sand: "#EFEBE4",
          warm: "#F6F4EE",
          charcoal: "#121816",
          dark: "#0C1210",
          muted: "#55645F",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 43, 33, 0.08)",
        elevated: "0 20px 40px -15px rgba(13, 43, 33, 0.12)",
        card: "0 4px 20px -2px rgba(18, 24, 22, 0.06)",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(7, 28, 21, 0.75) 0%, rgba(13, 43, 33, 0.85) 60%, rgba(12, 18, 16, 0.95) 100%)',
        'soft-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(7, 28, 21, 0.4) 100%)',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s infinite alternate ease-in-out',
        'pulse-subtle': 'pulseSubtle 4s infinite ease-in-out',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
