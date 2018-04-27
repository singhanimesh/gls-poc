import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import sunburst from 'highcharts/modules/sunburst';
import drilldown from 'highcharts/modules/drilldown';
import solidgauge from 'highcharts/modules/solid-gauge';
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
			chart.addSeriesAsDrilldown(point, data);
			chart.redraw();
		}
	}
 
   
	render() {
		const {config, requestSubChartConfig , isFetching} = this.props;
		
		const onDrilldown = (e) => {

			if (!e.seriesOptions) {
				const {chart} = this.chartRef.current;
				chart.showLoading('Loading Sub Data ...');
				const len = e.point.index;
				const points = chart.series[0].points;
				  let startAngle = 0;
				  for (let i = 0; i < len; i++){
				    const p = points[i];
				    if(p.value !== 100000000){
				    	startAngle += ((p.value/points[0].value) * 360.0);
					}
				  }
				e.point.startAngle = startAngle;
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
			
		}
		
		
		const options = {
			modules: [sunburst,drilldown, solidgauge],
			container: "donut",
			options: config
		};

		return <Chart ref = { this.chartRef } { ...options} />
	}
}
