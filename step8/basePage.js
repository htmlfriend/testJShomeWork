let { decorateService } = require("./decoratorPage");
class BasePage {
  constructor(page) {
    this.page = page;
    // this.rootSelector = rootSelector;
    decorateService(this);
  }

  // make singleton
  async title() {
    await this.page.title();
  }
  async url() {
    await this.page.url();
  }
}

module.exports = { BasePage };
