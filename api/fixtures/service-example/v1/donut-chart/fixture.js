const data = [
	


     { "id": "2014", "parent": "", "name": "25M USD", "value": 100000000},
    
	{ "id": "2014-1", "parent": "2014", "name": "25M USD", "value": 25000000, className: "highcharts-c-0"},



	{ "id": "2014-2", "parent": "2014", "name": "20M USD", "value": 20000000},
	{ "id": "2014-3", "parent": "2014", "name": "10M USD","value": 15000000},
	{ "id": "2014-4", "parent": "2014", "name": "5M USD", "value": 15000000 },
	{ "id": "2014-5", "parent": "2014", "name": "23M USD", "value": 150000000 },
	{ "id": "2014-6", "parent": "2014", "name": "15M USD", "value": 10000000},

     { "id": "2014-8", "border": true,  "parent": "2014-1", "name": " ", "value": 25000000},

	{ "id": "2014-9", "parent": "2014-8", "name": "Jul", "value": 7000000},
	{ "id": "2014-10", "parent": "2014-8", "name": "Aug", "value": 6000000},
	{ "id": "2014-11", "parent": "2014-8", "name": "Seo", "value": 6000000},
     { "id": "2014-12", "parent": "2014-8", "name": "Seo", "value": 6000000},
     { "id": "2014-13", "parent": "2014-8", "name": " " , "dummy": true  },   


     { "id": "2014-11", "parent": "2014-2", "name": "Jul", "value": 10000000},
     { "id": "2014-12", "parent": "2014-2", "name": "Aug", "value": 5000000},
     { "id": "2014-13", "parent": "2014-2", "name": "Seo", "value": 5000000},
     { "id": "2014-14", "parent": "2014-2", "name": " " , "dummy": true , pointPadding: 10},     


];

module.exports =  data;