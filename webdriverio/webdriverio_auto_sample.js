describe("Otus auth test", () => {
  it("invalid auth", () => {
    browser.url("https://otus.ru");
    $("button.header2__auth").click();
    $('form.js-login input[name^="email"]').waitForExist();
    $('form.js-login input[name^="email"]').setValue("auto_test_demo@demo.com");
    $('form.js-login input[name^="password"]').setValue("password");
    $('form.js-login button[type^="submit"]').click();
    $("form.js-login > div > .new-input-error").waitForExist();
    expect($("form.js-login > div > .new-input-error")).toHaveTextContaining(
      "Такая пара логин/пароль не существует"
    );
  });
});
