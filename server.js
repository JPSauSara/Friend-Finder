// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets an initial port. Prevents having to reconfigure when deployed
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require('./app/routing/apiRoutes.js')(app);
//include htmlRoutes
require('./app/routing/htmlRoutes.js')(app);


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});