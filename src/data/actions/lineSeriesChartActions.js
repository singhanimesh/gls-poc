import {createAction} from 'redux-actions';
//action  type
//request* REQUEST_*
//receive*  RECEIVE_*  

export const REQUEST_LINE_SERIES_CHART_CONFIG = 'REQUEST_LINE_SERIES_CHART_CONFIG';
export const RECEIVE_LINE_SERIES_CHART_CONFIG = 'RECEIVE_LINE_SERIES_CHART_CONFIG';

export const REQUEST_SUB_LINE_SERIES_CHART_CONFIG = 'REQUEST_SUB_LINE_SERIES_CHART_CONFIG';
export const RECEIVE_SUB_LINE_SERIES_CHART_CONFIG = 'RECEIVE_SUB_LINE_SERIES_CHART_CONFIG';

export const requestLineSeriesChartConfig = createAction(REQUEST_LINE_SERIES_CHART_CONFIG);
export const receiveLineSeriesChartConfig = createAction(RECEIVE_LINE_SERIES_CHART_CONFIG);

export const requestSubLineSeriesChartConfig = createAction(REQUEST_SUB_LINE_SERIES_CHART_CONFIG);
export const receiveSubLineSeriesChartConfig = createAction(RECEIVE_SUB_LINE_SERIES_CHART_CONFIG);



