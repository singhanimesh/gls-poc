import { handleAction , combineActions } from 'redux-actions';

import {
	RECEIVE_CHART_CONFIG,
	RECEIVE_SUB_CHART_CONFIG,
	receiveChartConfig,
	receiveSubChartConfig
} from '../actions/actions';

const defaultState = {
	items: []
}

const donutChartReducer = handleAction(
	combineActions(
 		receiveChartConfig,
 		receiveSubChartConfig
	),
	{
		next(state, action) {
			switch (action.type) {
		 	case RECEIVE_CHART_CONFIG: 
		 		return {...state, configData: action.payload};
		 	case RECEIVE_SUB_CHART_CONFIG:
		 		return {...state, subConfigData: action.payload};	
		 	default:
		 		return state;
		 	}
		},
		throw(state , action) {
			switch (action.type) {
			case RECEIVE_CHART_CONFIG:
				return {...state, itemError: action.payload};
			case RECEIVE_SUB_CHART_CONFIG:
				return {...state, itemError: action.payload};
			default:
				return state;
			}
		}
	},
	defaultState);
export default donutChartReducer;
