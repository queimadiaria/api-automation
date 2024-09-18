export const getRelationsObjectivesDetailsId = (id, detailsId) => {
    return cy.request({
      method: 'GET',
      url: `/relations/objectives/${detailsId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
