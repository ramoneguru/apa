/**
 * Main container for application. Not sure what this will do at the moment.
 * For now this is a functional-stateless component.
 */

import React from 'react';

class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render(props) {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default MainContainer;