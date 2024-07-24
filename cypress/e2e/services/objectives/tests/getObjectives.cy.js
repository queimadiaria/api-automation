import { getObjectivesPrograms } from '../requests/getObjectives.request';

describe('GET /objectives/programs', () => {
  it('should return a list of objectives and programs', () => {
    getObjectivesPrograms().then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.be.an('array');

      const firstItem = response.body[0];
      expect(firstItem).to.have.property('id');
      expect(firstItem).to.have.property('name');
      expect(firstItem).to.have.property('description');
      expect(firstItem).to.have.property('expressionId');
      expect(firstItem).to.have.property('programs');

      expect(firstItem.programs).to.be.an('array');

      const firstProgram = firstItem.programs[0];
      expect(firstProgram).to.have.property('id');
      expect(firstProgram).to.have.property('description');
      expect(firstProgram).to.have.property('name');
      expect(firstProgram).to.have.property('imageVertical');
      expect(firstProgram).to.have.property('imageCard');
      expect(firstProgram).to.have.property('imageBanner');
      expect(firstProgram).to.have.property('imageLogo');
      expect(firstProgram).to.have.property('tag');
      expect(firstProgram).to.have.property('levels');
      expect(firstProgram).to.have.property('description');

      expect(firstProgram.levels).to.be.an('array');

      const firstLevel = firstProgram.levels[0];
      expect(firstLevel).to.have.property('id');
      expect(firstLevel).to.have.property('name');
      expect(firstLevel).to.have.property('expressionId');

      const firstlevels = firstProgram.levels[0];
      expect(firstlevels).to.have.property('id');
      expect(firstlevels).to.have.property('name');
      expect(firstlevels).to.have.property('expressionId');
    });
  });
});
