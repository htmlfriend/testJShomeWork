const mainPage = function () {
  this.clickReg = async function (page) {
    const redButton = ".button:nth-child(2)";
    await page.click(redButton);
  };
};

module.exports = new mainPage();
