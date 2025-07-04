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
          dark: " #000000e6",
          grey: "rgb(209, 207, 207)",
          lightGrey: " #3332328a",
          transparent: "rgba(37, 37, 37, 0.2)",
          lightTransparent: "rgba(37, 37, 37, 0.1)",
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
        ".flexColCentered": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        ".toDarkGradient": {
          backgroundImage:
            "linear-gradient(to right, #00000000 0%, #000000 100%)",
        },
        ".fullScreen": {
          height: "calc(100dvh - 75px)",
        },
        ".minFullScreen": {
          minHeight: "calc(100dvh - 75px - 140px)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
