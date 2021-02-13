const { I } = inject();

module.exports = {
  registerButton: ".button:nth-child(2)",
  register() {
    I.click(this.registerButton);
  },
};
