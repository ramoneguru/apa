/**
 * Header Component to set the layout for the header
 */

import React from 'react';

function Header(props) {
	return(
		<div className="header">
			{props.title}
		</div>
	)
}

export default Header;
