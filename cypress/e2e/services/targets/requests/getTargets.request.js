export const getTargets = (id) => {
    return cy.request({
        method: 'GET',
        url: '/targets',
        headers: {
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}