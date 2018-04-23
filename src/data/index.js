// store/index.js
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {getPieChartData} from './actions/PieChartAction';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	)
);

//store.dispatch(getPieChartData());
export default store;
