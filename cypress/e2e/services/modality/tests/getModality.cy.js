import { getModality } from "../requests/getModality.request";


describe('GET /modality', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });

    it('Should return modality', function () {
            getModality(this.id).then((response) => {
                cy.log(this.id, response)
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');


                response.body.forEach((modality) => {
                    expect(modality).to.have.property('id');
                    expect(modality).to.have.property('value');
                    expect(modality).to.have.property('translatePtBr');
                    expect(modality).to.have.property('translateLatam');
                    expect(modality).to.have.property('updatedAt');
                    expect(modality).to.have.property('createdAt');

                    expect(modality.id).to.be.a('number');
                    expect(modality.value).to.be.a('string');
                    expect(modality.translatePtBr).to.be.a('string');
                    expect(modality.translateLatam).to.be.a('string');
                    expect(modality.updatedAt).to.be.a('string');
                    expect(modality.createdAt).to.be.a('string');
                });
            })
    });
});