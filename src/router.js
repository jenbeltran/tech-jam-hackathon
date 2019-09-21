//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

//Adding TD Bank routes
let tdBankRoute = require('../src/tdBankData/organizations');

/**
 * Define routes
 */

//Updates Page
router.get('/', (req, res, next) => {
	res.render('circleUpdatesPage');
});

// Report Overview Page
router.get('/reports', tdBankRoute.get);

module.exports = router;
