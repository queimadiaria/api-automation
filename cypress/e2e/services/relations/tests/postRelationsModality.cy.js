import { postRelationsModality } from "../requests/postRelationsModality.request";

describe("/relations/modality", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("should create a new relation modality", () => {
    const payloadPath =
      "cypress/e2e/services/relations/payloads/add-relations-modality.json";
    cy.readFile(payloadPath).then((newRelationsModality) => {
      cy.get("@id").then((id) => {
        postRelationsModality(id, newRelationsModality).then((response) => {
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
