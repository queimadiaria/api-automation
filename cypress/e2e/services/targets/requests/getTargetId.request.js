export const getTargetId = (id, targetId) => {
    return cy.request({
      method: 'GET',
      url: `/targets/find-one/${targetId}`,
      headers: {
        Authorization: `Bearer ${id}`
      },
      failOnStatusCode: false
    });
  };