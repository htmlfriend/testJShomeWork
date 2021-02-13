const fillData = function () {
  const emailField = "#email";
  const usernameField = "#username";
  const passwordField = "#password1";
  const passwordRetryField = "#password2";
  const redButton = ".is-primary";
  this.reg = async function (page, username, email, password) {
    await page.fill(usernameField, username);
    await page.fill(emailField, email);
    await page.fill(passwordField, password);
    await page.fill(passwordRetryField, password);
    await page.click(redButton);
  };
};

module.exports = new fillData();
