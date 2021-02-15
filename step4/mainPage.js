const { BasePage } = require("../step4/basePage");

class MainPage extends BasePage {
  constructor(page) {
    super(page);

    this.redButton = ".button:nth-child(2)";
  }
  async clickReg() {
    return await this.page.click(this.redButton);
  }
  async title() {
    return await this.page.title();
  }
}

module.exports = { MainPage };
