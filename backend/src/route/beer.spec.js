// mocha
// describe('GET /beers', () => {
//     it('should return 200 status code', () => {
//       console.log('beers test 1');
//     });
//   });

// assert
// const assert = require('assert');
// describe('GET /beers', () => {
//   it('should return 200 status code', () => {
//     assert.equal(true, true)
//   });
// });

// should
// const should = require('should');
// describe('GET /beers', () => {
//   it('should return 200 status code', () => {
//     (true).should.be.equal(true)
//   });
// });

//supertest
const should = require('should');
const request = require('supertest');
const app = require('../server');

// var path = process.cwd();
// const app = require(path + '/src/server');

// describe('GET /beers', () => {
//   it('should return 200 status code', (done) => {
//     request(app)
//         .get('/beers')
//         .expect(200)
//         .end((err, res) => {
//           if (err) throw err;
//           console.log(res.body);
//           res.body.map( beer => {
//             beer.should.have.properties('beerid', 'beername');
//             beer.beerid.should.be.a.Number();
//             beer.beername.should.be.a.String();
            
//           });
//           done();
//         })
//   });
// });

describe('POST /beers/:beerid', () => {

    it.only('should return 200 status code', (done) => {
      request(app)
          .post('/beers/1')
          .send({
            name: 'foo'
          })
          .end((err, res) => {
            if (err) throw err;
            done();
          });
    });
  });