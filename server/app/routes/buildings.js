var express = require('express');
var router = new express.Router();

var db = require('../../db');
var Building = db.Building;

router.get('/:id', function(req, res, next){

  Building.findById({where:{id:req.params.id}})
  .then(building=> res.send(building))
  .catch(function(err){console.error(err); res.status(500).end();});
})

module.exports = router;
