/**
 * Created by ifthenelse on 5/31/16.
 */
import React from 'react';
import Timer from '../timer/Timer';
import { Link } from 'react-router';
import styles from './start.scss';

class Start extends React.Component {
	render() {
		return (
			<div className="start">
				inside start
				<Timer
					initTimer={10}
				/>
			</div>
		)
	}
}

export default Start;