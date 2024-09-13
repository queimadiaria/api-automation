export const getDetailsFindByProgramId = (id, programId) => {
    return cy.request({
        method: 'GET',
        url: `/details/find-by/program/${programId}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
};