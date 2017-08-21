var express= require("express");
var methodOverride= require("method-override");
var bodyParser= require("body-parser");

var app = express();
var port = process.env.PORT || 3000;
var routes = require("./controllers/lbl_controller.js");

var db = require("./models");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(methodOverride('_method'));

app.use('/', routes);




db.sequelize.sync().then(function() {
	app.listen(port,function(){
		console.log("The port number is: "+ port);
	});
});