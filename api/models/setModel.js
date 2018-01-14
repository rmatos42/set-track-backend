 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SetSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  workout_id: {
    type: String,
    required: true
  },
  session_id: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
})

var Sets = mongoose.model('Sets', SetSchema);
module.exports = Sets;