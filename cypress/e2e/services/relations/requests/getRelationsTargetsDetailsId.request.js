export const getRelationsTargetsDetailsId = (id, detailsId) => {
    return cy.request({
      method: 'GET',
      url: `/relations/targets/${detailsId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
