import { getObjectivesPrograms } from '../requests/getObjectives.request';

describe('GET /objectives/programs', () => {
  it('should return a list of objectives and programs', () => {
    getObjectivesPrograms().then((response) => {
      // Valide o status da resposta
      expect(response.status).to.eq(200);

      // Valide que a resposta é um array
      expect(response.body).to.be.an('array');

      // Valide que o primeiro item tem as propriedades esperadas
      const firstItem = response.body[0];
      expect(firstItem).to.have.property('id');
      expect(firstItem).to.have.property('name');
      expect(firstItem).to.have.property('description');
      expect(firstItem).to.have.property('expressionId');
      expect(firstItem).to.have.property('programs');

      // Validar que 'programs' é um array
      expect(firstItem.programs).to.be.an('array');

      // Validar que o primeiro programa tem as propriedades esperadas
      const firstProgram = firstItem.programs[0];
      expect(firstProgram).to.have.property('id');
      expect(firstProgram).to.have.property('description');
      expect(firstProgram).to.have.property('name');
      expect(firstProgram).to.have.property('imageVertical');
      expect(firstProgram).to.have.property('imageCard');
      expect(firstProgram).to.have.property('imageCardWeb');
      expect(firstProgram).to.have.property('imageBanner');
      expect(firstProgram).to.have.property('imageLogo');
      expect(firstProgram).to.have.property('tag');
      expect(firstProgram).to.have.property('levels');
      expect(firstProgram).to.have.property('objectives');
      expect(firstProgram).to.have.property('instructors');

      // Valide que 'levels', 'objectives', e 'instructors' são arrays
      expect(firstProgram.levels).to.be.an('array');
      expect(firstProgram.objectives).to.be.an('array');
      expect(firstProgram.instructors).to.be.an('array');

      // Validar que o primeiro nível, objetivo e instrutor têm as propriedades esperadas
      const firstLevel = firstProgram.levels[0];
      expect(firstLevel).to.have.property('id');
      expect(firstLevel).to.have.property('name');
      expect(firstLevel).to.have.property('expressionId');

      const firstObjective = firstProgram.objectives[0];
      expect(firstObjective).to.have.property('id');
      expect(firstObjective).to.have.property('name');
      expect(firstObjective).to.have.property('expressionId');

      const firstInstructor = firstProgram.instructors[0];
      expect(firstInstructor).to.have.property('id');
      expect(firstInstructor).to.have.property('name');
    });
  });
});
