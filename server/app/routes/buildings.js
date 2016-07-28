var express = require('express');
var router = new express.Router();

var db = require('../../db');
var Building = db.Building;

// OB/BG: roll these next three into one route /api/buildings?type=commercial -- you did it already great job!
router.get('/commercial', function(req, res, next) {
  Building.findAll({
    where: {
      propertyType: 'Commercial'
    }
  })
  .then(commercialBuildings => res.send(commercialBuildings))
  .catch(err=>console.error); // OB/BG: call next on the error
})

router.get('/residential', function(req, res, next) {
  Building.findAll({
    where: {
      propertyType: 'Residential'
    }
  })
  .then(commercialBuildings => res.send(commercialBuildings))
  .catch(err=>console.error);
})

router.get('/mixed', function(req, res, next) {
  Building.findAll({
    where: {
      propertyType: 'Mixed'
    }
  })
  .then(mixedBuildings => res.send(mixedBuildings))
  .catch(err=>console.error);
})

router.get('/types', function(req, res, next){
  res.send(Building.rawAttributes.propertyType.values);
})

router.get('/:id', function(req, res, next){

  Building.findById(req.params.id)
  .then(building=>res.send(building))
  .catch(function(err){console.error(err); res.status(500).end(); });
})

router.get('/', function(req, res, next){
  Building.findAll({where:req.query})
  .then(buildings=>res.send(buildings))
  .catch(err=>console.error);
})

router.get('/types', function(req, res, next){ // OB/BG: duplicate
  res.send(Building.rawAttributes.propertyTypes.values);
});


module.exports = router;
