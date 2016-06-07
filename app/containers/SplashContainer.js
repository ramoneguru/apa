/**
 * Container component for the splash page aka the setup page
 */

import React from 'react';
import { Link } from 'react-router';
import Splash from '../components/splash/Splash';
import Location from '../components/location/Location';
import Map from '../components/map/Map';
import Axios from 'axios';

import { styles } from '../components/map/map.scss';

class SplashContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "APA Score Tracker",
			location: "NoWhere",
			teams: {},
			locationsAvailable: {}
		};
		this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
		this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
	}

	componentDidMount() {
		Axios.get('json/teams.json')
			.then((response) => {
				this.setState({
					teams: response.data.teams
				})
			})
			.catch((response) => {
				throw new Error('Error getting teams: ', response);
			});
		Axios.get('json/locations.json')
			.then((response) => {
				this.setState({
					locationsAvailable: response.data.locations
				})
			})
			.catch((response) => {
				throw new Error('Error getting locations: ', response);
			});
	}

	handleSubmitLocation(e) {
		e.preventDefault();
		console.log("submit is: ", this.state);
	}

	handleUpdateLocation(e) {
		var loc = e.target.value;
		console.log("handle update is: ", loc);
		this.setState({
			location: loc
		});
	}

	render() {
		return(
			<div className="splash-container">
				<Splash
					title={this.state.title}
				/>
				<Location
					onSubmitLocation={this.handleSubmitLocation}
					onUpdateLocation={this.handleUpdateLocation}
				/>
				<Link to="/start">
					<button className="btn center">Start Match</button>
				</Link>
			</div>
		)
	}
}

export default SplashContainer;
