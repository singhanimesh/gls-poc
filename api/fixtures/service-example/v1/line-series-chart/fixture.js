const data = [
          { "id": "2014", "parent": "", "name": "100M USD", "color" : "#fff" },
          { "id": "2014-1", "parent": "2014", "name": "25M USD", "value": 31000},
          { "id": "2014-2", "parent": "2014", "name": "20M USD", "value": 32000 },
          { "id": "2014-3", "parent": "2014", "name": "10M USD" },
          { "id": "2014-4", "parent": "2014", "name": "5M USD", "value": 11000 },
          { "id": "2014-5", "parent": "2014", "name": "23M USD", "value": 5000 },
          { "id": "2014-6", "parent": "2014", "name": "15M USD", "value": 18000 },
          { "id": "2014-7", "parent": "2014-1", "name": "Jul", "value": 12000, "drilldown": "2014-C" },
          { "id": "2014-8", "parent": "2014-1", "name": "Aug", "value": 11000},
          { "id": "2014-9", "parent": "2014-1", "name": "Seo", "value": 11000},
          { "id": "2014-10", "parent": "2014-1", "name": " ", "value":60000 , color: "#fff" },

           { "id": "2014-11", "parent": "2014-7", "name": "Aug-SUB", "value": 11000 },
          { "id": "2014-12", "parent": "2014-7", "name": "Seo-SUB", "value": 11000 },

];

module.exports =  data;