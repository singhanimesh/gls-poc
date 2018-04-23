import React from 'react';
import Navigation from '../common/Navigation';
import Header from '../common/Header';

/* export default class HomePage extends React.Component {
	
	render() {
		return (
			<div className="container">
				<Header/>
				<Navigation />
				{this.props.children}
			</div>
		);
	}
}
*/

const HomePage = ({children}) => (
	<div className="container">
		<Header/>
		<Navigation />
		{children}
	</div>
);

export default HomePage;