var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('review', {
  buildingId: {
    type: Sequelize.INTEGER
  },
  userId: {
    type: Sequelize.INTEGER
  },
  review: {
    type: Sequelize.TEXT
  },
  numOfStars:{
    type: Sequelize.INTEGER,
    max: 5 // OB/BG: also maybe `min`
  },
  datePosted:{ // OB/BG: could remove if you want
    type: Sequelize.STRING,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }

})
