import React from 'react';
import _ from 'lodash';
import drilldown from 'highcharts/modules/drilldown';
import Chart from '../../common/chart/Chart'
 
export default class LineSeriesChart extends React.Component  {

	constructor (props) {
		super(props);
		this.chartRef = React.createRef();
	}
	
	componentWillUpdate(nextProps) {
		const {
			subConfig,
		} = nextProps;
		if (subConfig && this.chartRef) {
			const {
				chart
			} = this.chartRef.current;
			chart.hideLoading();
			const {data, point} = subConfig;
			chart.addSeriesAsDrilldown(point, data);
		}
	}
   
	render() {
		
		const onDrilldown = (e) => {
			if (!e.seriesOptions) {
				const {chart} = this.chartRef.current;
				chart.showLoading('Loading Sub Data ...');
				requestSubLineSeriesChartConfig(e.point);
			}
		};

		let seriesOptions = [];
		let opts = {};
		const {config, requestSubLineSeriesChartConfig } = this.props;
		
		if(config) {
			//config.chart.events =  {drilldown: onDrilldown};
			const {options, data} = config;
			_.forOwn(data, (value, key) => {
				seriesOptions.push({name: key, data: value});
		    });
		    options.series = seriesOptions;

		 opts = {
			modules: [drilldown],
			container: "lineSeries",
			options: options
		};
		}
		
		

		console.log(seriesOptions);
/*
seriesOptions[i] = {
	            name: value,
	            data: data
	        };*/
		

		return <Chart ref = { this.chartRef } { ...opts} />
	}
}
