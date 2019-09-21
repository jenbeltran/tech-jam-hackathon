//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

//Adding TD Bank routes
let org = require('./organizations.js');

/**
 * Define routes
 */

// Login Page

router.get('/', (req, res, next) => {
	res.render('circleUpdatesPage');
});

// router.get('/reports', (req, res, next) => {
// 	res.render('circleReportPage', {
// 		username : req.session.username,
// 		bookData : bookData,
// 		pageId   : 'showBookDetails',
// 		title    : 'YelpBook | Book Details'
// 	});
// });

router.get('/reports', tdBankRoute.get);

module.exports = router;
