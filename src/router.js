//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

/**
 * Define routes
 */

// Login Page
router.get('/', (req, res, next) => {
	res.render('circleReportPage');
});

module.exports = router;
