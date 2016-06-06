/**
 * Created by ifthenelse on 5/31/16.
 */
import React from 'react';
import Clock from '../clock/Clock';
import Stopwatch from '../stopwatch/Stopwatch';
import { Link } from 'react-router';
import styles from './start.scss';

class Start extends React.Component {
	render() {
		return (
			<div className="start">
				inside start
				<Clock />
				<Stopwatch />
			</div>
		)
	}
}

export default Start;