const config = {
  plugins: {
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
