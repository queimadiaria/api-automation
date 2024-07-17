import { getHealth } from '../requests/getHealth.request';

describe('GET /health', () => {
  it('should return all health results', () => {
    getHealth().then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});