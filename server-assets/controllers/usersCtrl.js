var User = require('../models/user');

module.exports = {
  addUser: function(req, res) {
    var newUser = new User(req.body);
    newUser.save().then(function(result) {
      return res.send('user added');
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  getUsers: function(req, res) {
    User.find(req.query).exec().then(function(result) {
      return res.json(result);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
