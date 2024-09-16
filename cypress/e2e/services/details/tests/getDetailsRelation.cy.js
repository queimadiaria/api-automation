import { getDetailsRelation } from "../requests/getDetailsRelation.request";

describe(`GET /details/relation`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });
  it("Get all details program with relation", function () {
    const locale = ["pt-br", "es-mx"];
    cy.get("@id").then((id) => {
      getDetailsRelation(id, locale).then((response) => {
        expect(response.status).to.eq(200);
        const detailsRelation = response.body;
        detailsRelation.forEach((relation) => {
          const expectedProperties = {
            id: "number",
            program_id: "number",
            program_name: "string",
            modalitys: "array",
            instructors: "array",
            levelsJson: "array",
            objectivesJson: "array",
            levels: "string",
            objectives: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedProperties
          )) {
            const actualValue = relation[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });
      });
    });
  });
});
