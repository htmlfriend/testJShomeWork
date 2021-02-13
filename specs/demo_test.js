const { mainPage, registrationPage, registerStep } = inject();

const { internet } = require("faker");
const faker = require("faker");

Feature("demo");

Scenario.skip("main", (I) => {
  I.amOnPage("https://try.vikunja.io/");
  mainPage.register();
  I.see("Register");
});

Scenario.skip("main page with register data", (I) => {
  const randomName = faker.name.findName(); // Leticia Hauck
  const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
  const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI
  I.amOnPage("https://try.vikunja.io/");
  mainPage.register();
  registrationPage.register(randomEmail, randomName, randomPassword);
  I.see(`Hi ${randomName}`);
});

Scenario("Profile new user by object.keys", (I) => {
  I.say("Using forEach in the object");
  let password = faker.internet.password();
  const userdata = {
    username: faker.name.findName(), // Leticia Hauck
    email: faker.internet.email(), // Ewell.Cremin20@hotmail.com
    password: password, //qxEBWLY7QJPeqcI,
    passwordRetry: password, //qxEBWLY7QJPeqcI,,
  };
  I.amOnPage("https://try.vikunja.io/");
  mainPage.register();
  registrationPage.registerTwo(userdata);
  I.see(`Hi ${userdata.username}`);
});

Scenario.skip("Profile new user by register steps", (I) => {
  I.say("using steps file");
  const randomName = faker.name.findName(); // Leticia Hauck
  const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
  const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI

  I.amOnPage("https://try.vikunja.io/");
  registerStep.register(randomEmail, randomName, randomPassword);
  I.see(`Hi ${randomName}`);
});

// for modal window
// actor
Scenario.skip("Login the register users", (I) => {
  I.say("data is ready");
  const name = "demo";
  const password = "demo";
  I.say("open the browser");
  I.amOnPage("https://try.vikunja.io/");
  // I actor from steps_file.js
  I.login(name, password);
  I.see(`Hi ${name}`);
});
