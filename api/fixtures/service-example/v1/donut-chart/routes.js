
const fixture =  require('./fixture.js');
const config =  require('./config.json');

module.exports = function (api) {
	api.route('/service-example/v1/donut-chart/:config')
		.get((req, res) => {
			setTimeout(() => {
				const file = req.params.config === 'config' ? config : fixture;
				res.json(file);
			}, 100);
		});

	api.route('/service-example/v1/donut-chart/data/:id/:drilldown')
		.get((req, res) => {
			setTimeout(() => {
				const file = process(req.params);
				res.json(file);
			}, 100);
		});
     
}

function process(params){
	// process the item and return object;
	const filteredData =   fixture.filter(item => item.parent === params.id);

	const parentNode =   fixture.find(item => item.id === params.id);
         
	if(parentNode){
        	parentNode.parent = "";
        	// parentNode.color = "#FAEBD7";
	}   
	const data = {id: params.drilldown, type: "sunburst",  connectEnds: false};
	filteredData.unshift(parentNode);
	data.data = filteredData; 
	return data; 
}
