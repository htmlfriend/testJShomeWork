const axios = require("axios");

jest.setTimeout(50000);

describe("demo", () => {
  test("demo get nasa site", async () => {
    const r = await axios.get("https://api.nasa.gov/");
    expect(r.status).toBe(200);
  });
});
