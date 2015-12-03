var mongoose = require('mongoose'),
  bird = require('./bird');

var sightingSchema = new mongoose.Schema({
  user: { type: String, ref: 'User' },
  bird: [bird.birdSchema],
  confirmed: { type: Boolean },
  numberSeen: { type: Number, min: 1 },
});

module.exports = mongoose.model('Sightings', sightingSchema);
