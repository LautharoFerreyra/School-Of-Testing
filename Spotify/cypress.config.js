const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://open.spotify.com/",
    viewportWidth:1920,
    viewportHeight:1090,
  },
});
