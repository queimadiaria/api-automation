import { getTagsFindOne } from "../requests/getTagsFindOne.request";

describe('GET /Tags/list', () => {
    before(() => {
        cy.getAuthToken().as('id');
    });

    it('should get tag details by ID', function () {
        const tagId = 1660;

        getTagsFindOne(this.id, tagId).then((response) => {
          expect(response.status).to.eq(200);

          const tag = response.body;
          expect(tag).to.have.property('id', tagId);
          expect(tag).to.have.property('value', 'fortalecimento');
          expect(tag).to.have.property('updatedAt').and.to.be.a('string');
          expect(tag).to.have.property('createdAt').and.to.be.a('string');
          expect(tag).to.have.property('detailsProgramsId').and.to.be.an('object');

          const details = tag.detailsProgramsId;
          expect(details).to.have.property('id', 220);
          expect(details).to.have.property('programId', 263);
          expect(details).to.have.property('numberOfClasses', 21);
          expect(details).to.have.property('durationTime', 21);
          expect(details).to.have.property('durationValue', '16-25 min');
          expect(details).to.have.property('recommendedAge', null);
          expect(details).to.have.property('intensity', 'moderado');
          expect(details).to.have.property('frequency', 3);
          expect(details).to.have.property('gender', 'F');
          expect(details).to.have.property('recommendationPriority', 18);
          expect(details).to.have.property('updatedAt').and.to.be.a('string');
          expect(details).to.have.property('createdAt').and.to.be.a('string');
        });
      });
    });