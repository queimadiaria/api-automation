import { getRelationsObjectivesDetailsId } from "../requests/getRelationsObjectivesDetailsId.request";

describe(`/relations/objectives/{detailsId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Get objectives by id", () => {
    //const detailsId = 1;
    cy.get("@id").then((id) => {
      getRelationsObjectivesDetailsId(id).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelationsObjectives = response.body;
        detailsRelationsObjectives.forEach((objectivesIdValue) => {
          const expectedProperties = {
            id: "number",
            detailsProgramsId: "number",
            objectiveId: "object",
            isMain: "boolean",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = objectivesIdValue[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const detailsObjectiveId = objectivesIdValue.objectiveId;
          const expectedDetailsObjectivesId = {
            id: "number",
            name: "string",
            expressionId: "number",
            backgroudImage: "string",
            backgroudImageMobile: "string",
            avatar: "string",
            linkImage: "string",
            description: "string",
            myProfileAvatar: "string",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedDetailsObjectivesId
          )) {
            const actualValue = detailsObjectiveId[key];
            expect(actualValue).to.be.a(expectedType);
          }

          const isMain = objectivesIdValue.isMain;
          expect(isMain).to.be.a("boolean");

          const updatedAt = objectivesIdValue.updatedAt;
          expect(updatedAt).to.be.a("string");

          const createdAt = objectivesIdValue.createdAt;
          expect(createdAt).to.be.a("string");
        });
      });
    });
  });
});
