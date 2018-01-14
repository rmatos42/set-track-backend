 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  workout_id: {
    type: String,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
})

var Session = mongoose.model('Sessions', SessionSchema);
module.exports = Session;