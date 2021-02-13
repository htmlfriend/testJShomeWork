const playwright = require("playwright");
let browser, page;

// failed test ...
exports.run = async function run() {
  browser = await playwright.chromium.launch({ headless: false });

  page = await browser.newPage();
  return page;
};

exports.link = async function link(url) {
  await page.goto(url);
};

exports.stop = async function stop() {
  await page.close();
  await browser.close();
};
