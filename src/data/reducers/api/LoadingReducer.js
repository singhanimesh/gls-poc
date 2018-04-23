

/* const loadingReducer = (state = {}, action) => {
	const {type} = action;
	const matches = /(REQUEST|RECEIVE|FAILURE)_(.*)/.exec(type);

	// not  REQUEST_* / SUCCESS_* / FAILURE_* actions, so we ignore them
	if (!matches) return state;

	const [, requestName, requestState] = matches;

	return {
		...state,
		// Store whether a request is happening at the moment or not
		// e.g. will be true when receiving GET_TODOS_REQUEST
		//      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
		[requestName]: requestState === 'REQUEST',
	};
};
export default loadingReducer; */



import { handleAction , combineActions } from 'redux-actions';

/* import {
	RECEIVE_CHART_CONFIG,
	RECEIVE_SUB_CHART_CONFIG,
	receiveChartConfig,
	receiveSubChartConfig
} from '../actions/actions'; */

const defaultState = {
	items: []
}

const loadingReducer = handleAction(
	  combineActions('REQUEST_CHART_CONFIG',
		'RECEIVE_CHART_CONFIG',
		'REQUEST_PIE_CHART_CONFIG',
		'RECEIVE_PIE_CHART_CONFIG',
		'REQUEST_LINE_SERIES_CHART_CONFIG',
		'RECEIVE_LINE_SERIES_CHART_CONFIG'
	),
	{
		next(state, action) {
			const {type} = action;
			const matches = /(REQUEST|RECEIVE|FAILURE)_(.*)/.exec(type);
			if (!matches) return state;
			const [, requestState, requestName] = matches;
			return {
				...state,
				// Store whether a request is happening at the moment or not
				// e.g. will be true when receiving GET_TODOS_REQUEST
				//      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
				[requestName]: requestState === 'REQUEST',
			};
		}
	},
	defaultState);
export default loadingReducer;

