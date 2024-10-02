import { postRelationsTargets} from "../requests/postRelationsTargets.request";
import { deleteRelationsTargets } from "../requests/deleteRelationsTargets.request";

describe("DELETE /relations/targets/", () => {
  before(() => {
    cy.getAuthToken().as("id");
  });

  it("should create and then delete a target", function () {
    const payloadPath =
      "cypress/e2e/services/relations/payloads/add-relations-targets.json";
    cy.readFile(payloadPath).then((newRelationsTargets) => {
      cy.get("@id").then((id) => {
        postRelationsTargets(id, newRelationsTargets).then((postResponse) => {
          expect(postResponse.status).to.eq(201);
          const targetsId = postResponse.body.identifiers[0].id;
          cy.log(targetsId);

          deleteRelationsTargets(id, targetsId).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(200);
            expect(deleteResponse.body)
              .to.have.property("raw")
              .that.is.an("array");
            expect(deleteResponse.body).to.have.property("affected")
          });
        });
      });
    });
  });
});
