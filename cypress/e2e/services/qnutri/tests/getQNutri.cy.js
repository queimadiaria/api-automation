import { getQnutri } from '../requests/getQNutri.request';

const validateQnutriPrograms = (locale) => {
  getQnutri(locale).then((response) => {
    expect(response.status).to.eq(200);
    const qnutriPrograms = response.body;
    expect(qnutriPrograms).to.be.an('array').that.is.not.empty;

    qnutriPrograms.forEach(program => {
      const expectedProperties = {
        programId: 'number',
        programName: 'string',
        programDescription: 'string',
        objectives: 'string',
        levels: 'string',
        instructors: 'string',
        tags: 'string',
        tag: 'array',
        imageVertical: 'string',
        imageBanner: 'string',
        imageLogo: 'string',
        imageCard: 'string',
        imageCardWeb: 'string',
      };

      for (const [key, value] of Object.entries(expectedProperties)) {
        if (typeof value === "string") {
          expect(program).to.have.property(key).and.to.be.a(value);
        } else {
          expect(program).to.have.property(key, value);
        }
      }
    });
  });
};

describe('GET /qnutri with locale', () => {
  it('should return a list of Qnutri programs in pt-br', function() {
    validateQnutriPrograms('pt-br');
  });

  it('should return a list of Qnutri programs in es-mx', function() {
    validateQnutriPrograms('es-mx');
  });
});
