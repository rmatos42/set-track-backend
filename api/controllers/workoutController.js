'use strict';

var mongoose = require('mongoose'),
Workout = mongoose.model('Workouts');

exports.list_all_workouts = function(req, res) {
  Workout.find({}, function (err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.create_a_workout = function(req, res) {
  var new_workout = new Workout(req.body);
  new_workout.save(function(err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.list_user_workouts = function(req, res) {
  Workout.find({user_id: req.params.user_id}, function (err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
}

exports.list_workout = function (req, res) {
  Workout.findOne({user_id: req.params.user_id, _id: req.params.workout_id}, function (err, workout) {
    if (err)
      res.send(err);
    else
      res.json(workout);
  });
}

exports.create_user_workout = function(req, res) {
  var new_workout = new Workout({
    "user_id": req.params.user_id,
    "name": req.body.name
  });
  new_workout.save(function(err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
}