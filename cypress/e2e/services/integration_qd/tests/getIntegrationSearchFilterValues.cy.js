import { getIntegrationSearchFilterValues } from "../requests/getIntegrationSearchFilterValues.request";

describe("GET /integration/search/filter-values", () => {
    before(() => {
      cy.getAuthToken().as("id");
    });

    it('Should get integration filter values', () => {
        cy.get("@id").then((id) => {
            getIntegrationSearchFilterValues(id).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array').and.not.be.null;
            });
        })
    });

});