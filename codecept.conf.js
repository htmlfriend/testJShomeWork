// const { setHeadlessWhen } = require("@codeceptjs/configure");

// // turn on headless mode when running with HEADLESS=true environment variable
// // HEADLESS=true npx codecept run
// setHeadlessWhen(process.env.HEADLESS);

// exports.config = {
//   tests: "./codeceptjs/*.js",
//   output: "./output",
//   helpers: {
//     Puppeteer: {
//       // url: "https://otus.ru",
//       // show: true,
//       // windowSize: "",
//     },
//     REST: {
//       endpoint: "",
//       // onRequest: (request) => {
//       //   return request;
//       // },
//     },
//   },
//   include: {
//     I: "./steps_file.js",
//   },
//   bootstrap: null,
//   mocha: {},
//   name: "autoJSdemo",
//   plugins: {
//     retryFailedStep: {
//       enabled: true,
//     },
//     screenshotOnFail: {
//       enabled: false,
//     },
//   },
// };

// playwright configurations

const { setHeadlessWhen } = require("@codeceptjs/configure");
const { devices } = require("playwright");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./specs/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      show: true,
      browser: "chromium",
      emulate: devices["iPhone X"],
    },
  },
  include: {
    I: "./steps_file.js",
    mainPage: "./pages/main.js",
    registrationPage: "./pages/registration.js",
    registerStep: "./steps/register.js",
  },

  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "htmlreports",
    },
  },
  name: "cjsPlaywright",
  plugins: {
    allure: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
