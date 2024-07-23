export const postTag = (id, tag) => {
    return cy.request({
      method: 'POST',
      url: '/tags/create',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      body: tag,
    });
  };