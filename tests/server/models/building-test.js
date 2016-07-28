var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var Building = db.model('building');

describe('Building model', function () {

    beforeEach('Sync DB', function () {
       return db.sync({ force: true });
    });

    describe('fields', function () {

        it('has a streetAddress and price fields', function () {
            return Building.create({
                streetAddress: '123 Example St',
                city: 'TestTown',
                state: 'TestVille',
                price: '10000.00'
            })
            .then(function (savedBuilding) {
                expect(savedBuilding.streetAddress).to.equal('123 Example St');
                expect(savedBuilding.price).to.equal('10000.00')
            })
        });

        it('requires streetAddress', function () {
            var building = Building.build({
                city: 'TestTown',
                state: 'TestVille'
            });

            return building.validate()
            .then(function (result) {
                expect(result).to.be.an.instanceOf(Error);
                expect(result.message).to.contain('streetAddress cannot be null');
            });
        });

        it('price should be saved with two decimal places', function () {
            return Building.create({
                streetAddress:"123 Example St",
                city: 'TestTown',
                state: 'TestVille',
                price: 100000
            })
            .then(function (result) {
                expect(result.price).to.equal('100000.00')
            });
        });

        it('price should not work with invalid formating', function () {
            var building = Building.build({
                streetAddress:"123 Example St",
                city: 'TestTown',
                state: 'TestVille',
                price: 'invalidPrice'
            });

            building.save().then().catch(function(err) {
                expect(err).to.exist;
                expect(err.message).to.contain('invalidPrice');
            })
        });

        it('propertyType must be Commercial, Residential, or Mixed', function (done) {
            var building = Building.build({
                streetAddress:"123 Example St",
                city: 'TestTown',
                state: 'TestVille',
                propertyType: 'invalid'
            });

            building.save().then().catch(function(err) {
                expect(err).to.exist;
                expect(err.message).to.contain('propertyType');
                done()
            })
        });
    });
});
