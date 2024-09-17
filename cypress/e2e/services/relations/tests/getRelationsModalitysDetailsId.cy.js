import { getRelationsModalitysDetailsId } from "../requests/getRelationsModalitysDetailsId.request";

describe(`/relations/modality/{detailsId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });
  it("Get modalitys by id", () => {
    //const detailsId = 446
    cy.get("@id").then((id) => {
      getRelationsModalitysDetailsId(id).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelationsModalitys = response.body;
        detailsRelationsModalitys.forEach((modalitysId) => {
          const expectedProperties = {
            id: "number",
            detailsProgramsId: "object",
            modalityId: "object",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = modalitysId[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const programsId = modalitysId.detailsProgramsId;
          const expectedProgramsId = {
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
            expectedProgramsId
          )) {
            const actualValue = programsId[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const detailsModalityId = modalitysId.modalityId;
          const expectedDetailsModalityId = {
            id: "number",
            value: "string",
            translatePtBr: "string",
            translateLatam: "string",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedDetailsModalityId
          )) {
            const actualValue = detailsModalityId[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const updatedAt = modalitysId.updatedAt;
          expect(updatedAt).to.be.a("string");

          const createdAt = modalitysId.createdAt;
          expect(createdAt).to.be.a("string");
        });
      });
    });
  });
});