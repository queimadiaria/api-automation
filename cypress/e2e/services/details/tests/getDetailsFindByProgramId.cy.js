import { getDetailsFindByProgramId } from "../requests/getDetailsFindByProgramId.request";

describe(`GET /details/find-by/program/{programId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it('"Should get integration details by ID"', function () {
    const programId = 339;
    cy.get("@id").then((id) => {
      getDetailsFindByProgramId(id, programId).then((response) => {
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
