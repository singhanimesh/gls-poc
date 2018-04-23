// components/todos/index.js
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import DonutChart from './DonutChart';
import createLoadingSelector  from '../../../data/reducers/api/Selectors';
import { requestChartConfig, requestSubChartConfig  } from '../../../data/actions/actions';
import Spinner from '../../common/spinner/Spinner';
 

const loadingSelector = createLoadingSelector(['CHART_CONFIG', 'SUB_CHART_CONFIG']);
const mapStateToProps = (state) =>  ({
	isFetching: loadingSelector(state),
	config: _.get(state, 'donutChart.configData'),
	subConfig: _.get(state, 'donutChart.subConfigData')
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators({
		requestChartConfig,
		requestSubChartConfig
	}, dispatch),
});


class Loader extends React.Component {
	componentDidMount() {
		//setTimeout(()=>{
			this.props.requestChartConfig();
		//}, 0); 
	}
	render() {
		console.log('this.props.isFetching' , this.props.isFetching);
		return (
			<Spinner condition = {this.props.isFetching}><DonutChart {...this.props}/> </Spinner>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Loader);
