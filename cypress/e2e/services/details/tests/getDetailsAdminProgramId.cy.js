import { getDetailsAdminProgramId } from "../requests/getDetailsAdminProgramId.request";

describe(`GET /details/admin/program/{id}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get details programId", function () {
    const programId = 245;
    cy.get("@id").then((id) => {
      getDetailsAdminProgramId(id, programId).then((response) => {
        expect(response.status).to.eq(200);
        const detailsAdminProgramId = response.body;
        const expectedPropertiesDetailsAdminProgramId = {
          id: "number",
          programId: "number",
          durationTime: "number",
          durationValue: "string",
          frequency: "number",
          isQuizRecommended: "boolean",
          programName: "string",
          modalitys: "array",
          instructors: "array",
          levels: "array",
          objectives: "array",
          accessories: "boolean",
        };
        for (const [key, expectedType] of Object.entries(
          expectedPropertiesDetailsAdminProgramId
        )) {
          const actualValue = detailsAdminProgramId[key];
          expect(actualValue).to.be.a(expectedType);
        }

        const detailsModalitys = response.body.modalitys;
        expect(detailsModalitys).to.be.an("array").that.is.not.empty;
        detailsModalitys.forEach((value) => {
          expect(value).to.be.a("number");
        });

        // const detailsInstructors = response.body.instructors;
        // expect(detailsInstructors).to.be.an("array").that.is.not.empty;
        // detailsInstructors.forEach((value) => {
        //     expect(value).to.be.a("number");

        // });

        // const detailslevels = response.body.levels;
        // expect(detailslevels).to.be.an("array").that.is.not.empty;
        // detailslevels.forEach((value) => {
        //     expect(value).to.be.a("number");

        // });

        // const detailsobjectives = response.body.levels;
        // expect(detailsobjectives).to.be.an("array").that.is.not.empty;
        // detailsobjectives.forEach((value) => {
        //     expect(value).to.be.a("number");

        // });
      });
    });
  });
});
