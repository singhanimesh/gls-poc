import {takeEvery, takeLatest , call, put} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { api } from 'config';

import mapColorWithData from '../../utils/dataBuilder';

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
	const {id, drilldown, color, startAngle} = action.payload;
	console.log("payload",startAngle);
	const response = yield call(fetch, `${donutChart}/data/${id}/${drilldown}/${startAngle}`);
	let data = yield call([response, response.json]);
	data = mapColorWithData(data, color);
	yield put(receiveSubChartConfig({data, point: action.payload}));
}

export function* requestSubChartConfigSaga() {
	yield takeLatest(REQUEST_SUB_CHART_CONFIG, callRequestSubChartConfig);
}

