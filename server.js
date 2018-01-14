var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
 Workout = require('./api/models/workoutModel'), //created model loading here
 User = require('./api/models/userModel')
 Session = require('./api/models/sessionModel')
 Sets = require('./api/models/setModel')
  bodyParser = require('body-parser');
var session = require('express-session');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/set-track'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

var workoutRoutes = require('./api/routes/workoutRoutes'); //importing route
workoutRoutes(app); //register the route
var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);
var sessionRoutes = require('./api/routes/sessionRoutes');
sessionRoutes(app);
var setRoutes = require('./api/routes/setRoutes');
setRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);