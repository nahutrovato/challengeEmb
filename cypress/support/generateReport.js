const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/cucumber-json',
  output: 'cypress/reports/cucumber-json.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Challenge",
    "Browser": "Firefox",
    "Platform": "Windows 11",
    "Parallel": "Scenarios",
    "Executed": "Remote",
    "Author": "Nahuel Trovato"
  }
};

reporter.generate(options);