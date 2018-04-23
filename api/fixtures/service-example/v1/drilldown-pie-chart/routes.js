'use strict';
var fixture =  require('./fixture.json');

module.exports = function (api) {
	api.route('/service-example/v1/drilldown-pie-chart')
			.get(function (req, res){
				setTimeout(function () {
					res.json(fixture);
				}, 1000);
			});
}

function process(params){
		//process the item and return object;
		return fixture; 
}
