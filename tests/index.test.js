const expect = require('expect');
const request = require('supertest');

const { app } = require('../');

describe('Server', () => {

  it('gives the correct JSON data back for unix input', (done) => {
    const input = '1450137600';

    request(app)
      .get(`/time/${input}`)
      .expect(200)
      .expect(res => {
        expect(res.body.natural).toBe('December 14, 2015');
      })
      .end(done);
  });

  it('gives the correct JSON data back for date input', (done) => {
    const input = 'December 14, 2015';
    request(app)
      .get(`/time/${input}`)
      .expect(200)
      .expect(res => {
        expect(res.body.unix).toBe(1450072800);
      })
      .end(done);
  });

});
