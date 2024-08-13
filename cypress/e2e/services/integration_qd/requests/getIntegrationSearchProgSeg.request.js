export const getIntegrationSearchProgramsSegmented = (id) => {
    return cy.request({
        method: 'GET',
        url: '/integration/search/programs/segmented',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}