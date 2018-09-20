// Tests for the calculator.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
