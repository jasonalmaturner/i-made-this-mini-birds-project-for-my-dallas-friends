var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  monogoUri = 'mongodb://localhost:27017/somanybirds',
  userCtrl = require('./server-assets/controllers/usersCtrl'),
  birdCtrl = require('./server-assets/controllers/birdsCtrl'),
  sightingsCtrl = require('./server-assets/controllers/sightingsCtrl');

// This line replaces mongoose's promise library with the q promise library.
// I prefer the q promise library
mongoose.Promise = require('q').Promise;

app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

// User endpoints
app.post('/api/user', userCtrl.addUser);
app.get('/api/user', userCtrl.getUsers);

// // Bird endpoints
app.post('/api/bird', birdCtrl.addBird);
app.get('/api/bird', birdCtrl.getBirds);

// // Sighting endpoints
app.post('/api/sightings', sightingsCtrl.addSighting);
app.get('/api/sightings', sightingsCtrl.getSightings);

app.listen(port, function() {
  console.log('listening on port: ', port);
});

mongoose.connect(monogoUri);
mongoose.connection.once('open', function() {
  console.log('db connected');
});
