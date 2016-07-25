/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Building = db.model('building')
var Cart = db.model('cart')
var Order = db.model('order')
var Review = db.model('review')
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedReviews = function(){
    var reviews = [
    {
     buildingId: "1",
     userId: "1",
     review:"This string should probably be over 250 characters just to be safe, so we know that it definetly works, and is not broken. To confirm that this string can be over 250 characters, this paragaph is going to continue on and on, till it reaches 250 characters, I am going to guess this is not over 250 characters.",
     numOfStars:"5"
    }
    ]
   var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    });

    return Promise.all(creatingReviews);

};

var seedCarts = function(){
    var carts = [
    {
     userId: "2",
     buildingId: "1"
    }
    ]
   var creatingCarts = carts.map(function (cartObj) {
        return Cart.create(cartObj);
    });

    return Promise.all(creatingCarts);

};

var seedOrders = function (){
    var orders = [
    {
        userId:"2",
        buildingId:[1,2],
        totalPrice: 987654
    }
    ]
       var creatingOrders = orders.map(function (orderObj) {
        return Order.create(orderObj);
    });

    return Promise.all(creatingOrders);

}

var seedBuildings = function (){
    var buildings = [
    {
        streetAddress: "123 Main Street",
        city: "New York City",
        state: "New York",
        zipCode: "10001",
        price: "123456.78",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://i2.cdn.turner.com/cnnnext/dam/assets/140218103215-sheraton-huzhou-hot-spring-resort-horizontal-large-gallery.jpg',
        description: "One of the first buildings ever added to the database"

    },
     {
        streetAddress: "345 Main Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456.78",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://www.heltzelaia.com/portfolio/extra-portfolio/12_HeltzelAIA.jpg',
        description: 'Second building to ever be added to the databse'

    }
    ];
       var creatingBuildings = buildings.map(function (buildingObj) {
        return Building.create(buildingObj);
    });

    return Promise.all(creatingBuildings);

}




db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function (){
        return seedBuildings();
    })
    .then(function(){
        return seedCarts();
    })
    .then(function(){
        return seedOrders();
    })
    .then(function(){
        return seedReviews();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
