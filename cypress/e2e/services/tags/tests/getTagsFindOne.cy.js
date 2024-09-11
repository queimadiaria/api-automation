import { getTagsFindOne } from "../requests/getTagsFindOne.request";

describe('GET /Tags/FindOne', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });

    it("Should get tag details by ID", function () {
      const tagId = 1004;

      getTagsFindOne(this.id, tagId).then((response) => {
        expect(response.status).to.eq(200);

        const tag = response.body;
        const expectedProperties = {
          id: "number",
          value: "string",
          updatedAt: "string",
          createdAt: "string",
          detailsProgramsId: "object"
        }
        for (const [key, expectedType] of Object.entries(expectedProperties)) {
          const actualValue = tag[key];
          if (actualValue !== null) {
            const actualType = typeof actualValue;
            expect(actualType).to.equal(expectedType);
          }
        }

        const detailsPrograms = tag.detailsProgramsId;
        const expectedDetailsProgramsId = {
          id: "number",
          programId: "number",
          numberOfClasses: "number",
          durationTime: "number",
          durationValue: "string",
          intensity: "string",
          frequency: "number",
          gender: "string",
          recommendationPriority: "number",
          updatedAt: "string",
          createdAt: "string",
          isQuizRecommended: "boolean",
        }
        for (const [key, expectedType] of Object.entries(expectedDetailsProgramsId)) {
          const actualValue = detailsPrograms[key];
          if (actualValue !== null) {
            const actualType = typeof actualValue;
            expect(actualType).to.equal(expectedType);
          }
        }
      });
    });
});
