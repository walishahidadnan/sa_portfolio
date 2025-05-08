// Import the plugin using ES6 import syntax
import tailwindcss from "@tailwindcss/postcss";

const config = {
  plugins: {
    plugins: [tailwindcss],
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            // Custom portfolio colors
            portfolio: {
              navy: "#1A203E",
              darkBlue: "#010923",
              blue: "#252078",
              slate: "#374660",
              deepBlue: "#0F0E3D",
            },
          },
        },
      },
    },
  },
};

export default config;
