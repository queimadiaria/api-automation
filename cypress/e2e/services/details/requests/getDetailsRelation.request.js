export const getDetailsRelation = (id, locale) => {
    return cy.request({
      method: 'GET',
      url: `/details/relation?locale=${locale}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`
    },
    failOnStatusCode: false
    });
  };
