/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          white: "#ffffff",
          dark: "#0a0a0a",
          lightGrey: "#3332328a",
          transparent: "#33323229",
        },
        secondary: {
          silver: "#cfbebe",
          blue: "#1056b95c",
          lightBlue: " #0e99e9",
          translucidWhite: "#ffffffd4",
        },
      },
      fontFamily: {
        manrope: ["var(--font-family-manrope)"],
      },
    },
  },
  plugins: [],
};
