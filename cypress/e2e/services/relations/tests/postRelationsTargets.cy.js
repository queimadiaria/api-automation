import { postRelationsTargets } from "../requests/postRelationsTargets.request";

describe("/relations/targets", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("should create a new relation targets", () => {
    const payloadPath =
      "cypress/e2e/services/relations/payloads/add-relations-targets.json";
    cy.readFile(payloadPath).then((newRelationsTargets) => {
      cy.get("@id").then((id) => {
        postRelationsTargets(id, newRelationsTargets).then((response) => {
          expect(response.status).to.eq(201);

          const verifyIdProperty = (obj) => {
            expect(obj).to.have.property("id").that.is.a("number");
          };

          ["identifiers", "generatedMaps", "raw"].forEach((prop) => {
            expect(response.body).to.have.property(prop);
            verifyIdProperty(response.body[prop][0]);
          });
        });
      });
    });
  });
});
