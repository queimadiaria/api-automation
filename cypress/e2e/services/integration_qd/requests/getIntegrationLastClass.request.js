export const getIntegrationLastClass = (id) => {
    return cy.request({
        method: 'GET',
        url: '/integration/last-class',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}