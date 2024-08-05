import { getIntegrationSearchPrograms } from "../requests/getIntegrationSearchPrograms.request";

describe("GET /integration/last-class", () => {
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
            description: "string",
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
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(expectedTagsProperties)) {
              if (typeof value === "string") {
                expect(tags).to.have.property(key).and.to.be.a(value);
              } else {
                expect(tags).to.have.property(key, value);
              }
            }
          });

          const detailsInstructors = detailsSearchPrograms.instructors;
          expect(detailsInstructors).to.be.an("array");

          detailsInstructors.forEach((instructors) => {
            const expectedInstructorsProperties = {
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(
              expectedInstructorsProperties
            )) {
              if (typeof value === "string") {
                expect(instructors).to.have.property(key).and.to.be.a(value);
              } else {
                expect(instructors).to.have.property(key, value);
              }
            }
          });

          const detailsLevels = detailsSearchPrograms.levels;
          expect(detailsLevels).to.be.an("array");

          detailsLevels.forEach((levels) => {
            const expectedLevelsProperties = {
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(
              expectedLevelsProperties
            )) {
              if (typeof value === "string") {
                expect(levels).to.have.property(key).and.to.be.a(value);
              } else {
                expect(levels).to.have.property(key, value);
              }
            }
          });

          const detailsModality = detailsSearchPrograms.modality;
          expect(detailsModality).to.be.an("array");

          detailsModality.forEach((modality) => {
            const expectedModalityProperties = {
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(
              expectedModalityProperties
            )) {
              if (typeof value === "string") {
                expect(modality).to.have.property(key).and.to.be.a(value);
              } else {
                expect(modality).to.have.property(key, value);
              }
            }
          });

          const detailsObjectives = detailsSearchPrograms.objectives;
          expect(detailsObjectives).to.be.an("array");

          detailsObjectives.forEach((objectives) => {
            const expectedObjectivesProperties = {
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(
              expectedObjectivesProperties
            )) {
              if (typeof value === "string") {
                expect(objectives).to.have.property(key).and.to.be.a(value);
              } else {
                expect(objectives).to.have.property(key, value);
              }
            }
          });

          const detailsTargets = detailsSearchPrograms.targets;
          expect(detailsTargets).to.be.an("array");

          detailsTargets.forEach((targets) => {
            const expectedTargetsProperties = {
              id: "number",
              name: "string",
            };
            for (const [key, value] of Object.entries(
              expectedTargetsProperties
            )) {
              const property = targets[key];
              if (typeof value === "string") {
                expect(property).to.satisfy((val) => {
                  return val === null || typeof val === value;
                });
              } else {
                expect(property).to.satisfy((val) => {
                  return val === null || val === value;
                });
              }
            }
          });
        });
      });
    });
  });
});
