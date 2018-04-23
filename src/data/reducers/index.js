import {combineReducers} from 'redux';
import {routeReducer} from  'react-router-redux';
import { fork, all } from 'redux-saga/effects';
import loadingReducer from './api/LoadingReducer';
import donutChartReducer from './donutChartReducer';
import pieChartReducer from './pieChartReducer';
import lineSeriesChartReducer from './lineSeriesChartReducer';
import * as sagas from '../sagas/sagas';
import * as pieChartSagas from '../sagas/pieChartSagas';
import * as lineSeriesChartSagas from '../sagas/lineSeriesChartSagas';

export const rootReducer = combineReducers({
	loading: loadingReducer,
	donutChart: donutChartReducer,
	pieChart: pieChartReducer,
	lineSeriesChart: lineSeriesChartReducer
});

export function* rootSaga() {
	yield all([
		...Object.values(sagas),
		...Object.values(pieChartSagas),
		...Object.values(lineSeriesChartSagas)
	].map(fork));
}; 
