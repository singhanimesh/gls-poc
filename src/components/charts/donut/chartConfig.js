function processData(id, drilldown, startAngle) {
	
	const getValue = function (items, parentValue) {
		
		let value = 0;
		items.forEach(item => {
			value += (item.value ? item.value : 0);
		});

		return parentValue - value;
	}; 

	const filteredParent =   fixture.filter(item => item.parent === id);
	
	const filteredData =   fixture.filter(item => item.parent === filteredParent[0].id);
	
	const parentNode =   fixture.find(item => item.id === id);

	const superParentNode =   fixture.find(item => item.id === parentNode.parent);
         

	if(superParentNode) {
        	superParentNode.parent = "";
        	superParentNode.name = parentNode.name;
	}   

	if(parentNode){
        	parentNode.parent = superParentNode.id;
        	parentNode.borderWidth = 5;
        	parentNode.borderColor = "#fff";
	} 

	
	const data = {
		id: drilldown,
		type: "sunburst",
		allowDrillToNode: true,
		startAngle: parseInt(startAngle),
		cursor: 'pointer',
		dataLabels: {
			enabled:true
		},
		levels: [{
			level: 1,
			dataLabels: {
				innerSize: -200,
				enabled: true,
				rotationMode: 'parallel'
			},
			levelSize: {
				unit: 'weight',
				value: 5
			}
		}, {
			level: 2,
			borderWidth:10,
			borderColor: "red",
			levelSize: {
				unit: 'pixels',
				value: 25
			},
			colorByPoint: true,
			dataLabels: {
				enabled: false,
				rotationMode: 'parallel'
			}
		}, {
			level: 3,
			borderWidth:10,
			levelIsConstant: false,
			dataLabels: {
				enabled: false,
				rotationMode: 'parallel'
			},
			levelSize: {
				unit: 'pixels',
				value: 0
			}
		}, {
			level: 4,
			borderWidth:10,
			dataLabels: {
				enabled: false,
				rotationMode: 'parallel'
			},
			levelIsConstant: false,
			levelSize: {
				unit: 'weight',
				value: 4
			}
		}]

	};

	const dummyParent = Object.assign({}, parentNode);	
	dummyParent.id = `${parentNode.id}-dummy`;
	dummyParent.value = superParentNode.value - parentNode.value;  // getValue(filteredData, parentNode.value);
	dummyParent.clone = true;
	dummyParent.name = ' ';
	
	filteredData.unshift(filteredParent[0]);
	filteredData.unshift(dummyParent);
	filteredData.unshift(parentNode);
	filteredData.unshift(superParentNode);

	data.data = filteredData; 
	return data; 
}
