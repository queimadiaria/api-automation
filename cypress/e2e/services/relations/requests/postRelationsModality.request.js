export const postRelationsModality = (id, relationsModality) => {
    return cy.request({
      method: 'POST',
      url: '/relations/modality',
      headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'
      },
      body: relationsModality,
    });
  };