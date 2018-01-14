
var mongoose = require('mongoose');
// User = mongoose.model('User');
var User = require('../models/userModel');

exports.list_all_users = function(req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  })
}

exports.login = function(req, res) {
  User.authenticate(req.body.email, req.body.password, function(error, user) {
    if (error || !user) {
      var err = new Error('Wrong email or password.');
      err.status = 401;
      return err;
    } else {
      req.session.userId = user._id;
      console.log(req.session.userId);
      return res.json(user);
    }
  });
}

exports.create_a_user = function(req, res) {
  if (req.body.email &&
  req.body.username &&
  req.body.password) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return res.send(err)
    } else {
      return res.json(User);
    }
  });
}
}