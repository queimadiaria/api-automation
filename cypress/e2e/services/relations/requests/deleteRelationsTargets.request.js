export const deleteRelationsTargets = (id) => {
    return cy.request({
      method: 'DELETE',
      url: '/relations/targets/delete',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    });
  };