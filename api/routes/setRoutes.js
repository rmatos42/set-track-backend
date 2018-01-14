'use strict';

module.exports = function(app) {
	var sets = require('../controllers/setController');
	app.route('/sets/:user_id/:session_id')
		.get(sets.list_sets);
}