import {takeEvery, takeLatest , call, put} from 'redux-saga/effects';
import { api } from 'config';

import {
	REQUEST_CHART_CONFIG,
	REQUEST_SUB_CHART_CONFIG,
	receiveChartConfig,
	receiveSubChartConfig
} from '../actions/actions';

const { donutChart } = api().example;

function* callRequestChartConfig(action) {
	const response = yield call(fetch,`${donutChart}/config`);
	const data = yield call([response, response.json])
	yield put(receiveChartConfig(data));
}

export function* requestChartConfigSaga() {
	yield takeLatest(REQUEST_CHART_CONFIG, callRequestChartConfig);
}

function* callRequestSubChartConfig(action) {
	const {id, drilldown} = action.payload;
	const response = yield call(fetch, `${donutChart}/data/${id}/${drilldown}`);
	const data = yield call([response, response.json])
	yield put(receiveSubChartConfig({data, point: action.payload}));
}

export function* requestSubChartConfigSaga() {
	yield takeLatest(REQUEST_SUB_CHART_CONFIG, callRequestSubChartConfig);
}


