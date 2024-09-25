import { getIntegrationSegmentedId } from "../requests/getIntegrationSegmentedId.request";

describe(`GET /integration/search/programs/segmented/detail/{id}`, () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("Should get integration details by ID", function () {
    const programID = 1;

    getIntegrationSegmentedId(this.id, programID).then((response) => {
      expect(response.status).to.eq(200);

      const integration = response.body;
      const expectedProperties = {
        id: "number",
        programId: "number",
        numberOfClasses: "number",
        durationTime: "number",
        durationValue: "string",
        intensity: "string",
        frequency: "number",
        updatedAt: "string",
        createdAt: "string",
        programs: "object",
        levels: "array",
        objectives: "array",
        modalitys: "array",
        instructors: "array",
        targetss: "array",
        tagss: "array",
      };

      for (const [key, expectedType] of Object.entries(expectedProperties)) {
        const actualValue = integration[key];

        if (actualValue !== null) {
          const actualType = Array.isArray(actualValue)
            ? "array"
            : typeof actualValue;

          expect(actualType).to.equal(expectedType);
        }
      }

      const details = integration.programs;
      const expectedDetailsProgramsProperties = {
        id: programID,
        name: "Missão Fitness",
        description: "string",
        publicated: true,
        legacyId: "string",
        createdAt: "string",
        updatedAt: "string",
        typeProgramId: 1,
        alias: "MF",
        metadata: "object",
        imageVertical: "string",
        imageBanner: "string",
        imageCard: "string",
        imageCardWeb: "string",
        imageLoop: "string",
        genderTag: "array",
        childrenTag: "array",
        levelTag: "array",
        objectiveTag: 1,
        planId: 110,
        complete: true,
        vimeoTeaserId: null,
        singularMetadata: "object",
        dynamicBanner: "object",
      };

      for (const [key, value] of Object.entries(
        expectedDetailsProgramsProperties
      )) {
        if (typeof value === "string" && key !== "name" && key !== "alias") {
          expect(details).to.have.property(key).and.to.be.a(value);
        } else {
          expect(details).to.have.property(key, value);
        }
      }

      const detailsMetaData = integration.programs.metadata;
      const expectedDetailsMetaDataProperties = {
        colors: "object",
        teaser: "string",
        userScore: "number",
        primaryColor: "string",
        generalVision: "array",
        teaserFallback: "string",
        durationMeasure: "string",
        quantityDuration: "string",
        quantityMeanDuration: "string",
      };

      expect(detailsMetaData).to.not.be.null;
      expect(detailsMetaData).to.not.be.undefined;

      for (const [key, value] of Object.entries(
        expectedDetailsMetaDataProperties
      )) {
        if (
          typeof value === "string" &&
          key !== "quantityDuration" &&
          key !== "quantityMeanDuration"
        ) {
          expect(detailsMetaData).to.have.property(key).and.to.be.a(value);
        } else {
          expect(detailsMetaData).to.have.property(key);
        }
      }

      const expectedColors = {
        primary: "string",
        secondary: "string",
      };

      for (const [key, value] of Object.entries(expectedColors)) {
        expect(detailsMetaData.colors).to.have.property(key).and.to.be.a(value);
      }
      const detailsGeneralVision = detailsMetaData.generalVision;
      expect(detailsGeneralVision).to.be.an("array");

      const expectedGeneralVisionItemProperties = {
        title: "string",
        description: "string",
        topics: "array",
      };

      detailsGeneralVision.forEach((item) => {
        for (const [key, value] of Object.entries(
          expectedGeneralVisionItemProperties
        )) {
          if (value === "array") {
            if (item.hasOwnProperty(key)) {
              expect(item).to.have.property(key).and.to.be.an("array");
            }
          } else {
            expect(item).to.have.property(key).and.to.be.a(value);
          }
        }
      });
      const detailsSingularMetaData = details.singularMetadata;
      expect(detailsSingularMetaData).to.not.be.null;
      expect(detailsSingularMetaData).to.not.be.undefined;
      expect(detailsSingularMetaData).to.be.an("object");

      const expectedSingularMetadataProperties = {
        hd: "string",
        sd: "string",
        hls: "string",
      };
      for (const [key, value] of Object.entries(
        expectedSingularMetadataProperties
      )) {
        expect(detailsSingularMetaData)
          .to.have.property(key)
          .and.to.be.a(value);
      }
      const dynamicBanner = details.dynamicBanner;
      expect(dynamicBanner).to.not.be.null;
      expect(dynamicBanner).to.not.be.undefined;
      expect(dynamicBanner).to.be.an("object");

      const expectedDynamicBannerProperties = {
        tv: "object",
        mobile: "object",
        tablet: "object",
      };
      for (const [key, value] of Object.entries(
        expectedDynamicBannerProperties
      )) {
        expect(dynamicBanner).to.have.property(key).and.to.be.an(value);
      }

      const tv = dynamicBanner.tv;
      expect(tv).to.not.be.null;
      expect(tv).to.not.be.undefined;
      expect(tv).to.be.an("object");

      const expectedTvProperties = {
        half: "string",
        super: "string",
      };

      for (const [key, value] of Object.entries(expectedTvProperties)) {
        expect(tv).to.have.property(key).and.to.be.a(value);
      }

      const mobile = dynamicBanner.mobile;
      expect(mobile).to.not.be.null;
      expect(mobile).to.not.be.undefined;
      expect(mobile).to.be.an("object");

      const expectedMobileProperties = {
        half: "string",
        super: "string",
        highlight: "string",
      };

      for (const [key, value] of Object.entries(expectedMobileProperties)) {
        expect(mobile).to.have.property(key).and.to.be.a(value);
      }

      const tablet = dynamicBanner.tablet;
      expect(tablet).to.not.be.null;
      expect(tablet).to.not.be.undefined;
      expect(tablet).to.be.an("object");

      const expectedTabletProperties = {
        half: "string",
        super: "string",
        highlight: "string",
      };

      for (const [key, value] of Object.entries(expectedTabletProperties)) {
        expect(tablet).to.have.property(key).and.to.be.a(value);
      }

      const detailsLevels = integration.levels;
      expect(detailsLevels).to.be.an("array").that.is.not.empty;

      detailsLevels.forEach((level) => {
        const expectedLevelsProperties = {
          id: 3,
          name: "Avançado",
          expressionId: 18,
          intensity: null,
          linkImage: "string",
          description: "string",
          updatedAt: "string",
          createdAt: "string",
        };
        for (const [key, value] of Object.entries(expectedLevelsProperties)) {
          if (value === null) {
            expect(level).to.have.property(key).and.to.be.null;
          } else if (typeof value === "string") {
            expect(level).to.have.property(key).and.to.be.a("string");
          }
        }
      });

      const detailsObjectives = integration.objectives;
      expect(detailsObjectives).to.be.an("array").that.is.not.empty;

      detailsObjectives.forEach((objectives) => {
        const expectedObjectivesProperties = {
          id: 3,
          name: "Perder Gordura Localizada",
          expressionId: 12,
          backgroudImage: "string",
          backgroudImageMobile: "string",
          avatar: "string",
          linkImage: "string",
          description: "string",
          myProfileAvatar: "string",
          updatedAt: "string",
          createdAt: "string",
        };
        for (const [key, value] of Object.entries(
          expectedObjectivesProperties
        )) {
          if (value === null) {
            expect(level).to.have.property(key).and.to.be.null;
          } else if (typeof value === "string") {
            expect(objectives).to.have.property(key).and.to.be.a("string");
          }
        }
      });

      const detailsModalitys = integration.modalitys;
      detailsModalitys.forEach((modalitys) => {
        const expectedModalitysProperties = {
          id: 15,
          value: "cardio",
          translatePtBr: "Cardio",
          translateLatam: "Cardio",
          updatedAt: "string",
          createdAt: "string",
        };
        for (const [key, value] of Object.entries(
          expectedModalitysProperties
        )) {
          if (modalitys.hasOwnProperty(key)) {
            if (value === null) {
              expect(modalitys).to.have.property(key).and.to.be.null;
            } else if (typeof value === "string") {
              expect(modalitys).to.have.property(key).and.to.be.a("string");
            }
          } else {
            throw new Error(
              `A propriedade '${key}' não existe no objeto 'modalitys'`
            );
          }
        }
      });
      const detailsInstructors = integration.instructors;
      expect(detailsInstructors).to.be.an("array").that.is.not.empty;

      detailsInstructors.forEach((instructors) => {
        const expectedInstructorsProperties = {
          id: 1,
          name: "Lana Pessoa",
          backgroudImage: "string",
          backgroudImageMobile: "string",
          layout: "string",
          description: "string",
          linkImage: "string",
          updatedAt: "string",
          createdAt: "string",
        };
        for (const [key, value] of Object.entries(
          expectedInstructorsProperties
        )) {
          if (value === null) {
            expect(level).to.have.property(key).and.to.be.null;
          } else if (typeof value === "string") {
            expect(instructors).to.have.property(key).and.to.be.a("string");
          }
        }
      });

      const detailsTargetss = integration.targetss;
      expect(detailsTargetss).to.be.an("array").that.is.not.empty;

      detailsTargetss.forEach((targetss) => {
        const expectedTargetssProperties = {
          id: 1,
          type: "string",
          translateBr: "string",
          translateLatam: "string",
          updatedAt: "string",
          createdAt: "string",
        };
        for (const [key, value] of Object.entries(expectedTargetssProperties)) {
          if (value === null) {
            expect(level).to.have.property(key).and.to.be.null;
          } else if (typeof value === "string") {
            expect(targetss).to.have.property(key).and.to.be.a("string");
          }
        }
      });

      const detailsTagss = integration.tagss;
      expect(detailsTagss).to.be.an("array");

      if (detailsTagss.length > 0) {
        detailsTagss.forEach((tagss) => {
          const expectedTagssProperties = {
            id: "number",
            value: "string",
            updatedAt: "string",
            createdAt: "string",
          };

          for (const [key, expectedType] of Object.entries(
            expectedTagssProperties
          )) {
            const actualValue = tagss[key];

            if (actualValue !== null) {
              const actualType = typeof actualValue;
              expect(actualType).to.equal(expectedType);
            }
          }
        });
      } else {
        cy.log("O array 'tagss' está vazio.");
      }
    });
  });
});
