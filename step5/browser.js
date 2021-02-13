const playwright = require("playwright");
let page, context;

// failed test ...

class Browser {
  constructor(page = {}, browser = {}) {
    this.page = page;
    this.browser = browser;
  }
  async run() {
    this.browser = await playwright.chromium.launch({ headless: false });
    this.page = await browser.newPage();
    return this.browser, this.page;
  }
  async link(url) {
    await this.page.goto(url);
    return this.page;
  }
  async stop() {
    await this.page.close();
    await this.browser.close();
  }
}

module.exports = { Browser };
