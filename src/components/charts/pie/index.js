// components/todos/index.js
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import PieChart from './PieChart';
import createLoadingSelector  from '../../../data/reducers/api/Selectors';
import { requestPieChartConfig, requestSubPieChartConfig  } from '../../../data/actions/pieChartActions';
import Spinner from '../../common/spinner/Spinner';
 

const loadingSelector = createLoadingSelector(['PIE_CHART_CONFIG', 'SUB_PIE_CHART_CONFIG']);
const mapStateToProps = (state) => ({
	isFetching: loadingSelector(state),
	config: _.get(state, 'pieChart.configData'),
	subConfig: _.get(state, 'pieChart.subConfigData')
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators({
		requestPieChartConfig,
		requestSubPieChartConfig
	}, dispatch),
});

class Loader extends React.Component {
	componentDidMount() {
		this.props.requestPieChartConfig();
	}
	render() {
		return (
			<Spinner condition = {this.props.isFetching}><PieChart {...this.props}/></Spinner>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Loader);
