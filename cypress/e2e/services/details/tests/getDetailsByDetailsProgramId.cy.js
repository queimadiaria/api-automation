import { getDetailsFindByDetailsProgramId } from "../requests/getDetailsByDetailsProgramId.request";

describe(`GET /details/find-by/details-program/{id}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get by details Programs id", function () {
    const programId = 250;
    cy.get("@id").then((id) => {
        getDetailsFindByDetailsProgramId(id, programId).then((response) => {
        expect(response.status).to.eq(200);

        const detailsFindProgram = response.body;
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
        for (const [key, expectedType] of Object.entries(expectedProperties)) {
          const actualValue = detailsFindProgram[key];
          expect(actualValue).to.be.a(expectedType);
        }
      });
    });
  });
});
