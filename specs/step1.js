const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");
const faker = require("faker");
const mainPage = require("../step2/mainPage");

let browser, page;

describe("Authorization", () => {
  beforeEach(async () => {
    browser = await playwright.chromium.launch({ headless: true });

    page = await browser.newPage();
    await page.goto("https://try.vikunja.io/");
  });

  afterEach(async () => {
    // await page.close();
    await browser.close();
  });

  test("first vertion", async () => {
    await mainPage.clickReg(page);

    const pageTitle = await page.title();
    expect(pageTitle).toContain("Register | Vikunja");
  });
});
