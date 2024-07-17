export const getHealth = () => {
    return cy.request({
      method: 'GET',
      url: '/health',
      failOnStatusCode: false
    });
  };