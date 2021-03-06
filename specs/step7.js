const { test, afterEach, beforeEach } = require("@jest/globals");
const { link, run, stop } = require("../step7/browser");
const { MainPage } = require("../step7/mainPage");
const { FillData } = require("../step7/fillData");
const { buildUser } = require("../data/step7/buildUser");
const { CurrentPage } = require("../step7/currentTAskPage");

let page, mainPage, fillData, currentPage;

const data = require("../data/step7/account.json");

describe("Authorization", () => {
  beforeEach(async () => {
    await run("mobile");
    page = await link("https://try.vikunja.io/");

    mainPage = new MainPage(page);
    fillData = new FillData(page);
    currentPage = new CurrentPage(page);
  });
  afterEach(async () => {
    //  await page.close();
    await stop();
  });

  test("start page", async () => {
    await mainPage.clickReg();
    const pageTitle = await mainPage.title();

    // assert was dropped
    expect(pageTitle).toContain("Register | Vikunja");
  });

  test.skip("demo user in the system", async () => {
    const username = data.demo[0].username;
    const password = data.demo[0].password;

    await mainPage.login(username, password);

    // goto to the next page
    const profileName = await currentPage.getProfileName();
    //todo assert
    expect(profileName).toContain("demo");
  });

  test.skip("register new user by faker", async () => {
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
