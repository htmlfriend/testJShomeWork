const assert = require("assert");
const ContactForm = require("./contact");
const expect = require("chai").expect;

describe("ContactForm", () => {
  let pageObject;
  before(() => {
    pageObject = new ContactForm();
  });
  describe("#emailField", () => {
    ["example@exaple.com"].forEach((email) => {
      it(`should set value ${email}`, () => {
        pageObject.typeInEmailField(email);

        assert.equal(pageObject.emailField, email);
      });
    });

    // chai and assert
    it("should be clear after form sending", () => {
      // arrange
      // act
      pageObject.typeInEmailField("example@example.com");
      pageObject.sendForm();

      // assert
      expect(pageObject.emailField).is.empty;
    });
  });
});

describe("ContactIsFlag", () => {
  let pageObject = new ContactForm();
  describe("flag in a field", () => {
    it("should be false in the empty field", () => {
      pageObject.typeInEmailField("");
      assert.equal(pageObject.isSent, false);
    });

    it("should be isSent = true", () => {
      // arrange
      pageObject.typeInEmailField("example@example.com");
      // act
      pageObject.sendForm();
      // assert
      // expect(pageObject.isSend).is.true;
      assert.equal(pageObject.isSent, true);
    });
  });
});
