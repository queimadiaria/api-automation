export const getInstructorsPrograms = (id, locale = 'pt-br') => {
    return cy.request({
      method: 'GET',
      url: `/instructors/programs?locale=${locale}`,
      headers: {
        Authorization: `Bearer ${id}`
      },
      failOnStatusCode: false
    });
  };