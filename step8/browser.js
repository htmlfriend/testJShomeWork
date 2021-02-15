let { devices } = require("playwright");
let playwright = require("playwright");
let page, context, browser;

// failed test ...

const iphoneX = devices["iPhone X"];

async function link(url) {
  await page.goto(url);
  return page;
}

async function run(viewport) {
  browser = await playwright.chromium.launch({ headless: true });
  switch (viewport) {
    case "mobile":
      context = await browser.newContext({
        ...iphoneX,
      });
      break;
    case "desktop":
      await page.setViewportSize({ width: 1600, height: 1200 });
      context = await browser.newContext();
      break;
  }
  page = await context.newPage();
}

async function stop() {
  await page.close();
  await browser.close();
}

module.exports = { run, link, stop };
