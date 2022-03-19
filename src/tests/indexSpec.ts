import supertest from 'supertest';
import index from '../index';

const request = supertest(index);
describe('test endpoint responses', () => {
  it('the endpoint of index should return a status of 200', (): void => {
    request
      .get('/api?imgName=fjord.jpg&width=200&height=200')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  it('the endpoint of index should return a status close to 200', (): void => {
    request
      .get('/api?imgName=fjord.jpg&width=200&height=200')
      .then((response) => {
        expect(response.statusCode).toBeCloseTo(200);
      });
  });
});
