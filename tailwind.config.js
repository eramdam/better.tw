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
        title: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "mesh-gradient": "url('/img/mesh-gradient-1.png')",
        "icon-firefox": "url('/img/icons/firefox-icon.png')",
        "icon-chrome": "url('/img/icons/chrome-icon.png')",
        "icon-edge": "url('/img/icons/edge-icon.png')",
        "icon-safari": "url('/img/icons/safari-icon.png')",
        "icon-opera": "url('/img/icons/opera-icon.png')",
        "icon-btd": "url('/img/icons/btd-icon.png')",
        "blur-hero":
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/themes/big/dark.png')",
        "hero-b-dark": "url('/img/themes/big/dark.png')",
        "hero-b-light": "url('/img/themes/big/light.png')",
        "hero-b-old-dark": "url('/img/themes/big/old-dark.png')",
        "hero-b-super-dark": "url('/img/themes/big/super-dark.png')",
        "hero-s-dark": "url('/img/themes/small/dark.png')",
        "hero-s-light": "url('/img/themes/small/light.png')",
        "hero-s-old-dark": "url('/img/themes/small/old-dark.png')",
        "hero-s-super-dark": "url('/img/themes/small/super-dark.png')",
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
        heroImages: "0 10px 20px rgba(0, 0, 0, 0.3)",
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
