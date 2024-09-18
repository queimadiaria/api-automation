import { getRelationsLevelsDetailsId } from "../requests/getRelationsLevelsDetailsId.request";

describe(`/relations/targets/{detailsId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Get levels by id", () => {
    //const detailsId = 1;
    cy.get("@id").then((id) => {
      getRelationsLevelsDetailsId(id).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelationsLevels = response.body;
        detailsRelationsLevels.forEach((levelsIdValue) => {
          const expectedProperties = {
            id: "number",
            detailsProgramsId: "number",
            levelsId: "object",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = levelsIdValue[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const detailsLevelsId = levelsIdValue.levelsId;
          const expectedDetailsLevelsId = {
            id: "number",
            name: "string",
            expressionId: "number",
            linkImage: "string",
            description: "string",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedDetailsLevelsId
          )) {
            const actualValue = detailsLevelsId[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const updatedAt = levelsIdValue.updatedAt;
          expect(updatedAt).to.be.a("string");

          const createdAt = levelsIdValue.createdAt;
          expect(createdAt).to.be.a("string");
        });
      });
    });
  });
});
