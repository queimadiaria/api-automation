export const getDetails = (id) => {
    return cy.request({
        method: 'GET',
        url: '/details',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
};