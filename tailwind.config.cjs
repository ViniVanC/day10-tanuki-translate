/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal-1": "#cad2c5",
        "teal-2": "#84a98c",
        "teal-3": "#52796f",
        "teal-4": "#354f52",
        "teal-5": "#2f3e46",
      },
      backgroundImage: (theme) => ({
        "gradient-1":
          "linear-gradient(45deg, rgba(132,169,140,1) 0%, rgba(202,210,197,1) 100%)",
      }),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
