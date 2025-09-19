const request = require('supertest');
const app = require('../server');

describe('App basic tests', () => {
  test('GET /api/health should return status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('timestamp');
  });

  test('GET / should return HTML and contain Hello', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/StyleFinder/);
  });
});
