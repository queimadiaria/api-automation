export const getRunning = () => {
    return cy.request({
      method: 'GET',
      url: '/running',
      failOnStatusCode: false
    });
  };