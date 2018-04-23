// todo/reducer.js
import {
	GET_DONUT_CHART_CONFIG_SUCCESS,
	GET_DONUT_CHART_DATA_SUCCESS,
} from '../actions/DonutChartAction';

const initialState = {};

export const donutChartReducer = (state = initialState, action) => {
  	switch (action.type) {
  	case GET_DONUT_CHART_CONFIG_SUCCESS:
  		return {...state, data: action.data};
  	default:
  		return state;
  	}
};

export const donutDrilldownReducer = (state = initialState, action) => {
  	switch (action.type) {
  	case GET_DONUT_CHART_DATA_SUCCESS:
  		return {...state, drilldowns: action.drilldowns, point: action.point};
  	default:
  		return state;
  	}
};
