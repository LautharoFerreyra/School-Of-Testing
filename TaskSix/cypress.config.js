const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://d2yqnm7qbjnp0v.cloudfront.net/",
    defaultCommandTimeout: 200000, 
    windowSize: {
      width: 1920,
      height: 1080,
    }, 
  },
});
