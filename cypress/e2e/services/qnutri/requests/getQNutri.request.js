export const getQnutri = (locale = 'pt-br') => {
  return cy.request({
    method: 'GET',
    url: `/qnutri?locale=${locale}`,
    failOnStatusCode: false
  });
};
