import React from 'react';
import _ from 'lodash';
import drilldown from 'highcharts/modules/drilldown';
import Chart from '../../common/chart/Chart'
 
export default class PieChart extends React.Component  {

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
		const {config, requestSubPieChartConfig } = this.props;
		
		const onDrilldown = (e) => {
			if (!e.seriesOptions) {
				const {chart} = this.chartRef.current;
				chart.showLoading('Loading Sub Data ...');
				requestSubPieChartConfig(e.point);
			}
		};
		if(config && config.chart) {
			config.chart.events =  {drilldown: onDrilldown};
		}
		
		
		const options = {
			modules: [drilldown],
			container: "donut",
			options: config
		};

		return <Chart ref = { this.chartRef } { ...options} />
	}
}
