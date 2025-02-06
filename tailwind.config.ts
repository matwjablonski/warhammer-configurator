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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",

        'light-grey': "var(--light-grey)",
        grey: "var(--grey)",
        'dark-grey': "var(--dark-grey)",
      },
    },
  },
  plugins: [],
} satisfies Config;
