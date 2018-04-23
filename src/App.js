import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import store from './data/store';
import HomePage from './components/pages/HomePage';
import DonutChart from './components/charts/donut';
import PieChart from './components/charts/pie';
import LineSeriesChart from './components/charts/line-series';

/* import AgGrid from './components/grid/AgGrid'; */

const Routes = () => <div>
	<Route path="/" exact component={DonutChart} />
	<Route path="/donut-chart" exact component={DonutChart} />
	<Route path="/pie-chart" exact component={PieChart} />
	<Route path="/line-series-chart" exact component={LineSeriesChart} />
</div>

const App = () => (
	<Provider store={store} ><HomePage><Routes /></HomePage></Provider>
);

/* const ColumnPage = () => <Column />;

const DonutPage = () => <DonutChart />; */

export default App;
