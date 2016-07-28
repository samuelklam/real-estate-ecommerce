'use strict';
var db = require('./_db');
module.exports = db;

db.User  = require('./models/user');
db.Building = require('./models/building');
db.Cart = require('./models/cart');
db.Order = require('./models/order');
db.Review = require('./models/review');


// OB/BG: probably want more of a good thing (associations)
db.Order.belongsTo(db.User);
db.Order.belongsTo(db.Cart);
db.Cart.belongsTo(db.User);
db.Review.belongsTo(db.Building);



