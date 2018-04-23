import { api } from 'config';

const { donutChart } = api().example;

export const GET_DONUT_CHART_CONFIG_SUCCESS = 'GET_DONUT_CHART_CONFIG_SUCCESS';
export const GET_DONUT_CHART_DATA_SUCCESS = 'GET_DONUT_CHART_DATA_SUCCESS';

export function getDonutChartData() {
	return (dispatch) => {
		dispatch({ type: 'GET_DONUT_CHART_CONFIG_REQUEST' });
		fetch(`${donutChart}/config`)
			.then(res => res.json())
			.then(res => res)
			.then(data => dispatch(setDonutChartData(data)))
			.catch(error =>
				dispatch({
					type: 'GET_DONUT_CHART_CONFIG_FAILURE',
					payload: error,
					error: true,
				}));
	};
}

export function setDonutChartData(data) {
	return {
		type: GET_DONUT_CHART_CONFIG_SUCCESS,
		data,
	};
}

export function getDrilldownData(point) {
	return (dispatch) => {
		fetch(`${donutChart}/data/${point.id}/${point.drilldown}`)
			.then(res => res.json())
			.then(res => res)
			.then(data => dispatch(setDrilldownData(data, point)))
			.catch();
	};
}

export function setDrilldownData(drilldowns, point) {
	return {
		type: GET_DONUT_CHART_DATA_SUCCESS,
		drilldowns,
		point,
	};
}
