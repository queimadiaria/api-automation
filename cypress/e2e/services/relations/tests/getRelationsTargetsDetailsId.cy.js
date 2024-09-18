import { getRelationsTargetsDetailsId } from "../requests/getRelationsTargetsDetailsId.request";

describe(`/relations/levels/{detailsId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Get levels by id", () => {
    const detailsId = 1;
    cy.get("@id").then((id) => {
      getRelationsTargetsDetailsId(id, detailsId).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelationsTargets = response.body;
        detailsRelationsTargets.forEach((targetIdValue) => {
          const expectedProperties = {
            id: "number",
            detailsProgramsId: "number",
            targetId: "object",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = targetIdValue[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const detailsTargetId = targetIdValue.targetId;
          const expectedDetailsTargetId = {
            id: "number",
            type: "string",
            translateBr: "string",
            translateLatam: "string",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedDetailsTargetId
          )) {
            const actualValue = detailsTargetId[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const updatedAt = targetIdValue.updatedAt;
          expect(updatedAt).to.be.a("string");

          const createdAt = targetIdValue.createdAt;
          expect(createdAt).to.be.a("string");
        });
      });
    });
  });
});
