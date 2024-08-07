export const getIntegrationSearchFilterValues = (id) => {
    return cy.request({
        method: 'GET',
        url: '/integration/search/filter-values',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}