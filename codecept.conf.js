const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./codeceptjs/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      // url: "https://otus.ru",
      // show: true,
      // windowSize: "",
    },
    REST: {
      endpoint: "",
      // onRequest: (request) => {
      //   return request;
      // },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "autoJSdemo",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: false,
    },
  },
};
