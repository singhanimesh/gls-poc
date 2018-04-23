import {takeEvery, takeLatest , call, put} from 'redux-saga/effects';
import { api } from 'config';

import {
	REQUEST_LINE_SERIES_CHART_CONFIG,
	REQUEST_SUB_LINE_SERIES_CHART_CONFIG,
	receiveLineSeriesChartConfig,
	receiveSubLineSeriesChartConfig
} from '../actions/lineSeriesChartActions';

const { lineSeriesChart } = api().example;

function* callRequestLineSeriesChartConfig() {
	const response = yield call(fetch,`${lineSeriesChart}/config`);
	const data = yield call([response, response.json])
	yield put(receiveLineSeriesChartConfig(data));
}

export function* requestLineSeriesChartConfigSaga() {
	yield takeLatest(REQUEST_LINE_SERIES_CHART_CONFIG, callRequestLineSeriesChartConfig);
}

function* callRequestSubLineSeriesChartConfig(action) {
	const {id, drilldown} = action.payload;
	const response = yield call(fetch, `${lineSeriesChart}/data/${id}/${drilldown}`);
	const data = yield call([response, response.json])
	yield put(receiveSubLineSeriesChartConfig({data, point: action.payload}));
}

export function* requestSubLineSeriesChartConfigSaga() {
	yield takeLatest(REQUEST_SUB_LINE_SERIES_CHART_CONFIG, callRequestSubLineSeriesChartConfig);
}