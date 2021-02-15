let { BasePage } = require("../step7/basePage");

class MainPage extends BasePage {
  constructor(page) {
    super();
    this.page = page;

    this.passwordField = "#password";
    this.usernameField = "#username";
    this.loginButton = ".is-primary";
    this.redButton = ".button:nth-child(2)";
    this.lastRegButton = ".button:nth-child(1)";
  }
  async clickReg() {
    await this.page.click(this.redButton);
  }
  async clickLastReg() {
    await this.page.click(this.lastRegButton);
  }
  async login(username, password) {
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.usernameField, username);
    await this.page.click(this.loginButton);
  }
  async title() {
    return await this.page.title();
  }
}

module.exports = { MainPage };
