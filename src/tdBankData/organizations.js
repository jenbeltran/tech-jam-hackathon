const rawData0 = require('./dataSetOrg1.json');
const rawData1 = require('./dataSetOrg2.json');
const rawData2 = require('./dataSetOrg3.json');

const OrganizationInfo = [
	{
		name        : 'Fred Victor',
		description :
			'Fred Victor is a social service charitable organization that fosters long-lasting and positive change in the lives of homeless and low-income people living across Toronto.',
		imageURL    : 'https://www.fredvictor.org/wp-content/uploads/2019/09/IMG_0029-e1569007745195.jpg',
		projects    : [
			{
				name      : 'Daily Living',
				accountID : 'ac7619df-ab70-40b5-abbb-8801bb55e9e3',
				getTxs    : () => {
					return getTx('Food and Dining', rawData0);
				}
			}
		],
		lat         : '43.653626',
		lon         : '-79.372972'
	},
	{
		name        : 'Support The Kids',
		description : 'Dedicated to providing after school activities to children in low income households',
		imageURL    : 'https://d.newsweek.com/en/full/1130448/children-reading-stock.jpg',
		projects    : [
			{
				name      : 'Lets go shopping!',
				accountID : '84ba1107-ab00-4f06-ab68-f4f17d4f4b9a',
				getTxs    : () => {
					return getTx('Shopping', rawData1);
				}
			}
		],
		lat         : '43.643943',
		lon         : '-79.402247'
	},
	{
		name        : 'Rexdale Community Garden',
		description : 'We need some money for the rexdale community garden.',
		imageURL    :
			'https://www.totallandscapecare.com/wp-content/uploads/sites/5/2017/10/old-lady-garden-terrace.jpg',
		projects    : [
			{
				name      : 'Winter Clean Up',
				accountID : '709fb4b0-db1d-4a99-922b-6f519ad16153',
				getTxs    : () => {
					return getTx('Home', rawData2);
				}
			}
		],
		lat         : '43.716331',
		lon         : '-79.559510'
	}
];

function getTx(category, dataSet) {
	let txs = [];
	dataSet.result.forEach((tx) => {
		if (tx.categoryTags.includes(category)) {
			txs.push(tx);
		}
	});
	return txs;
}

function getOrganizationInfo() {
	return OrganizationInfo;
}

function tdBankRoute(req, res, next) {
	let bankdata = getOrganizationInfo();
	res.render('circleReportPage', {
		bankData : bankdata
	});
}

module.exports = {
	get : tdBankRoute
};
