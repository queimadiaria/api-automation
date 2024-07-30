//integration/serach/programs/segments/detail{id}

export const getIntegrationSegmentedId = (id, programID) => {
    return cy.request ({
        method: 'GET',
        url: `/integration/search/programs/segmented/detail/${programID}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${id}`
        },
        failOnStatusCode: false
    })
}