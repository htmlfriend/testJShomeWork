describe('Otus auth test', () => {
    it('invalid auth', () => {
      cy.visit('https://otus.ru');
      cy.get('button.header2__auth').click();
      cy.get('form.js-login input[name^="email"]').type("auto_test_demo@demo.com");
      cy.get('form.js-login input[name^="password"]').type("password");
      cy.get('form.js-login button[type^="submit"]').click();
      cy.get('form.js-login > div > .new-input-error').should('contain', 'Такая пара логин/пароль не существует')
    })
  })