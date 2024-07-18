import { getQnutri } from '../requests/getQNutri.request';

const validateQnutriItem = (item) => {
  expect(item).to.have.property('programId');
  expect(item).to.have.property('programName');
  expect(item).to.have.property('programDescription');
  expect(item).to.have.property('objectives');
  expect(item).to.have.property('levels');
  expect(item).to.have.property('instructors');
  expect(item).to.have.property('tags');
  expect(item).to.have.property('tag');
  expect(item).to.have.property('imageVertical');
  expect(item).to.have.property('imageBanner');
  expect(item).to.have.property('imageLogo');
  expect(item).to.have.property('imageCard');
  expect(item).to.have.property('imageCardWeb');

  // Validar os tipos dos valores das propriedades
  expect(item.programId).to.be.a('number');
  expect(item.programName).to.be.a('string');
  expect(item.programDescription).to.be.a('string');
  expect(item.objectives).to.be.a('string');
  expect(item.levels).to.be.a('string');
  expect(item.instructors).to.be.a('string');
  expect(item.tags).to.be.a('string');
  expect(item.tag).to.be.an('array');
  expect(item.imageVertical).to.be.a('string');
  expect(item.imageBanner).to.be.a('string');
  expect(item.imageLogo).to.be.a('string');
  expect(item.imageCard).to.be.a('string');
  expect(item.imageCardWeb).to.be.a('string');
};

describe('GET /qnutri with locale', () => {
  it('should return a list of Qnutri programs in pt-br', () => {
    getQnutri('pt-br').then((response) => {
      expect(response.status).to.eq(200);

      // Validar que a resposta é um array
      expect(response.body).to.be.an('array');

      // Validar todos os itens do array
      response.body.forEach(validateQnutriItem);
    });
  });

  it('should return a list of Qnutri programs in es-mx', () => {
    getQnutri('es-mx').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      response.body.forEach(validateQnutriItem);
    });
  });
});
