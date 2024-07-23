import { postTag } from '../requests/postTag.request';
import { deleteTag } from '../requests/deleteTag.request';

describe('DELETE /tag/:id', () => {
  before(() => {
    cy.getAuthToken().as('id');
  });

  it('should create and then delete a modality', function () {
    const payloadPath = 'cypress/e2e/services/tags/payloads/add-tags.json';

    cy.readFile(payloadPath).then((newTag) => {
      postTag(this.id, newTag).then((postResponse) => {
        expect(postResponse.status).to.eq(201);
        const tagId = postResponse.body.identifiers[0].id;
        cy.log(tagId)

        deleteTag(this.id, tagId).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          expect(deleteResponse.body.raw).to.be.an('array').that.is.empty;
          expect(deleteResponse.body.affected).to.eq(1);
        });
      });
    });
  });
});
