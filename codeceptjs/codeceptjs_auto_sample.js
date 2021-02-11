Feature("Otus auth test");

Scenario("invalid auth", async (I) => {
  await I.amOnPage("/");
  await I.waitForElement("button.header2__auth");
  await I.click("button.header2__auth");
  await I.waitForElement('form.js-login input[name^="email"]');
  await I.fillField(
    'form.js-login input[name^="email"]',
    "auto_test_demo@demo.com"
  );
  await I.fillField('form.js-login input[name^="password"]', "password");
  await I.click('form.js-login button[type^="submit"]');
  await I.waitForDetached("form.js-login > div > .new-input-error.hide");
  await I.see(
    "Такая пара логин/пароль не существует",
    "form.js-login > div > .new-input-error"
  );
});
