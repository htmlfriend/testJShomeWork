const { setHeadlessWhen } = require("@codeceptjs/configure");

// // turn on headless mode when running with HEADLESS=true environment variable
// // HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

// exports.config = {
//   tests: "./codeceptjs/*.js",
//   output: "./output",
//   helpers: {
//     Puppeteer: {
//       url: "https://otus.ru",
//       show: true,
//       windowSize: "",
//     },
//     REST: {
//       endpoint: "",
//       onRequest: (request) => {
//         return request;
//       },
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

// const { setHeadlessWhen } = require("@codeceptjs/configure");
// const { devices } = require("playwright");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// exports.config = {
//   tests: "./helpers/*.test.js",
//   output: "./output",
//   helpers: {
//     Playwright: {
//       show: true,
//       browser: "chromium",
//       // emulate: devices["iPhone X"],
//     },
//   },
//   include: {
//     I: "./steps_file.js",
//     // mainPage: "./pages/main.js",
//     // registrationPage: "./pages/registration.js",
//     // registerStep: "./steps/register.js",
//   },

//   bootstrap: null,
//   mocha: {
//     // reporterOptions: {
//     //   reportDir: "htmlreports",
//     // },
//   },
//   name: "codeceptjs",
//   plugins: {
//     allure: {
//       enabled: true,
//     },
//     retryFailedStep: {
//       enabled: true,
//     },
//     screenshotOnFail: {
//       enabled: true,
//     },
//   },
// };

// exports.config = {
//   output: "./output",
//   helpers: {
//     Playwright: {
//       url: "",
//       browser: "chromium",
//     },
//   },
//   include: {
//     // I: "./steps_file.js",
//     helperPage: "./pages/helper.js",
//   },
//   mocha: {},
//   bootstrap: null,
//   teardown: null,
//   hooks: [],
//   // gherkin: {
//   //   features: "./features/*.feature",
//   //   steps: ["./step_definitions/steps.js"],
//   // },
//   plugins: {
//     screenshotOnFail: {
//       enabled: true,
//     },
//     pauseOnFail: {},
//     retryFailedStep: {
//       enabled: true,
//     },
//     // tryTo: {
//     //   enabled: true,
//     // },
//   },
//   tests: "./helpers/*.test.js",
//   name: "codeceptjs_webdriver",
// };

exports.config = {
  tests: "./multilogin/*test.js",
  output: "./output",
  helpers: {
    Playwright: {
      keepCookies: true,
      url: "https://github.com/",
      url: "",
      show: true,
      windowSize: "",
    },
    UiHelper: {
      require: "./uihelper_helper.js",
      require: "./jira_helper.js",
    },
    REST: {
      endpoint: "",
      onRequest: (request) => {
        return request;
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "autoJSdemo",
  plugins: {
    testomat: {
      enabled: true,
      require: "@testomatio/reporter/lib/adapter/codecept",
      apiKey: "cffcdd13c9gk", // process.env.TESTOMATIO,
    },
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: false,
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: "loginAs", // use `loginAs` instead of login
      users: {
        user: {
          login: (I) => {
            I.amOnPage("/");
            I.click(".HeaderMenu-link:nth-child(3)");
            I.fillField("email", "user@site.com");
            I.fillField("password", "123456");
            I.click("Login");
          },
          check: (I) => {
            I.amOnPage("/");
            I.see("User", ".navbar");
          },
        },
        admin: {
          login: (I) => {
            I.amOnPage("/login");
            I.fillField("email", "admin@site.com");
            I.fillField("password", "123456");
            I.click("Login");
          },
          check: (I) => {
            I.amOnPage("/");
            I.see("Admin", ".navbar");
          },
        },
      },
    },
  },
};
