/**
 * Header Component to set the layout for the header
 */

import React, { PropTypes } from 'react';
import { styles } from './header.scss';

function Header(props) {
	return(
		<div className="header">
			<h1 className="title">{props.title}</h1>
		</div>
	)
}

Header.PropTypes = {
	title: PropTypes.String
};

export default Header;
