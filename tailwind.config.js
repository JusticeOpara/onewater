/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Commissioner: ["Commissioner", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "914px" }, // Below 915px is considered mobile
      desktop: { min: "915px" }, // Above 915px is considered desktop
    },
  },
  plugins: [],
};

