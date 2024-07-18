export const getObjectivesPrograms = () => {
    return cy.request({
      method: 'GET',
      url: '/objectives/programs',
      failOnStatusCode: false
    });
  };