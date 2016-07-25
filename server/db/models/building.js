var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('building', {
    streetAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipCode:{
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.STRING,
        validate:{
          isDecimal: true
        }
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
    daysOnMarket: {
        type: Sequelize.INTEGER
    },
    photoURL: {
        type: Sequelize.STRING
    },
    ownerId:{
        type: Sequelize.INTEGER,
        defaultValue: "0"
    }

});
