/**
 * Header Container to process the header interactions
 */

import React from 'react';

class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header-container">
				{this.props.children}
			</div>
		);
	}
}

export default HeaderContainer;