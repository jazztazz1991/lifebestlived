var express = require("express");

var router = express.Router();

var path = require("path");
var db = require("../models");

router.get("/api/blogs", function(req, res) {
    db.Blogs.findAll({})
    .then(function(dbBlogs) {
      res.json(dbBlogs);
    });
  });
router.post("/api/blogs", function(req, res) {
    console.log(req.body);
    db.Blogs.create({
      title: req.body.title,
      text: req.body.body
    })
    .then(function(dbBlogs) {
      res.json(dbBlogs);
    });
  });

  // DELETE route for deleting posts
  router.delete("/api/blogs/:id", function(req, res) {
    db.Blogs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBlog) {
        console.log("this is running2");
      res.json(dbBlog);
    });
  });

  // PUT route for updating posts
  router.put("/api/blogs", function(req, res) {
    db.Blogs.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbBlog) {
      res.json(dbBlog);
    });
  });

module.exports = router;