import { getObjectivesPrograms } from '../requests/getObjectives.request';

const validateProgram = (program) => {
  const expectedProgramProperties = {
    id: 'number',
    description: 'string',
    name: 'string',
    imageVertical: 'string',
    imageCard: 'string',
    imageBanner: 'string',
    imageLogo: 'string',
    tag: 'array',
    levels: 'array',
  };

  for (const [key, value] of Object.entries(expectedProgramProperties)) {
    if (value === 'string' || value === 'number') {
      expect(program).to.have.property(key).and.to.be.a(value);
    } else if (value === 'array') {
      expect(program).to.have.property(key).and.to.be.an(value);
    }
  }

  program.levels.forEach(validateLevel);
};

const validateLevel = (level) => {
  const expectedLevelProperties = {
    id: 'number',
    name: 'string',
    expressionId: 'number',
  };

  for (const [key, value] of Object.entries(expectedLevelProperties)) {
    if (typeof value === 'string') {
      expect(level).to.have.property(key).and.to.be.a(value);
    } else {
      expect(level).to.have.property(key).and.to.be.a(value);
    }
  }
};

const validateObjective = (objective) => {
  const expectedObjectiveProperties = {
    id: 'number',
    name: 'string',
    description: 'string',
    expressionId: 'number',
    programs: 'array',
  };

  for (const [key, value] of Object.entries(expectedObjectiveProperties)) {
    if (value === 'string' || value === 'number') {
      expect(objective).to.have.property(key).and.to.be.a(value);
    } else if (value === 'array') {
      expect(objective).to.have.property(key).and.to.be.an(value);
    }
  }

  objective.programs.forEach(validateProgram);
};

describe('GET /objectives/programs', () => {
  it('should return a list of objectives and programs', () => {
    getObjectivesPrograms().then((response) => {
      expect(response.status).to.eq(200);

      const objectives = response.body;
      expect(objectives).to.be.an('array').that.is.not.empty;

      objectives.forEach(validateObjective);
    });
  });
});
