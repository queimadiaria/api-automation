export const getRelationsInstructorsDetailsId = (id, detailsId) => {
    return cy.request({
      method: 'GET',
      url: `/relations/instructors/${detailsId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
