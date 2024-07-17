import { getRunning } from '../requests/getRunning.request';

describe('GET /running', () => {
  it('should return all running results', () => {
    getRunning().then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});