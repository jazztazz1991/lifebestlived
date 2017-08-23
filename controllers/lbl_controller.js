var express = require("express");

var router = express.Router();


var db = require("../models");

router.get('/', function(req, res) {
	
});


router.get('/userBlog', function(req,res){
   res.sendFile(path.join(__dirname, "../public/userBlog.html"));
})
//open when using adminside of blog
//router.get('/blog', function(req,res){
//   res.sendFile(path.join(__dirname, "../public/blog.html"));
//})
router.get('/recipes', function(req,res){
   res.sendFile(path.join(__dirname, "../public/recipes.html"));
})
router.get('/events', function(req,res){
   res.sendFile(path.join(__dirname, "../public/events.html"));
})

// Export routes for server.js to use.
module.exports = router;