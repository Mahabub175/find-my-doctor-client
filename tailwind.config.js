import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add custom color here
      colors: {
        primary: "#3185fc",
        secondary: "#1646cb",
        white: "#ffffff",
      },
      // add custom font family here
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
});
