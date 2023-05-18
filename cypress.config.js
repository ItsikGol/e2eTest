const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1510,
  viewportHeight: 710,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
