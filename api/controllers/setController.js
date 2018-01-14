'use strict';

var mongoose = require('mongoose');
var Sets = mongoose.model('Sets');

exports.list_sets = function(req, res) {
	Sets.find({user_id: req.params.user_id, session_id: req.params.session_id}, function (err, sets) {
		if (err)
			res.send(err);
		res.json(sets);
	})
}