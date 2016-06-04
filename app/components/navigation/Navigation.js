/**
 * Header component for APA app
 */

import React from 'react';
import { Link } from 'react-dom';

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<nav>
					<Link to="start">Profile</Link>
					<Link to="start">Rules</Link>
					<Link to="start">Stats</Link>
				</nav>
			</div>
		)
	}
}

export default Navigation;
