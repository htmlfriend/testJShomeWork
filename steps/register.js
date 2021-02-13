const { I, mainPage, registrationPage } = inject();

module.exports = {
  fields: {
    email: "#email",
    password: "#password1",
    passwordRetry: "password2",
    username: "#username",
  },

  registerButton: ".is-primary",
  register(email, username, password) {
    // repeateting steps
    mainPage.register();
    registrationPage.register(email, username, password);
  },
};
