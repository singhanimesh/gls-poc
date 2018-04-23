import { handleAction , combineActions } from 'redux-actions';

import {
	RECEIVE_LINE_SERIES_CHART_CONFIG,
	RECEIVE_SUB_LINE_SERIES_CHART_CONFIG,
	receiveLineSeriesChartConfig,
	receiveSubLineSeriesChartConfig
} from '../actions/lineSeriesChartActions';

const defaultState = {
	items: []
}

export default handleAction(
	combineActions(
		receiveLineSeriesChartConfig,
		receiveSubLineSeriesChartConfig
	),
	{
		next(state, action) {
			console.log('action', action);
			switch (action.type) {
			case RECEIVE_LINE_SERIES_CHART_CONFIG: 
				return {...state, configData: action.payload};
			case RECEIVE_SUB_LINE_SERIES_CHART_CONFIG:
				return {...state, subConfigData: action.payload}; 
			default:
				return state;
			}
		},
		throw(state , action) {
			switch (action.type) {
			case RECEIVE_LINE_SERIES_CHART_CONFIG:
				return {...state, itemError: action.payload};
			case RECEIVE_SUB_LINE_SERIES_CHART_CONFIG:
				return {...state, itemError: action.payload};
			default:
				return state;
			}
		}
	},
	defaultState);
