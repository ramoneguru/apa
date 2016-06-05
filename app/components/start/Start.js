/**
 * Created by ifthenelse on 5/31/16.
 */
import React from 'react';
import Clock from '../clock/Clock';
import { Link } from 'react-router';
import styles from './start.scss';

class Start extends React.Component {
	render() {
		return (
			<div className="start">
				inside start
				<Clock />
			</div>
		)
	}
}

export default Start;