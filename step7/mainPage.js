const { BasePage } = require("../step6/basePage");

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.passwordField = "#password";
    this.usernameField = "#username";
    this.loginButton = ".is-primary";
    this.redButton = ".button:nth-child(2)";
    this.lastRegButton = ".button:nth-child(1)";
  }
  async clickReg() {
    return await this.page.click(this.redButton);
  }
  async clickLastReg() {
    return await this.page.click(this.lastRegButton);
  }
  async login(username, password) {
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.usernameField, username);
    await this.page.click(this.loginButton);
  }
}

module.exports = { MainPage };
