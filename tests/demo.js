const axios = require("axios");
//api
const Pet = require("./api/getPet");

jest.setTimeout(50000);

describe("demo", () => {
  test.skip("demo get nasa site", async () => {
    const r = await axios.get("https://api.nasa.gov/");
    expect(r.status).toBe(200);
  });
  test.skip("demo get nasa site with api-key", async () => {
    const params = {
      api_key: "b2VXgz6H5OOWf1xoA8SnailyQeeXCWXz27yOlwb5",
    };
    const r = await axios.get("https://api.nasa.gov/planetary/apod", {
      params,
    });
    expect(r.data["media_type"]).toEqual("image");
  });
  test.skip("demo post reqres site", async () => {
    const r = await axios.post("https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    });
    expect(r.status).toBe(201);
  });
  test("demo get a petID (1) on a pet site", async () => {
    // const id = 2;
    // const r = await axios.get(`https://petstore.swagger.io/v2/pet/${id}`);

    const r = await Pet(1);
    // expect(r.data.id).toBe(2);
    expect(r.status).toBe(200);
  });
});
