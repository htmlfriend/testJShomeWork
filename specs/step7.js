const playwright = require("playwright");
const { test, afterEach, beforeEach } = require("@jest/globals");

const { MainPage } = require("../step7/mainPage");
const { FillData } = require("../step7/fillData");
const { buildUser } = require("../data/step7/buildUser");
const { CurrentPage } = require("../step7/currentTAskPage");

let page, mainPage, fillData, currentPage;

const data = require("../data/step6/account.json");

describe("Authorization", () => {
  beforeEach(async () => {
    browser = await playwright.chromium.launch({ headless: true });
    page = await browser.newPage();
    await page.goto("https://try.vikunja.io/");

    mainPage = new MainPage(page);
    fillData = new FillData(page);
    currentPage = new CurrentPage(page);
  });
  afterEach(async () => {
    //  await page.close();
    await browser.close();
  });

  test.skip("start page", async () => {
    let mainPage = new MainPage(page);
    await mainPage.clickReg();
    const pageTitle = await mainPage.title();

    // assert was dropped
    expect(pageTitle).toContain("Register | Vikunja");
  });

  test("demo user in the system", async () => {
    const username = data.demo[0].username;
    const password = data.demo[0].password;

    await mainPage.login(username, password);

    // goto to the next page
    const profileName = await currentPage.getProfileName();
    //todo assert
    expect(profileName).toContain("demo");
  });

  test("register new user by faker", async () => {
    await mainPage.clickReg();
    // using buildUser
    const userdata = await buildUser("new");
    await fillData.reg(userdata);
    // goto to the next page
    const profileName = await currentPage.getProfileName();
    //todo assert
    expect(profileName).toContain(`${userdata.username}`);
  });
});
