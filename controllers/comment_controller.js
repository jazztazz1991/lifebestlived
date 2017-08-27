var express = require("express");

var router = express.Router();

var path = require("path");
var db = require("../models");

router.get("/api/comments/:id", function(req, res) {
        console.log("/id " + req.params.id);
    db.Comments.findAll({
        where: {
            BlogId: req.params.id
        }
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });
   
    router.post("/api/comments", function(req, res) {
    console.log(req.body);
    db.Comments.create({
      user: req.body.user,
      body: req.body.body,
      BlogId: req.body.BlogId
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });
    
    router.delete("/api/comments/:id", function(req, res) {
    db.Comments.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbComments) {
        console.log("this is running2");
      res.json(dbComments);
    });
  });

module.exports = router;