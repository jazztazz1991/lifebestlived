var express = require("express");

var router = express.Router();


var db = require("../models");

router.get('/', function(req, res) {
	
});


router.get('/blog', function(req,res){
    db.Blogs.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
})

// Export routes for server.js to use.
module.exports = router;