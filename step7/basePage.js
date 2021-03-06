class BasePage {
  constructor(page) {
    this.page = page;
  }
  async title() {
    await this.page.title();
  }
  async url() {
    await this.page.url();
  }
}

module.exports = { BasePage };
