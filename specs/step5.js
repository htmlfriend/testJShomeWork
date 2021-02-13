const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");
const faker = require("faker");
// const mainPage = require("../step2/mainPage");
// const fillData = require("../step2/fillData");
const { MainPage } = require("../step5/mainPage");
const { link, run, stop } = require("../step5/browser");
const { fillData } = require("../step5/fillData");
const { Browser } = require("../step5/browser");
let page;

describe("Authorization", () => {
  beforeEach(async () => {
    await Browser.run();
    await Browser.link("https://try.vikunja.io/");
  });

  afterEach(async () => {
    await Browser.stop();
  });

  test("start page", async () => {
    let mainPage = new MainPage(page);
    await mainPage.clickReg();
    const pageTitle = await mainPage.title();
    expect(pageTitle).toContain("Register | Vikunja");
  });

  test("fill fields", async () => {
    const randomName = faker.name.findName(); // Leticia Hauck
    const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
    const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI
    MainPage(page);
    fillData(page);

    await mainPage.clickReg();
    await fillData.reg(randomName, randomEmail, randomPassword);
    //todo assert
    const pageTitle = await page.title();
    expect(pageTitle).toContain("Register | Vikunja");
  });
});
