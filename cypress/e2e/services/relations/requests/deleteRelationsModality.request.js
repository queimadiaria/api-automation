export const deleteRelationsModality = (id) => {
    return cy.request({
      method: 'DELETE',
      url: '/relations/modality/delete',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    });
  };