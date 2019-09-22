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

//Overview Page
router.get('/', (req, res, next) => {
	res.render('overviewPage', { active: 'overview' });
});

//NOTE: ONLY WORKS FOR ORGS FOR 1 PROJECT
router.get('/getOrgData', (req, res) => {
	let orgData = orgLib.getOrganizationInfo();
	let promArr = [];
	orgData.forEach((org) => {
		promArr.push(org.projects[0].getTxs());
	});
	Promise.all(promArr).then((txArr) => {
		txArr.forEach((orgTxs, i) => {
			orgData[i].projects[0].txs = orgTxs;
		});
		res.send({ orgData: orgData });
	});
});

// Fiscal Report Page
router.get('/reports', orgLib.get);

//Updates Page
router.get('/updates', (req, res, next) => {
	res.render('updatesPage', { active: 'updates' });
});

//Search Nearby
router.get('/nearby', (req, res, next) => {
	res.render('nearbyMap', { active: 'nearby' });
});

//Flag Steps
router.get('/flag1', (req, res, next) => {
	res.render('flags/flagOne');
});

router.get('/flag2', (req, res, next) => {
	res.render('flags/flagTwo');
});

router.get('/flag3', (req, res, next) => {
	res.render('flags/flagThree');
});

router.get('/flag4', (req, res, next) => {
	res.render('flags/flagFour');
});

router.get('/flag5', (req, res, next) => {
	res.render('flags/flagFive');
});

router.get('/flag6', (req, res, next) => {
	res.render('flags/flagSix');
});

router.get('/flag7', (req, res, next) => {
	res.render('flags/flagSeven');
});

module.exports = router;
