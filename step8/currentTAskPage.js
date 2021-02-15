const { BasePage } = require("./basePage");

class CurrentPage extends BasePage {
  constructor(page, rootSelector = "CurrentTaskPage") {
    super(page);
    this.page = page;
    this.rootSelector = rootSelector;
    this.profileField = ".username";
    // ".user > .dropdown > .dropdown-trigger > .button > .username";
  }
  async getProfileName() {
    return await this.page.textContent(this.profileField);
  }
}

module.exports = { CurrentPage };
