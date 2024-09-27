import { getDetails } from "../requests/getDetails.request";

describe("GET /integration/search/programs", () => {
  let authId;
  before(() => {
    cy.getAuthToken().then((id) => {
      authId = id;
    });
  });
  it("Should get details programs", function () {
    getDetails(authId).then((response) => {
      expect(response.status).to.eq(200);

      const details = response.body;
      details.forEach((detailsPrograms) => {
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
          isQuizRecommended: "boolean",
        };
        for (const [key, expectedType] of Object.entries(expectedProperties)) {
          const actualValue = detailsPrograms[key];
          expect(actualValue).to.be.a(expectedType);
        }
      });
    });
  });
  it("Should filter programs recommended in quizzes", function () {
    getDetails(authId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.below(1000);
      const quizRecommendedPrograms = response.body.filter(
        (program) => program.isQuizRecommended
      );
      quizRecommendedPrograms.forEach((program) => {
        expect(program.isQuizRecommended).to.be.true;
        expect(program.numberOfClasses).to.be.greaterThan(0);
      });
    });
  });
});
