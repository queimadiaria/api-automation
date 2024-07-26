import { getTargets } from "../requests/getTargets.request";

describe('GET /Tags/list', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });




    it('Should return targets', function () {
        getTargets(this.id).then((response) => {
            cy.log(this.id, response);
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

            response.body.forEach((target) => {
                expect(target).to.have.property('id');
                expect(target).to.have.property('type');
                expect(target).to.have.property('translateBr');
                expect(target).to.have.property('translateLatam');
                expect(target).to.have.property('updatedAt');
                expect(target).to.have.property('createdAt');

                expect(target.id).to.be.a('number');
                expect(target.type).to.be.a('string');
                expect(target.translateBr).to.be.a('string');
                expect(target.translateLatam).to.be.a('string');
                expect(target.updatedAt).to.be.a('string');
                expect(target.createdAt).to.be.a('string');
            })
        })
    });
});