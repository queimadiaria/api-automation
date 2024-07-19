Cypress.Commands.add('getAuthToken', () => {
    return cy.request({
      method: 'POST',
      url: 'https://apidev.queimadiaria.com/users/customers/login',
      failOnStatusCode: false,
      body: {
        email: 'arthur.brito@queimadiaria.com.br',
        password: 'Britof@2022'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body.id;
    })
  });
