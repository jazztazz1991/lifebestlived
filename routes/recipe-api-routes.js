// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/recipes/", function(req, res) {
    db.Recipes.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/recipes/category/:category", function(req, res) {
    db.Recipes.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipes.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
        console.log("39 is running");
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/recipes", function(req, res) {
    console.log(req.body);
    db.Recipes.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/recipes/delete/:id", function(req, res) {
    db.Recipes.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
        console.log("this is running");
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/recipes", function(req, res) {
    db.Recipes.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};