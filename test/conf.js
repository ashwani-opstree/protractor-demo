// Tests for the calculator.
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
  jasmine:getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'screenshots'
  }))
};