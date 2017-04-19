// import express
var express = require('express');
// create a router instance
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  // res.sendFile('filename')
});

// export this particular router  
module.exports = router;
