'use strict';
var db = require('./_db');
module.exports = db;

db.User  = require('./models/user');
db.Building = require('./models/building');
db.Cart = require('./models/cart');
db.Order = require('./models/order');
db.Review = require('./models/review');


// Order.belongsTo(User);
// Order.belongsTo(Cart);
// Cart.belongsTo(User);
// Review.belongsTo(Building);



