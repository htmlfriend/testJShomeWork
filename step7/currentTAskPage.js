const { BasePage } = require("../step6/basePage");

class CurrentPage extends BasePage {
  constructor(page) {
    super();
    this.page = page;
    this.profileField = ".username";
    // ".user > .dropdown > .dropdown-trigger > .button > .username";
  }
  async getProfileName() {
    return await this.page.textContent(this.profileField);
  }
}

module.exports = { CurrentPage };
