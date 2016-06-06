/**
 * Splash screen component that renders when the user lands on the app.
 */

import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import Header from '../header/Header';

import { Link } from 'react-router'
import { styles } from './splash.scss';

function Splash(props) {
	return (
		<div className="splash">
			<HeaderContainer>
				<Header
					title="APA Score Tracker"
				/>
			</HeaderContainer>
			<Link to="/start">
				<button className="btn">Start Match</button>
			</Link>
		</div>
	)
}

export default Splash;
