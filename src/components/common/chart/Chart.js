import React from 'react';
import Highcharts from 'highcharts';

export default class Chart extends React.Component {

	// When the DOM is ready, create the chart.
	componentDidMount() {
		// Extend Highcharts with modules
		if (this.props.modules) {
			this.props.modules.forEach((module) => {
				module(Highcharts);
			});
		}


		Highcharts.setOptions({
    		colors: ["#ffffff", "#38B049", '#A9D574', '#FF7F27', '#C1C1FF', '#D7006B', '#6200C4', '#A346FF', '#A98301', '#FF5900',"#CC39E6"]
	    });

		this.chart = new Highcharts[this.props.type || "Chart"](
			this.props.container, 
			this.props.options || {}
		);        
	}
	// Destroy chart before unmount.
	componentWillUnmount() {
		if(this.chart) this.chart.destroy();
	}
	// Create the div which the chart will be rendered to.
	render() {
		return React.createElement('div', { id: this.props.container });
	}
}
