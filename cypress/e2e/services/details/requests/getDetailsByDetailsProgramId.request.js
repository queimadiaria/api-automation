export const getDetailsFindByDetailsProgramId = (id, programId) => {
    return cy.request({
        method: 'GET',
        url: `/details/find-by/details-program/${programId}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
};