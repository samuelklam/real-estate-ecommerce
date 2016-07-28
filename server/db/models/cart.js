var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('cart', {

  userId:{ // OB/BG: 1) what about guests? 2) shouldn't this implicit through an association?
    type: Sequelize.INTEGER
  },
   arrayOfBuildingIds:{ // OB/BG: also can just be an association, no need to define the id explicitly as a field
     type: Sequelize.ARRAY(Sequelize.INTEGER)
  }



})
