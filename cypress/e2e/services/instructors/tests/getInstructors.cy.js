import { getInstructorsPrograms } from '../requests/getInstructors.request';

describe('GET /instructors/programs with locale', () => {
  const locales = ['pt-br', 'es-mx'];

  locales.forEach((locale) => {
    it(`should return a list of instructor programs in ${locale}`, () => {
      cy.getAuthToken().then((id) => {
        getInstructorsPrograms(id, locale).then((response) => {

            cy.log(id, response)
          expect(response.status).to.eq(200);

          expect(response.body).to.be.an('array');

          response.body.forEach((item) => {
            expect(item).to.have.property('id');
            expect(item).to.have.property('name');
            expect(item).to.have.property('linkImage');
            expect(item).to.have.property('programs');

            expect(item.programs).to.be.an('array');

            item.programs.forEach((program) => {
              expect(program).to.have.property('tag');
              expect(program).to.have.property('name');
              expect(program).to.have.property('levels');
              expect(program).to.have.property('imageCard');
              expect(program).to.have.property('imageLogo');
              expect(program).to.have.property('details_id');
              expect(program).to.have.property('objectives');
              expect(program).to.have.property('program_id');
              expect(program).to.have.property('description');
              expect(program).to.have.property('imageBanner');
              expect(program).to.have.property('imageCardWeb');
              expect(program).to.have.property('imageVertical');

              program.levels.forEach((level) => {
                expect(level).to.have.property('id');
                expect(level).to.have.property('name');
                expect(level).to.have.property('expressionId');

                expect(level.id).to.be.a('number');
                expect(level.name).to.be.a('string');
                expect(level.expressionId).to.be.a('number');
              });

              program.objectives.forEach((objective) => {
                expect(objective).to.have.property('id');
                expect(objective).to.have.property('name');

                expect(objective.id).to.be.a('number');
                expect(objective.name).to.be.a('string');
              });
            });

            if (locale === 'pt-br') {
            } else if (locale === 'es-mx') {
            }
          });
        });
      });
    });
  });
});
