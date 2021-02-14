const { BasePage } = require("../step6/basePage");

class FillData extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.emailField = "#email";
    this.usernameField = "#username";
    this.passwordField = "#password1";
    this.passwordRetryField = "#password2";
    this.regButton = ".is-primary";
  }
  async reg(userdata) {
    await this.page.fill(this.usernameField, userdata.username);
    await this.page.fill(this.emailField, userdata.email);
    await this.page.fill(this.passwordField, userdata.password);
    await this.page.fill(this.passwordRetryField, userdata.password);
    await this.page.click(this.regButton);
  }
}

module.exports = { FillData };
