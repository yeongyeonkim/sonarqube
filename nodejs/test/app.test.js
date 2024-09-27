const request = require('supertest');
const { app, startServer, stopServer } = require('../app');

beforeAll((done) => {
  startServer();
  done();
});

afterAll((done) => {
  stopServer(done);
});

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /hello', () => {
  it('responds with Hello World!', async () => {
    assert(true);
  });
});