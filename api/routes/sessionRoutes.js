'use strict';

module.exports = function(app) {
	var session = require('../controllers/sessionController');
	app.route('/sessions/:user_id/:workout_id')
		.get(session.list_workout_sessions)
	app.route('/sessions/:user_id')
		.post(session.create_workout_session)
}