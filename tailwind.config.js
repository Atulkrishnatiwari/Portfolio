/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          50: "#f5f7ff",
          100: "#e6ebff",
          200: "#c7d2ff",
          300: "#9fb1ff",
          400: "#7a8dff",
          500: "#5a6cff",
          600: "#4452e6",
          700: "#3640b8",
          800: "#2f3791",
          900: "#2c3272",
          950: "#1a1d3d",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(90, 108, 255, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s ease infinite",
      },
    },
  },
  plugins: [],
}
