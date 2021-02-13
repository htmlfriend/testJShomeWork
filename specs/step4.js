const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");
const faker = require("faker");
// const mainPage = require("../step2/mainPage");
// const fillData = require("../step2/fillData");
const { MainPage } = require("../step4/mainPage");
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

  test("fill fields", async () => {
    let mainPage = new MainPage(page);
    await mainPage.clickReg();
    const pageTitle = await mainPage.title();
    expect(pageTitle).toContain("Register | Vikunja");
  });
});
