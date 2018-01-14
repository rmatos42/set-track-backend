'use strict';

module.exports = function(app) {
	var workout = require ('../controllers/workoutController');
	app.route('/workouts')
		.get(workout.list_all_workouts)
		.post(workout.create_a_workout);
	app.route('/workouts/:user_id/:workout_id')
		.get(workout.list_workout);
	app.route('/workouts/:user_id')
		.get(workout.list_user_workouts)
		.post(workout.create_user_workout);
};
