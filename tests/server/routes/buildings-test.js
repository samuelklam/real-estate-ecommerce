// Instantiate all models
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Buildings Route', function () {

    var app, Building, agent, building;

    beforeEach('Sync DB', function () {
        return db.sync({ force: true });
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Building = db.model('building');
        agent = supertest.agent(app);
    });

    var buildingInfo = {
      streetAddress: '12 Red Road',
      city: 'New York',
      state: 'NY',
      zipCode: '10038',
      price: '1200.00'
    };

    beforeEach('Create a building', function (done) {
      return Building.create(buildingInfo)
      .then(createdBuilding => {
          building = createdBuilding;
          done()
      })
      .catch(done);
    });

    afterEach(function(){
      return db.sync({force: true});
    });

  describe('/api/buildings', function () {

      it('GET all', function (done) {
        agent
        .get('/api/buildings')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(1);
          done();
        });
      });

      it('GET one', function (done) {
        agent
        .get('/api/buildings/' + building.id)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body.title).to.equal(building.title);
          done();
        });
      });

/*      it('GET types', function (done) {
        agent
        .get('/api/buildings/types')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          // expect(res.body[0]).to.be.typeof(String);
          done();
        });
      });*/

  });

});
