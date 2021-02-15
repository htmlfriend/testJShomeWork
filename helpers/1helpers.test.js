const assert = require("assert");

Feature("first step");

Scenario("test something", async (I) => {
  const page = "";
  const query = "quality";
  let r = await I.sendGetRequest(
    `https://api.itbook.store/1.0/search/${query}/${page}`
  );
  // add to JIRA
  I.addJireTicket();

  assert.equal(r.status, 200);
  assert.equal(r.data.total, 283);
});
