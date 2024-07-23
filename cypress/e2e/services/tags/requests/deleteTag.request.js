export const deleteTag = (id, tagId) => {
    return cy.request({
      method: 'DELETE',
      url: `/tags/delete/${tagId}`,
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    });
  };