/**
 * Timer component that starts a timer like a stopwatch
 */

import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerStart: this.props.initTimer,
			currentTime: this.now(),
			timer: 0
		};
		this.init();
	}

	now() {
		var date = new Date();
		return {
			"hours": ((date.getHours() < 10) ? "0" : "") + date.getHours(),
			"minutes": ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes(),
			"seconds": ((date.getSeconds() < 10) ? "0" : "") + date.getSeconds()
		}
	}

	increment() {
		var timer = window.requestAnimationFrame(this.increment.bind(this));
		this.setState({
			currentTime: this.now(),
			timer: timer
		});
	}

	init() {
		var timer = window.requestAnimationFrame(this.increment.bind(this));
		this.setState({
			timer: timer
		});
	}

	stop() {
		window.cancelAnimationFrame(this.state.timer);
	}

	render() {
		return (
			<div className="timer">
				Hours: {this.state.currentTime.hours}
				Minutes: {this.state.currentTime.minutes}
				Seconds: {this.state.currentTime.seconds}
			</div>
		)
	}
}

Timer.propTypes = {
	initTimer: React.PropTypes.number,
	stopTimer: React.PropTypes.number
};

Timer.defaultProps = {
	initTimer: 0
};

export default Timer;
