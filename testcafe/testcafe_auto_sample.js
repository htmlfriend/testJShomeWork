import { Selector } from "testcafe";

fixture`Otus auth test`.page`https://otus.ru`;

test("invalid auth", async (t) => {
  await t
    .click("button.header2__auth")
    .typeText('form.js-login input[name^="email"]', "auto_test_demo@demo.com")
    .typeText('form.js-login input[name^="password"]', "password")
    .click('form.js-login button[type^="submit"]')
    .expect(Selector("form.js-login > div > .new-input-error").innerText)
    .contains("Такая пара логин/пароль не существует");
});
