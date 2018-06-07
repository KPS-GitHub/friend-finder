// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tells node we are creating an "express" server
var app = express();

// set initial port
var PORT = process.env.PORT || 8080;

// configure express server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// point server to route files 
// note: require api first - you need to get/post/whatev the data, then add it to a page if needed, then display the page
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener - effectively "starts" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});