var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('cart', {

  userId:{
    type: Sequelize.INTEGER
  },
   arrayOfBuildingIds:{
     type: Sequelize.ARRAY(Sequelize.INTEGER)
  }

})
