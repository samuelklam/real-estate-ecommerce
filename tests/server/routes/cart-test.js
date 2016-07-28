var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Carts Route', function () {

    var app, Cart, agent, cart;

    beforeEach('Sync DB', function () {
        return db.sync({ force: true });
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Cart = db.model('cart');
        agent = supertest.agent(app);
    });

    var cartInfo = {
      arrayOfBuildingIds: [1,2,3]
    };

    beforeEach('', function (done) {
      return Cart.create(cartInfo)
      .then(createdCart => {
          createdCart.setUser(1)
          cart = createdCart;
          done()
      })
      .catch(done);
    });

    afterEach(function(){
      return db.sync({force: true});
    });

  describe('/api/carts', function () {

      it('GET a cart', function (done) {
        agent
        .get('/api/carts/1')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          console.log('helloooooooo', res.body)
          done();
        });
      });

/*      it('GET one', function (done) {
        agent
        .get('/api/buildings/' + building.id)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body.title).to.equal(building.title);
          done();
        });
      });*/

  });

});
