// cypress/e2e/services/modality/tests/DELETEModality.spec.js
import { postModality } from '../requests/PostModality.request';
import { deleteModality } from '../requests/deleteModality.request';

describe('DELETE /modality/:id', () => {
  before(() => {
    cy.getAuthToken().as('token');
  });

  it('should create and then delete a modality', function () {
    const payloadPath = 'cypress/e2e/services/modality/payloads/add-modality.json';

    cy.readFile(payloadPath).then((newModality) => {
      postModality(this.token, newModality).then((postResponse) => {
        expect(postResponse.status).to.eq(201);
        const modalityId = postResponse.body.identifiers[0].id;
        cy.log(modalityId)

        deleteModality(this.token, modalityId).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          expect(deleteResponse.body.raw).to.be.an('array').that.is.empty;
          expect(deleteResponse.body.affected).to.eq(1);
        });
      });
    });
  });
});
