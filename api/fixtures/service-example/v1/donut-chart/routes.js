
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

	const superParentNode =   fixture.find(item => item.id === parentNode.parent);
         


	if(superParentNode){
        	superParentNode.parent = "";
        	 parentNode.color = "#fffff";
	}   

	if(parentNode){
        	parentNode.parent = superParentNode.id;
        	// parentNode.color = "#FAEBD7";
	} 

	const data = {id: params.drilldown, pointPadding: 0.3, pointPlacement: -0.2, type: "sunburst",  connectEnds: false};
	const parentNode1 = Object.assign({}, parentNode);

	parentNode1.id = "2015";
	parentNode1.value = 75000000;
	parentNode1.clone = true;

	
	filteredData.unshift(parentNode1);
	filteredData.unshift(parentNode);
	

	filteredData.unshift(superParentNode);



	data.data = filteredData; 
	return data; 
}
