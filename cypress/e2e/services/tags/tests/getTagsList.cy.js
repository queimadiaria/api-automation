import { getTagsList } from "../requests/getTagsList.request";

describe('GET /Tags/list', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });

    it('Should return modality', function (){
        getTagsList(this.id).then((response) => {
            cy.log(this.id, response);
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

            response.body.forEach((tagsList) => {
                expect(tagsList).to.have.property('id');
                expect(tagsList).to.have.property('value');
                expect(tagsList).to.have.property('updatedAt');
                expect(tagsList).to.have.property('createdAt');

                expect(tagsList.id).to.be.a('number');
                expect(tagsList.value).to.be.a('string');
                expect(tagsList.updatedAt).to.be.a('string');
                expect(tagsList.createdAt).to.be.a('string');
            })
        })
    });
});