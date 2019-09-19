//strict mode
'use strict';

let express = require('express'),
	router = require('./src/router');

// Create an instance of an express application
const app = express();

//Allows HTML page rendering
app.set('view engine', 'ejs');

//Allows CSS
app.use(express.static('public'));

//Connects all routes
app.use(router);

/**
 * Start server
 */
app.listen(3000, () => {
	console.log('Express server started on port 3000');
});
