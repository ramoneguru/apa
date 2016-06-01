/**
 * Component necessary for rendering IndexRoute along with all child routes.
 */

import React from 'react';

class Main extends React.Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

export default Main;
