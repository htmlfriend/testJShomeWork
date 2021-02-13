const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");
const faker = require("faker");
const mainPage = require("../step2/mainPage");
const fillData = require("../step2/fillData");

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
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();
    await mainPage.clickReg(page);
    await fillData.reg(page, randomName, randomEmail, randomPassword);
    const pageTitle = await page.title();
    expect(pageTitle).toContain("Register | Vikunja");
  });
});
