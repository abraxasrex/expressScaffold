var express = require('express');
var router = express.Router();

var drinks = [
  {name: 'coffee', ingredients: ['coffee', 'water']},
  {name: 'latte', ingredients: ['espresso', 'milk']},
  {name: 'frappucino', ingredients: ['fluff']}
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

router.post('/drinks', (req, res)=>{
  var newDrink = req.body;
  drinks.push(newDrink);
  // we could send back the entire array as verification
  res.sendStatus(201);
});

module.exports = router;
