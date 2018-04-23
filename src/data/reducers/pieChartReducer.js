import { handleAction , combineActions } from 'redux-actions';

import {
	RECEIVE_PIE_CHART_CONFIG,
	RECEIVE_SUB_PIE_CHART_CONFIG,
	receivePieChartConfig,
	receiveSubPieChartConfig
} from '../actions/pieChartActions';

const defaultState = {
	items: []
}

const pieChartReducer = handleAction(
	combineActions(
		receivePieChartConfig,
		receiveSubPieChartConfig
	),
	{
		next(state, action) {
			switch (action.type) {
			case RECEIVE_PIE_CHART_CONFIG: 
				return {...state, configData: action.payload};
			case RECEIVE_SUB_PIE_CHART_CONFIG:
				return {...state, subConfigData: action.payload}; 
			default:
				return state;
			}
		},
		throw(state , action) {
			switch (action.type) {
			case RECEIVE_PIE_CHART_CONFIG:
				return {...state, itemError: action.payload};
			case RECEIVE_SUB_PIE_CHART_CONFIG:
				return {...state, itemError: action.payload};
			default:
				return state;
			}
		}
	},
	defaultState);
export default pieChartReducer;
