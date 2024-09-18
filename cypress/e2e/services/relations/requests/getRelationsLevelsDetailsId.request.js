export const getRelationsLevelsDetailsId = (id, detailsId) => {
    return cy.request({
      method: 'GET',
      url: `/relations/levels/${detailsId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
