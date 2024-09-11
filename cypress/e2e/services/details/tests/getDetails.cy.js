import { getDetails } from "../requests/getDetails.request";

describe("GET /integration/search/programs", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });
  it("Should get details programs", function () {
    cy.get("@id").then((id) => {
      getDetails(id).then((response) => {
        expect(response.status).to.eq(200);

        const details = response.body;
        details.forEach((detailsPrograms) => {
          const expectedProperties = {
            id: "number",
            programId: "number",
            numberOfClasses: "number",
            durationTime: "number",
            durationValue: "string",
            intensity: "string",
            frequency: "number",
            updatedAt: "string",
            createdAt: "string",
            isQuizRecommended: "boolean",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = detailsPrograms[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });
      });
    });
  });
});
