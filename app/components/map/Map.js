/**
 * Map for requests
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { styles } from './map.scss';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			map: {}
		};
	}

	componentDidMount() {
		var map = new google.maps.Map(ReactDOM.findDOMNode(this), {
			center: {lat: 37.7749, lng: -122.4194},
			zoom: 12
		});
		console.log(map);
		this.setState({
			map: map
		})
	}

	render() {
		return (
			<div id="apa-map"></div>
		)
	}
}

export default Map;
