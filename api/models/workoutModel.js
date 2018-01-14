 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Workouts', WorkoutSchema);