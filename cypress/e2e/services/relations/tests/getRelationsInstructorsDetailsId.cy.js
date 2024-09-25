import { getRelationsInstructorsDetailsId } from "../requests/getRelationsInstructorsDetailsId.request";
describe(`/instructors/{detailsId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Get instructors by id", () => {
    //const detailsId = 1;
    cy.get("@id").then((id) => {
        getRelationsInstructorsDetailsId(id).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelationsInstructors = response.body;
        detailsRelationsInstructors.forEach((instructorsIdValue) => {
          const expectedProperties = {
            id: "number",
            detailsProgramsId: "number",
            instructorsId: "object",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = instructorsIdValue[key];
            expect(actualValue).to.be.a(expectedType);
          }
          const detailsInstructorsId = instructorsIdValue.instructorsId;
          const expectedDetailsInstructorsId = {
            id: "number",
            name: "string",
            description: "string",
            updatedAt: "string",
            createdAt: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedDetailsInstructorsId
          )) {
            const actualValue = detailsInstructorsId[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });
      });
    });
  });
});
