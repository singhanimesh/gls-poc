const data = [
	


	{ "id": "2014", "parent": "", "name": "25M USD", "value": 100000000},
    
	{ "id": "2014-1", "parent": "2014", "name": "25M USD", "value": 25000000},

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

	{ "id": "2014-14", "parent": "2014-2","border": true,  "name": " ", "value": 20000000},

	{ "id": "2014-15", "parent": "2014-14", "name": "Jul", "value": 10000000},
	{ "id": "2014-16", "parent": "2014-14", "name": "Aug", "value": 5000000},
	{ "id": "2014-17", "parent": "2014-14", "name": "Seo", "value": 5000000},
	{ "id": "2014-18", "parent": "2014-14", "name": " " , "dummy": true},

     { "id": "2014-14-0", "parent": "2014-3","border": true,  "name": " ", "value": 20000000},

     { "id": "2014-14-1", "parent": "2014-14-0", "name": "Jul", "value": 10000000},
     { "id": "2014-140-2", "parent": "2014-14-0", "name": "Aug", "value": 5000000},
     { "id": "2014-14-3", "parent": "2014-14-0", "name": "Seo", "value": 5000000},
     { "id": "2014-14-4", "parent": "2014-14-0", "name": " " , "dummy": true},


     { "id": "2014-14-5", "parent": "2014-4","border": true,  "name": " ", "value": 20000000},

     { "id": "2014-14-6", "parent": "2014-14-5", "name": "Jul", "value": 10000000},
     { "id": "2014-14-7", "parent": "2014-14-5", "name": "Aug", "value": 5000000},
     { "id": "2014-14-8", "parent": "2014-14-5", "name": "Seo", "value": 5000000},
     { "id": "2014-14-9", "parent": "2014-14-5", "name": " " , "dummy": true},


     { "id": "2014-14-10", "parent": "2014-5","border": true,  "name": " ", "value": 20000000},

     { "id": "2014-14-11", "parent": "2014-14-10", "name": "Jul", "value": 10000000},
     { "id": "2014-14-12", "parent": "2014-14-10", "name": "Aug", "value": 5000000},
     { "id": "2014-14-13", "parent": "2014-14-10", "name": "Seo", "value": 5000000},
     { "id": "2014-14-14", "parent": "2014-14-10", "name": " " , "dummy": true},



     { "id": "2014-14-15", "parent": "2014-6","border": true,  "name": " ", "value": 20000000},

     { "id": "2014-14-16", "parent": "2014-14-15", "name": "Jul", "value": 10000000},
     { "id": "2014-14-17", "parent": "2014-14-15", "name": "Aug", "value": 5000000},
     { "id": "2014-14-18", "parent": "2014-14-15", "name": "Seo", "value": 5000000},
     { "id": "2014-14-19", "parent": "2014-14-15", "name": " " , "dummy": true}



];

module.exports =  data;