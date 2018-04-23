import {createAction} from 'redux-actions';
//action  type
//request* REQUEST_*
//receive*  RECEIVE_*  

export const REQUEST_PIE_CHART_CONFIG = 'REQUEST_PIE_CHART_CONFIG';
export const RECEIVE_PIE_CHART_CONFIG = 'RECEIVE_PIE_CHART_CONFIG';

export const REQUEST_SUB_PIE_CHART_CONFIG = 'REQUEST_SUB_PIE_CHART_CONFIG';
export const RECEIVE_SUB_PIE_CHART_CONFIG = 'RECEIVE_SUB_PIE_CHART_CONFIG';

export const requestPieChartConfig = createAction(REQUEST_PIE_CHART_CONFIG);
export const receivePieChartConfig = createAction(RECEIVE_PIE_CHART_CONFIG);

export const requestSubPieChartConfig = createAction(REQUEST_SUB_PIE_CHART_CONFIG);
export const receiveSubPieChartConfig = createAction(RECEIVE_SUB_PIE_CHART_CONFIG);



/*import {api} from 'config';

const {pieChart, drilldownPieChart} = api().example;

export const GET_PIE_CHART_SUCCESS = 'GET_PIE_CHART_SUCCESS';
export const GET_DRILLDOWN_PIE_CHART_SUCCESS =
  'GET_DRILLDOWN_PIE_CHART_SUCCESS';

export function getPieChartData() {
  return dispatch => {
    dispatch({type: 'GET_PIE_CHART_REQUEST'});

    fetch(pieChart)
      .then(res => res.json())
      .then(res => res.options)
      .then(data => dispatch(setPieChartData(data)))
      .catch(error =>
        dispatch({type: 'GET_PIE_CHART_FAILURE', payload: error, error: true}),
      );
  };
}

export function setPieChartData(data) {
  return {
    type: GET_PIE_CHART_SUCCESS,
    data,
  };
}

export function getDrilldownData(point) {
  return dispatch => {
    fetch(drilldownPieChart)
      .then(res => res.json())
      .then(res => res.drilldowns)
      .then(data => dispatch(setDrilldownData(data, point)))
      .catch();
  };
}

export function setDrilldownData(drilldowns, point) {
  console.log('I ahve dcodme do ther');
  return {
    type: GET_DRILLDOWN_PIE_CHART_SUCCESS,
    drilldowns,
    point,
  };
}
*/