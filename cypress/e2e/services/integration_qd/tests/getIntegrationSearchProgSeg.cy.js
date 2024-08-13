import { getIntegrationSearchProgramsSegmented } from "../requests/getIntegrationSearchProgSeg.request";

describe("GET /integration/search-programs", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get integration search programs", function () {
    cy.get("@id").then((id) => {
      getIntegrationSearchProgramsSegmented(id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");

        const searchPrograms = response.body;
        searchPrograms.forEach((program) => {
          const expectedProgramProperties = [
            "id",
            "name",
            "description",
            "publicated",
            "legacyId",
            "createdAt",
            "updatedAt",
            "typeProgramId",
            "alias",
            "releaseDate",
            "metadata",
            "imageVertical",
            "imageBanner",
            "imageCard",
            "imageCardWeb",
            "imageLoop",
            "genderTag",
            "childrenTag",
            "levelTag",
            "objectiveTag",
            "planId",
            "complete",
            "vimeoTeaserId",
            "thumbPdf",
            "singularMetadata",
            "tag",
            "dynamicBanner",
            "hasPlaylist",
            "details",
          ];
          expectedProgramProperties.forEach((prop) => {
            expect(program).to.have.property(prop);
          });

          const detailsMetaData = program.metadata;
          const expectedMetaDataProperties = {
            colors: "object",
            primaryColor: "string",
            generalVision: "array",
            durationMeasure: "string",
            quantityDuration: "string",
            quantityMeanDuration: "string",
          };
          Object.entries(expectedMetaDataProperties).forEach(([key, type]) => {
            expect(detailsMetaData).to.have.property(key).and.to.be.a(type);
          });

          const detailsColors = program.metadata.colors;
          const expectedColorsProperties = {
            primary: "string",
            secondary: "string",
          };
          Object.entries(expectedColorsProperties).forEach(([key, type]) => {
            expect(detailsColors).to.have.property(key).and.to.be.a(type);
          });

          const detailsGeneralVision = program.metadata.generalVision;
          detailsGeneralVision.forEach((generalVision) => {
            const expectedGeneralVisionProperties = {
              title: "string",
              description: "string",
            };
            Object.entries(expectedGeneralVisionProperties).forEach(
              ([key, type]) => {
                expect(generalVision).to.have.property(key).and.to.be.a(type);
              }
            );
            if (generalVision.hasOwnProperty("topics")) {
              expect(generalVision.topics).to.be.an("array");
            }
          });

          const detailsDynamicBanner = program.dynamicBanner;
          const expectedDynamicBannerProperties = {
            tv: "object",
            mobile: "object",
            tablet: "object",
          };
          Object.entries(expectedDynamicBannerProperties).forEach(
            ([key, type]) => {
              expect(detailsDynamicBanner)
                .to.have.property(key)
                .and.to.be.a(type);
            }
          );

          const detailsTv = program.dynamicBanner.tv;
          const expectedTvProperties = {
            super: "string",
          };
          Object.entries(expectedTvProperties).forEach(([key, type]) => {
            expect(detailsTv).to.have.property(key).and.to.be.a(type);
          });
          if (detailsTv.hasOwnProperty("onboarding")) {
            expect(detailsTv.onboarding).to.be.a("string");
          }
          const detailsMobile = program.dynamicBanner.mobile;
          const expectedMobileProperties = {
            super: "string",
          };
          Object.entries(expectedMobileProperties).forEach(([key, type]) => {
            expect(detailsMobile).to.have.property(key).and.to.be.a(type);
          });
          if (detailsMobile.hasOwnProperty("highlight")) {
            expect(detailsMobile.highlight).to.be.a("string");
          }

          if (detailsMobile.hasOwnProperty("onboarding")) {
            expect(detailsMobile.onboarding).to.be.a("string");
          }

          const detailsTablet = program.dynamicBanner.tablet;
          const expectedTabletProperties = {
            super: "string",
          };
          Object.entries(expectedTabletProperties).forEach(([key, type]) => {
            expect(detailsTablet).to.have.property(key).and.to.be.a(type);
          });
          if (detailsTablet.hasOwnProperty("highlight")) {
            expect(detailsTablet.highlight).to.be.a("string");
          }
          if (detailsTablet.hasOwnProperty("onboarding")) {
            expect(detailsTablet.onboarding).to.be.a("string");
          }

          const details = program.details;
          const expectedDetailsProperties = {
            id: "number",
            programId: "number",
            numberOfClasses: "number",
            durationTime: "number",
            durationValue: "string",
            recommendedAge: [null, "number"],
            intensity: "string",
            frequency: "number",
            gender: [null, "string"],
            recommendationPriority: [null, "number"],
            updatedAt: "string",
            createdAt: "string",
            instructors: "array",
            levels: "array",
            objectives: "array",
          };
          //Tratamento do erro: type.toLowerCase is not a function
          Object.entries(expectedDetailsProperties).forEach(([key, type]) => {
            const property = details[key];
            if (Array.isArray(type)) {
              if (type.includes(null) && property === null) {
                return;
              }
              const nonNullTypes = type.filter((t) => t !== null);
              const isValidType = nonNullTypes.some(
                (t) => typeof property === t
              );
              expect(isValidType).to.be.true;
            } else {
              expect(property).to.be.a(type);
            }
          });

          const detailsInstructors = program.details.instructors;
          detailsInstructors.forEach((instructors) => {
            const expectedInstructorsProperties = {
              id: "number",
              name: "string",
              backgroudImage: ["string", null],
              backgroudImageMobile: [null, "string"],
              layout: [null, "string"],
              description: [null, "string"],
              linkImage: [null, "string"],
              updatedAt: "string",
              createdAt: "string",
            };
            Object.entries(expectedInstructorsProperties).forEach(
              ([key, type]) => {
                const property = instructors[key];
                if (Array.isArray(type)) {
                  if (type.includes(null) && property === null) {
                    return;
                  }
                  const nonNullTypes = type.filter((t) => t !== null);
                  const isValidType = nonNullTypes.some(
                    (t) => typeof property === t
                  );
                  expect(isValidType).to.be.true;
                } else {
                  expect(property).to.be.a(type);
                }
              }
            );

            const detailsLevels = program.details.levels;
            detailsLevels.forEach((levels) => {
              const expectedLevelsProperties = {
                id: "number",
                name: [null, "string"],
                expressionId: [null, "number"],
              };
              Object.entries(expectedLevelsProperties).forEach(
                ([key, type]) => {
                  const property = levels[key];
                  if (Array.isArray(type)) {
                    if (type.includes(null) && property === null) {
                      return;
                    }
                    const nonNullTypes = type.filter((t) => t !== null);
                    const isValidType = nonNullTypes.some(
                      (t) => typeof property === t
                    );
                    expect(isValidType).to.be.true;
                  } else {
                    expect(property).to.be.a(type);
                  }
                }
              );
            });
            const detailsObjectives = program.details.objectives;
            detailsObjectives.forEach((objectives) => {
              const expectedObjectivesProperties = {
                id: "number",
                name: [null, "string"],
                expressionId: [null, "number"],
                backgroudImage: [null, "string"],
                backgroudImageMobile: [null, "string"],
                avatar: [null, "string"],
                linkImage: [null, "string"],
                description: [null, "string"],
                myProfileAvatar: [null, "string"],
                updatedAt: "string",
                createdAt: "string",
              };
              Object.entries(expectedObjectivesProperties).forEach(
                ([key, type]) => {
                  const property = objectives[key];
                  if (Array.isArray(type)) {
                    if (type.includes(null) && property === null) {
                      return;
                    }
                    const nonNullTypes = type.filter((t) => t !== null);
                    const isValidType = nonNullTypes.some(
                      (t) => typeof property === t
                    );
                    expect(isValidType).to.be.true;
                  } else {
                    expect(property).to.be.a(type);
                  }
                }
              );
              const detailsTag = program.tag;
              expect(detailsTag).to.be.an("array");
              detailsTag.forEach((tag) => {
                expect(tag).to.be.a("string");
              });
            });
          });
        });
      });
    });
  });
});
