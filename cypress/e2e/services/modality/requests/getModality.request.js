export const getModality = (id) => {
    return cy.request({
      method: 'GET',
      url: '/modality',
      headers: {
        Authorization: `Bearer ${id}`
      },
      failOnStatusCode: false
    });
  };