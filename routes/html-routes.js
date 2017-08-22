// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
      // blog route loads blog.html
    app.get("/blog", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

        // recipe route loads recipes.html
    app.get("/recipes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/Recipes.html"));
    });
        // events route loads events.html
    app.get("/events", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/events.html"));
    });
        // about route loads about.html
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });
};
