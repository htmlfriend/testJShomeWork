const { BasePage } = require("../step5/basePage");

class fillData extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.emailField = "#email";
    this.usernameField = "#username";
    this.passwordField = "#password1";
    this.passwordRetryField = "#password2";
    this.regButton = ".is-primary";
  }
  async reg(username, email, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.passwordRetryField, password);
    await this.page.click(this.regButton);
  }
}

module.exports = { fillData };
