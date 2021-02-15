Feature("my zero test");

Scenario.skip("test something", async (I) => {
  await I.amOnPage("https://github.com/gothinkster/realworld");
  I.scroll();
  await I.see("License");
});
