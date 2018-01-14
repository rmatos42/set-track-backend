'use strict';

module.exports = function(app) {
	var workout = require ('../controllers/userController');
	app.route('/users')
		.get(workout.list_all_users)
		.post(workout.create_a_user);
	app.route('/login')
		.post(workout.login);
};