export const getDetailsAdminProgramId = (id, programId) => {
    return cy.request({
        method: 'GET',
        url: `/details/admin/program/${programId}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
};