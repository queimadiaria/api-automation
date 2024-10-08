import { getIntegrationSearchPrograms } from "../requests/getIntegrationSearchPrograms.request";

describe("GET /integration/search/programs", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get integration search programs", function () {
    cy.get("@id").then((id) => {
      getIntegrationSearchPrograms(id).then((response) => {
        expect(response.status).to.eq(200);

        const searchPrograms = response.body;
        searchPrograms.forEach((detailsSearchPrograms) => {
          const expectedProperties = {
            id: "number",
            details_programs_id: "number",
            name: "string",
            frequency: "number",
            duration_time: "number",
            gender: ["null", "string"],
            intensity: "string",
            duration_value: "string",
            tags: "array",
            instructors: "array",
            levels: "array",
            modality: "array",
            objectives: "array",
            targets: "array",
          };
          for (const [key, value] of Object.entries(expectedProperties)) {
            const property = detailsSearchPrograms[key];
            if (Array.isArray(value)) {
              expect(property).to.satisfy((val) => {
                return val === null || typeof val === "string";
              });
            } else if (value === "null") {
              expect(property).to.be.null;
            } else if (value === "array") {
              expect(property).to.be.an("array");
            } else {
              expect(property).to.be.a(value);
            }
          }

          const detailsTags = detailsSearchPrograms.tags;
          expect(detailsTags).to.be.an("array");

          detailsTags.forEach((tags) => {
            const expectedTagsProperties = {
              id: ["null", "number"],
              name: ["null", "string"],
            };
            for (const [key, value] of Object.entries(expectedTagsProperties)) {
              if (Array.isArray(value)) {
                expect(value).to.include(
                  typeof tags[key] === "object" && tags[key] === null
                    ? "null"
                    : typeof tags[key]
                );
              } else {
                expect(tags).to.have.property(key).and.to.be.a(value);
              }
            }
          });

          // const detailsInstructors = detailsSearchPrograms.instructors;
          // expect(detailsInstructors).to.be.an("array");

          // detailsInstructors.forEach((instructors) => {
          //   const expectedInstructorsProperties = {
          //     id: ["number", null],
          //     name: ["string", null],
          //   };
          //   for (const [key, value] of Object.entries(
          //     expectedInstructorsProperties
          //   )) {
          //     if (typeof value === "string") {
          //       expect(instructors).to.have.property(key).and.to.be.a(value);
          //     } else {
          //       expect(instructors).to.have.property(key, value);
          //     }
          //   }
          // });

          // const detailsLevels = detailsSearchPrograms.levels;
          // expect(detailsLevels).to.be.an("array");

          // detailsLevels.forEach((levels) => {
          //   const expectedLevelsProperties = {
          //     id: "number",
          //     name: "string",
          //   };
          //   for (const [key, value] of Object.entries(
          //     expectedLevelsProperties
          //   )) {
          //     if (typeof value === "string") {
          //       expect(levels).to.have.property(key).and.to.be.a(value);
          //     } else {
          //       expect(levels).to.have.property(key, value);
          //     }
          //   }
          // });

          // const detailsModality = detailsSearchPrograms.modality;
          // expect(detailsModality).to.be.an("array");

          // detailsModality.forEach((modality) => {
          //   const expectedModalityProperties = {
          //     id: "number",
          //     name: "string",
          //   };
          //   for (const [key, value] of Object.entries(
          //     expectedModalityProperties
          //   )) {
          //     if (typeof value === "string") {
          //       expect(modality).to.have.property(key).and.to.be.a(value);
          //     } else {
          //       expect(modality).to.have.property(key, value);
          //     }
          //   }
          // });

          // const detailsObjectives = detailsSearchPrograms.objectives;
          // expect(detailsObjectives).to.be.an("array");

          // detailsObjectives.forEach((objectives) => {
          //   const expectedObjectivesProperties = {
          //     id: "number",
          //     name: "string",
          //   };
          //   for (const [key, value] of Object.entries(
          //     expectedObjectivesProperties
          //   )) {
          //     if (typeof value === "string") {
          //       expect(objectives).to.have.property(key).and.to.be.a(value);
          //     } else {
          //       expect(objectives).to.have.property(key, value);
          //     }
          //   }
          // });
        });
      });
    });
  });
});
