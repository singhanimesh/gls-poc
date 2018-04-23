
const fixture =  require('./fixture.json');
const drilldown =  require('./drilldown.js');

module.exports = function (api) {
	api.route('/service-example/v1/pie-chart')
		.get((req, res) => {
			setTimeout(() => {
				res.json(fixture);
			}, 100);
		})

	api.route('/service-example/v1/pie-chart/data/:id/:drilldown')
		.get((req, res) => {
			setTimeout(() => {
				const file = process(req.params);
				res.json(file);
			}, 100);
		});
}

function process(params){
	// process the item and return object;
	const data =  drilldown[params.drilldown];
	return data; 
}
