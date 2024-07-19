// cypress/e2e/services/modality/tests/POSTModalityCreate.spec.js
import { postModality } from '../requests/postModality.request';

describe('POST /modality/create', () => {
  before(() => {
    cy.getAuthToken().as('id');
  });

  it('should create a new modality', function () {
    const payloadPath = 'cypress/e2e/services/modality/payloads/add-modality.json';
    cy.readFile(payloadPath).then((newModality) => {
      postModality(this.id, newModality).then((response) => {
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
      });
    });
  });
});
