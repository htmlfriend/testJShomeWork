const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });

  const page = await browser.newPage();
  await page.goto("https://ya.ru");
  await page.screenshot({ path: "ya-ru.png" });

  // code here
  await browser.close();
})();
