const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");
const faker = require("faker");
const mainPage = require("../step3/mainPage");
const fillData = require("../step3/fillData");
const { link, run, stop } = require("../step3/browser");

let page;

describe("Authorization", () => {
  beforeEach(async () => {
    await run();
    page = await link("https://try.vikunja.io/");
  });

  afterEach(async () => {
    await stop();
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

// failed. Need to set up a class;
