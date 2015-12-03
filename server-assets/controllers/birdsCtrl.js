var bird = require('../models/bird');

module.exports = {
  addBird: function(req, res) {
    var newBird = new bird.Bird(req.body);
    newBird.save().then(function(result) {
      return res.send('bird added');
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  getBirds: function(req, res) {
    bird.Bird.find(req.query).exec().then(function(result) {
      return res.json(result);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
