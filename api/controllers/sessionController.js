'use strict';

var mongoose = require('mongoose'),
Session = mongoose.model('Sessions');
var Sets = mongoose.model('Sets');

exports.create_workout_session = function(req, res) {
  var new_session = new Session({
    "user_id": req.params.user_id,
    "workout_id": req.body.workout_id
  });
  new_session.save(function(err, session) {
    if (err)
      res.send(err);
    res.json(session);
    for(var i in req.body.sets) {
      var new_set = new Sets({
        "user_id": req.params.user_id,
        "workout_id": req.body.workout_id,
        "session_id": session._id,
        weight: req.body.sets[i].weight,
        reps: req.body.sets[i].reps
      });
      new_set.save(function(err, sets) {
        if (err)
          console.log(err);
        console.log(sets);
      });
    }
  });
}

exports.list_workout_sessions = function(req, res) {
  console.log(req.params.user_id);
  Session.find({user_id: req.params.user_id, workout_id: req.params.workout_id}, function (err, session) {
    if (err)
      res.send(err);
    res.json(session);
    console.log(session);
  });
}