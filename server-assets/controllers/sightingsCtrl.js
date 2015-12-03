var Sighting = require('../models/sighting');

module.exports = {
  addSighting: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save().then(function(result) {
      return res.send('sighting added');
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  getSightings: function(req, res) {
    Sighting.find(req.query).populate('user', 'username').exec().then(function(result) {
      return res.json(result);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
