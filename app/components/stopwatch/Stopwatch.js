/**
 * Stopwatch component
 */

import React from 'react';

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			timer: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		};
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.tick = this.tick.bind(this);
	}

	componentWillUnmount() {
		this.handleStop();
	}

	handleStart() {
		var timerInterval = setInterval(this.tick, 1000);
		this.setState({
			timer: timerInterval
		});
	}

	handleStop() {
		window.clearInterval(this.state.timer);
	}

	tick() {
		var seconds = this.getIncrementedSeconds(),
			minutes = this.getMinutes();

		this.setState({
			seconds: seconds,
			minutes: minutes
		})
	}

	getIncrementedSeconds() {
		return (this.state.seconds >= 59) ? 0 : this.state.seconds + 1;
	}

	getMinutes() {
		if(this.getIncrementedSeconds() === 0) {
			return(this.state.minutes >= 59) ? 0 : this.state.minutes + 1;
		} else {
			return this.state.minutes;
		}
	}

	getPaddedTime(value, millisecond = false) {
		var milli, milliClean;
		if(millisecond) {
			milli = Math.floor(this.state.milliseconds / 10);
			milliClean = (milli >= 100) ? 99 : milli;
			return ((milliClean < 10) ? "0" : "") + milliClean;
		}
		return ((value < 10) ? "0" : "") + value;
	}

	render() {
		return(
			<div class="stopwatch">
				<button onClick={this.handleStart}>Start</button>
				<button onClick={this.handleStop}>Stop</button>
				{this.getPaddedTime(this.state.hours)}:
				{this.getPaddedTime(this.state.minutes)}:
				{this.getPaddedTime(this.state.seconds)}:
				{this.getPaddedTime(this.state.milliseconds, true)}
			</div>
		)
	}
}

export default Stopwatch;
