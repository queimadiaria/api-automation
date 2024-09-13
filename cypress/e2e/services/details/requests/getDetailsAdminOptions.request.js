export const getDetailsAdminOptions = (id) => {
    return cy.request({
        method: 'GET',
        url: "/details/admin/options",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
};