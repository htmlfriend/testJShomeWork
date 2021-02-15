// Before((loginAs) => {
//   loginAs("user");
// });

Feature("My first test");
Before(({ I, loginAs }) => {
  loginAs("user");
});
Scenario("login me ", ({ I, loginAs }) => {
  I.see("GitHub");
});
