/**
 * Timer component that starts a timer like a stopwatch
 */

import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: this.now(),
			clockRAF: 0,
			showMilliseconds: true,
			immediateStop: false
		};
	}

	componentDidMount() {
		this.init();
	}

	componentWillUnmount() {
		this.stop();
	}

	now() {
		var date = new Date();
		return {
			"hours": ((date.getHours() < 10) ? "0" : "") + date.getHours(),
			"minutes": ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes(),
			"seconds": ((date.getSeconds() < 10) ? "0" : "") + date.getSeconds(),
			"milliseconds": ((date.getMilliseconds() < 10) ? "0" : "") + date.getMilliseconds()
		}
	}

	increment() {
		var clockRAF = window.requestAnimationFrame(this.increment.bind(this));
		this.setState({
			currentTime: this.now(),
			clockRAF: clockRAF
		});

		if(this.state.immediateStop) {
			this.stop();
		}
	}

	init() {
		var clockRAF = window.requestAnimationFrame(this.increment.bind(this));
		this.setState({
			clockRAF: clockRAF
		});
	}

	stop() {
		window.cancelAnimationFrame(this.state.clockRAF);
	}

	render() {
		return (
			<div className="timer">
				<button onClick={this.stop.bind(this)}>Stop</button>
				{this.state.currentTime.hours}:
				{this.state.currentTime.minutes}:
				{this.state.currentTime.seconds}:
				{Math.floor(this.state.currentTime.milliseconds / 10)}
			</div>
		)
	}
}

Clock.propTypes = {
	initTimer: React.PropTypes.number,
	stopTimer: React.PropTypes.number
};

Clock.defaultProps = {
	initTimer: 0
};

export default Clock;
