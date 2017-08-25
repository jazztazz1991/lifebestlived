var db = require("../models");


module.exports = function(app){
    app.get("/api/comments/:id", function(req, res) {
        console.log(req.params.id);
    db.Comments.findAll({
        where:{
            BlogId: req.params.id
        }
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });
    app.get("/api/comments", function(req, res) {
        console.log(req.params.id);
    db.Comments.findAll({
        
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });
    app.post("/api/comments", function(req, res) {
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
    
    app.delete("/api/comments/:id", function(req, res) {
    db.Comments.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbComments) {
        console.log("this is running2");
      res.json(dbComments);
    });
  });
}