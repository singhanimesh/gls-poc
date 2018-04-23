import {takeEvery, takeLatest , call, put} from 'redux-saga/effects';
import { api } from 'config';

import {
	REQUEST_PIE_CHART_CONFIG,
	REQUEST_SUB_PIE_CHART_CONFIG,
	receivePieChartConfig,
	receiveSubPieChartConfig
} from '../actions/pieChartActions';

const { pieChart } = api().example;

function* callRequestPieChartConfig() {
	const response = yield call(fetch,`${pieChart}`);
	const data = yield call([response, response.json])
	yield put(receivePieChartConfig(data));
}

export function* requestPieChartConfigSaga() {
	yield takeLatest(REQUEST_PIE_CHART_CONFIG, callRequestPieChartConfig);
}

function* callRequestSubPieChartConfig(action) {
	const {id, drilldown} = action.payload;
	const response = yield call(fetch, `${pieChart}/data/${id}/${drilldown}`);
	const data = yield call([response, response.json])
	yield put(receiveSubPieChartConfig({data, point: action.payload}));
}

export function* requestSubPieChartConfigSaga() {
	yield takeLatest(REQUEST_SUB_PIE_CHART_CONFIG, callRequestSubPieChartConfig);
}