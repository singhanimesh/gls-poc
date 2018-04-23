import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import sunburst from 'highcharts/modules/sunburst';
import drilldown from 'highcharts/modules/drilldown';
import Chart from '../../common/chart/Chart'
import Spinner from '../../common/spinner/Spinner';
 
export default class DonutChart extends React.Component  {

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
			console.log(data);
			chart.addSeriesAsDrilldown(point, data);
		}
	}
 
   
	render() {
		const {config, requestSubChartConfig , isFetching} = this.props;
		console.log(this.props);
		const onDrilldown = (e) => {

			console.log('I am called' ,this.chartRef );
			if (!e.seriesOptions) {
			
				const {chart} = this.chartRef.current;
				chart.showLoading('Loading Sub Data ...');
				requestSubChartConfig(e.point);
			
				/**
                  * Following code can be used for  adding points if required
                  */
				/* const {children} = e.point.node; 
                         let filteredData =   _.forEach(donutChartConfig.subData, function (item) {
                             if(item['parent'] === e.point.id && !_.find(children, {id: item['id']})){
                                chart.series[0].addPoint(item);
                             }
                        });
                 chart.hideLoading(); */
			}
		};
		if(config && config.chart) {
			config.chart.events =  {drilldown: onDrilldown};
			console.log('config' , config);
		}
		
		
		const options = {
			modules: [sunburst,drilldown],
			container: "donut",
			options: config
		};

		return <Chart ref = { this.chartRef } { ...options} />
	}
}
