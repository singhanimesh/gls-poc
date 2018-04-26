import React from 'react';
import _ from 'lodash';
import Navigation from '../common/Navigation';
import Header from '../common/Header';
import ColorScheme  from 'color-scheme';
 
const HomePage = ({children}) => (
	<div className="container">
		<Header/>
		<Navigation />
		{children}
	</div>
);

export default HomePage;