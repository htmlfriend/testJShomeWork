const { Helper } = codeceptjs;

class UiHelper extends Helper {
  _init() {
    console.log("go to the shop");
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }
  async scroll() {
    const { Playwright } = this.helpers;
    await Playwright.scrollPageToBottom();
  }
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = UiHelper;
