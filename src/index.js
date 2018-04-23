import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import { creatStore , applyMiddleWate } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
 

const render = (Component) => {
	const root = (
		<AppContainer>
			<BrowserRouter>
			 	<Component />
			</BrowserRouter>
		</AppContainer>
	);
	ReactDOM.render(root, document.querySelector('main'));
}

if(module.hot){
	module.hot.accept('./', () => {
		render(App);
	});
}


render(App);
registerServiceWorker();
