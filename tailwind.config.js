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
          white: " #ffffff",
          dark: " #0a0a0a",
          grey: " #cfbebe",
          lightGrey: " #3332328a",
          transparent: "rgba(138, 138, 138, 0.29)",
        },
        secondary: {},
      },
      fontFamily: {
        manrope: ["var(--font-family-manrope)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".toDarkGradient": {
          backgroundImage:
            "linear-gradient(to right, #00000000 0%, #000000 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
