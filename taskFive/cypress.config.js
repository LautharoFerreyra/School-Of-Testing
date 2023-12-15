const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://admin-demo.nopcommerce.com/",
    defaultCommandTimeout: 200000, 
    windowSize: {
      width: 1920,
      height: 1080,
    }, 
  },
});
