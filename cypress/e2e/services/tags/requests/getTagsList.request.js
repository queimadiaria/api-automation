export const getTagsList =(id) => {
    return cy.request({
      method: 'GET',
      url: '/tags/list',
      headers: {
        Authorization: `Bearer ${id}`
      },
      failOnStatusCode: false
    });
  };