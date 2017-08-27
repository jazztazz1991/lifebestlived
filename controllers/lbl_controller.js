var express = require("express");

var router = express.Router();

var path = require("path");
var db = require("../models");

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../views/index.html"));
});
router.get('/index', function(req, res) {
	res.sendFile(path.join(__dirname, "../views/index.html"));
});
router.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, "../views/about.html"));
});


//router.get('/userBlog', function(req,res){
//   res.sendFile(path.join(__dirname, "../public/userBlog.html"));
//})
//open when using adminside of blog
router.get('/blog', function(req,res){
   res.sendFile(path.join(__dirname, "../views/blog.html"));
})
router.get('/recipes', function(req,res){
   res.sendFile(path.join(__dirname, "../views/recipes.html"));
})
router.get('/events', function(req,res){
   res.sendFile(path.join(__dirname, "../views/events.html"));
})

// Export routes for server.js to use.
module.exports = router;