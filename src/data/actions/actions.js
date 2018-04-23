import {createAction} from 'redux-actions';
//action  type
//request* REQUEST_*
//receive*  RECEIVE_*  

export const REQUEST_CHART_CONFIG = 'REQUEST_CHART_CONFIG';
export const RECEIVE_CHART_CONFIG = 'RECEIVE_CHART_CONFIG';

export const REQUEST_SUB_CHART_CONFIG = 'REQUEST_SUB_CHART_CONFIG';
export const RECEIVE_SUB_CHART_CONFIG = 'RECEIVE_SUB_CHART_CONFIG';

export const requestChartConfig = createAction(REQUEST_CHART_CONFIG);
export const receiveChartConfig = createAction(RECEIVE_CHART_CONFIG);

export const requestSubChartConfig = createAction(REQUEST_SUB_CHART_CONFIG);
export const receiveSubChartConfig = createAction(RECEIVE_SUB_CHART_CONFIG);
