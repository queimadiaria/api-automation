export const postModality = (id, modality) => {
    return cy.request({
      method: 'POST',
      url: '/modality/create',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      body: modality,
    });
  };