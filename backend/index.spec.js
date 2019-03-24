const assert = require('assert');
const should = require('should');
const request = require('supertest');
const app = require('./index');
describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then( res => {
            assert.equal(res.body.name, 'john')
            done();
        })
        
    });
  });


describe('GET / ', function() {
it('GET / ', function(done) {
    request(app)
    .get('/')
    .expect(200)
    .then( res => {
        assert.equal(true, true)
        done();
    })
});
});
 

/*
describe('GET /', function() {
    it('Hello World with Express', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
});

describe('GET /api', function() {
    it('Hello World with Express', (done) => {
      request(app)
        .get('/api')
        .expect(200, done);
    });
});
*/