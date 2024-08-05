export const getIntegrationSearchPrograms = (id) => {
    return cy.request({
      method: 'GET',
      url: '/integration/search/programs',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
      failOnStatusCode: false
    });
};