var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('order', {

  userId:{
    type: Sequelize.INTEGER
  },
  arrayOfBuildingIds:{
     type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  arrayOfPurchasePrices:{
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  totalPrice:{
        type: Sequelize.STRING,
        validate:{
          isDecimal: true
        }
  }



})
