const routes = [
	'./v1/pie-chart/routes',
	'./v1/donut-chart/routes',
	'./v1/line-series-chart/routes'
]

module.exports = function(api) {
	routes.forEach((route) => {
		require(route)(api);
	});
};