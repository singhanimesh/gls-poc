
const aapl =  require('./data/aapl-c.json');
const goog =  require('./data/goog-c.json');
const msft =  require('./data/msft-c.json');
const config =  require('./config.json');

module.exports = function (api) {
	api.route('/service-example/v1/line-series-chart/:config')
		.get((req, res) => {
			setTimeout(() => {
				const file = process(req.params)
				res.json(file);
			}, 100);
		});

	api.route('/service-example/v1/line-series-chart/data/:id')
		.get((req, res) => {
			setTimeout(() => {
				// const file = process(req.params);
				res.json([aapl, goog, msft]);
			}, 100);
		});
     
}

function process(params){
	// process the item and return object;
	return {options: config, data: {aapl ,goog, msft}};
}
