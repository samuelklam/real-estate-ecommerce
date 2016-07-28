var Sequelize = require('sequelize');

var db = require('../_db');

// OB/BG: maybe make an address model that a building can .belongTo
module.exports = db.define('building', {
    streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode:{
        type: Sequelize.INTEGER // OB/BG: what about 01907 (my hometown)
    },
    price: {
        type: Sequelize.DECIMAL(15,2) // OB/BG: use INTEGER instead, measure as cents
    },
    propertyType: {
        type: Sequelize.ENUM('Commercial','Residential','Mixed')
    },
    lotSize:{
        type: Sequelize.STRING
    },
    stories:{
        type: Sequelize.INTEGER
    },
     squareFootage:{
        type: Sequelize.INTEGER
    },
    numberOfUnits: {
        type: Sequelize.INTEGER
    },
    architecturalStyle:{
        type: Sequelize.STRING
    },
    buildingAge: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    daysOnMarket: { // OB/BG: maybe instead of Date added and have a virtual getter for a `daysOnMarket` field
        type: Sequelize.INTEGER
    },
    photoURL: {
        type: Sequelize.STRING
        // OB/BG: url validator
    },
    ownerId:{ // OB/BG: presumably this should be an association
        type: Sequelize.INTEGER,
        defaultValue: "0"
    }

});
