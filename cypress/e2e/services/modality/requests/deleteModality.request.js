export const deleteModality = (token, id) => {
    return cy.request({
      method: 'DELETE',
      url: `/modality/delete/${id}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    });
  };