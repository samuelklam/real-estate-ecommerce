var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('cart', {

  userId:{
    type: Sequelize.INTEGER
  },
  buildingId:{
    type: Sequelize.INTEGER
  }



})
