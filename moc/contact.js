/**
 * Page Object imitation
 */
class ContactFormPageObject {
  constructor() {
    this.emailField = "";
    this.isSent = false;
  }

  typeInEmailField(text) {
    this.emailField = text;
  }

  sendForm() {
    this.emailField = "";
    this.isSent = true;
  }
}

module.exports = ContactFormPageObject;
