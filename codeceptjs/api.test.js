const assert = require("assert");

Feature("api");

Scenario.skip("get without auth with query in path", async (I) => {
  const page = "";
  const query = "quality";
  let r = await I.sendGetRequest(
    `https://api.itbook.store/1.0/search/${query}/${page}`
  );
  assert.equal(r.status, 200);
  assert.equal(r.data.total, "283");
});

Scenario.skip("get base  auth", async (I) => {
  const token = {
    Authorization: "Basic cG9zdG1hbjpwYXNzd29yZA==",
  };
  let r = await I.sendGetRequest(`https://postman-echo.com/basic-auth`, token);
  assert.equal(r.status, 401);
});

Scenario.skip("get base 64 generate", async (I) => {
  const credentional = Buffer.from("postman:password");
  const token = {
    Authorization: "Basic " + "" + credentional.toString("base64"),
  };
  let r = await I.sendGetRequest(`https://postman-echo.com/basic-auth`, token);

  assert.equal(r.status, 200);
  assert.equal(r.data.authenticated, true);
  assert.equal(r.config.headers.Authorization, token.Authorization);
});
//https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mooringsyachtownership.com%2Fsites%2Fdefault%2Ffiles%2Fbase-image-gallery%2F2013_TM_Tahiti_Alain-Portal_Tuamotu_96.jpg&f=1&nofb=1

Feature("get dogs");

Scenario.skip("create a new dog", async (I) => {
  const body = {
    name: "Doggy",
    photoUrls: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mooringsyachtownership.com%2Fsites%2Fdefault%2Ffiles%2Fbase-image-gallery%2F2013_TM_Tahiti_Alain-Portal_Tuamotu_96.jpg&f=1&nofb=1",
    ],
  };
  let r = await I.sendPostRequest(`https://petstore.swagger.io/v2/pet`, body);
  assert.equal(r.status, 200);
  assert.equal(r.data.name, "Doggy");
});

const FormData = require("form-data");
Feature("post the user by formdata");

Scenario.skip("create a new user", async (I) => {
  const form = new FormData();
  form.append("name", "Guest");
  form.append("password", "adminSecret12");
  form.append("email", "email@siteforme.com");

  let r = await I.sendPostRequest(
    `https://postman-echo.com/post`,
    {
      "Content-Type": "multipart/form-data",
    },
    form
  );

  console.log(r);
  assert.equal(r.status, 200);
});

Feature("post the user by fs ");
const fs = require("fs");
Scenario.skip("create new user by form data fs with photo files", async (I) => {
  const form = new FormData();
  form.append("attachment", fs.createReadStream("./girl.jpg"));
  form.append("name", "Guest");
  form.append("password", "adminSecret12");
  form.append("email", "email@siteforme.com");

  let r = await I.sendPostRequest(
    `https://httpbin.org/post`,
    {
      "Content-Type": "multipart/form-data",
    },
    form
  );

  console.log(r);
  assert.equal(r.status, 200);
});

// check Schema database

let Ajv = require("ajv");

Feature("validata JSON");

Scenario("get photo of the day", async (I) => {
  const ajv = new Ajv({
    $data: true,
    logger: console,
    allErrors: true,
    verbose: true,
  });

  const schema = {
    properties: {
      status: { type: "integer" },
      title: { type: "string" },
    },

    additionalProperties: true,
  };
  const secretToken = "b2VXgz6H5OOWf1xoA8SnailyQeeXCWXz27yOlwb5";
  let r = await I.sendGetRequest(
    `https://api.nasa.gov/planetary/apod?api_key=${secretToken}`
  );

  const valid = ajv.validate(schema, r);
  console.log(ajv.errors);
  assert.deepEqual(valid, true);
  assert.equal(r.status, 200);
});
