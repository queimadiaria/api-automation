import { getDetailsAdminOptions } from "../requests/getDetailsAdminOptions.request";

describe(`GET /details/find-by/program/{programId}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get details options", function () {
    cy.get("@id").then((id) => {
      getDetailsAdminOptions(id).then((response) => {
        expect(response.status).to.eq(200);

        const detailsAdminOptions = response.body.modalitys;
        detailsAdminOptions.forEach((modalitys) => {
          const expectedPropertiesModalitys = {
            id: "number",
            name: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedPropertiesModalitys
          )) {
            const actualValue = modalitys[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });

        const detailsLevels = response.body.levels;
        detailsLevels.forEach((levels) => {
          const expectedPropertiesLevels = {
            id: "number",
            name: "string",
            expression_id: "number",
          };
          for (const [key, expectedType] of Object.entries(
            expectedPropertiesLevels
          )) {
            const actualValue = levels[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });

        const detailsObjectives = response.body.objectives;
        detailsObjectives.forEach((objectives) => {
          const expectedPropertiesObjectives = {
            id: "number",
            name: "string",
            expression_id: "number",
          };
          for (const [key, expectedType] of Object.entries(
            expectedPropertiesObjectives
          )) {
            const actualValue = objectives[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });
        const detailsInstructors = response.body.instructors;
        detailsInstructors.forEach((instructors) => {
          const expectedPropertiesInstructors = {
            id: "number",
            name: "string",
          };
          for (const [key, expectedType] of Object.entries(
            expectedPropertiesInstructors
          )) {
            const actualValue = instructors[key];
            expect(actualValue).to.be.a(expectedType);
          }
        });
        const detailsForMothers = response.body.forMothers;
        expect(detailsForMothers).to.be.an("array").that.is.not.empty;
        detailsForMothers.forEach((value) => {
          expect(value).to.be.a("string");
        });
        const detailsDurationValues = response.body.durationValues;
        expect(detailsDurationValues).to.be.an("array").that.is.not.empty;
        detailsDurationValues.forEach((value) => {
          expect(value).to.be.a("string");
        });
      });
    });
  });
});
