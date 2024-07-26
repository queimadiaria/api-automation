import { getTargetId } from "../requests/getTargetId.request";

describe('GET /target/find-one/{id}', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });

    it('should get target by ID', function () {
        const targetId = 1;

        getTargetId(this.id, targetId).then((response) => {
          expect(response.status).to.eq(200);

          const target = response.body;
          expect(target).to.have.property('id', targetId);
          expect(target).to.have.property('type', 'tone_up');
          expect(target).to.have.property('translateBr', 'tonificar');
          expect(target).to.have.property('translateLatam', 'tonificar');
          expect(target).to.have.property('updatedAt').and.to.be.a('string');
          expect(target).to.have.property('createdAt').and.to.be.a('string');
        });
      });
    });