module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "white": {
          "0": "#ffffff",
          "400": "#f9f9f9" 
        },
        "lightgrey": {
          "200": "#e1e1e1",
          "700": "#e7e7e7"
        },
        "darkgrey": {
          "200": "#363636",
        },
        "black": {
          "200": "#1a1a1a",
          "700": "#242424"
        }
      },
      height: {
        "main-full": "calc(100vh - theme(spacing.14))",
      },
      maxWidth: {
        "hd": "1280px"
      }
    },
  },
  plugins: [],
}
