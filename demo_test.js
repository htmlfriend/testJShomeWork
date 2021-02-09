Feature("demo");

Scenario("test something", ({ I }) => {
  I.amOnPage("http://example.com/");
  I.see("Example Domain");
});
