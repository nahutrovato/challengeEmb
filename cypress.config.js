const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.testim.io/",
    specPattern: "**/*.feature",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    testIsolation: false,
  },
});