// index.js
// where your node app starts
require('dotenv').config();
// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// Step 1: Create route for /api/who am I
app.get('/api/whoami', (req, res) => {
  // Step 2: Extract relevant information from request headers
  const ipAddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  // Step 3: Return JSON object containing extracted information
  res.json({ ipaddress: ipAddress, language: language, software: software });
});