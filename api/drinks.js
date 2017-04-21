var express = require('express');
var router = express.Router();

var drinks = [
  {id:1, name: 'coffee', ingredients: ['coffee', 'water']},
  {id:2, name: 'latte', ingredients: ['espresso', 'milk']},
  {id:3, name: 'frappucino', ingredients: ['fluff']}
];

// returns all drinks
router.get('/drinks', (req, res)=> {
  res.send(drinks);
});

router.get('/drinks/:name', (req, res)=>{
  var drink;
  drink = drinks.filter((d)=>{
    return d.name === req.params.name;
  })[0];
  res.send(drink);
});

router.delete('/drinks/:name', (req, res)=>{
  var drink;
  drink = drinks.filter( (d)=>{
    return d.name === req.params.name;
  })[0];
  drinks.splice( drinks.indexOf(drink), 1);
  // no content status  
  res.sendStatus(204);
});

router.put('/drinks', (req, res)=>{
  var drink; 

  drink = drinks.filter( (d)=>{
    return d.id === req.body.id;
  })[0];

  drinks[drinks.indexOf(drink)] = req.body;

  res.sendStatus(204);
});

router.post('/drinks', (req, res)=>{
  var newDrink = req.body;
  newDrink.id = drinks[drinks.length - 1].id + 1;
  drinks.push(newDrink);
  // we could send back the entire array as verification
  res.sendStatus(201);
});



module.exports = router;
