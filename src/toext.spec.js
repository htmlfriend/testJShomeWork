const twoexp = require("./toexp");

// BDD test
describe("toexp()", () => {
  it("should calc 2^0", () => {
    expect(twoexp(0)).toBe(1);
  });

  it("should calc 3^2", () => {
    expect(twoexp(3)).toBe(8);
  });
  it("should calc -1^2", () => {
    expect(twoexp(-1)).toBe(0.5);
  });
});
