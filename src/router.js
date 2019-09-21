//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

//Adding TD Bank routes
let orgLib = require('../src/tdBankData/organizations.js');

/**
 * Define routes
 */

//Updates Page
router.get('/', (req, res, next) => {
	res.render('circleUpdatesPage');
});

//NOTE: ONLY WORKS FOR ORGS FOR 1 PROJECT
router.get('/getOrgData', (req, res) => {
	let orgData = orgLib.getOrganizationInfo();
	let promArr = [];
	orgData.forEach((org) => {
		promArr.push(org.projects[0].getTxs());
	});
	Promise.all(promArr).then((txArr) => {
		console.log(txArr);
		txArr.forEach((orgTxs, i) => {
			orgData[i].projects[0].txs = orgTxs;
		});
		res.send({ orgData: orgData });
	});
});

// Report Overview Page
router.get('/reports', orgLib.get);

module.exports = router;
