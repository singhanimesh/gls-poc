import React from 'react';
import {Link} from 'react-router-dom';

const Navigation =() => (
 	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<a className="navbar-brand" href="#">Navbar</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<Link className="nav-link" to="/donut-chart">Donut Chart</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/pie-chart">Pie Chart</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/line-series-chart">Line Series</Link>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          				Dropdown link
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
);
export default Navigation;