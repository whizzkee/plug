import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-01": `linear-gradient(
          270deg,
          hsl(0, 76%, 51%) 0%,
          hsl(5, 70%, 73%) 26%,
          hsl(15, 70%, 86%) 39%,
          hsl(345, 92%, 90%) 50%,
          hsl(335, 77%, 81%) 61%,
          hsl(355, 73%, 70%) 74%,
          hsl(360, 76%, 51%) 100%
        )`,
        "hero-gradient": `linear-gradient(
          97.86deg,
          #ff073a 0%,
          #122f3d 53.65%,
          #ff5733 100%
        )`,
      },
    },
  },
  plugins: [],
} satisfies Config;
