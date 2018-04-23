import React from 'react';
import PropTypes from 'prop-types';
import './spinner.css'

const Spinner = ({condition, children}) => condition ? (<div><div id="loading">
	<ul className="bokeh">
		<li />
		<li />
		<li />
	</ul>
</div></div>): children;

Spinner.propTypes = {
	condition: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired 
};

export default Spinner;