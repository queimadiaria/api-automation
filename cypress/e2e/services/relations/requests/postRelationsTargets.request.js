export const postRelationsTargets = (id, relationsTargets) => {
    return cy.request({
      method: 'POST',
      url: '/relations/targets',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      body: relationsTargets,
    });
  };