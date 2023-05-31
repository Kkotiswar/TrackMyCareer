var express = require('express');
var dotenv = require('dotenv');

dotenv.config();

var app = express();
var port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', function(req, res) {
  res.send('Hello, Kotiswar Kaithepalli!');
});

// Start the server
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
