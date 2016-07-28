var Sequelize = require('sequelize');

var db = require('../_db');

// OB/BG: 'item' model productId, priceAtPurchase
module.exports = db.define('order', {

  userId:{ // OB/BG: through associations, also consider guests
    type: Sequelize.INTEGER
  },
  arrayOfBuildingIds:{
     type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  arrayOfPurchasePrices:{
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  totalPrice:{ // OB/BG: could be a getter method
        type: Sequelize.STRING, // OB/BG: probably want INTEGER with cents
        validate:{
          isDecimal: true
        }
  }



})
