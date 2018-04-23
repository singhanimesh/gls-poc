// components/todos/index.js
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import LineSeriesChart from './LineSeriesChart';
import createLoadingSelector  from '../../../data/reducers/api/Selectors';
import { requestLineSeriesChartConfig, requestSubLineSeriesChartConfig  } from '../../../data/actions/lineSeriesChartActions';
import Spinner from '../../common/spinner/Spinner';
 

const loadingSelector = createLoadingSelector(['LINE_SERIES_CHART_CONFIG', 'SUB_LINE_SERIES_CHART_CONFIG']);
const mapStateToProps = (state) => ({
	isFetching: loadingSelector(state),
	config: _.get(state, 'lineSeriesChart.configData'),
	subConfig: _.get(state, 'LineSeriesChart.subConfigData')
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators({
		requestLineSeriesChartConfig,
		requestSubLineSeriesChartConfig
	}, dispatch),
});

class Loader extends React.Component {
	componentDidMount() {
		this.props.requestLineSeriesChartConfig();
	}
	render() {
		return (
			<Spinner condition = {this.props.isFetching}><LineSeriesChart {...this.props}/></Spinner>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Loader);
