const puppeteer = require("puppeteer");
const { expect } = require("chai");
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });

  const page = await browser.newPage();
  await page.goto("https://amazon.com");
  await page.setViewport({ width: 1360, height: 768 });
  await page.setUserAgent("Chrome/78.0.3904.108");

  // code here

  await page.type("#twotabsearchtextbox", " display");
  await page.click("#nav-search-submit-button", {
    waitUntil: "domcontentloaded",
  });
  let image = await page.waitForXPath(
    '(//div[contains(@data-asin, "B08BF4CZSV")])'
  );
  const imageContent = await page.evaluate((el) => el.textContent, image);
  await page.screenshot({ path: "amazon.png" });
  fs.writeFile("data.txt", imageContent, (error) => {
    if (error) {
      console.error("Error is in the writing file");
      return;
    }
    console.log("the file is saved");
  });
  //await browser.close();
})();

// describe("SEO", () => {
//   beforeAll(async () => {
//     await page.goto("https://amazon.com");
//   });
//   it('should display "Amazon.com', async () => {
//     await expect(page.title()).resolves.toMatch("Amazon.com");
//   });
//   it("should have a headline", async () => {
//     const headlines = await page.$$("h1");
//     expect(headlines.length).toBe(1);
//   });
// });
