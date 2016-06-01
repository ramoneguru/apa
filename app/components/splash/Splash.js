/**
 * Splash screen component that renders when the user lands on the app.
 */

import React from 'react';
import { Link } from 'react-router'
import { styles } from './splash.scss';

class Splash extends React.Component {
	render() {
		return (
			<div className="splash">
				<Link to="/start">
					<button className="btn">Start Match</button>
				</Link>
			</div>
		)
	}
}

export default Splash;
