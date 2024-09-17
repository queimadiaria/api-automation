export const getRelationsModalitysDetailsId = (id, detailsId) => {
    return cy.request({
      method: 'GET',
      url: `/relations/modality/${detailsId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
