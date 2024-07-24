import { getQnutri } from '../requests/getQNutri.request';

const validateQnutriItem = (item) => {
  expect(item).to.have.property('programid');
  expect(item).to.have.property('programname');
  expect(item).to.have.property('programdescription');
  expect(item).to.have.property('objectives');
  expect(item).to.have.property('levels');
  expect(item).to.have.property('instructors');
  expect(item).to.have.property('tags');
  expect(item).to.have.property('tag');
  expect(item).to.have.property('imagevertical');
  expect(item).to.have.property('imagebanner');
  expect(item).to.have.property('imagelogo');
  expect(item).to.have.property('imagecard');

  expect(item.programid).to.be.a('number');
  expect(item.programname).to.be.a('string');
  expect(item.programdescription).to.be.a('string');
  expect(item.objectives).to.be.a('string');
  expect(item.levels).to.be.a('string');
  expect(item.instructors).to.be.a('string');
  expect(item.tags).to.be.a('string');
  expect(item.tag).to.be.an('array');
  expect(item.imagevertical).to.be.a('string');
  expect(item.imagebanner).to.be.a('string');
  expect(item.imagelogo).to.be.a('string');
  expect(item.imagecard).to.be.a('string');
};

describe('GET /qnutri with locale', () => {
  it('should return a list of Qnutri programs in pt-br', () => {
    getQnutri('pt-br').then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.be.an('array');

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
