export const getIntegrationListSegments = (id, language = 'pt-br') => {
    return cy.request({
        method: 'GET',
        url: `/integration/list-segments/${language}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}