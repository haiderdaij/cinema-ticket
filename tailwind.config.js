const {
  gray,
  grayDarkA,
  red,
  redDarkA,
  ruby,
  rubyDarkA,
  amber,
  indigoDarkA,
  amberDarkA,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...grayDarkA,
        ...red,
        ...redDarkA,
        ...ruby,
        ...rubyDarkA,
        ...amber,
        ...amberDarkA,
        ...indigoDarkA,
      },
      zIndex: {
        header: 100,
      },
      margin: {
        mPage: "64px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        header: "inset 0 -1px 0 0 #333",
      },
    },
  },
  plugins: [],
};
