var express= require("express");
var methodOverride= require("method-override");
var bodyParser= require("body-parser");

var app = express();
var port = process.env.PORT || 3000;
var routes = require("./controllers/lbl_controller.js");
var blogRoutes = require("./controllers/blog_controller.js");
var commentRoutes = require("./controllers/comment_controller.js");

var db = require("./models");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(methodOverride('_method'));

app.use("/", routes);
app.use("/", blogRoutes);
app.use("/", commentRoutes);
//require("./routes/blog-api-routes.js")(app);
////require("./routes/html-routes.js")(app);
//require("./routes/recipe-api-routes.js")(app);
//require("./routes/comment-api-routes.js")(app);



db.sequelize.sync().then(function() {
	app.listen(port,function(){
		console.log("The port number is: "+ port);
	});
});