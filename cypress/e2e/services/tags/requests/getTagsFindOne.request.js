export const getTagsFindOne =(id, tagId) => {
    return cy.request({
      method: 'GET',
      url: `/tags/find-one/${tagId}`,
      headers: {
        Authorization: `Bearer ${id}`
      },
      failOnStatusCode: false
    });
  };