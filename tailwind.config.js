const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        title: ["PT Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "mesh-gradient": "url('/img/mesh-gradient-1.png')",
        "icon-firefox": "url('/img/icons/firefox-icon.png')",
        "icon-chrome": "url('/img/icons/chrome-icon.png')",
        "icon-edge": "url('/img/icons/edge-icon.png')",
        "icon-safari": "url('/img/icons/safari-icon.png')",
        "icon-opera": "url('/img/icons/opera-icon.png')",
        "icon-btd": "url('/img/icons/btd-icon.png')",
      },
      backgroundPosition: {
        downloadButton: "-20% 10%",
        downloadButtonBtd: "-10% 10%",
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
      dropShadow: {
        logo: ["0 0px 1px rgba(0, 0, 0, 0.2)", "0 6px 14px rgba(0, 0, 0, 0.4)"],
        headerButton: "0 2px 2px rgba(0, 0, 0, 0.28)",
      },
      boxShadow: {
        downloadButton: [
          "0 0 3px 0px rgba(0, 0, 0, 0.1)",
          "0 2px 20px rgba(0, 0, 0, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
