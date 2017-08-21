var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

router.get('/', function(req, res) {
	
});


// Export routes for server.js to use.
module.exports = router;