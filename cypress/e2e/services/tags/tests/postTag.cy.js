import { postTag } from '../requests/postTag.request';

describe('POST /tags/create', () => {
  before(() => {
    cy.getAuthToken().as('id');
  });

  it('should create a new tag', function () {
    const payloadPath = 'cypress/e2e/services/tags/payloads/add-tags.json';
    cy.readFile(payloadPath).then((newTag) => {
      postTag(this.id, newTag).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.body).to.have.property('identifiers');
        expect(response.body.identifiers).to.be.an('array');
        expect(response.body.identifiers[0]).to.have.property('id');

        expect(response.body).to.have.property('generatedMaps');
        expect(response.body.generatedMaps).to.be.an('array');
        expect(response.body.generatedMaps[0]).to.have.property('id');

        expect(response.body).to.have.property('raw');
        expect(response.body.raw).to.be.an('array');
        expect(response.body.raw[0]).to.have.property('id');

        const createdId = response.body.identifiers[0].id;
        expect(createdId).to.be.a('number');
        cy.log(createdId)
      });
    });
  });
});
