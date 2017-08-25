// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/blogs/", function(req, res) {
    db.Blogs.findAll({})
    .then(function(dbBlogs) {
      res.json(dbBlogs);
    });
  });

//  // Get routue for retrieving a single post
//  app.get("/api/blogs/:id", function(req, res) {
//    db.Blogs.findOne({
//      where: {
//        id: req.params.id
//      }
//    })
//    .then(function(dbBlog) {
//        console.log("39 is running");
//      res.json(dbBlog);
//    });
//  });

  // POST route for saving a new post
  app.post("/api/blogs", function(req, res) {
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
  app.delete("/api/blogs/:id", function(req, res) {
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
  app.put("/api/blogs", function(req, res) {
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
};