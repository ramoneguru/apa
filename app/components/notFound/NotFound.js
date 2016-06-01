/**
 * Simple 404 aka "Not Found" page to redirect
 */

import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
	render() {
		return (
			<div className="not-found">
				<h1>Sorry, we could not find that page.</h1>
			</div>
		)
	}
}

export default NotFound;
