const { I } = inject();

module.exports = {
  fields: {
    email: "#email",
    password: "#password1",
    passwordRetry: "password2",
    username: "#username",
  },
  registerButton: ".is-primary",

  register(email, username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.fillField(this.fields.passwordRetry, password);
    I.click(this.registerButton);
  },

  registerTwo(userdata) {
    Object.keys(userdata).forEach((elem) => {
      I.fillField(this.fields[elem], userdata[elem]);
    });

    I.click(this.registerButton);
  },
};
