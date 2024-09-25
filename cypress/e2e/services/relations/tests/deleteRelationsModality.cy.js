import { postRelationsModality } from "../requests/postRelationsModality.request";
import { deleteRelationsModality } from "../requests/deleteRelationsModality.request";

describe("DELETE /relations/modality/", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("should create and then delete a modality", function () {
    const payloadPath =
      "cypress/e2e/services/relations/payloads/add-relations-modality.json";
    cy.readFile(payloadPath).then((newRelationsModality) => {
      cy.get("@id").then((id) => {
        postRelationsModality(id, newRelationsModality).then((postResponse) => {
          expect(postResponse.status).to.eq(201);
          const modalityId = postResponse.body.identifiers[0].id;
          cy.log(modalityId);

          deleteRelationsModality(id, modalityId).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(200);
            expect(deleteResponse.body)
              .to.have.property("raw")
              .that.is.an("array");
            expect(deleteResponse.body).to.have.property("affected").to.eq(1);
          });
        });
      });
    });
  });
});
