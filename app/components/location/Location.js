/**
 * Location component used for finding where a particular match
 * is taking place.
 * TODO: Utilize the Google Maps API for determining location.
 */

import React, { PropTypes } from 'react';
import location from './location.scss';

const Location = (props) => {
	return(
		<div className="location">
			<form id="location-form" name="locationForm" onSubmit={props.onSubmitLocation}>
				<label for="location-start">Find your Match</label>
				<input
					id="location-start"
					className="text-input"
					placeholder="Mission Bar"
					onChange={props.onUpdateLocation}
					value={props.location}
					type="text"
				/>
				<div className="text-input-error"></div>
				<button
					type="submit"
					className="btn">
					Find Location
				</button>
			</form>
		</div>
	)
};

Location.PropTypes = {
	onSubmitLocation: PropTypes.func.isRequired,
	onUpdateLocation: PropTypes.func.isRequired
};

export default Location;